const Modal=(props)=>{
    return( <div>
        <Modal className="modal-container" 
          show={this.state.showModal} 
          onHide={this.close}
          bsSize="lg" backdrop={false}
          animation={false}
          >

          <Modal.Header>
            <Modal.Title>Delete Student</Modal.Title>
          </Modal.Header>

          
      <Modal.Body><p>Are you sure you want to delete {props.student.FirstName} {props.student.LastName}?</p></Modal.Body>
        
      <Modal.Footer>
          <Button onClick={this.close}>Cancel</Button>
          <Button onClick={this.handleSubmit} bsStyle="danger">Delete</Button>
        </Modal.Footer>

                  
        </Modal> 
        
      </div>)
}
export default Modal