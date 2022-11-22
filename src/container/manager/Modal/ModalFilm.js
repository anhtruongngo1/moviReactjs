import React, { useEffect, useState } from 'react'
import "../Modal/Modal.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CommonUtils from "../../commantUtils/CommonUtils"
import upload1 from "../../../assets/upload.png";
import { getAllYear, handleCreateFilm } from "../../service/service";
import ReactMarkdown from 'react-markdown'
function ModalFilm(props) {

  const [form, setForm] = useState({
    name:'' ,
    movieName: '',
    previewUrl1: '',
    actor: '',
    director: '',
    time: '',
    description: '',
    trailerMovie: '',
    linkMovie: '',
    Year: '',
    yearAll: [],
    quality: '',
    categoryId: '',
    categoryAll: [],
    image: '',
    previewUrl: '',
    backgroundImg: '',
    previewUrl2: '',
  })
  useEffect(() => {
    let res = getAllYear()
    let data = res.then((data) => {
      if (data && data.errCode === 0) {
        setForm({
          ...form,
          yearAll: data.dataYear,
          categoryAll: data.dataFilm,
          Year: data.dataYear && data.dataYear.length > 0 ? data.dataYear[0].keyMap : '',
          categoryId: data.dataFilm && data.dataFilm.length > 0 ? data.dataFilm[0].keyMap : ''

        })
      }
    })

  }, [])
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
  const handleOnchangeImg2 = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      setForm({
        ...form,
        previewUrl2: objectUrl,
        backgroundImg: base64

      })
    }

  }
  const handleOnchangeImg1 = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      setForm({
        ...form,
        previewUrl1: objectUrl,
        movieName: base64

      })
    }

  }
  const handleCreateFilm2 = async () => {
    let res = await handleCreateFilm(form)
    if (res && res.errCode === 0) {
      setForm({
        ...form,
        movieName: '',
        actor: '',
        director: '',
        time: '',
        description: '',
        quality: '',
        image: '',
        previewUrl: '',
        previewUrl2: '',
        name: '',
        linkMovie: '',
        trailerMovie: ''
      })
      props.closeModal()
    }
  }

  console.log('check', form);

  return (
    <>
      <Modal isOpen={props.isShowModal} toggle={props.closeModal}>
        <ModalHeader>
          Thêm mới Film
          <div className="modal-header-cancel" onClick={props.closeModal}>
            x
          </div>

        </ModalHeader>
        <ModalBody>
        <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>Name Movie</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                name="actor"
              />
            </div>

          </div>
          <div className="modal-film">
            <div className="modal-film-item modal-film-item-content1">
              <label
                htmlFor="previewImg1" className="label-upload">
                MovieName
                <img height="30px" alt="" src={upload1} />

              </label>
            <input id="previewImg1"
                type="file"
                onChange={(e) => handleOnchangeImg1(e)}
                
              />

            </div>
            <div className="modal-film-item">
              <label>Year</label>
              <select

                value={form.Year}
                onChange={(e) => setForm({ ...form, Year: e.target.value })}
                aria-label="select example"
              >
                {form.yearAll && form.yearAll.length > 0 &&
                  form.yearAll.map((item, i) => {
                    return (
                      <option key={i} value={item.keyMap}>{item.value}</option>
                    )
                  })}

              </select>
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>actor</label>
              <input
                type="text"
                value={form.actor}
                onChange={(e) => setForm({ ...form, actor: e.target.value })}
                name="actor"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>director</label>
              <input
                type="text"
                value={form.director}
                onChange={(e) => setForm({ ...form, director: e.target.value })}
                name="director"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>Time</label>
              <input className="modal-film-item-input"
                type="text"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                name="time"
              />
               <label>phút</label>
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>trailerMovie</label>
              <input 
                type="text"
                value={form.trailerMovie}
                onChange={(e) => setForm({ ...form, trailerMovie: e.target.value })}
                name="trailerMovie"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>linkMovie</label>
              <input 
                type="text"
                value={form.linkMovie}
                onChange={(e) => setForm({ ...form, linkMovie: e.target.value })}
                name="linkMovie"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>description</label>
              {/* <input
                type="text"
                value={form.description}
                name="description"
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              /> */}
              <textarea
                name="description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />

            </div>

          </div>
        
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>quality</label>
              <input
                type="quality"
                value={form.quality}
                onChange={(e) => setForm({ ...form, quality: e.target.value })}
                name="quality"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item">
              <label>category</label>
              <select
                aria-label="Default select example"
                value={form.categoryId}
                onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              >
                {form.categoryAll && form.categoryAll.length > 0 &&
                  form.categoryAll.map((item, i) => {
                    return (
                      <option key={i} value={item.keyMap}>{item.value}</option>
                    )
                  })}

              </select>
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item  modal-film-item-content2">
              <input id="previewImg"
                type="file"
                onChange={(e) => handleOnchangeImg(e)}
                hidden
              />
              <label
                htmlFor="previewImg" className="label-upload1">
                Avatar
                <img height="30px" alt="" src={upload1} />

              </label>
              <div className="preview-image" onClick={() => this.openPreviewImg()}>
                <img height="100%;" alt="" src={form.previewUrl} />
              </div>
            </div>
            <div className="modal-film-item  modal-film-item-content2">
              <input id="previewImg2"
                type="file"
                onChange={(e) => handleOnchangeImg2(e)}
                hidden
              />
              <label
                htmlFor="previewImg2" className="label-upload2">
                background
                <img height="30px" alt="" src={upload1} />

              </label>
              <div className="preview-image2" onClick={() => this.openPreviewImg()}>
                <img height="100%;" alt="" src={form.previewUrl2} />
              </div>
            </div>
          </div>
          <button
            onClick={() => handleCreateFilm2()}
            className="modal-film-btn">Save</button>
          <button
            onClick={props.closeModal}
            className="modal-film-btn btn-modal-cancle " >cancle</button>
        </ModalBody>

      </Modal>

    </>
  );
}

export default ModalFilm;