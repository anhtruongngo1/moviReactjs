import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo1.jpg'
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import "../Header/Header.scss"
import { useSelector } from 'react-redux';
import { ImExit } from 'react-icons/im';
import HeaderInfor from "./HeaderInfor";
import SearchFilm from "../manager/search/SearchFilm" ;
import {AiOutlineMenu} from "react-icons/ai" 
import HeaderMenu from './HeaderMenu';
import {AiFillCloseCircle} from "react-icons/ai" ;


function Header() {
   
    const [isShowInfor , setShowInfor] = useState(false);
    const [headerMenu , setHeaderMenu] = useState(false)
    const userInfo = useSelector((state) => state.user.userInfor)
    const accessToken = useSelector((state) => state.user.accessToken)
    useEffect(() => { }, [userInfo])
    return (<>
        <div className="header-body">
            <div className="header-logo">
                <img src={Logo} alt=""></img>

            </div>

            <div className="header-list">
                {userInfo ? 
                    <Link to={`/homePage`} className="header-list-item">Home</Link>
                    :
                    <Link to={`/home`} className="header-list-item">Home</Link>
                }
                <Link to={`/music`} className="header-list-item">Music</Link>
                <Link to={`/music`} className="header-list-item">information</Link>
                {userInfo && userInfo.roleId ==="R1" 
                    &&
                    <Link to={`/manager`} className="header-list-item">Manager</Link>
                }
                
                <div className="header-list-item header-list-item-icon"><IoMdNotificationsOutline /></div>

                {userInfo && userInfo.firstName ? <>
                    <div className="header-list-item-welcome">
                 xin chào ! {userInfo.firstName}
                    </div>
                    <div onMouseEnter={() => setShowInfor(true)}
                        onMouseLeave={() => setShowInfor(false)}
                        className="header-list-item-logout">
                        {userInfo && userInfo.image ? 
                            <img src={userInfo.image}  alt="" /> : 'null'
                        }
                        {isShowInfor && <HeaderInfor />}
                        
                    </div>
                    <SearchFilm 
                   
                    />
               
                </>
                    :
                    <>
                        <div className="header-list-item">
                            <Link to={`/login`} className=" btn-login">Login</Link>
                        </div>
                        <div className="header-list-item ">
                            <Link to={`/register`} className=" btn-login">Sign up</Link>
                        </div>
                    </>
                }
            </div>
        {/* responsive */}
        <div className='header-menu-mb '
        > 
        {headerMenu === false ?
        <AiOutlineMenu  onClick={() => setHeaderMenu(!headerMenu)} />
            :

        <AiFillCloseCircle onClick={() => setHeaderMenu(!headerMenu)} />
        }

        </div>
        <div className='header-logo-mb'> 
        <img src={Logo} alt=""></img>
        </div>
        <div className='header-menu2-mb'>
       
            <SearchFilm />
            <IoMdNotificationsOutline className='mb-icon'/>

             </div>
            {
                headerMenu === true ? <><HeaderMenu userInfo= {userInfo}/>  </> : <></>
            }
           


        </div>
    </>);
}

export default Header;