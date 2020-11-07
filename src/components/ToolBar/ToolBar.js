import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MLogoTransparent from '../../MLogoTransparent.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'block',
        position: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function ToolBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: '#fd9e7f'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.drawerClickHandler}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="body1" noWrap>
                        <img src={MLogoTransparent} alt={'logo'}
                             style={{height: '2rem',}}/>
                    </Typography>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <Avatar alt="Me"
                                src="https://avatars2.githubusercontent.com/u/17601156?s=460&u=ea34b8affe8b8ec0a95fc74ca65b3cf1ab82137a&v=4"/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ToolBar;
