let videoWidth, videoHeight;

// 체크를 해야 스트리밍되게 해뒀음 boolean으로 만들었으니 디폴트로 해도됨
let streaming = false;
//html에서 불러온거
let video = document.getElementById("video");
let canvasOutput = document.getElementById("canvasOutput");
let canvasOutputCtx = canvasOutput.getContext("2d");
let stream = null;

let detectFace = document.getElementById("face");

//카메라 사용 허용 나야지 시작하도록
function startCamera() {
  if (streaming) return;
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (s) {
      stream = s;
      video.srcObject = s;
      video.play();
    })
    .catch(function (err) {
      console.log("An error occured! " + err);
    });

  //이벤트 모아둔거
  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        videoWidth = video.videoWidth;
        videoHeight = video.videoHeight;
        video.setAttribute("width", videoWidth);
        video.setAttribute("height", videoHeight);
        canvasOutput.width = videoWidth;
        canvasOutput.height = videoHeight;
        streaming = true;
      }
      startVideoProcessing();
    },
    false
  );
}

//opencv에서 불러온 데이터 넣어줄 변수들
let faceClassifier = null;
let eyeClassifier = null;

let src = null;
let dstC1 = null;
let dstC3 = null;
let dstC4 = null;

let canvasInput = null;
let canvasInputCtx = null;

let canvasBuffer = null;
let canvasBufferCtx = null;

//무한 루프 돌리기 전에 사전작업
function startVideoProcessing() {
  if (!streaming) {
    //카메라 허용부터 받으셈
    console.warn("Please startup your webcam");
    return;
  }
  stopVideoProcessing(); //밑에 함수 설명 있음
  //이 밑에 4개는 비디오에 그림 그려줄라고 만든거임
  canvasInput = document.createElement("canvas");
  canvasInput.width = videoWidth;
  canvasInput.height = videoHeight;
  canvasInputCtx = canvasInput.getContext("2d");

  canvasBuffer = document.createElement("canvas");
  canvasBuffer.width = videoWidth;
  canvasBuffer.height = videoHeight;
  canvasBufferCtx = canvasBuffer.getContext("2d");
  //건들지 마셈 수식 계산값임 수환이 움
  srcMat = new cv.Mat(videoHeight, videoWidth, cv.CV_8UC4);
  grayMat = new cv.Mat(videoHeight, videoWidth, cv.CV_8UC1);
  //건들지 마셈 수식 계산값임 수환이 움
  faceClassifier = new cv.CascadeClassifier();
  faceClassifier.load("haarcascade_frontalface_default.xml");
  //건들지 마셈 수식 계산값임 수환이 움
  eyeClassifier = new cv.CascadeClassifier();
  eyeClassifier.load("haarcascade_eye.xml");
  //window가 부모인 함수임 무한루프 돌릴꺼고 processVideo가 callback될꺼임 callback지옥이다 이히히!
  requestAnimationFrame(processVideo);
}

//경고창 무한으로 안뜨게 변수 초기화 한거임 건들 ㄴㄴ
let count = 0;
let timer = false;
var now1 = 0;
var now2 = 0;
var timeGap = 0;
//메인 함수고 무한루프 돌꺼임 수정하고 싶으면 수환이한테 물어보셈
function processVideo() {
  stats.begin();
  canvasInputCtx.drawImage(video, 0, 0, videoWidth, videoHeight);
  let imageData = canvasInputCtx.getImageData(0, 0, videoWidth, videoHeight);
  srcMat.data.set(imageData.data);
  cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);
  let faces = [];
  let eyes = [];
  let size;
  if (detectFace.checked) {
    //얼굴 감지 변수
    let faceVect = new cv.RectVector();
    let faceMat = new cv.Mat();
    cv.pyrDown(grayMat, faceMat); //수식 건들지 마셈 잃어버림 난 안찾을거임
    size = faceMat.size();
    faceClassifier.detectMultiScale(faceMat, faceVect);
    for (let i = 0; i < faceVect.size(); i++) {
      let face = faceVect.get(i);
      faces.push(new cv.Rect(face.x, face.y, face.width, face.height)); //그림 그려줄꺼임 x,y,위,아래 네모로 그림
      //눈 감지 추가
      let eyeVect = new cv.RectVector();
      let eyeMat = new cv.Mat();
      cv.pyrDown(grayMat, eyeMat);
      eyeClassifier.detectMultiScale(eyeMat, eyeVect);
      for (let i = 0; i < eyeVect.size(); i++) {
        let eye = eyeVect.get(i);
        eyes.push(
          new cv.Rect(face.x + eye.x, face.y + eye.y, eye.width, eye.height) //눈이랑 얼굴 백터값 출력인데 눈 값 계산 잘못함 ㅈㅅ
        );
      }
      eyeMat.delete(); //지금 계산했던 값은 지워줌 사람은 움직이잖아 그지?
      eyeVect.delete(); //이것도
    }
    faceMat.delete(); //정확히는 이건 수학식
    faceVect.delete(); //이건 백터값
  }
  canvasOutputCtx.drawImage(canvasInput, 0, 0, videoWidth, videoHeight); //그림을 그린다
  drawResults(canvasOutputCtx, faces, "red", size); //색깔은 없어도 됨 근데 size는 바꿀땐 물어보셈 이거 귀찮음...
  drawResults(canvasOutputCtx, eyes, "yellow", size); //이것도
  if (eyes.length == 0) {
    //length가 차원인데 감지가 안되면 배열 차원이 안생기겠지? 자세한건 인공지능 배우셈
    count += 1;
    if (count > 30) {
      //오랜 시간 안보이면 감지
      if (!timer) {
        //타이머가 false면 경고하고 true로 반환해줌
        alert("please forcus");
        timer = true;
        now1 = new Date();
      } else {
        now2 = new Date();
        timeGap = now2.getTime() - now1.getTime(); //시간 계산
        clickButton(timeGap);
        timer = false;
        count = 0; //사람이 보이면 카운트 초기화
      }
    }
  }
  stats.end(); //음... 사실상 이건 실행 안되긴함 차원 계산 해야함...
  requestAnimationFrame(processVideo); //아까 위에 설명했는데 이건 자기 자신에 들어있어서 무한루프돌아감
}

//수학 계산값 그림으로 바꿔준거임 잘보면 x,y,위,아래에 ratio을 곱해줘서 대충 네모를 그림 정확히 네모는 아님
function drawResults(ctx, results, color, size) {
  for (let i = 0; i < results.length; ++i) {
    let rect = results[i];
    let xRatio = videoWidth / size.width;
    let yRatio = videoHeight / size.height;
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.strokeRect(
      rect.x * xRatio,
      rect.y * yRatio,
      rect.width * xRatio,
      rect.height * yRatio
    );
  }
}

var list = document.getElementById("list");
button.addEventListener("click", clickButton);
function clickButton(tg) {
  var timeCheck = document.createElement("li");
  timeCheck.innerHTML = tg;
  list.appendChild(timeCheck);
}

//비디오 처리 끄는거
function stopVideoProcessing() {
  if (src != null && !src.isDeleted()) src.delete();
  if (dstC1 != null && !dstC1.isDeleted()) dstC1.delete();
  if (dstC3 != null && !dstC3.isDeleted()) dstC3.delete();
  if (dstC4 != null && !dstC4.isDeleted()) dstC4.delete();
}

//카메라 끄는거
function stopCamera() {
  if (!streaming) return;
  stopVideoProcessing();
  document
    .getElementById("canvasOutput")
    .getContext("2d")
    .clearRect(0, 0, width, height);
  video.pause();
  video.srcObject = null;
  stream.getVideoTracks()[0].stop();
  streaming = false;
}

//이건뭐... 초기환데 뭐 필요함?
function initUI() {
  stats = new Stats();
  stats.showPanel(0);
  document.getElementById("container").appendChild(stats.dom);
}

//이거 html맨 밑에 있던거 이거 건들지마셈 제발...
function opencvIsReady() {
  console.log("OpenCV.js is ready");
  initUI();
  startCamera();
}
