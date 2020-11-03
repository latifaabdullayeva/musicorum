import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: '1.5rem',
        maxHeight: '250px'
    },
    media: {
        height: 200,
    },
});

function ArtistElement(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.cover}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="subtitle2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ArtistElement;
