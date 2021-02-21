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
            Discord <span className="hover first"> Kan#9105</span>
          </div>
        
          <div className="tab second" style={{cursor: "pointer"}} onClick={github}>
            Github <span className="hover first">Kndgy</span>
          </div>
         
          <div className="tab third" style={{cursor: "pointer"}} onClick={linkedin}>
            LinkedIn <span className="hover first">Rafli Ghani</span>
          </div>
          
          <div className="tab fourth" style={{cursor: "pointer"}} onClick={mail}>
            Email <span className="hover first">ghanirafli8@gmail.com</span>
          </div>
         
      </div>
    </div>
  );
}

export default App;
