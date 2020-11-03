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
    },
    media: {
        height: 0,
        paddingTop: '100%',
        borderRadius: '8px',
    },
});

function ArtistElement(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea style={{borderRadius: '8px'}}>
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
            </CardActionArea>
        </Card>
    );
}

export default ArtistElement;
