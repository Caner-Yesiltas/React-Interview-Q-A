import React from 'react'
import InterviewAccord from './InterviewAccord'
import data from "../helper/data"

const Question = () => {
  return (
    <div>
        {
            data.map((data)=> (  <InterviewAccord key={data} {...data} /> ))
        }
    
    </div>
  )
}

export default Question
