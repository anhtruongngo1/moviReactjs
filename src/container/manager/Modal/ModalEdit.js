import React, { useEffect, useState } from 'react'
import "../Modal/Modal.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CommonUtils from "../../commantUtils/CommonUtils"
import upload1 from "../../../assets/upload.png";
import { getAllGender, handleEditUser } from "../../service/service";
import { useSelector } from 'react-redux';
function ModalEdit(props) {
  const accessToken = useSelector((state) => state.user.accessToken)
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
    previewUrl: ''
  })
  useEffect(() => {
    let res = getAllGender()
    let data = res.then((data) => {
      if (data && data.errCode === 0) {
        setForm({
          firstName: props.isDataSend.firstName,
          lastName: props.isDataSend.lastName,
          password: "123456",
          email: props.isDataSend.email,
          genderAll: data.dataGender,
          roleAll: data.dataRole,
          role: props.isDataSend.roleId,
          gender: props.isDataSend.gender,
          previewUrl: props.isDataSend.image
        })
      }
    })

  }, [props])
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
  const handleUpdateUser = async () => {
    let res = await handleEditUser({
      ...form,
      id: props.isDataSend.id
    })
    setForm({
      ...form,
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      image: '',
      previewUrl: ''
    })
    props.closeModalEdit()

  }
  console.log('check datasend', form);

  return (
    <>
      <Modal isOpen={props.isShowModalEdit} toggle={props.closeModalEdit}>
        <ModalHeader>
          Edit người dùng
          <div className="modal-header-cancel" onClick={props.closeModalEdit}>
            x
          </div>

        </ModalHeader>
        <ModalBody>
          <div className="modal-User">
            <div className="modal-User-item">
              <label>First Name</label>
              <input
                type="text"
                value={form.firstName}
                name="firstName"
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </div>
            <div className="modal-User-item">
              <label>lastName</label>
              <input
                type="text"
                value={form.lastName}
                name="lastName"
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

          </div>
          <div className="modal-User" >
            <div className="modal-User-item">
              <label>password</label>
              <input
                type="password"
                disabled
                value={form.password}
                name="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="modal-User-item">
              <label>Gender</label>
              <select

                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                aria-label="select example"
              >
                {form.genderAll && form.genderAll.length > 0 &&
                  form.genderAll.map((item, i) => {
                    return (
                      <option key={i} value={item.keyMap}>{item.value}</option>
                    )
                  })}

              </select>
            </div>
          </div>
          <div className="modal-User" >
            <div className="modal-User-item modal-User-item-content">
              <label>email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                name="email"
              />
            </div>

          </div>
          <div className="modal-User" >
            <div className="modal-User-item">
              <label>role</label>
              <select
                aria-label="Default select example"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                {form.roleAll && form.roleAll.length > 0 &&
                  form.roleAll.map((item, i) => {
                    return (
                      <option key={i} value={item.keyMap}>{item.value}</option>
                    )
                  })}

              </select>
            </div>

          </div>
          <div className="modal-User" >
            <div className="modal-User-item  modal-User-item-content">
              <input id="previewImg"
                type="file"
                onChange={(e) => handleOnchangeImg(e)}
                hidden
              />
              <label
                htmlFor="previewImg" className="label-upload">
                Tải ảnh
                <img height="30px" alt="" src={upload1} />

              </label>
              <div className="preview-image" onClick={() => this.openPreviewImg()}>
                <img height="100%;" alt="" src={form.previewUrl} />
              </div>
            </div>
          </div>
          <button
            onClick={() => handleUpdateUser()}
            className="modal-user-btn">Update</button>
          <button
            onClick={props.closeModalEdit}
            className="modal-user-btn btn-modal-cancle " >cancle</button>
        </ModalBody>

      </Modal>

    </>
  );
}

export default ModalEdit;