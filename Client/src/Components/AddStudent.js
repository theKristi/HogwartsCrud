import React from 'react';

const Modal=()=>{
    return<div> <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Add Student
  </button>
  

  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Record</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="localhost:5000/api/v1/addStudent" method="post">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-2">First name:</label>
            <input className="col-sm-10" type="text" name="FirstName" />
          </div>
          <div className="form-group">
            <label className="col-sm-2">Last name:</label>
            <input className="col-sm-10" type="text" name="LastName" />
          </div>
          <div className="form-group">
            <label className="col-sm-2">House:</label>
            <select className=" col-sm-10" type="text" name="House" >
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
export default Modal;