import React, { Component } from 'react';

const Table=(props)=> {
    
    let contents;
    if(props.data.length==0){
        console.log("no data..")
        contents=<p>Data is loading...</p>
    }
    else{
        //console.log(props.data[0]);
        let keys=Object.keys(props.data[0]);
    let header=keys.map((key)=>{return <th>{key}</th>});
        contents=<table>
                <thead>{header}</thead>
                <tbody></tbody>
            </table>
    }
       return( 
       <div className="container">
    
        {contents}
        </div>);
    }
    

export default Table;