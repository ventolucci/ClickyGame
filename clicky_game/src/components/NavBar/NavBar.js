import React from 'react';
import "./NavBar.css"

const NavBar = ({ instructions, topScore, score}) => {
    return(
        <div className="navbar">
            <navbar>
                
                    <h3><a href="/">Mugshot Memory Game</a></h3>
                    <h3>{instructions} Score: {score}   High Score:{topScore}</h3>
                
            </navbar>
            
        </div>
    );
};

export default NavBar