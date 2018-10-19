import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
      FirstName:"",
      LastName:"",
      House:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  callApi=async()=>{
    const reqbody=JSON.stringify(this.state)
    const response = await fetch('/api//v1/addStudent',{method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: reqbody
  });
  const body=await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  handleSubmit(event) {
    event.preventDefault();
    callApi.then(res => alert("Student Created Successfully"))
    .catch(err => console.log(err));
    
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
   return<div> <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Add Student
  </button>
  

  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Record</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-2">First name:</label>
            <input onChange={this.handleInputChange} className="col-sm-10" type="text" name="FirstName" />
          </div>
          <div className="form-group">
            <label className="col-sm-2">Last name:</label>
            <input onChange={this.handleInputChange} className="col-sm-10" type="text" name="LastName" />
          </div>
          <div className="form-group">
            <label className="col-sm-2">House:</label>
            <select onChange={this.handleInputChange} className=" col-sm-10" type="text" name="House" >
                <option>Gryffindor</option>
                <option>Slytherin</option>
                <option>Ravenclaw</option>
                <option>Hufflepuff</option>
            </select>
          </div>
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
        </form>
      </div>
    </div>
  </div></div>
  }
}
export default Modal;