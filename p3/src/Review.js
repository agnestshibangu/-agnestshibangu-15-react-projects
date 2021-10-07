import React, { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import './App.css'

const Review = () => {

  const [index, setIndex]  = useState(0); 
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      console.log(randomNumber)
      if(randomNumber === index) {
          randomNumber = index + 1
      }
      setIndex(checkNumber(randomNumber))
  }

  return <article className="review">
        <div className="round-quote"><FaQuoteRight className="quote"/></div>
        <div className="round-quote2"></div>
        <img className="img-container" src={image} alt={name}/>
        <div className="name">{name}</div>
        <div className="job">{job}</div>
        <div className="text">{text}</div>
            <div className="button-container">
                <button onClick={prevPerson} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson} className="next-btn">
                    <FaChevronRight />
                </button>
            </div>
        <button onClick={randomPerson} className="surprise-btn">surprise me !</button>
        
    
    </article>
  
}

export default Review; 