import React from 'react';
import s from './SignPage.module.css';
import {NavLink} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import SignHeader from "./SignHeader/SignHeader";
import SignUpIn from "./SignUpIn/SignUpIn"
import SignUpContent from "./SignUpContent/SignUpContent";
import SignInContent from "./SignInContent/SignInContent";
import SignFooter from "./SignFooter/SignFooter";

const SignPage = () => {
    return (
        <Container fluid>
            <SignHeader/>
            <SignUpIn/>
            {/*<SignInContent/>*/}
            <SignUpContent/>
            {/*<SignFooter/>*/}
        </Container>
    );
};

export default SignPage;