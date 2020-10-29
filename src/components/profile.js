import '../App.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useSignupForm } from './context';
import Animator  from './animator';

export default function Profile() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const { profile, setProfile } = useSignupForm();
    const onSubmit = (data) => {
        history.push('/social');
        setProfile(data)};

    return(
        <Animator>
        <form className="linkContent" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h3 className="title">tell us about yourself</h3>
            <br/>
            <input name="name" defaultValue={profile.name} type="text" placeholder="what's your name?" ref={register({required:true})}/>
            <br/>
            {errors.name && <span className="errorMessage">this field is required</span>}
            <br/>
            <input name="surname" defaultValue={profile.surname} type="text" placeholder="and your surname?" ref={register({required:true})} />
            <br/>
            {errors.surname && <span className="errorMessage">this field is required</span>}
            <br/>
            <input className="buttons" type="submit" value={"Next"}/>
        </form>
        </Animator>
    )
}

