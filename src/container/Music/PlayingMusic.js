import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import btnNext from "../../assets/logo/next.svg" ;
import btnPlay from "../../assets/logo/play.svg" ;
import btnPre from "../../assets/logo/prev.svg" ;
import btnPause from "../../assets/logo/pause.svg"
import music1 from "../../assets/nhac/31072LofiVersion-DuonggNauWnFreakD-6952501_hq.mp3";
import music2 from "../../assets/nhac/Buon-Thi-Cu-Khoc-Di-Lofi-Lynk-Lee-Freak-D.mp3";
import music3 from "../../assets/nhac/ChiMuonBecircnEmLuacutecNagraveyFreakDLofiVersion-HuyVac-6940119.mp3";
import music4 from "../../assets/nhac/DeDenDeDiLofiVersion-QuangHungMasterD-6856392.mp3";
import music5  from "../../assets/nhac/EmSayRoiLofiVersion-ThuongVoVux-6953606.mp3";
import music6  from "../../assets/nhac/Gryffin - Tie Me Down (Lyrics) ft. Elley Duhé.mp3";
import music7  from "../../assets/nhac/HenYeuLofiVersion-ThuongVoVux-6926102_hq.mp3";
import music8  from "../../assets/nhac/Phao-Hong-Lofi-Dat-Long-Vinh.mp3";
import music9  from "../../assets/nhac/VaiGiayNuaThoiLofiVer-ReddyFreakD-6929544.mp3";


import "./Music.scss";

export default function PlayingMusic(props) {
  const audioRef = useRef();
  const [isPlay, setPlay] = useState(true);
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(()=>{
      handlePausePlayClick()
  },[])
  const songs = [
    {
      name: "3107 - 2",
      singer: "DuonggNauWnFreakD",
      path: music1,
    },
    {
      name: "Buon-Thi-Cu-Khoc-Di-",
      singer: "Lynk-Lee",
      path: music2,
    },
    {
      name: "Chỉ muốn bên em lúc này",
      singer: "Huy Vạc",
      path: music3,
    },
    {
      name: "Dễ đến dễ đi",
      singer: "Quang hùng masterD",
      path: music4,
    },
    {
      name: "Em say rồi",
      singer: "Thương Võ",
      path: music5,
    },
    {
      name: "Gryffin",
      singer: " ft. Elley Duhé",
      path: music6,
    },
    {
      name: "Hẹn yêu",
      singer: "Thương võ",
      path: music7,
    },
    {
      name: "Pháo Hồng",
      singer: "Đạt long vinh",
      path: music8,
    },
    {
      name: "Vài giây nữa thôi",
      singer: "ReddyFreakD",
      path: music9,
    },
  ];

  const handlePausePlayClick = () => {
    if (isPlay) {
     
      audioRef.current.pause();
      console.log("checl2", isPlay);
   
    } else {
      audioRef.current.play();
      console.log("checl1", isPlay);
    }
    setPlay(!isPlay)
  };
  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };
  const handleNextMusic = () =>{
    if(audioIndex === songs.length-1){
      setPlay(true)
      console.log('check stt ', audioIndex , songs.length);
      setAudioIndex( 0)
    }else{
      setPlay(true)
      console.log('check stt ', audioIndex , songs.length);
      setAudioIndex( (audioIndex + 1))
    }
  
  }
  const handlePrevMusic = () =>{
    if(audioIndex === 0){
      setPlay(true)
      console.log('check stt ', audioIndex , songs.length);
      setAudioIndex( songs.length-1)
    }else{
      setPlay(true)
      console.log('check stt ', audioIndex , songs.length);
      setAudioIndex( (audioIndex - 1))
    }
  
  }
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };
  const handleFinishMusic = () =>{
    setPlay(false)
    handleNextMusic()
  }
  

  return (
    <div className="playmusic-container">
      <div className="playmusic-content">
        <div className="playmusic-title">
          <p> song name : {songs[audioIndex].name}</p>
          <p> Singer : {songs[audioIndex].singer}</p>
          </div>
        <div className="playmusic-box">
          <div>
            <audio 
            autoPlay ref={audioRef} src={songs[audioIndex].path}
            onLoadedData={handleLoadedData}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onEnded={() => handleFinishMusic()}
             />
          </div>
          <div className="playmusic-btn">
            <button onClick={()=>handlePrevMusic()}>
              <img src={btnPre} />
               </button>
            { isPlay ?      <button onClick={()=>handlePausePlayClick()}
               >
              <img src={btnPause} />
               </button> : 
                    <button onClick={()=>handlePausePlayClick()}
                    >
                   <img src={btnPlay} />
                    </button>
            }
               <button onClick={()=>handleNextMusic()}>
              <img src={btnNext} />
               </button>
            
            </div>
        </div>
      </div>
      <div className="playmusic-render">
        <TimeSlider
          axis="x"
          xmax={duration}
          x={currentTime}
          onChange={handleTimeSliderChange}
          styles={{
            track: {
              backgroundColor: "black",
              height: "2px",
            },
            active: {
              backgroundColor: "red",
              height: "2px",
            },
            thumb: {
              marginTop: "-3px",
              width: "8px",
              height: "8px",
              backgroundColor: "#333",
              borderRadius: 0,
            },
          }}
        />
      </div>
    </div>
  );
}
