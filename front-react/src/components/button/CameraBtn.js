import React from "react";
import "../../css/cam.css"
const getWebcam = (callback) => {
  try {
    const constraints = {
      video: true,
      audio: false,
    };
    navigator.mediaDevices.getUserMedia(constraints).then(callback);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const Styles = {
  Video: {
    width: "640px",
    height: "480px",
    left : "5px",
    top: "10px",
    margin: "20px",
    position: "relative",
    borderRadius: "10px",
  },
  None: { display: "none" },
};

function CamButton() {
  const [playing, setPlaying] = React.useState(undefined);

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    getWebcam((stream) => {
      setPlaying(true);
      videoRef.current.srcObject = stream;
    });
  }, []);

  const startOrStop = () => {
    if (playing) {
      const s = videoRef.current.srcObject;
      s.getTracks().forEach((track) => {
        track.stop();
      });
    } else {
      getWebcam((stream) => {
        setPlaying(true);
        videoRef.current.srcObject = stream;
      });
    }
    setPlaying(!playing);
  };

  return (
    <>
      <div className="title" onClick={() => startOrStop()}> 
        {playing ? "학습중입니다." : "학습을 중지했습니다."}{" "}
      </div>
      
      <div className="block">
        <video ref={videoRef} autoPlay style={Styles.Video} />
        <button id="btn1" color="warning" onClick={() => startOrStop()}>
            {playing ? "Stop" : "Start"}{" "}
        </button>

        <div className="time_block">
          총 공부시간   :   01:23:42
        </div>
        
        <div id="subject_block">
          데이터베이스
        </div>
        <button id="btn_add">추가하기</button>
      </div>
    </>
  );
}

export default CamButton;
