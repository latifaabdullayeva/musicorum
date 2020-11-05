import React from "react";
import Grid from "@material-ui/core/Grid";
import SideMenuList from "./SideMenuList/SideMenuList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRight: '0.1em solid rgba(0,0,0,0.2)',
        height: '45rem',
        flexDirection: 'column',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
}));


function SideMenu() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <SideMenuList/>
            {/*<MusicControlCard style={{flex: '0'}}/>*/}
        </Grid>
    )
}

export default SideMenu;
