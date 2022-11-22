import React, { useEffect, useState } from 'react';
import "../Home/HomePage.scss"
import Bg2 from "../../assets/film/font.png"
import Bg1 from "../../assets/film/matbiec.webp";
import Bg3 from "../../assets/film/matbiec2.webp";
import { GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import TrailerMovie from "../manager/Modal/ManagerDetail/TrailerMovie";
import Header from "../Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePageCenter from "./HomePage/HomePageCenter";
import MovieAllTop from "./HomePage/MovieAllTop";
import MovieAction from "./HomePage/MovieAction";
import MovieEmotion from "./HomePage/MovieEmotion";
import ListFilmUser from "./HomePage/ListFilmUser"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setIsToggle} from "../../redux/userSlice" ;
import Loading from '../auth/Loading';





function HomePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const accessToken = useSelector((state) => state.user.accessToken)
    const [isLoading , setLoading] = useState(false)
        useEffect(() => {
        if (!accessToken){
            navigate("/login")
        }
    
    }, [])
    const handleToggle = () => {
        dispatch(setIsToggle())
    }
 
    return (
        <>
     

            <div 
                className="homepage-all ">
                <Header />
                <div onClick={() =>handleToggle()}>             
                <HomePageCenter/>
                <ListFilmUser />
                <MovieAllTop />
                 <MovieAction/>
                <MovieEmotion />
                </div>                        
            </div> 
        
                              
           
            
        </>
    );
}

export default HomePage;