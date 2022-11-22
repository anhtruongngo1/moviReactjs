import React from 'react' ;
import LoadingIcon from "../../assets/background/loading.gif"
import "./Loading.scss"

export default function Loading() {
  return (
    <div className='loading-container'>
        <img  src={LoadingIcon}/>
    </div>
  )
}

