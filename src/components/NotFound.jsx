import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div>
            <Link to="/">Phone Numbers</Link>
            <h2>404 Error</h2>
        </div>
    )
}

export default NotFound;