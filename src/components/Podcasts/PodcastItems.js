import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 400,
        margin: '1rem'
    },
    media: {
        height: 140,
    },
});


function PodcastItems(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.coverImage} title={props.title}
                />
                <CardContent>
                    <Typography noWrap={true} gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography noWrap={true} variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        FANS: {props.fans}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{color: '#fd9e7f'}} onClick={handleClickOpen}>
                    Learn More
                </Button>
            </CardActions>
            <Dialog open={open} onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{color: '#fd9e7f'}}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default PodcastItems;
