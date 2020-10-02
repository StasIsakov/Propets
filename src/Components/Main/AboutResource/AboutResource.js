import React from 'react';
import s from "./AboutResource.module.css";
import Row from "react-bootstrap/cjs/Row";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/Col";
import petsPic from "../../../utils/Images/petsPic.png";
import heart from "../../../utils/Images/heart.png";

import Footer from "../Footer/Footer";

const AboutResource = () => {
    return (
        <Container fluid>
            <Row className={s.row}>
                <Col className={s.fluffyText}>
                    <div>Our fluffy space for lovers,
                        admirers, dads and
                    </div>
                    <div> moms of our four-legged, winged,
                        tailed guys.
                    </div>
                </Col>
            </Row>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                <img className={s.petsPic} src={petsPic} alt="petsPic"/>
                <div className='p-2'>
                    <h3 className={s.listHeader}>Here is collected everything that your pet needs:</h3>
                    <ul className={s.list}>
                        <li>professional veterinarian tips;</li>
                        <li>useful information about education and care;</li>
                        <li>fostering home search</li>
                        <li>information about pet-sitting and walking service;</li>
                        <li>and of course, great communication with new friends</li>
                        <li>in your social network!</li>
                    </ul>
                </div>
            </div>
            <Container fluid className={s.comingSoon}>
                <Container>
                    <div className='d-flex flex-row  flex-wrap justify-content-center'>
                        <div className='p-2'>
                            <div className={s.comS}>Coming Soon</div>
                        </div>
                        <div className='p-2'>
                            <div className={s.newService}>
                                <div>We are planing to oen a new service,</div>
                                <div>where your cats and dogs can find their love!</div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <img className={s.heart} src={heart} alt="heart"/>
                            <div className={s.love}>Love</div>
                        </div>
                    </div>
                </Container>
            </Container>
        </Container>
    );
};

export default AboutResource;