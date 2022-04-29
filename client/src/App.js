import React, {useEffect} from "react";
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import useStyles from './styles';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxwidth={"lg"}>
            <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
                <Typography variant={"h2"} align={"center"}>
                    Memories
                </Typography>
                <img src={memories} alt="memories" height={"60"}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={"3"}>
                        <Grid item xs={12} sm={9}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
