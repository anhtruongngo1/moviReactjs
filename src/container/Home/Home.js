import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Banner from "../../assets/film/film.jpg";
import '../Home/Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import { getAllFilms } from "../service/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {setIsToggle} from "../../redux/userSlice"

function Home() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [dataFilm, setDataFilm] = useState([])
  const accessToken = useSelector((state) => state.user.accessToken)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    {
      let res = getAllFilms()
      let data = res.then((data) => {
        if (data && data.errCode === 0) {
          setDataFilm(
            data.data
          )
        }
      })
  
    }
  }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current , next) => {
            setSlideIndex(next)
        },
        centerMode: true,
  
  };
  const handleToggle = () => {
    dispatch(setIsToggle())
}
    return ( 
        <>
        <Header />
        <div className="home-body" onClick={()=>handleToggle()}>
          <div className="home-content">

          <marquee> Bi-shop dễ dàng xem phim và đăng tải những bộ phim mới ! Click đăng ký để trở thành thành viên</marquee>
            <h1 className="home-content-title">
              Giải trí hay - Đậm chất Việt
           
            </h1>
            <Slider {...settings}>
            {dataFilm && dataFilm.length > 0 &&
                dataFilm.map((item, i) => (
                  <div 
                    className={i === slideIndex ? 'slide1 slice-active' : 'slide1'} key={i}>
                  <img src={item.image} alt='' />
  
                </div>
                ))
              }

            

            </Slider>
            
      


          </div>

        </div>
        <div className="home-content-btn"> 
          <span  className="home-content-btn-link"
          > ĐĂNG NHẬP ĐỂ XEM CHI TIẾT</span>

            </div>

      </>
     );
}

export default Home ;