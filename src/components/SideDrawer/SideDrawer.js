import React from "react";
import './SideDrawer.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import MusicControlCard from "../SideMenu/MusicControl/MusicControl";
import SideMenuList from "../SideMenu/SideMenuList/SideMenuList";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        ...theme.mixins.toolbar,
        backgroundColor: '#fd9e7f',
        color: '#ffffff',
        marginBottom: '-0.5rem',
    },
    title: {
        position: 'center',
        flexGrow: 1,
        display: 'block',
        textAlign: "center",
        padding: '13px'
    },
    listItemSelected: {
        '&:hover': {
            color: "#fd9e7f"
        },
        padding: '1rem 1rem',
        color: 'rgba(0,0,0,0.3)'
    },
}));


function SideDrawer(props) {
    let drawerClasses = 'side-drawer';
    if (props.showSideDrawer) {
        drawerClasses = 'side-drawer open';
    }

    const classes = useStyles();

    return (
        <nav className={drawerClasses}
             style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h6" noWrap>
                    LOGO
                </Typography>
            </div>
            <SideMenuList/>
            <MusicControlCard style={{alignSelf: 'flex-end'}}/>
        </nav>
    )
}

export default SideDrawer;
