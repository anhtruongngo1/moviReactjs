import React from 'react'
import "../Header/HeaderInfor.scss"
import { useSelector } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { TbUser } from "react-icons/tb";
import { CgFilm } from 'react-icons/cg';
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/userSlice";
import { logOut } from "../service/service";
import {useNavigate} from "react-router-dom"

function HeaderInfor() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector((state) => state.user.userInfor)
    const handleLogOut = async () => {
        let res = await logOut()
        if (res && res.errCode === 0) {          
            dispatch(logOutUser())
            navigate("/home")
        }
    }
    const handleNavigate = (data) =>{
        if(data === "USER"){
            navigate("/user/detail")

        }
        if(data === "CART"){
            navigate("/homePage")
        }
    }
    return ( 
        <div className="header-list-menu"> 
        
            {userInfo && userInfo.firstName
                ? <div className="header-list-name">{userInfo.firstName} { userInfo.lastName}</div> : ''  
            }
            <div  onClick={()=> handleNavigate("CART")}
            className="header-menu-item">
                <CgFilm className="header-menu-item-icon" />
                <span>Quản lí kho film</span>
            </div>
            <div  onClick={()=> handleNavigate("USER")}
             className="header-menu-item">
                <TbUser className="header-menu-item-icon"/>
                <span
               
                >Quản lí tài khoản  </span>
            </div>
            <div className="header-menu-item" onClick={()=>handleLogOut()}>
                <ImExit className="header-menu-item-icon" />
                <span> Đăng xuât  </span>
            </div>
            

        </div>
     );
}

export default HeaderInfor;