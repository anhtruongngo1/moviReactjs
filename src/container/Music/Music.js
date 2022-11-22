import React, { useEffect, useState } from "react";
import "../Music/Music.scss";
import cafeDay from "../../assets/background/CafeDay.mp4";
import cafeNight from "../../assets/background/CafeNight.mp4";
import cafeDayRain from "../../assets/background/CafeRainyDay.mp4" ;
import cafeNightRain from "../../assets/background/CafeRainyNight.mp4"
import Header from "../Header/Header";
import PlayingMusic from "./PlayingMusic";
import logo1 from "../../assets/logo/lofi-logo.gif";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { FaCloudRain } from "react-icons/fa";
import musicRain from "../../assets/music/rain.mp3"
import { useRef } from "react";
import {GrCaretNext} from "react-icons/gr";
import ExteriorNight from "../../assets/background/ExteriorNight.mp4"
import ExteriorDay from "../../assets/background/video.mp4"
import ExteriorRainyDay from "../../assets/background/ExteriorRainyDay.mp4"
import ExteriorRainyNight from "../../assets/background/ExteriorRainyNight.mp4"
import Daysunny from "../../assets/background/Day-sunny.mp4"
import Dayrainny from "../../assets/background/Day-rainny.mp4"
import Nightrainny from "../../assets/background/Night-rainny.mp4"
import Nightclear from "../../assets/background/Night-clear.mp4"

function Music() {
  const audioRef2 = useRef();
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleRain, setIsToggleRain] = useState(false);
  const [isNext , setIsNext] = useState(0)

  const handleToggle = () => {
    setIsToggle(!isToggle);
    console.log("checl toggle", isToggle);
  };
  const handleToggleRain = () =>{
    if(isToggleRain){
      audioRef2.current.pause()
    }else{
      audioRef2.current.play()
    }
    setIsToggleRain(!isToggleRain)
  }
  const handleFinishMusic = () =>{
     audioRef2.current.play()
  }
  const handleNextSlide = ()=>{
      if(isNext===2){
        setIsNext(0 )
      }else{
        setIsNext(isNext + 1 )
      }
  }
  return (
    <>
      <Header />
      <div className="music-body">
        
      <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 0 &&  isToggle === true && isToggleRain === false ? "music-body-banner active" : "music-body-banner"
          }
        >
          <source src={cafeNight} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 0 &&  isToggle === false && isToggleRain === false
              ? "music-body-banner active "
              : "music-body-banner "
          }
        >
          <source src={cafeDay} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 0 &&  isToggle === false && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={cafeDayRain} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 0 &&  isToggle === true && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={cafeNightRain} type="video/mp4"></source>
        </video>
    
      <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 1 && isToggle === true && isToggleRain === false ? "music-body-banner active" : "music-body-banner"
          }
        >
          <source src={ExteriorNight} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 1 &&  isToggle === false && isToggleRain === false
              ? "music-body-banner active "
              : "music-body-banner "
          }
        >
          <source src={ExteriorDay} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 1 && isToggle === false && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={ExteriorRainyDay} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 1 && isToggle === true && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={ExteriorRainyNight} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 2 &&  isToggle === true && isToggleRain === false ? "music-body-banner active" : "music-body-banner"
          }
        >
          <source src={Nightclear} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 2 &&  isToggle === false && isToggleRain === false
              ? "music-body-banner active "
              : "music-body-banner "
          }
        >
          <source src={Daysunny} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 2 &&  isToggle === false && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={Dayrainny} type="video/mp4"></source>
        </video>
        <video
          autoPlay
          loop
          muted
          plays-inline
          className={
            isNext === 2 &&  isToggle === true && isToggleRain === true 
              ? "music-body-banner active"
              : "music-body-banner "
          }
        >
          <source src={Nightrainny} type="video/mp4"></source>
        </video>

        <div className="music-container">
          <PlayingMusic />
        </div>
        <div className="music-logo">
          <img src={logo1} />
        </div>
        <div className="music-icon">
          <div className="music-icon-box">
            <div className="music-icon-btn">
              {isToggle ? (
                <div
                  onClick={() => handleToggle()}
                  className="music-icon-item-night"
                >
                  <BsSun className="music-icon-day" />
                </div>
              ) : (
                <div
                  onClick={() => handleToggle()}
                  className="music-icon-item-day"
                >
                  <BsFillMoonStarsFill className="music-icon-day" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div onClick={()=>handleToggleRain()}
        className="music-icon-rain">
          <FaCloudRain  className="music-rain-icon"/>
          <audio 
             ref={audioRef2} src={musicRain}
             onEnded={() => handleFinishMusic()}
             />

        
        </div>
        <div onClick={() => handleNextSlide()}
        className="music-icon-next">
          <GrCaretNext  className="music-next-icon"/>


        
        </div>
      </div>
    </>
  );
}

export default Music;
