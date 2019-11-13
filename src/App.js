import React from 'react';
import './App.css';
import AboutMe from './aboutme.jpg'
import cv from './cv.jpg'
import hobbies from './hobbies.jpg'
import projects from './Projects.jpg'
import contact from './Contact.jpg'
import socialMedia from './social.jpg'
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
          <section className="sectionContainer">
          <div className='sectionItem'>
           <img src= {AboutMe} alt='' />
           <h1>About me</h1>
         </div>
         <div className='sectionItem'>
           <img src= {socialMedia} alt='' />
         </div> 
         <div className='sectionItem'>
           <img src= {cv} alt='' />
         </div>
          </section>
          <section className="sectionContainer">
          <div className='sectionItem'>
           <img src= {projects} alt='' />
           <h1>About me</h1>
         </div>
         <div className='sectionItem'>
           <img src= {hobbies} alt='' />
         </div> 
         <div className='sectionItem'>
           <img src= {contact} alt='' />
         </div>
          </section>
        </main>
      
    </div>
  );
}

export default App;
