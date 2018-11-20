import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar.js';
import Table from './Components/Table.js';
import Button from "./Components/AddStudent.js" 
import DataHandler from "./Handlers/DataHandler.js"

class App extends Component {
  refreshData = res => {
    this.setState({ data: res });
    console.log("refreshing data...")
  }
  refreshToDelete = student => {
    this.setState({toDelete:student});
  } 
  dh=new DataHandler({ refresh: this.refreshData});
   
  state = {
    data:[],
    noDisplay:["_id","__v"],
    dataHandler:this.dh,
    refreshDelete: this.refreshToDelete,
    toDelete:null
  };


  render() {
    return (
      <div className="App">
        <NavBar/>
        <Button dataHandler={this.state.dataHandler}/>
        <Table {...this.state} />
      </div>
    );
  }
}

export default App;
