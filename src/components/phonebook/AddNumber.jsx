import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../../fire";
import { set,ref } from "firebase/database";

function AddNumber(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    let navigate = useNavigate();

    function handleSubmit(e){    
        e.preventDefault();
        set(ref(fire.database,'names/'+name),{
            name:name,
            phone:phone,
        });
        console.log("Submitted ",name,phone)
        // setName("");
        // setPhone("");
        navigate("/");
    }
    return(
        <div>
            <h2>Add Number</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} value={name} />
                <br />
                <input type="text" placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
                <button>Submit Number</button>
            </form>
        </div>
    )
}

export default AddNumber;