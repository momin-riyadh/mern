import React, {useState, useEffect} from "react";
import './App.css';
import {Container, Grow, Grid} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import useStyles from './styles';
import Navbar from "./components/Navbar/Navbar";

function App() {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxwidth={"lg"}>
            <Navbar/>
            <Grow in>
                <Container>
                    <Grid container justifyContent={"space-between"} alignItems={"stretch"} spacing={"3"}>
                        <Grid item xs={12} sm={9}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
