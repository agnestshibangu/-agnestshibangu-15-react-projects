import React, { useState } from 'react'

import './App.css'
import { FaPlus , FaMinus } from 'react-icons/fa'


const Caroussel = ({questions}) => {

   function ReadMore({ children, maxCharCount = 70 }) {
        const text = children; 
        const [readMore, setReadMore] = useState(true)
        const [showInfo, setShowInfo] = useState(false)
        const resultString = readMore ? text.slice(0, maxCharCount) : text;
       


        function toggleSetReadMore() {
            setReadMore(!readMore)
            setShowInfo(!showInfo)
        }

        return (
            <div className="text-plus-btn">
                
                <p className="answer-text">
                    {resultString}
                </p>
                <button onClick={toggleSetReadMore} className="plus-btn">{showInfo ? <FaMinus /> : <FaPlus /> }</button>
            </div>
        )

   }

    return (
        <section className="container"> 
             <div className="main-title">Questions And Answers About Login</div>
        
        <div className="questions">

            {questions.map((question) => {
                const {id, title, info} = question; 
                return <div key={id} className="question-card">
                    <div className="text">
                        <h4 className="question-title">{title}</h4>
                        <ReadMore>{info}</ReadMore>
                    </div>
                    
                        </div>

        

            })}
        
       
            </div>
       
       
       
        </section>
    )

}

export default Caroussel; 