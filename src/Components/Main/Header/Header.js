import React from 'react';
import s from "./Header.module.css";
import propetsLogo from "../../../utils/Images/propetsLogo.png"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
;

const Header = () => {
    return (<Container fluid className={s.wrapperClass}>
        <Container>
        <div className='d-flex flex-row flex-wrap'>
            <div className='col-9 p-2'>
                <div className={s.logo} >
                    <img className={s.logoPic} src={propetsLogo} alt='logo'/>
                </div>
            </div>
            <div className="col-3 p-2">
                <NavLink to='/sign'>
                <div className={s.signIn}>
                    <Button  variant='outline-light' className={s.cstmbutton} size='lg' >Sign in</Button>
                </div>
                </NavLink>
            </div>
        </div>
        </Container>
        </Container>
    );
};

export default Header;