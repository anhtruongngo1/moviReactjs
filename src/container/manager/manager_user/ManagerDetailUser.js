import React, { useState } from 'react';
import "../manager_user/ManagerDetailUser.scss"
import Header from '../../Header/Header';
import { RiVipCrownLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { Link , Outlet  } from "react-router-dom";
import Home from "../../Home/Home"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
function ManagerDetailUser() {
    const navigate = useNavigate()
    const userInfo = useSelector((state) => state.user.userInfor)
    const [active , setActive] = useState("USER")
    
    const detailNavigation = (item) =>{
        if(item==="USER"){
            setActive('USER')
            navigate("/user/detail")
        }
        if(item==="TICKET"){
            setActive('TICKET')
            navigate("/user/ticket")
        }

    }
    return (
        <> 
        <div className="user-detail-manager">
            <Header />
            <div className="user-detail-content">
                <div className="detail-content-left">
                    <div className="content-left-up">
                        <div><RiVipCrownLine  className="content-left-icon"/></div>
                            <span>{userInfo && userInfo.firstName && userInfo.lastName 
                            ? userInfo.firstName + userInfo.lastName : "Không tên"
                        }</span>
                            <div  className="content-left-bottom" >
                                <div><span>Đăng ký gói Bi-shop</span></div>
                                <button>Đăng kí gói</button>
                         </div>
                        </div>
                        <div className="content-left-menu"> 
                            <div onClick={()=> detailNavigation("USER")}
                            className={active === "USER" ? "content-left-item active" : "content-left-item "}> 
                                <div className="content-left-item-icon"> 
                                    <FaUserAlt />
                                </div>
                                <div>
                                    <span>Tài Khoản</span>
                                </div>

                            </div>
                            <div onClick={()=> detailNavigation("FILM")}
                            className={active === "FILM" ? "content-left-item active" : "content-left-item "}> 
                                <div className="content-left-item-icon"> 
                                    <TbBuildingWarehouse />
                                </div>
                                <div>
                                    <span>Quản lí kho phim</span>
                                </div>

                            </div>
                            <div onClick={()=> detailNavigation("DEVICE")}
                            className={active === "DEVICE" ? "content-left-item active" : "content-left-item "}> 
                                <div className="content-left-item-icon"> 
                                    <MdDevicesOther />
                                </div>
                                <div>
                                    <span>Quản lí thiết bị</span>
                                </div>

                            </div>
                            <div onClick={()=> detailNavigation("TICKET")}
                            className={active === "TICKET" ? "content-left-item active" : "content-left-item "}> 
                                <div className="content-left-item-icon"> 
                                    <FaTicketAlt />
                                </div>
                                <div>
                                    <span>Ưu đãi của bạn</span>
                                </div>

                            </div>
                            
                            

                        </div>
                </div>
                    <div className="detail-content-right">
                        <Outlet />

                </div>
            </div>
        </div>
        </>
    );
}

export default ManagerDetailUser;