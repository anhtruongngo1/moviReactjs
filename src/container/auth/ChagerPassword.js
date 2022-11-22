import React, { useState } from 'react' ;
import "./Loading.scss" ;
import Header from '../Header/Header';
import bg2 from "../../assets/background/background2.jpg"
export default function ChagerPassword() {
    const [isInfo , setInfo] = useState({
        password : '' ,
        regainPassword : ''
    })
  return (
    <>
    <Header />
    <div className='forgot-password'>
        <img src={bg2} />

    <div className='forgot-infor' >
     
        <div className='forgot-item'>
            <label> Mật khẩu mới</label>
            <label> Nhập lại mật khẩu</label>
          
        </div>
        <div className='forgot-item'>
            <input 
            value={isInfo.password}
            onChange={(e) =>setInfo({...isInfo , password: e.target.value} )} 
             type="password" />
            <input 
            value={isInfo.regainPassword}
            onChange={(e) =>setInfo({...isInfo , regainPassword: e.target.value} ) } 
             type="password" />
            <div>
            <button> Send</button>
        </div>
        </div>
      
      

    </div>
    </div>
    </>
  )
}
