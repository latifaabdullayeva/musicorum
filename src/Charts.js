import './Charts.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Charts() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className="Charts">
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <Paper>xs=12</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>xs=2</Paper>
                </Grid>
                <Grid item xs={10} cellHeight={180}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow/>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow/>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Charts;
