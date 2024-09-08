import React, { useState } from 'react'
import {arrowdown, arrowup} from "../helper/icons"
const InterviewAccord = ({id, question, answer}) => {

    const [show,setShow] =useState(false);



  return (
    <div className='container'  >
        <div className='question bg-warning m-2 ' >
            <h2   >{id}.{question}</h2 > <span onClick={()=> setShow(!show)}>  {show? arrowup : arrowdown}  </span>
        </div>
      <div className='answer' >{show && answer} </div>
    </div>
  )
}

export default InterviewAccord
