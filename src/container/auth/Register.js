import React, { useState } from 'react';
import '../auth/Register.scss';
import { FaUser, FaLock } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../Header/Header"
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { registerUser } from "../service/service";
import {useNavigate} from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [notify , setnotify] = useState(false)
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: '',
            confirmedPassword: '',
        },
        validationSchema: yup.object({
            userName: yup.string().required("vui lòng nhập userName"),
            password: yup.string().required('vui lòng nhập password').min(5,'userName phải đủ 5 kí tự'),
            email: yup.string().required('vui lòng nhập email').email('Invalid Email'),
            confirmedPassword:yup.string().required("vui lòng nhập lại password").oneOf([yup.ref('password')],'phải trùng với password'),
        }),
        onSubmit: async(values) => {
            console.log('check values', values.email);
            let res = await registerUser({

                email : values.email ,
                firstName: values.userName,
                password : values.password
            }
            )
            if (res && res.errCode === 0) {
                setnotify(true)
                navigate("/login")
            }
        }
    })
    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    return (
        <>
            <Header />
            <div className="register-body">
                <div className="register-body-screen">
                    <div className="register-block">

                        <div className="register-content">


                        </div>
                        <div className="register-container">
                            <div className="register-img">

                            </div>
                            <h3>WELCOME</h3>
                            <p>Sign up by entering the information below</p>
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaUser />
                                </div>
                                <input type="text" placeholder="UserName"
                                    name="userName"
                                    value={formik.userName}
                                    onChange={formik.handleChange}
                                />

                            </div>
                            {formik.errors.userName && 
                                <p className='login-errmess'>{ formik.errors.userName}</p>
                             }
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaUser />
                                </div>
                                <input type="mail" placeholder="email"
                                    name="email"
                                     value={formik.email}
                                     onChange={formik.handleChange}
                                />

                            </div>
                            {formik.errors.email && 
                                <p className='login-errmess'>{ formik.errors.email}</p>
                             }

                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaLock />
                                </div>
                                <input type={isShowPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder="Password"
                                    value={formik.password}
                                    onChange={formik.handleChange} />
                                <span onClick={()=>handleShowPassword()}
                                >{isShowPassword ? <FiEyeOff /> : <FiEye />}</span>


                            </div>
                            {formik.errors.password && 
                                <p className="login-errmess">{ formik.errors.password }</p>
                             }
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaLock />
                                </div>
                                <input type={isShowPassword ? 'text' : 'password'}
                                    placeholder='confirmedPassword'
                                    value={formik.confirmedPassword}
                                    onChange={formik.handleChange}
                                    name='confirmedPassword'
                                />
                                <span onClick={()=>handleShowPassword()}
                                >{isShowPassword ? <FiEyeOff /> : <FiEye />}</span>


                            </div>
                            {formik.errors.confirmedPassword && 
                                <p className='login-errmess'>{ formik.errors.confirmedPassword}</p>
                             }
                               <button type="submit"
                                
                                onClick={formik.handleSubmit}
                                className="btn-register"
                                >SIGN UP</button>
                            {notify ? <p>SUCCESS!</p> : <p></p>}
                            <div className="register-login-icon">
                                <div className="register-login-icon-face"></div>
                                <div className="register-login-icon-google"></div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Register;