import React, { Component } from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
library.add(fab, fas);

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
        <ul className="block">

            <li className="tab first" style={{cursor: "pointer"}} onClick={discord} >
              <FontAwesomeIcon icon={['fab', 'discord']} style={{marginRight:'10px'}}/>Discord <span className="hover first"> Kan#9105</span>
            </li>
          
            <li className="tab second" style={{cursor: "pointer"}} onClick={github}>
              <FontAwesomeIcon icon={['fab', 'github-square']} style={{marginRight:'10px'}}/>Github <span className="hover first">Kndgy</span>
            </li>
          
            <li className="tab third" style={{cursor: "pointer"}} onClick={linkedin}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{marginRight:'10px'}}/>LinkedIn <span className="hover first">Rafli Ghani</span>
            </li>
            
            <li className="tab fourth" style={{cursor: "pointer"}} onClick={mail}>
              <FontAwesomeIcon icon={['fas', 'envelope-square']} style={{marginRight:'10px'}}/>Email <span className="hover first">ghanirafli8@gmail.com</span>
            </li>
          
        </ul>
      </div>
   
  );
}

export default App;
