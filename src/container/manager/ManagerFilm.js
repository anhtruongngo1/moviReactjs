import React, { useEffect, useState } from 'react';
import "../manager/Manager.scss";
import { getAllFilms ,handleDeleteFilm } from "../service/service";
import ModalFilm from './Modal/ModalFilm';
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalEditFilm from "./Modal/ModalEditFilm"
import { useSelector } from 'react-redux';
import Pagination from "./table/Pagination"

function ManagerFilm() {
  const [dataFilm, setDataFilm] = useState([])
  const [isShowModal, setisShowModal] = useState(false)
  const [isShowModalEdit, setisShowModalEdit] = useState(false)
  const [isDataSend, setDataSend] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const accessToken = useSelector((state) => state.user.accessToken)
  const navigate = useNavigate()
  useEffect(() => {
    let res = getAllFilms()
    let data = res.then((data) => {
      if (data && data.errCode === 0) {
        setDataFilm(
          data.data
        )
      }
    })

  }, [isShowModal , isShowModalEdit])
  const closeModal = () => {
    setisShowModal(!isShowModal)
  }
  const handleShowModal = () => {
    setisShowModal(!isShowModal)
  }
  const closeModalEdit = () => {
    setisShowModalEdit(!isShowModalEdit)
  }
  const handleDetailFilm = (id) => {
    navigate(`/manager-detail-film/${id}`)
  }
  const handleDeleteFilm2 =async (id) => {
    let res = await handleDeleteFilm({
      id : id ,
      data: {
        headers: {token: `Bearer ${accessToken}`}
      }
    })
    if (res && res.errCode === 0) {
      let res = getAllFilms()
      let data = res.then((data) => {
        if (data && data.errCode === 0) {
          setDataFilm(
            data.data
          )
        }
      })
    }
  }
  let handleEditFilm = (item) => {
    setisShowModalEdit(!isShowModalEdit)
    setDataSend(item)
  }
  const indexOfLastFilm = currentPage * postsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - postsPerPage;
  const currentPosts = dataFilm.slice(indexOfFirstFilm, indexOfLastFilm)
  const Paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
  }

  return (
    <div className="manager-film-body ">
          <div className="manager-film-icons">
          <IoMdAddCircle
            className="manager-user-icons-icon"
            onClick={() => handleShowModal()} />
              <span> Thêm mới film</span>
          </div>
      <h3>Danh sách film</h3>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">ID film</th>
            <th scope="col">Tên film</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Year</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Ngày cập nhât</th>
            <th scope="col">view</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts && currentPosts.length > 0 &&
            currentPosts.map((item, i) => (

              <tr key={i}>
                <th scope="row"> {item.id}</th>
                <td>{ item.name} </td>
                <td>
                <img href="" alt="" src={item.image} />
                </td>
                <td>{ item.yearData.value}</td>
                <td>{ item.createdAt}</td>
                <td>
                  {item.updatedAt}
                </td>
                <td>
                  <span onClick={()=>handleDetailFilm(item.id)}>Chi tiết</span>
                </td>
                <td>
                  <span onClick={()=>handleEditFilm(item)}
                    className="manager-film-actions-icon"> 
                    <AiOutlineEdit />
                  </span>
                  <span onClick={()=> handleDeleteFilm2(item.id)}
                    className="manager-film-actions-icon">
                    <RiDeleteBin6Line />
                  </span>
                
                </td>

              </tr>
            ))
          }





        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage}
        totalPosts={dataFilm.length}
        Paginate = {Paginate}
      />



      <ModalFilm
        isShowModal={isShowModal}
        closeModal={closeModal}
      />
        <ModalEditFilm
        closeModalEdit={closeModalEdit}
        isShowModalEdit={isShowModalEdit}
        isDataSend = {isDataSend}
      />

    </div>
  );
}

export default ManagerFilm;