import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
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
        height: '0.5rem',
        justifyContent: 'center'
    },
}));

function MusicControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                </Typography>
            </CardContent>
            <CardContent className={classes.controls}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNextIcon/> : <SkipPreviousIcon/>}
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrowIcon className={classes.playIcon}/>
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPreviousIcon/> : <SkipNextIcon/>}
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default MusicControlCard
