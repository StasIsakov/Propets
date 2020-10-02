import React, {useState} from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import s from "./WelcomeContent.module.css"
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import pawSearch from "../../../utils/Images/pawSearch.png";
import mainPagePuppy from "../../../utils/Images/mainPagePuppy.png";
import Alert from "react-bootstrap/Alert";
import {NavLink} from "react-router-dom";

const WelcomeContent = () => {
    const [lostText, setLostText] = useState('I lost my pet!');
    const [foundText, setFoundText] = useState('I found a pet!');
    return (<Container>
            <Row className={s.welcomeContent}>
                <Col className='col-12'>
                    <Col className={s.welcomeText}>
                        <Row><h1>Welcome to your</h1></Row>
                        <Row><h1 style={{color: '#84B6A3'}}>Pawfessional</h1></Row>
                        <Row><h1>Community</h1></Row>
                    </Col>
                    <Row>
                        <NavLink to='/sign'>
                            <Button onMouseEnter={() => setLostText('Click to find!')}
                                    onMouseOut={() => setLostText('I lost my pet!')}
                                    className={s.lostPetButton} variant="warning">{lostText}
                                <img className={s.pawSearchPic} src={pawSearch} alt="pawSearch"/>
                            </Button>
                        </NavLink>
                    </Row>
                    <Row>
                        <NavLink to='/sign'>
                            <Button onMouseEnter={() => setFoundText('What to do?')}
                                    onMouseOut={() => setFoundText('I found a pet!')}
                                    className={s.foundPetButton} variant="warning">{foundText}
                            </Button>
                        </NavLink>
                    </Row>
                    <Row >
                        <Alert className={s.joinLink} variant="success">
                            I'm okey, just want to {' '}
                            <Alert.Link href="/sign">JOIN</Alert.Link>. the pawsome community!
                        </Alert>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default WelcomeContent;