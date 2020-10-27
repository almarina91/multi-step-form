import '../App.css';
import React from "react";


export default function Review() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Your data is submitted!");
    }
    return(
        <div className="linkContent">
            <h2>Review all your info</h2>
            <h5>Your name: </h5>
            <h5>Your surname: </h5>
            <h5>Your e-mail: </h5>
            <h5>Your linkedin profile: </h5>
            <button onClick={handleSubmit}>Submit!</button>
        </div>

    )
}