import '../App.css';
import React, { useState } from "react";

export default function Social() {
    return(
        <div className="linkContent">
        <h2>Where can we find you?</h2>
            <br/>
            <label>
                <input type="text" placeholder="what's your e-mail?"/>
            </label>
            <br/>
            <label>
                <input type="text" placeholder="what's your linkedin profile?"/>
            </label>
            <br/>
            <button>Next</button>
        </div>
    )
}