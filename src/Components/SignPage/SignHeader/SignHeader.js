import React from 'react';
import s from "./SignHeader.module.css";
import {Button, Container} from "react-bootstrap";
import greenPropetsLogo from "../../../utils/Images/greenPropetsLogo.png";
import roundFacebookIcon from "../../../utils/Images/roundFacebookIcon.png";
import {NavLink} from "react-router-dom";

const SignHeader = () => {
    return (<Container fluid>
            <div className='d-flex flex-row m-5 justify-content-center'>
                    <div className={s.signInUpText}>
                        <NavLink exact to='/home'>
                        <img className={s.greenPropetsLogo} src={greenPropetsLogo} alt='greenPropetsLogo'/>
                        </NavLink>
                        <div className='d-flex flex-row'>
                            <div className='font-weight-bold'>Welcome!</div>
                            <div className='ml-2'> Please sign in / sign up to continue or</div>
                        </div>
                    </div>
                    <Button variant={"primary"} className={s.facebookButton}>
                   <img className={s.facebookIcon} src={roundFacebookIcon} alt='roundFacebookIcon'/> Enter with Facebook</Button>
                </div>
        </Container>
    );
};

export default SignHeader;