import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {Pause} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        backgroundColor: "#fd9e7f",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        borderRadius: '0px 0px 25px 25px',
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        height: '3rem',
    },
    controls: {
        display: 'flex',
        backgroundColor: "#fd9e7f",
        opacity: '0.8',
        height: '0.8rem',
        justifyContent: 'center'
    },
}));

function MusicControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    console.log(props)
    let myAudio = new Audio('https://cdns-preview-8.dzcdn.net/stream/c-8d3593a371dc66e92d7229f215485a64-5.mp3');
    function togglePlay() {
        myAudio.play();
    }

    function togglePause() {
        myAudio.pause();
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.artistName}
                </Typography>
            </CardContent>
            <CardContent className={classes.controls}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNextIcon/> : <SkipPreviousIcon/>}
                </IconButton>
                <IconButton aria-label="play/pause" onClick={togglePlay}>
                    <PlayArrowIcon/>
                </IconButton>
                <IconButton aria-label="play/pause" onClick={togglePause}>
                    <Pause/>
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPreviousIcon/> : <SkipNextIcon/>}
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default MusicControlCard
