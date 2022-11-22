import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Loading.scss" ;
import {sendEmail} from "../service/userService"
export default function ModalForgot(props) {
    const [isInfor , setInfor] = useState('')
    const [isSuccess , setSucess] = useState(false)
    const [isFail , setFail] = useState(false)

    const handleSendMail = async() =>{
        let sendData = await sendEmail({
            email : isInfor
        })
        if(sendData.errcode === 0){
            setSucess(true)
        }else{
            setFail(true)
        }
    }

  return (
    <>
                      <Modal isOpen={props.isModalForgot} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                >
                  <ModalHeader toggle={props.handleModalForgot}>Quên mật khẩu</ModalHeader>
                  <ModalBody>
                 {
                    isSuccess === true ?
                    <>
                    <p> Thông tin đã gởi về email của bạn !</p>
                    </> :
                    <>
                       <div>
                      <p> vui lòng nhập địa chỉ email  </p>

                    </div>
                    <div className='modal-forgot'>
                        <input 
                        value={isInfor}
                        onChange={(e) => setInfor(e.target.value)}
                         type="text" />
                    </div>
                    <div>
                       {
                        isFail === true ? 
                         <p className='modal-forgot-notify'> Email không tồn tại hoặc không đúng định dạng !</p> :
                         <></>
                       }
                    </div>
                    </>
                 }
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={()=>handleSendMail()}>Send</Button>{' '}
                    <Button color="secondary" onClick={props.handleModalForgot}>Cancel</Button>
                  </ModalFooter>
                </Modal>
    </>
  )
}
