import React, { useEffect, useState } from 'react';
import Bg1 from "../../../assets/film/film.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getToCart } from "../../service/userService";
import { useNavigate } from "react-router-dom" ;
import { useSelector } from 'react-redux';
import "../HomePage/ListFilm.scss"
function ListFilmUser() {

  const [dataFilm, setDataFilm] = useState([])
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.user.userInfor)
  useEffect(() => {
    {
      let res = getToCart(userInfo.id)
      let data = res.then((data) => {
        if (data && data.errCode === 0) {
            
          setDataFilm(
            data.data
          )
        }
      })

    }
  }, [])
  const ListDataCart =  dataFilm.length < 5 ? dataFilm.length : 5

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: ListDataCart ,
    slidesToScroll: 1,




  };
  let handleDetailFilm = (id) => {
    navigate(`/manager-detail-film/${id}`)
  }

  console.log('checkkkkkk', dataFilm);
  const handleImage = () =>{
    return Bg1
  }
  return (
   <>
   { dataFilm && dataFilm.length > 0 &&
     <div className="homepage-container">
     <div className="homepage-all-no"></div>
     <h3>
      Danh Sách Phim Của Bạn
     </h3>
     <Slider {...settings}>
       {dataFilm && dataFilm.length > 0 &&
         dataFilm.map((item, i) => (
           <div onClick={() => handleDetailFilm(item.id)}
             key={i} className="homepage-menu">
             <img src={item.film.image} alt="" />

           </div>

         ))
       }


     </Slider>
   </div>
   }
   </>
  );
}

export default ListFilmUser;