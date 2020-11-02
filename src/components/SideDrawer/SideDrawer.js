import React from "react";
import './SideDrawer.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import MicNoneIcon from '@material-ui/icons/MicNone';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import StarsIcon from '@material-ui/icons/Stars';
import AlbumIcon from '@material-ui/icons/Album';
import MusicControlCard from "../MusicControl/MusicControl";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        ...theme.mixins.toolbar,
        backgroundColor: '#fd9e7f', color: '#ffffff', marginBottom: '-0.5rem'
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
            <div className={classes.toolbar}
                 style={{}}>
                <Typography className={classes.title} variant="h6" noWrap>
                    LOGO
                </Typography>
            </div>
            {/*<Divider style={{marginBottom: '-0.5rem'}}/>*/}
            <List>
                {/*{['TopLists', 'Genres', 'Podcasts', 'Top Lists'].map((text, index) => (*/}
                {/*    <ListItem button key={text} className={classes.listItemSelected}>*/}
                {/*        <ListItemText primary={text}/>*/}
                {/*    </ListItem>*/}
                {/*))}*/}
                <ListItem button key={'Albums'} className={classes.listItemSelected}>
                    <AlbumIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Albums'}/>
                </ListItem>
                <ListItem button key={'Genres'} className={classes.listItemSelected}>
                    <MusicNoteIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Genres'}/>
                </ListItem>
                <ListItem button key={'Podcasts'} className={classes.listItemSelected}>
                    <MicNoneIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Podcasts'}/>
                </ListItem>
                <ListItem button key={'Top Lists'} className={classes.listItemSelected}>
                    <StarsIcon style={{marginRight: '0.5rem'}}/>
                    <ListItemText primary={'Top Lists'}/>
                </ListItem>
            </List>

            <MusicControlCard style={{alignSelf: 'flex-end'}}/>
        </nav>
    )
}

export default SideDrawer;
