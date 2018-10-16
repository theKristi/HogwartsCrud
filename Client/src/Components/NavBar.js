import React, { Component } from 'react';

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Kristi_the_coder</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse" id="navbarsExample06">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
               
              </ul>
             
            </div>
          </nav> 
        );
    }
}
export default Navbar;