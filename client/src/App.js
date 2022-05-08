import React from "react";
import './App.css';
import {Container, Grow, Grid} from '@material-ui/core';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Container maxwidth={"lg"}>
                <Navbar/>
                <Switch>
                    
                </Switch>
                <Home/>
            </Container>
        </BrowserRouter>

    );
}

export default App;
