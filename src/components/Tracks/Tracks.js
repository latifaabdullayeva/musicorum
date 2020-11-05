import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import TrackItems from "./TrackItems";

function getTracks() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks?limit=50')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESS on getting tracks');
                return res.json()
            } else {
                console.log('FAILURE on getting tracks');
                throw new Error("Error re.ok false")
            }
        })
        .catch(error => console.log('ERROR' + error.message));
}

function setTrackListsState(response) {
    let chartTracks = [];
    for (let i = 0; i < response.data.length; i++) {
        const chartTrack = {
            title: response.data[i].title_short,
            rank: response.data[i].rank,
            coverImage: response.data[i].album.cover_big,
            chartTrackId: response.data[i].id,
            preview: response.data[i].preview,
            artistName: response.data[i].artist.name
        }
        chartTracks.push(chartTrack)
    }
    return chartTracks
}

class Tracks extends Component {
    state = {
        chartTrack: []
    }

    componentDidMount() {
        getTracks()
            .then(response => {
                if (response !== undefined) {
                    this.setState({
                        chartTrack: setTrackListsState(response)
                    })
                }
            })
    }

    render() {
        let chartTrackList = this.state.chartTrack;

        if (chartTrackList.length > 0) {
            return (
                <div>
                    <Grid container style={{marginBottom: '10rem'}}>
                        {chartTrackList.map(track => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}
                                      style={{justify: 'space-between'}}
                                      key={track.chartTrackId}>
                                    <TrackItems key={track.chartTrackId}
                                                title={track.title}
                                                rank={track.rank}
                                                cover={track.coverImage}
                                                preview={track.preview}
                                                artistName={track.artistName}
                                    />
                                    {/*<div style={{position: 'fixed', bottom: '0', left: '0', width: '100%'}}>*/}
                                    {/*    <MusicControlCard*/}
                                    {/*        preview={track.preview}*/}
                                    {/*        title={track.title}*/}
                                    {/*        artistName={track.artistName}*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                </Grid>
                            );
                        })}
                    </Grid>

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
}

export default Tracks;
