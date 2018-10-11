import React, { Component } from 'react';

class Navbar extends Component{

    render(){
        return (
            <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Kristi_the_coder</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
      
                <div class="collapse navbar-collapse" id="navbarsExample06">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
               
              </ul>
             
            </div>
          </nav> 
        );
    }
}
export default Navbar;