import '../App.css';
import React, { useState } from "react";

export default function Profile() {

    return(
        <div className="linkContent">
            <h2>Tell us about yourself</h2>
            <br/>
            <label>
                <input type="text" placeholder="what's your name?"/>
            </label>
            <br/>
            <label>
                <input type="text" placeholder="and your surname?"/>
            </label>
            <br/>
            <button>Next</button>
        </div>
    )
}

