import React, {useState} from 'react';
import Container from "react-bootstrap/cjs/Container";
import AboutResource from "./AboutResource/AboutResource";

import WelcomeContent from "./WelcomeContent/WelcomeContent";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Main = () => {

    return (<Container fluid>
            <Header/>
            <WelcomeContent/>
            <AboutResource/>
            <Footer/>
        </Container>

    );
};

export default Main;