import React, { useEffect, useRef, useState } from 'react';
import "../search/SearchFilm.scss";
import {BsSearch} from "react-icons/bs"
import bg1 from "../../../assets/film/matbiec.webp";
import { getAllFilms } from "../../service/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {setIsToggle2} from "../../../redux/userSlice"
function SearchFilm() {
  const isShowToggle = useSelector((state) => state.user.isToggle)
  const dispatch = useDispatch()
    const [dataFilm, setDataFilm] = useState([])
  const [dataSearch, setDataSearch] = useState([])

    const navigate = useNavigate()
    const textInput = useRef(null);
    useEffect(() => {
      textInput.current.focus();
        {
          let res = getAllFilms()
          let data = res.then((data) => {
            if (data && data.errCode === 0) {
              setDataFilm(
                data.data
              )
            }
          })
    
        }
    }, [isShowToggle])
    const handleSeach = (key) => {
        let data = [...dataFilm]
        let search = data.filter(i => {
          return Object.values(i.name).join("").toLowerCase().includes(key.toLowerCase())
        })
        setDataSearch(search)
        console.log('check seach' , search);
    }
    let handleDetailFilm = (id) => {
        navigate(`/manager-detail-film/${id}`)
      }
  let handleToggle = () => {
    dispatch(setIsToggle2())
    }
    return ( 
        <>
        <div className="search-container" >
            <BsSearch 
                onClick={()=> handleToggle()}
                className="search-film-icon" />
            <input className={isShowToggle ? "search-film active" : "search-film" }
                    type="text"
                    ref={textInput}
                    onChange={(e) => handleSeach(e.target.value)}
                />
            </div>
            {isShowToggle  && 
                <div className="search-body-film">
                    {dataSearch && dataSearch.length > 0 ? dataSearch.map((item, i) => (
                        <div
                            onClick={()=> handleDetailFilm(item.id)}
                            className="body-film-content"
                        >
                        <div className="body-left">
                            <img src={item.image}  alt=""/>

                        </div>
                        <div className="body-right">
                                <span>{ item.name}</span>

                        </div>
                        
                </div>
                        
                    ))
                        : 
                        <span> Không tìm thấy</span>
                    }
            </div>
            }
        </>
     );
}

export default SearchFilm;