import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
//expect Modal def, a submit function, on change function
class ResponsiveModal extends Component {
    constructor(props){
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.submit = props.submit.bind(this);
        this.change = props.change.bind(this);
    }
    open() {
        this.setState({showModal: true});
      }
      
      close() {
        this.setState({showModal: false});
      }
    render(){
   
        return (<div>
             {this.props.modelDefinition} 
               
             </div>)
             
      
       }
}export default ResponsiveModal;