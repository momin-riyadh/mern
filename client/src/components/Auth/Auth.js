import React, {useState,} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import useStyles from './styles';
import {LockOpenOutlined} from "@material-ui/icons";
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const isSignup = false;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevatiuon={3}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                        <Input name="firstName" label="First Name" handlechange={handleChange}
                                               autoFocus half></Input>
                                        <Input name="firstName" label="First Name" handlechange={handleChange}
                                               autoFocus half></Input>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"></Input>
                        <Input name="password" label="Password" handleChange={handleChange} type="password"></Input>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;