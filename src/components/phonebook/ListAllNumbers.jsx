import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import fire from "../../fire";
import { ref, onValue,remove } from "firebase/database";
import Entry from "./Entry";



function ListAllNumbers(){
    const [data,setData] = useState([]);
    const [state] = useState(false);

    useEffect(()=>{

        return onValue(ref(fire.database,"names/"),(snap)=>{
            const newData = Object.entries(snap.val());
            setData(newData);
        });
    },[state]);

    console.log(data);

    function handleDelete(id){
        remove(ref(fire.database,"names/"+id))
    }

    return(
        <div>
            <Link to="/add-number">Add Number</Link>
            <Outlet/>
            <h2>Phone Numbers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry)=>{
                        return (
                            <Entry entry={entry[1]} handleDelete={handleDelete} key={entry[0]}></Entry>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListAllNumbers;