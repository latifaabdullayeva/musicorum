import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import MusicControlCard from "../MusicControl/MusicControl";

const useStyles = makeStyles({
    root: {
        margin: '1rem',
    },
    media: {
        height: 0,
        paddingTop: '100%',
        borderRadius: '8px',
    }
});

function TrackItems(props) {
    const classes = useStyles();

    const [open, setOpen] = useState([]);

    const handleClickOpen = () => {
        setOpen(props);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea style={{borderRadius: '8px'}} onClick={handleClickOpen}>
                {/*<Link to="/tracks" style={{textDecoration: 'none', color: 'black'}}>*/}
                <CardMedia className={classes.media}
                           image={props.cover}
                           src={props.cover}
                           title={props.title}
                           rank={props.rank}
                           preview={props.preview}
                />
                <GridListTileBar title={props.title}
                                 subtitle={<span>by: {props.artistName} </span>}/>
                {/*</Link>*/}
            </CardActionArea>
            <div style={{position: 'fixed', bottom: '0', left: '0', width: '100%'}}>
                <MusicControlCard
                    open={open}
                    preview={props.preview}
                    title={props.title}
                    artistName={props.artistName}
                />
            </div>
        </Card>
    );
}

export default TrackItems;
