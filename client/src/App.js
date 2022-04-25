import logo from './logo.svg';
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
                        <Grid item xs={12} sm={7}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, porro!
                            {/*<Posts/>*/}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi consequuntur cum
                            ea, earum esse ex fugit ipsum iure magni officiis optio pariatur quis quisquam quos.
                            Accusantium atque dicta dolore laudantium voluptates! Adipisci aliquid aspernatur deleniti
                            exercitationem fugiat in ipsum modi, nihil quae quaerat quas rem sit tenetur vero vitae!
                            {/*<Form/>*/}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
