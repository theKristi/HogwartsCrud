import React from 'react';

const Table = (props) => {
    
    let contents;
    const getDisplayableKeys=(dataElement, noDisplay)=>{
        let keys = Object.keys(dataElement).filter(k=>noDisplay.indexOf(k)===-1);
        return keys;
    }
    const generateHeader=(props)=>{
        let keys=getDisplayableKeys(props.data[0], props.noDisplay)
        return <tr>{keys.map(key => { return <th>{key}</th> })}</tr>;

    }
    const generateBody=(data)=>{
        let keys=getDisplayableKeys(props.data[0], props.noDisplay)
        return data.map((element)=>{
            return <tr>{keys.map(key=>{
            return <td>{element[key]}</td>
        }) }</tr>
    })//element map
        
    }
    if (props.data.length === 0) {
     
        contents = <p>Data is loading...</p>
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