import React, { useEffect, useState } from 'react';
import Header from '../../../Header/Header';
import Bg1 from "../../../../assets/film/matbiec.webp";
import Bg2 from "../../../../assets/film/font.png"
import Bg3 from "../../../../assets/film/matbiec2.webp";
import "../ManagerDetail/ManagerDetailFilm.scss";
import { GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getDetailFilm } from "../../../service/service"
import {postToCart} from "../../../service/userService"
import { useParams } from 'react-router-dom';
import TrailerMovie from "./TrailerMovie";
import { useDispatch } from "react-redux";
import {setIsToggle} from "../../../../redux/userSlice" ;
import { useSelector } from 'react-redux';
function ManagerDetailFilm() {
    const [dataFilm, setDataFilm] = useState({})
    const [isActive, setActive] = useState('MENU')
    const dispatch = useDispatch()
    let { id } = useParams();
    const userInfo = useSelector((state) => state.user.userInfor)
    useEffect(() => {
        let res = getDetailFilm(id)
        let data = res.then((data) => {

            if (data && data.errCode === 0) {
                setDataFilm(
                    data.data
                )
            }
        })

    }, [id])
    console.log('check data', dataFilm);
    let handleShow = () => {
        dispatch(setIsToggle())
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
        alert('làm chơi thôi film del đâu mà xem mấy con tó')
    }
    return (
        <>
            <Header />
            <div    onClick={(() =>handleShow())}
                className="manager-film-detail">
                <div className="film-detail-background">
                    <div className="backgound-bottom"> </div>
                    <div className="backgound-left">
                    </div>
                    <div className="backgound-right">
                        <img src={Bg2} href='' />
                        <div className="backgound-right-movie"
                            style={
                                {
                                    background: `url(
                                    ${dataFilm && dataFilm.movieName ? dataFilm.backgroundImg : 'null'}
                                    )center center / cover no-repeat`
                                }
                            }
                        >

                        </div>

                    </div>
                </div>
                <div className="film-detail-content">
                    <div className="detail-content-title">
                        {dataFilm && dataFilm.movieName &&
                            <img src={dataFilm.movieName} alt="" />
                        }

                    </div>
                    <div className="detail-content-overview">
                        <div className="overview-list-detail">
                            <div className="overview-list-item">
                                {dataFilm && dataFilm.yearData ? dataFilm.yearData.value : 'chưa có'}
                            </div>
                            <div className="overview-list-item overview-list-item-active">
                                16+
                            </div>
                            <div className="overview-list-item">
                                {dataFilm && dataFilm.time ? dataFilm.time : 'chưa có'} phút
                            </div>
                            <div className="overview-list-item overview-list-item-active2">
                                {dataFilm && dataFilm.quality ? dataFilm.quality : 'chưa có'}
                            </div>
                        </div>
                        <div className="overview-list-description">
                            {dataFilm && dataFilm.description ? dataFilm.description : 'chưa có'}
                        </div>
                        <div className="overviw-list-type">
                            <div className="overviw-list-type-actor">
                                <span>Diễn viên :

                                </span>
                                <div className="overviw-list-type-text-actor">
                                    {dataFilm && dataFilm.actor ? dataFilm.actor : 'chưa có'}
                                </div>
                            </div>

                            <div className="overviw-list-type-actor">
                                <span>Đạo diễn  :</span>
                                <div className="overviw-list-type-text-actor">
                                    {dataFilm && dataFilm.director ? dataFilm.director : 'chưa có'}
                                </div>
                            </div>
                            <div className="overviw-list-type-actor">
                                <span>Thể loại :</span>
                                <div className="overviw-list-type-text-actor">
                                    {dataFilm && dataFilm.categoryData ? dataFilm.categoryData.value : 'chưa có'}
                                </div>
                            </div>
                        </div>
                        <div className="film-detail-btn">
                            <button onClick={()=>handleViewFilm()}
                            className="film-detail-btn-link">
                                <GrOverview className="film-detail-btn-icon" />
                                <span>Xem film</span>
                            </button>
                            <button onClick={()=>handleAddCart(dataFilm.id)}
                             className="film-detail-btn-link film-detail-btn-active ">
                                <IoMdAddCircleOutline className="film-detail-btn-icon" />
                                <span>Danh sách của tôi</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="film-detail-menu">
                    <ul>
                        <li onClick={()=>setActive("MENU")}
                            className={
                            isActive === "MENU" ? "detail-menu-item detail-menu-item-active " : "detail-menu-item"
                        }
                        >TỔNG QUAN</li>
                        <li  onClick={()=>setActive("TRAILER")}
                            className={
                                isActive === "TRAILER" ? "detail-menu-item detail-menu-item-active " : "detail-menu-item"
                            }
                        >TRAILER</li>
                        <li  onClick={()=>setActive("DETAIL")}
                            className={
                            isActive === "DETAIL" ? "detail-menu-item detail-menu-item-active " : "detail-menu-item"
                        }>CHI TIẾT</li>
                    </ul>
                </div>
                {isActive === "TRAILER" &&
                    <TrailerMovie
                    closeTrailer={() => setActive("MENU")}
                    linkMovie ={dataFilm && dataFilm.trailerMovie}
                />
                }

            </div>
        </>
    );
}

export default ManagerDetailFilm;