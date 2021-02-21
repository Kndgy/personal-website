import React, { Component } from 'react';
import './App.css';

function discord(){
  window.open("https://discord.com/channels/@me")
}
function github(){
  window.open("https://github.com/Kndgy")
}
function linkedin(){
  window.open("https://www.linkedin.com/in/rafli-ghani/")
}
function mail(){
  window.open("mailto:ghanirafli8@gmail.com")
}

function App() {
  return (
    <div className="App">
      <div className="vertical">
      
        <div className="ver st">

        </div>

        <div className="ver nd">

        </div>
        
      </div>
      <div className="block">

        
          <div className="tab first" style={{cursor: "pointer"}} onClick={discord} >
            
          <i class="fab fa-discord"></i>
            Discord <span className="hover first"> Kan#9105</span>
          </div>
        
          <div className="tab second" style={{cursor: "pointer"}} onClick={github}>
          <i class="fab fa-github"></i>
            Github
          </div>
         
          <div className="tab third" style={{cursor: "pointer"}} onClick={linkedin}>
            <i class="fab fa-linkedin"></i>
            Linked In
          </div>
          
          <div className="tab fourth" style={{cursor: "pointer"}} onClick={mail}>
          <i class="fas fa-envelope"></i>
            Email
          </div>
         
      </div>
    </div>
  );
}

export default App;
