import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <div>
        <Paper elevation={3}>
            <Typography variant="h2" component="h2" justify="left">Footer</Typography>
            <Grid container justify="left" spacing={5}></Grid>
        </Paper>
        </div>
    )
}

export default Footer;