import React from 'react';
import s from "./SignUpIn.module.css";
import {ButtonGroup, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const SignUpIn = () => {
    return (<div className={s.wrapperClass}>
        <div className='d-flex flex-row justify-content-center mr-4 '>
            <NavLink exact to="/sign/signUp" className={s.SignButton} activeClassName={s.activeSignButton}>Sign up</NavLink>
            <NavLink exact to="/sign/signIn" className={s.SignButton} activeClassName={s.activeSignButton}>Sign in</NavLink>
        </div>
        </div>
    );
};
//
export default SignUpIn;