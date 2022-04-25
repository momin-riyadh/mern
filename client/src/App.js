import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';

function App() {
    return (
        <Container maxwidth={"lg"}>
            <AppBar position={"static"} color={"inherit"}>
                <Typography variant={"h2"} align={"center"}>
                    Memories
                </Typography>
                <img src={memories} alt="memories" height={"60"}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={"3"}>
                        <Grid item xs={12} sm={8}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, porro!
                            {/*<Posts/>*/}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
