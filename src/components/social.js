import '../App.css';
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSignupForm } from './context';
import Animator  from './animator';

export default function Social() {
    const {register, handleSubmit, errors} = useForm();
    const { social, setSocial } = useSignupForm();
    const onSubmit = (data) => {
        history.push('/review');
        setSocial(data)
    };
    const history = useHistory();
    return(
        <Animator>
        <form className="linkContent" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3 className="title">where can we find you?</h3>
            <br/>
            <input name="email" defaultValue={social.email} type="text" placeholder="what's your e-mail?" ref={register({required:true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})}/>
            <br/>
            {errors.email && <span className="errorMessage">this filed is required!</span>}
            {errors.email && errors.email.type==="pattern" && <span className="errorMessage"> please insert a valid email!</span>}
            <br/>
            <input name="linkedin" defaultValue={social.linkedin} type="text" placeholder="what's your linkedin profile?" ref={register({required:true})}/>
            <br/>
            {errors.linkedin && <span className="errorMessage">this filed is required!</span>}
            <br/>
            <input type="submit" className="buttons" value={"Next"}/>
        </form>
        </Animator>
    )
}