import React from 'react';
import Button from 'react-bootstrap/lib/Button';
const Table = (props) => {
    
    let contents;
    const getDisplayableHeaders=(dataElement, noDisplay)=>{
        let keys = Object.keys(dataElement).filter(k=>noDisplay.indexOf(k)===-1);
        keys.push("Delete")
        return keys;
    }
    const generateHeader=(props)=>{
        let headers=getDisplayableHeaders(props.data[0], props.noDisplay)
        return <tr>{
            headers.map(header => { return <th key={header}>{header}</th> })
        }</tr>;

    }
    const generateBody=(data)=>{
        let properties=getDisplayableHeaders(props.data[0], props.noDisplay)
        return data.map((element)=>{
            return <tr key={element._id}>{properties.map(property=>{
                if(property==="Delete")
                    return <td key={element._id+property}><Button onClick={()=>handleDelete(element._id)} bsStyle="danger" >Delete</Button></td>
            return <td key={element._id+property}>{element[property]}</td>
        }) }</tr>
    })//element map 
        
    }
    const handleDelete=(id)=>{
   
        props.dataHandler.deleteStudent(id).then(res=>{
            if(res.success)
              props.dataHandler.getAll();
            });
    }

    if (props.data.length === 0) {
     
        contents = <p>Data is loading...</p>
        props.dataHandler.getAll();
    }
    else {
        contents = <table className="table table-bordered col-lg-12">
            <thead>{generateHeader(props)}</thead>
            <tbody>{generateBody(props.data)}</tbody>
        </table>
    }
    return (
        <div className="container col-lg-6 col-sm-10">
            {contents}
        </div>);
}


export default Table;