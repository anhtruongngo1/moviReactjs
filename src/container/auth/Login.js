import React, { useEffect, useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../Header/Header";
import "../auth/Login.scss";
import ModalForgot from './ModalForgot';
import { handleLogin2 } from '../service/service';
import { useDispatch } from "react-redux" 
import { saveInforUser , saveAccessToken } from "../../redux/userSlice" 
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

function Login() {
    const [userName, setUsername] = useState('')
    const [password , setpassword] = useState('')
    const [isShowPassword, setisShowPassword] = useState(false)
    const [ckeckValue, setcheckValue] = useState(true)
  const [notify, setnotify] = useState('')
  const [isModalForgot , setModalForgot] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()


    const handleShowPassword = () => {
        setisShowPassword(!isShowPassword);
  }
  const handleKeyDown = (e) => {
   console.log('check key ' , e.key);

}
    const handleLogin = async() => {
        if (!userName) {
           setcheckValue(false);
        }
        if (!password) {
            setcheckValue(false);
        }
        if (userName && password) {
            try {
                let res = await handleLogin2(userName, password)
              if (res && res.errCode === 0) {
                const userInfor = {
                  userInfor: res.user
                }
                const accessToken = { accessToken: res.accessToken}
                dispatch(saveInforUser(userInfor))
                dispatch(saveAccessToken(accessToken))
                navigate("/homePage")
                
              } 
              if (res && res.errCode !== 0) {
                setnotify(res.errMessage)
              }
             
                
                
            
           } catch (error) {
            if(error.response){
              if(error.response.data){
                setnotify(error.response.data.message)
              }
          }
           }
       }
    }
    const handleModalForgot = () =>{
      setModalForgot(!isModalForgot)
    }

    return (
        <>
        <Header />

          <div className="login-body">
            <div className="login-body-screen">
              <div className="login-block">

                <div className="login-content">


                </div>
                <div className="login-container">
                  <div className="login-img">

                  </div>
                  <h3>WELCOME</h3>
                  <p>Sign up by entering the information below</p>
                  <div className="login-input">
                    <div className="login-input-icon">
                      <FaUser />
                    </div>
                    <input type="text"
                      placeholder={ckeckValue ? 'userName' : ' vui lòng nhập userName'}
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                  </div>
                  <div className="login-input">
                    <div className="login-input-icon">
                      <FaLock />
                    </div>
                    <input type={isShowPassword ? 'text' : 'password'}
                      placeholder={ckeckValue ? 'password' : ' vui lòng nhập password'}
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <span onClick={() => handleShowPassword()}
                    > {isShowPassword ? <FiEyeOff /> : <FiEye />}</span>

                  </div>
                             
                            
                  <div className="login-input">
                    <div className="login-input-icon">
                      <FaUser />
                    </div>
                    <input type="text" value="chổ để nhập capcha đang phát triển" placeholder="UserName" />

                  </div>
                  <div className="login-forgot">
                    <p onClick={()=>handleModalForgot()}
                    className="login-forgot-link">forgot password</p>
                  </div>
               
                  <button
                    onKeyDown={(e) => handleKeyDown(e)}
                    onClick={() => handleLogin()}
                    className="btn-login"
                  >SIGN IN</button>
                  {notify && notify.length > 0 && <p>{notify}</p>}


                  <div className="login-forgot">
                    <p className="login-signup">signup</p>

                  </div>

                  <div className="login-login-icon">
                    <div className="login-login-icon-face"></div>
                    <div className="login-login-icon-google"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        
            <ModalForgot 
            isModalForgot={isModalForgot}
            handleModalForgot = {handleModalForgot}
            />
          
      
        </>
    )
}

export default Login;