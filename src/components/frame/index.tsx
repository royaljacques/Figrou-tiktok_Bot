import React from "react";
import "./frame.css"
export default class Frame extends React.Component{
    render(){
        return (
          <header>
            <div id="menu-bar">
              <div className="left" role="menu">
                <button className="menubar-btn" id="menu-btn"><i className="fas fa-bars"></i></button>
                <h5>Figrou tiktok bot</h5>
              </div>
              <div className="right">
                <button className="menubar-btn" id="minimize-btn"><i className="fas fa-window-minimize"></i></button>
                <button className="menubar-btn" id="max-unmax-btn"><i className="far fa-square"></i></button>
                <button className="menubar-btn" id="close-btn"><i className="fas fa-times"></i></button>
              </div>
            </div>
          </header>
        )
    }
}