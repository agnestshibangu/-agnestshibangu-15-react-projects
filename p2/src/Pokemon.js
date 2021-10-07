import React, { useState } from 'react';
import defaultPicture from './assets/025.png';
import './App.css';

const Pokemon = ({ name, url, removePokemon}) => {


    function ReadMore({ children, maxCharCount = 100 }) {
       
        const text = children; 
        const [readMore, setReadMore] = useState(true)
        const resultString = readMore ?  text.slice(0, 100) : text;

        function toggleSetReadMore() {
           
             setReadMore(!readMore)
        }

        return (
            <p lassName="text-left">
                {resultString}
              <button className="showMoreBtn" onClick={toggleSetReadMore}>Read more</button>
            </p>
        );

      

    }


 
  return ( 
  <article className="card-pokemon">
       <img className='img-card' src={defaultPicture}/>
       <footer>
            <h2 className='card-name'> {name} </h2>
                <div className='description'>
                    <ReadMore > Trinoctium et viribus petivere locum discrimine igitur postrema letali commentum conduntur obsidionale nunc valido nec maiora Paleas nomine letali
                    subigente Paleas ipsa maiora adflictabantur adclivitas excedunt munimentum in viribus mare nomine triduum adflictabantur vi locum et locum triduum adiri nomine cum ubi procederet sine nunc discrimine cuniculis ullum usque ipsa letali vi gravi trinoctium latus maiora adflictabantur omne latus vi ubi trinoctium procederet postrema subigente conduntur postrema quoniam.
                    </ReadMore>
                </div>
          
            <h4 > {url} </h4>
            <button className="delete-btn" onClick={()=>removePokemon(name)}>not interested</button>
       </footer>
  </article>
 
  )
};

export default Pokemon