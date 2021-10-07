import React from 'react'; 
import '../App.css';

const Menu = ({items}) => {

    return <div className="section-center">
        {items.map((menuItem) => {
               const {id, title, price, img, desc} = menuItem; 
               return <article key={id} className="menu-item">
                   <img className="item-img" src={img} alt={title}/>
                   <div className="item-title-and-price">
                        <h4 className="item-title">{title}</h4>
                        <span className="item-price">${price}</span>
                   </div>
                   <p className="item-description">{desc}</p>

               </article>
        })}
    </div>
}

export default Menu;