import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Label from 'react-bootstrap/lib/Label';
import FormControl from 'react-bootstrap/lib/FormControl';
import Modal from 'react-bootstrap/lib/Modal';

class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state={
      FirstName:"",
      LastName:"",
      House:"Gryffindor"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  
  open() {
    this.setState({showModal: true});
  }
  
  close() {
    this.setState({showModal: false});
  }
  
  handleSubmit(event) {
    //console.log("in submit")
    event.preventDefault();
    this.props.dataHandler.addStudent(this.state).then(res=>{
      if(res.success){
        this.close();
        this.props.dataHandler.getAll();
      }
        
    });
  
   
    
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
   
   return <div>
        <Button bsStyle="primary" onClick={this.open}>Add Student</Button>
        <div>
          <Modal className="modal-container" 
            show={this.state.showModal} 
            onHide={this.close}
            bsSize="lg" backdrop={false}
            animation={false}
            >
  
            <Modal.Header>
              <Modal.Title>Add Student</Modal.Title>
            </Modal.Header>
  
            <Form onSubmit={this.handleSubmit}>
        <Modal.Body>
          <FormGroup>
            <Label>First name:</Label>
            <FormControl onChange={this.handleInputChange}  type="text" name="FirstName" />
          </FormGroup>
          <FormGroup>
            <Label>Last name:</Label>
            <FormControl onChange={this.handleInputChange} type="text" name="LastName" />
          </FormGroup>
          <FormGroup>
            <Label>House:</Label>
            <select onChange={this.handleInputChange} type="text" name="House" >
                <option>Gryffindor</option>
                <option>Slytherin</option>
                <option>Ravenclaw</option>
                <option>Hufflepuff</option>
            </select>
          </FormGroup>
          
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button onClick={this.handleSubmit} bsStyle="primary">Save changes</Button>
          </Modal.Footer>
          </Form>
  
                    
          </Modal> 
          
        </div>
      </div>  
 
  }
}
export default AddStudent;