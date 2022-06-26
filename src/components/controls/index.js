import "./style.css";
import StopIcon from "../../assets/stop.svg";
import PreviousIcon from "../../assets/previous.svg";
import PauseIcon from "../../assets/pause.svg";
import PlayIcon from "../../assets/play.svg";
import NextIcon from "../../assets/next.svg";
import { useRef } from "react";

const Controls = ({
  currentMusic,
  audioRef,
  iconBtn,
  setIconBtn,
  handleChangeMusic,
}) => {
  const progressRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const handlePlayPause = () => {
    setInterval(() => {
      const duration = (audioRef.current.duration / 60).toFixed(2);
      const progress = audioRef.current.currentTime / 60;
      const currentProgress = (progress.toFixed(2) * 100) / duration;

      progressRef.current.style.width = `${currentProgress}%`;
      endRef.current.innerText = duration;
      startRef.current.innerText = progress.toFixed(2);
    }, 1000);

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIconBtn("play");
      return;
    }
    audioRef.current.pause();
    setIconBtn("pause");
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="container-footer">
      <div className="preview-info roboto weight-70 color-white">
        <strong className="size-24">{currentMusic.title}</strong>
        <span className="size-16">{currentMusic.artist}</span>
      </div>
      <div className="container-players">
        <div className="container-controls">
          <img onClick={() => handleStop()} src={StopIcon} alt="stop" />
          <img
            onClick={() => handleChangeMusic("previous")}
            src={PreviousIcon}
            alt="previous"
          />
          <img
            onClick={() => handlePlayPause()}
            src={iconBtn === "pause" ? PlayIcon : PauseIcon}
            ref={audioRef}
            alt="play/pause"
          />
          <img
            onClick={() => handleChangeMusic("next")}
            src={NextIcon}
            alt="next"
          />
        </div>
        <div className="container-progress roboto weight-70 size-16 color-secondary">
          <strong ref={startRef}>0.00</strong>
          <div>
            <div className="progress-line">
              <div className="progress-line-color" ref={progressRef}></div>
            </div>
          </div>
          <strong ref={endRef}>0.00</strong>
        </div>
      </div>
    </div>
  );
};

export default Controls;
