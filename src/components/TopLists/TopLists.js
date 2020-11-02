import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from "react";
import FormRow from "../FormRow/FormRow";

function TopLists() {
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

export default TopLists;
