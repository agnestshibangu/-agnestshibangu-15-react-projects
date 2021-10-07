import React from 'react'
import Pikachu from './assets/fb4.jpg'

const EmptyPage = () => {

    function refresh() {
        window.location.reload()
    }


    return (
        <div>
            <h1>No more pokemon !</h1>
            <img src={Pikachu} />
            <button onClick={refresh}>Refresh</button>
        </div>
    );
}

export default EmptyPage