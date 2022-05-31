import React from "react";

function Entry(props){
    return (
        <tr>
            <th> {props.entry.name} </th> 
            <th> {props.entry.phone} </th> 
            <button onClick={()=>{props.handleDelete(props.entry.name)}}>Delete</button>
        </tr>
        
    )
}

export default Entry;