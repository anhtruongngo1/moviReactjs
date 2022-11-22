import React from 'react' ;
import "./Header.scss" ;
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function 
(props) {
    const userInfo = useSelector((state) => state.user.userInfor)
  return (
    <div className='header-menu'>
        <div className='header-menu-avatar'>
              {userInfo && userInfo.image ? 
                            <img src={userInfo.image}  alt="" /> : 'null'
                        }
             </div>
        <div className='header-menu-listBox'>
        {userInfo ? 
                    <Link to={`/homePage`} className="header-menu-item">Home</Link>
                    :
                    <Link to={`/home`} className="header-menu-item">Home</Link>
                }
                <Link to={`/music`} className="header-menu-item">Music</Link>
                <Link to={`/music`} className="header-menu-item">information</Link>
                {userInfo && userInfo.roleId ==="R1" 
                    &&
                    <Link to={`/manager`} className="header-menu-item">quản lí</Link>
                }
                 <Link to={`/user/detail`} className="header-menu-item">Cá Nhân</Link>
                 </div>

    </div>
  )
}
