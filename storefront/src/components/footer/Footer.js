import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../footer/footer.scss';

const Footer = () => {
    return (
        <div>
        <Paper elevation={3} className="footer">
            <Typography variant="h5" component="h5" justify="left">	&copy; CodeFellows 2021</Typography>
            <Grid container justify="left" spacing={5}></Grid>
        </Paper>
        </div>
    )
}

export default Footer;