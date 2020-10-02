import React from 'react';
import s from './Footer.module.css';
import propetsLogo from "../../../utils/Images/propetsLogo.png";
import facebookLogo from "../../../utils/Images/facebookLogo.png";
import instagrammLogo from "../../../utils/Images/instagrammLogo.jpg";
import lostPic from "../../../utils/Images/lostPic.png";
import foundPic from "../../../utils/Images/foundPic.png";
import vetHelpPic from "../../../utils/Images/vetHelpPic.png";
import hotelsPic from "../../../utils/Images/hotelsPic.png";
import walkingPic from "../../../utils/Images/walkingPic.png";
import fosteringPic from "../../../utils/Images/fosteringPic.png";
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid>
            <div className={s.footer}>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <img className={s.logoPic} src={propetsLogo} alt="propetsLogo"/>
                    <div >
                        <div className={s.socialNet}>
                            <img className={s.facebooklogo} src={facebookLogo} alt='facebookLogo'/>
                            <img className={s.instagrammLogo} src={instagrammLogo} alt='instagrammLogo'/>
                        </div>
                        <div className={s.address}>
                            <div className={s.adressLineOne}>1600 Amphitheatre Pkwy</div>
                            <div className={s.adressLineTwo}>Mountain View, CA 94043, USA</div>
                        </div>
                    </div>
                    <div className={s.servicesBlock}>
                        <div className='d-flex flex-wrap justify-content-center'>
                            <div>
                                <div><img className={s.servicePic} src={lostPic} alt='lostPic'/>{' '}Lost</div>
                                <div><img className={s.servicePic} src={foundPic} alt='foundPic'/>{' '}found</div>
                                <div><img className={s.servicePic} src={vetHelpPic} alt='vetHelpPic'/>{' '}VetHelp</div>
                            </div>
                            <div className='ml-3'>
                                <div><img className={s.servicePic} src={hotelsPic} alt='hotelsPic'/>{' '}Hotels</div>
                                <div><img className={s.servicePic} src={walkingPic} alt='walkingPic'/>{' '}Walking</div>
                                <div><img className={s.servicePic} src={fosteringPic} alt='fosteringPic'/>{' '}Fostering
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;