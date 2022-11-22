import React, { useState } from 'react'
import "./ManagerTicket.scss" ;
import ImgGift from "../../../assets/logo/gift.svg" 

function ManagerTicket() {
  const [isActive , setActive] = useState("USER")
  return (
    <div className='ticket-body'>
        <h4>
        Ưu đãi của bạn
        </h4>
        <div className='ticket-body-content'> 
          <input type="text" placeholder='Nhập mã ưu đãi tại đây'/>

          <button>Áp dụng </button>
           </div>

        <div className='tiket-border'> 
          <div className='tiket-border-left'>

          </div>
          <div onClick={()=> setActive("USER")}
          className={isActive === "USER" ? 'tiket-border-container active' : 'tiket-border-container'}>
          ƯU ĐÃI SỬ DỤNG TRÊN THIẾT BỊ CỦA BẠN
            </div>
            <div onClick={()=> setActive("DIFFERENT")}
            className={isActive === "DIFFERENT" ? 'tiket-border-right active' : 'tiket-border-right' }>
            ƯU ĐÃI SỬ DỤNG TRÊN THIẾT BỊ KHÁC
            </div>

        </div>
        <div className='tiket-cart'> 
            <img src={ImgGift}  alt=''/>

            <p> Những ưu đãi dành cho bạn sẽ xuất hiện tại đây.</p>
           </div>

        </div>
  )
}

export default ManagerTicket