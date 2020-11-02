import React from "react";
import Grid from "@material-ui/core/Grid";
import FormRow from "../FormRow/FormRow";

function Albums() {
    return (
        <div>
            <h1>Top Albums</h1>
            <Grid container spacing={1}>
                <FormRow/>
            </Grid>
        </div>
    )
}

export default Albums;
