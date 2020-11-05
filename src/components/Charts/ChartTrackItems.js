import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: '#fd9e7f',
    },
    titleBar: {
        background: 'rgba(0,0,0,0.5)',
    },
}));

function ChartTrackItems(props) {
    const classes = useStyles();

    // Top playlists
    if (props.chartTrackList.length > 0) {
        return (
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {props.chartTrackList.map((chartTrackList) => (
                        <GridListTile key={chartTrackList.coverImage} style={{width: '20%'}}>
                            <img style={{}} src={chartTrackList.coverImage} alt={chartTrackList.title}/>
                            <GridListTileBar
                                title={chartTrackList.title}
                                subtitle={(chartTrackList.rank / 1000).toFixed() + 'K downloads'}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    } else {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress disableShrink style={{color: "#fd9e7f"}}/>
            </div>

        )
    }
}

export default ChartTrackItems;
