import React, { useState } from "react";
import fire from "../../fire";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        signInWithEmailAndPassword(fire.auth,email,password).catch(err=>{console.log('Incorrect Username/password')})
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Email" value={email}></input>
                <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Password" value={password}></input>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login;