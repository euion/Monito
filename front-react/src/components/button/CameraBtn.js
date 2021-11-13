import React from "react";

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
    left: "-330px",
    top: "10px",
    background: "yellow",
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
      <div className="title">학습자가 학습중입니다.</div>
      <div className="block">
        <div className="video">
          <video ref={videoRef} autoPlay style={Styles.Video} />
        </div>
        <div className="camBtn">
          <button id="btn1" color="warning" onClick={() => startOrStop()}>
            {playing ? "Stop" : "Start"}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default CamButton;
