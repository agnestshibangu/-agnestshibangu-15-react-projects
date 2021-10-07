import React, { useState } from 'react'
import List from './list'
import data from './data'
import './App.css';

function App() {

  const [people, setPeople] = useState(data)
  const isCelebrate = people.length > 0
  const celebrate = isCelebrate ? (<div>🎂🎂🎂</div> ) : (<div>😭😭😭</div>)


  function buttonClicked() {
    setPeople([]);
  }


  return <main>
      <section className="container">
          <div className="cards">
            <h3> {celebrate} {people.length} birthdays today </h3>
            <List people={people} />
          </div>
          <button className="button-clear" onClick={buttonClicked}>CLEAR ALL</button>
      </section>
  </main>

}

export default App;
