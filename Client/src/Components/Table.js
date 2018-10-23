import React from 'react';

const Table = (props) => {
    
    let contents;
    const getDisplayableHeaders=(dataElement, noDisplay)=>{
        let keys = Object.keys(dataElement).filter(k=>noDisplay.indexOf(k)===-1);
        return keys;
    }
    const generateHeader=(props)=>{
        let headers=getDisplayableHeaders(props.data[0], props.noDisplay)
        return <tr>{headers.map(header => { return <th key={header}>{header}</th> })}</tr>;

    }
    const generateBody=(data)=>{
        let properties=getDisplayableHeaders(props.data[0], props.noDisplay)
        return data.map((element)=>{
            return <tr key={element._id}>{properties.map(property=>{
            return <td key={element._id+property}>{element[property]}</td>
        }) }</tr>
    })//element map 
        
    }
  
    if (props.data.length === 0) {
     
        contents = <p>Data is loading...</p>
        props.dataHandler.getAll();
    }
    else {
        contents = <table className="table table-bordered">
            <thead>{generateHeader(props)}</thead>
            <tbody>{generateBody(props.data)}</tbody>
        </table>
    }
    return (
        <div className="container col-lg-6">
            {contents}
        </div>);
}


export default Table;