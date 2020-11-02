import React from "react";
import Grid from "@material-ui/core/Grid";
import CardElement from "../CardElement/CardElement";

let nums = Array.from(Array(20).keys());

function FormRow() {
    return (
        <React.Fragment>
            {nums.map(n => {
                return (
                    <Grid item xs={3} key={n}>
                        <CardElement key={n} num={n}/>
                    </Grid>
                );
            })}
            {/*<Grid item xs={3}>*/}
            {/*    <CardElement className={classes.paper}>item1</CardElement>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <CardElement className={classes.paper}>item2</CardElement>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <CardElement className={classes.paper}>item3</CardElement>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <CardElement className={classes.paper}>item3</CardElement>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <CardElement className={classes.paper}>item3</CardElement>*/}
            {/*</Grid>*/}
        </React.Fragment>
    );
}

export default FormRow;
