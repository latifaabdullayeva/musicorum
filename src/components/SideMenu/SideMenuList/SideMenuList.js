import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MicNoneIcon from '@material-ui/icons/MicNone';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import StarsIcon from '@material-ui/icons/Stars';
import AlbumIcon from '@material-ui/icons/Album';
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        paddingTop: '8rem',
        paddingBottom: '8rem',
        display: 'flex',
        height: '47%',
        flexDirection: 'column',
        textAlign: 'center',
    },
    listItemSelected: {
        '&:hover': {
            color: "#fd9e7f",
        },
        color: 'rgba(0,0,0,0.3)',
        flex: '1',
    },
    selectedItem: {
        color: "#fd9e7f",
    }
}));

function SideMenuLists() {
    const classes = useStyles();

    return (
        <List className={classes.wrapper}>
            <ListItem button key={'Artists'} className={classes.listItemSelected} selected={true}
                      classes={{selected: classes.selectedItem}}>
                <AlbumIcon style={{marginRight: '0.5rem'}}/>
                <ListItemText primary={'Artists'}/>
            </ListItem>
            <ListItem button key={'Genres'} className={classes.listItemSelected}>
                <MusicNoteIcon style={{marginRight: '0.5rem'}}/>
                <ListItemText primary={'Genres'}/>
            </ListItem>
            <ListItem button key={'Podcasts'} className={classes.listItemSelected}>
                <MicNoneIcon style={{marginRight: '0.5rem'}}/>
                <ListItemText primary={'Podcasts'}/>
            </ListItem>
            <ListItem button key={'Top Playlists'} className={classes.listItemSelected}>
                <StarsIcon style={{marginRight: '0.5rem'}}/>
                <ListItemText primary={'Top Playlists'}/>
            </ListItem>
        </List>
    )
}

export default SideMenuLists;
