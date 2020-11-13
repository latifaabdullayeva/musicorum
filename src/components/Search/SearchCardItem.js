import React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
    },
    media: {
        height: 0,
        paddingTop: '100%',
        borderRadius: '8px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function SearchCardItem(props) {
    const {movie} = props;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(movie)
    let myAudio = new Audio(movie.preview);

    // New features to play songs that have been searched
    function togglePlay() {
        myAudio.play();
    }

    function togglePause() {
        myAudio.pause();
    }

    return (
        <Grid item xs={12} sm={4} md={4} lg={3}>
            <Card className={classes.root}>
                <CardActionArea style={{borderRadius: '8px'}}>
                    <CardMedia className={classes.media}
                               image={movie.album.cover_big}
                               src={movie.album.cover_big}
                               preview={movie.preview}
                    />
                    <GridListTileBar title={movie.title_short}
                                     style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                                     subtitle={<span>by: {movie.artist.name} </span>}
                                     actionIcon={
                                         <CardActions disableSpacing>
                                             {/*<PlayCircleFilledIcon style={{color: '#ffffff'}} onClick={togglePlay}/>*/}
                                             {/*<PauseCircleFilledIcon style={{color: '#ffffff'}} onClick={togglePause}/>*/}
                                             <ExpandMoreIcon style={{color: '#ffffff'}}
                                                             className={clsx(classes.expand, {
                                                                 [classes.expandOpen]: expanded,
                                                             })}
                                                             onClick={handleExpandClick}
                                                             aria-expanded={expanded}
                                                             aria-label="show more"/>
                                         </CardActions>
                                     }
                    />
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" component="span">
                            <b>Artist:</b> {movie.artist.name}
                            <br/>
                            <b>Song:</b> {movie.title}
                            <br/>
                            <b>Album:</b> {movie.album.title}
                            <br/>
                            <b>Duration:</b> {Math.floor(movie.duration / 60)}:{movie.duration % 60}
                            <br/>
                            <b>Rank:</b> {(movie.rank / 1000).toFixed() + 'K downloads'}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}

export default SearchCardItem;
