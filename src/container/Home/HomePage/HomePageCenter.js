import React, { useEffect, useState } from 'react';
import "../HomePage.scss";
import Bg2 from "../../../assets/film/font.png"
import Bg1 from "../../../assets/film/film.jpg";
import Bg3 from "../../../assets/film/matbiec2.webp";
import { GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getRandomfilm } from "../../service/service";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import {postToCart} from "../../service/userService" ;
import { useSelector } from 'react-redux';



function HomePageCenter() {
    const [dataFilm, setDataFilm] = useState({})
    const [dataArr, setDataArr] = useState()
    const userInfo = useSelector((state) => state.user.userInfor)

    useEffect(() => {
        
          let res = getRandomfilm()
          let data = res.then((data) => {
              if (data && data.errCode === 0) {
                setDataFilm(
                   data.data
                  )
                
                
                  
         
              }
              setDataArr(data.data[0])
              
          })
      
        
    }, [])
    const handleNextArr = () => {
        const arrRandom = dataFilm[Math.floor(Math.random() * dataFilm.length) | 0]
        if (arrRandom.id !== dataArr.id) {
            setDataArr( arrRandom)
            
        }
        else {
            handleNextArr()
        }
    }
    let handleAddCart = async(id) =>{
        let res = await postToCart({
            idUser : userInfo.id ,
            idFilm : id

        })
        if(res && res.errCode ===0){
            alert("thêm vào danh sách thành công")
        }

    }
    const handleViewFilm = () =>{
        alert('làm chơi thôi film đâu mà xem mấy con tó')
        console.log('checkk');
    }

    return ( 
        <>
    
            <div className="manager-film-detail2" >
            <div className="film-detail-background2">
                <div className="backgound-bottom2"> </div>
                <div className="backgound-left2">
                </div>
                    <div className="backgound-right2">
                        {dataArr && dataArr.image &&
                            <img src={dataArr.image} alt='' />
                        }
                    
                    <div className="backgound-right-movie"
                        style={
                            {
                                background: `url(
                                ${ dataArr && dataArr.backgroundImg ? dataArr.backgroundImg : 'null'}
                                )center center / cover no-repeat`
                            }
                        }
                    >
    
                    </div>
    
                </div>
            </div>
            <div className="film-detail-content">
                <div className="detail-content-title">
                        {dataArr && dataArr.movieName && 
                            <img src={dataArr.movieName} alt="" />
                        }
                
    
                </div>
                    <div className="detail-content-overview">
                    <div className="film-detail-btn">
                        <button onClick={()=>handleViewFilm()}
                        className="film-detail-btn-link">
                            <GrOverview className="film-detail-btn-icon" />
                            <span>Xem film</span>
                        </button>
                        <button onClick={()=>handleAddCart(dataArr.id)}
                         className="film-detail-btn-link film-detail-btn-active ">
                            <IoMdAddCircleOutline className="film-detail-btn-icon" />
                            <span 
                            >Danh sách của tôi</span>
                        </button>
                    </div>
                    <div className="overview-list-description">
                            {dataArr && dataArr.description ? dataArr.description : 'chưa có'}
                            <span>
                                xem chi tiết
                                <MdNavigateNext  className="overview-list-description-icon"/>
                            </span>
                    </div>
                 
                    
                </div>
    
            </div>
            <div className="film-detail-center-menu">
                <ul >
                        <li onClick={() =>handleNextArr()}
                            className="film-detail-center-icon">
                            <GrFormPreviousLink  className="film-detail-center-icon-link"/>
                        </li>
                        <li onClick={() =>handleNextArr()}
                            className="film-detail-center-icon">
                            <GrFormNextLink className="film-detail-center-icon-link" />
                        </li>
                </ul>
            </div>
       
    
    </div>
            
     
        </>
     );
}

export default HomePageCenter;