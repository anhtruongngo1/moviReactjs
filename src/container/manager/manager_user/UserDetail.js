import React, { useEffect, useState } from 'react';
import "../manager_user/ManagerDetailUser.scss";
import av from "../../../assets/film/matbiec.webp";
import { getUserDetail } from "../../service/userService";
import { useSelector } from 'react-redux';
import CommonUtils from "../../commantUtils/CommonUtils" ;
import {handleEditUser} from "../../service/service"
import { useDispatch } from "react-redux" ;
import {updateInforUser} from "../../../redux/userSlice"
function UserDetail() {
    const userInfo = useSelector((state) => state.user.userInfor)
    const [activeUser, setactiveUser] = useState(false)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        password: '',
        gender: '',
        genderAll: [],
        email: '',
        role: '',
        roleAll: [],
        image: '',
        previewUrl: '' ,
        id:'' 
      })
    useEffect(() => {
        let res = getUserDetail(userInfo.id)
        let data = res.then((data) => {
      if (data && data.errCode === 0) {
        setForm({
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          password: "123456",
          email: data.data.email,
            gender: data.data.gender,
          image : data.data.image,

        })
      }
    })
        
    },[])
    const handleOnchangeImg = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
          let base64 = await CommonUtils.getBase64(file);
          let objectUrl = URL.createObjectURL(file);
          setForm({
            ...form,
            previewUrl: objectUrl,
            image: base64
    
          })
        }
    
      }
      const handleUpdateUser = async() =>{
        let res = await handleEditUser({
            ...form ,
            id : userInfo.id
        })
        if(res && res.errCode === 0){
            setactiveUser(false)
            // const userInfor = {
            //     userInfo : form
            // }
            // dispatch(updateInforUser(userInfo))
        }
      }
      const handleEditPassword = () =>{
        alert("del cho đổi mật khẩu nha con")
      }



    return (
        <>
            <div className="content-right-title">
                <div className="content-right-title-left" >
                    <span>Thông tin tài khoản</span>
                </div>
                <div className="content-right-title-right">
                   {
                    activeUser === true ? 
                    <span 
                    onClick={()=>handleUpdateUser()}
                    >Save</span>
                    :
                    <span
                    onClick={()=>setactiveUser(true)}
                    >Chĩnh sửa </span>
                   }
                </div>
            </div>
          {activeUser === true ? 
            <div className="content-right-form" >
            <div className="form-item" >
                <div className="form-item-container">
                    <label>FirstName</label>
                    <input type="text"
                        
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form , firstName: e.target.value })} />
                </div>
                <div className="form-item-container">
                    <label>LastName</label>
                    <input type="text" 
                        
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form , lastName: e.target.value })}
                        
                    />
                </div>


            </div>
            <div className="form-item1" >
                <div className="form-item-container">
                    <label className="form-item-label">email</label>
                    <input className="form-item-input"
                        type="text"
                        
                        value={form.email}
                        onChange={(e) => setForm({ ...form , email: e.target.value })}
                    />
                </div>



            </div>
            <div className="form-item1" >
                <div className="form-item-container">
                    <label className="form-item-label">password</label>
                    <input disabled className="form-item-input1"
                        type="password"
                        value="123456"
                    />
                     
                </div>
                <div>
                    <span onClick={()=> handleEditPassword()}
                    > Đổi mật khẩu</span>
                </div>



            </div>
            <div className="form-item1" >
                <div className="form-item-container">
                    <label className="form-item-label">Giới tính</label>
                    <div className="form-item-menu">
                        <input className="form-item-radio" 
                            type="radio" value="M" name="gender"
                            checked={form.gender === "M"}
                            onChange={(e) =>{setForm({...form , gender : e.target.value})}}

                        /> Male
                        <input className="form-item-radio" 
                              checked={form.gender === "F"}
                            type="radio" value="F" name="gender" 
                            onChange={(e) =>{setForm({...form , gender : e.target.value})}}
                            /> Female
                        <input className="form-item-radio" 
                              checked={form.gender === "O"}
                              onChange={(e) =>{setForm({...form , gender : e.target.value})}}
                            type="radio" value="O" name="gender" /> Other
                    </div>

                </div>
                



            </div>
            <div className="form-item1" >
                <div className="form-item-container">
                    <label className="form-item-label">Image</label>
                    <input type="file" 
                    onChange={(e) => handleOnchangeImg(e)}
                    />
                    <div className="form-item-menu">
                        {form.image ? 
                            <img src={form.image} alt="" />
                            : 
                            <img src={av} alt="" />
                        }
                    </div>
                </div>



            </div>


        </div>
        :
        <div className="content-right-form" >
        <div className="form-item" >
            <div className="form-item-container">
                <label>FirstName</label>
                <input type="text"
                    disabled
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form , firstName: e.target.value })} />
            </div>
            <div className="form-item-container">
                <label>LastName</label>
                <input type="text" 
                    disabled
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form , lastName: e.target.value })}
                    
                />
            </div>


        </div>
        <div className="form-item1" >
            <div className="form-item-container">
                <label className="form-item-label">email</label>
                <input className="form-item-input"
                    type="text"
                    disabled
                    value={form.email}
                    onChange={(e) => setForm({ ...form , email: e.target.value })}
                />
            </div>



        </div>
        <div className="form-item1" >
            <div className="form-item-container">
                <label className="form-item-label">password</label>
                <input disabled className="form-item-input1"
                    type="password"
                    value="123456"
                />
                 
            </div>
            <div>
                <span onClick={()=> handleEditPassword()}
                > Đổi mật khẩu</span>
            </div>



        </div>
        <div className="form-item1" >
            <div className="form-item-container">
                <label className="form-item-label">Giới tính</label>
                <div className="form-item-menu">
                    <input className="form-item-radio" disabled
                        type="radio" value="Male" name="gender"
                        checked={form.gender === "M"}
                    /> Male
                    <input className="form-item-radio" disabled
                          checked={form.gender === "F"}
                        type="radio" value="Female" name="gender" /> Female
                    <input className="form-item-radio" disabled
                          checked={form.gender === "O"}
                        type="radio" value="Other" name="gender" /> Other
                </div>

            </div>
            



        </div>
        <div className="form-item1" >
            <div className="form-item-container">
                <label className="form-item-label">Image</label>
                <div className="form-item-menu">
                    {form.image ? 
                        <img src={form.image} alt="" />
                        : 
                        <img src={av} alt="" />
                    }
                </div>
            </div>



        </div>


    </div>
          }

            <h5> Bảo mật</h5>
            <div className="content-right-title">
                <div className="content-right-title-left" >
                    <div>xóa tài khoản</div>
                   
                </div>
                <div className="content-right-title-right">
                    <span>Xóa</span>
                </div>
            </div>
            <div className="content-right-bottom">
                <h5> Tài Khoản</h5>
                <div className="content-right-bottom-menu" >
                    <ul className="bottom-menu-item1"> Gói Thuê Bao </ul>
                    <ul className="bottom-menu-item2"> Thanh Toán</ul>
                    <ul className="bottom-menu-item3"> Lịch sử thanh toán</ul>

                </div>

            </div>
        </>
    );
}

export default UserDetail;