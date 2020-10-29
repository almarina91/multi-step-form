import '../App.css';
import React from "react";
import { useSignupForm } from './context';
import Animator from "./animator";


export default function Review() {
    const { profile, social } = useSignupForm();
    function onSubmit(e) {
        e.preventDefault();
        alert("Your data is submitted!");
    }
    return(
        <Animator>
        <form className="linkContent" onSubmit={onSubmit}>
            <h3 className="title">review all your info</h3>
            <h5 className="review">name: {profile.name}</h5>
            <h5 className="review">surname: {profile.surname}</h5>
            <h5 className="review">e-mail: {social.email}</h5>
            <h5 className="review">linkedin profile: {social.linkedin} </h5>
            <input type="submit" className="buttons" value={"Submit all"}/>
        </form>
        </Animator>

    )
}