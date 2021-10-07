import React from 'react'
import './App.css';
import Caroussel from './Caroussel';
import questions from './data';

function App() {

  

  return (
    <div className="App">
        <Caroussel questions = {questions} />

    </div>
  );
}

export default App;
