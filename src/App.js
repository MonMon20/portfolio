import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './aboutme.jpg'
function App() {
  return (
    <div className="App">
      
        <nav>
          <ul class="menu">
            <li class="logo"><a href="#">MonMon</a></li>
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">About</a></li>
            <li class="item"><a href="#">Projects</a></li>
            <li class="item"><a href="#">Blog</a></li>
            <li class="item"><a href="#">Contact</a></li> 
          </ul>
        </nav>
        <main>
          <section>
          <div className='sectionItem'>
           <img src= {AboutMe} alt='' />
         </div>
         <div className='sectionItem'>
           <img src= {AboutMe} alt='' />
         </div> 
         <div className='sectionItem'>
           <img src= {AboutMe} alt='' />
         </div>
          </section>
        </main>
      
    </div>
  );
}

export default App;
