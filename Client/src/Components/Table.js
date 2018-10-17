import React, { Component } from 'react';

const Table=(props)=> {
    
    let first=props.data[0];
    //let keys=Object.keys(first);
    console.log(first);
    console.log(first["Index"]);
       return( 
       <div className="container">
        <p>look at props</p>
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>);
    }
    

export default Table;