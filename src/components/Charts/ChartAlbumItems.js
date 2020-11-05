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

function ChartAlbumItems(props) {
    const classes = useStyles();

    if (props.chartAlbumList.length > 0) {
        return (
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {props.chartAlbumList.map((chartAlbumList) => (
                        <GridListTile key={chartAlbumList.coverImage} style={{width: '20%'}}>
                            <img style={{}} src={chartAlbumList.coverImage} alt={chartAlbumList.title}/>
                            <GridListTileBar
                                title={chartAlbumList.title}
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

export default ChartAlbumItems;
