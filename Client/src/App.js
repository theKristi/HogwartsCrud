import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import NavBar from './Components/NavBar.js';
import Table from './Components/Table.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api//v1/getAll');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("body:"+body)
    return body;
  };
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Table data={this.response}/>
      </div>
    );
  }
}

export default App;
