import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import NavBar from './Components/NavBar.js';
import Table from './Components/Table.js';
import Button from "./Components/AddStudent.js" 

class App extends Component {
  state = {
    data:[],
    noDisplay:["_id","__v"]
  };

  componentDidMount() {
    
    this.callApi()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

callApi = async () => {
 
    const response = await fetch('/api//v1/getAll');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
  
    return body;
  };

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Button/>
        <Table {...this.state} />
      </div>
    );
  }
}

export default App;
