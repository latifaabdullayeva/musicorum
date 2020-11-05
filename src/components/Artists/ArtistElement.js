import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        margin: '1.5rem',
    },
    media: {
        height: 0,
        paddingTop: '100%',
        borderRadius: '8px',
    }
});

function ArtistElement(props) {
    const classes = useStyles();

    const [background, setBackground] = useState("rgba(0,0,0,0.5)");

    const clickHandler = () => {
        setBackground("#fd9e7f")
    }
    const styles = {
        margin: '0rem 1rem 0.5rem 1rem',
        color: background
    };

    return (
        <Card className={classes.root}>
            <CardActionArea style={{borderRadius: '8px'}}>
                <Link to="/artistTracks" style={{textDecoration: 'none', color: 'black'}}>
                    <CardMedia className={classes.media}
                               image={props.cover}
                               src={props.cover}
                               name={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="span">
                            {props.name}
                        </Typography>
                    </CardContent>
                </Link>
                <FavoriteIcon onClick={clickHandler} style={styles}/>
                <ShareIcon style={{color: 'rgba(0,0,0,0.5)', margin: '0rem 0rem 0.5rem 0rem'}}/>
            </CardActionArea>
        </Card>
    );
}

export default ArtistElement;
