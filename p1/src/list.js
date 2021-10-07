import React, { useState } from 'react';
import './list.css';

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                    const {id, name, age, image} = person; 
                    return <div className='person-card'>
                       <img className='profile-img' src={person.image}/>
                       <span> {person.name} </span>
                       <span> {person.age}</span>
                       {person.isBestFriend ? <span>🎉</span> : null }
                    
                    </div>
            })}
        </>
    );
};

export default List;