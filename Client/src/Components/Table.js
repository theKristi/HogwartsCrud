import React, { Component } from 'react';

class Table extends Component {
    render(){
       return( <div className="container">
            <table>
                <thead>{Object.Keys(this.props.data[0])}</thead>
                <tbody></tbody>
            </table>
        </div>);
    }
    getHeaders(keys){
        return keys.map(this.buildHeaderElement)
    }
    buildHeaderElement(elementName){
        return "<th>"+elementName+"</th>";
    }
}
export default Table;