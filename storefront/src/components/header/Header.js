import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../header/header.scss'

const useStyles = makeStyles({
    root: {
        // height: '10vh',
        // width: '100vw'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
        <Paper elevation={3} justify="flex-start" justifyContent="flex-start">
            <Typography variant="h2" component="h1" className="header">
                OUR STORE
            </Typography>
        </Paper>
        </Grid>
    )
}


export default Header;