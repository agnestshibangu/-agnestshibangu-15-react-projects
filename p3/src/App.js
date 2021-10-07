import React from 'react';
import './App.css';
import Review from './Review'

function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2 className="title-one">OUR REVIEWS</h2>
            <div className="underline"></div>
          </div>
        </section>
        <Review />
      </main>
    </div>
  );
}

export default App;
