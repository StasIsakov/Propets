import React, {useState} from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import {Route,BrowserRouter} from "react-router-dom";
import SignPage from "./Components/SignPage/SignPage";


function App() {
    return (<BrowserRouter>
        <div className="container-fluid">
            <Route exact path="/" component={Main}/>
            <Route path="/home" component={Main}/>
            <Route path='/sign' component={SignPage}/>
        </div>
        </BrowserRouter>
    );
}

export default App;
