import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MicNoneIcon from '@material-ui/icons/MicNone';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import StarsIcon from '@material-ui/icons/Stars';
import AlbumIcon from '@material-ui/icons/Album';
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    wrapper: {
        paddingTop: '8rem',
        paddingBottom: '8rem',
        display: 'flex',
        height: '47%',
        flexDirection: 'column',
        textAlign: 'center',
    },
    listItemSelected: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        '&:hover': {
            color: "#fd9e7f",
        },
        color: 'rgba(0,0,0,0.3)',
        flex: '1',
    },
    selectedItem: {
        color: "#fd9e7f",
    },
}));

function SideMenuLists() {
    const classes = useStyles();

    return (
        <List className={classes.wrapper}>
            <Link to="/artists" style={{textDecoration: 'none'}}>
                <ListItem button key={'Artists'}
                          className={classes.listItemSelected}>
                    <AlbumIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Artists'}/>
                </ListItem>
            </Link>
            <Link to="/tracks" style={{textDecoration: 'none'}}>
                <ListItem button key={'Tracks'}
                          className={classes.listItemSelected}>
                    <MusicNoteIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Tracks'}/>
                </ListItem>
            </Link>
            <Link to="/podcasts" style={{textDecoration: 'none'}}>
                <ListItem button key={'Podcasts'}
                          className={classes.listItemSelected}>
                    <MicNoneIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Podcasts'}/>
                </ListItem>
            </Link>
            <Link to="/charts" style={{textDecoration: 'none'}}>
                <ListItem button key={'Charts'}
                          className={classes.listItemSelected}>
                    <StarsIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Charts'}/>
                </ListItem>
            </Link>
            {/*<Link to="/test" style={{textDecoration: 'none'}}>*/}
            {/*    <ListItem button key={'Test'}*/}
            {/*              className={classes.listItemSelected}>*/}
            {/*        <StarsIcon style={{marginRight: '0.5rem'}}/>*/}
            {/*        <ListItemText primary={'Test'}/>*/}
            {/*    </ListItem>*/}
            {/*</Link>*/}
        </List>
    )
}

export default SideMenuLists;
