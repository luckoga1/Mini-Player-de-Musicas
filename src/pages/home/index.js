import "./style.css";
import Header from "../../components/header";
import Controls from "../../components/controls";
import Card from "../../components/card";
import Musics from "../../musics";
import { useState, useRef } from "react";

function Home() {
  const [musicsData, setMusicsData] = useState([...Musics]);
  const [currentMusic, setCurrentMusic] = useState({
    id: 0,
    title: "",
    artist: "",
  });
  const [iconBtn, setIconBtn] = useState("pause");
  const audioRef = useRef(null);

  const setMusic = (music) => {
    audioRef.current.src = music.url;
    setIconBtn("pause");
    setCurrentMusic(music);
  };

  const handleChangeMusic = (option) => {
    if (!currentMusic) {
      return;
    }
    const newMusicId =
      option === "next" ? currentMusic.id + 1 : currentMusic.id - 1;
    const otherMusic = musicsData.find((music) => music.id === newMusicId);
    if (!otherMusic) {
      return;
    }
    setMusic(otherMusic);
  };

  return (
    <div className="container-home">
      <Header />
      <main>
        <div className="titulo-main color-white">
          <h2>The best play list</h2>
        </div>
        <ul>
          {musicsData.map((music) => (
            <div onClick={() => setMusic(music)} key={music.id}>
              <Card
                profileImage={music.cover}
                title={music.title}
                description={music.description}
              />
            </div>
          ))}
        </ul>
      </main>
      <Controls
        audioRef={audioRef}
        currentMusic={currentMusic}
        iconBtn={iconBtn}
        setIconBtn={setIconBtn}
        handleChangeMusic={handleChangeMusic}
      />
      <audio ref={audioRef}></audio>
    </div>
  );
}

export default Home;
