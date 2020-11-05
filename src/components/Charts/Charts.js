import React, {Component} from 'react';
import ChartPlaylistItems from "./ChartPlaylistItems";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChartPodcastItems from "./ChartPodcastItems";
import ChartAlbumItems from "./ChartAlbumItems";
import ChartTrackItems from "./ChartTrackItems";

function getCharts() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESS on getting charts');
                return res.json()
            } else {
                console.log('FAILURE on getting charts');
                throw new Error("Error re.ok false")
            }
        })
        .catch(error => console.log('ERROR' + error.message));
}

function setPlaylistsState(response) {
    // [{title, trackNums}, {title, trackNums}, {} ...]
    let chartPlaylists = [];
    for (let i = 0; i < response.playlists.data.length; i++) {
        const chartPlaylist = {
            title: response.playlists.data[i].title,
            trackNums: response.playlists.data[i].nb_tracks,
            coverImage: response.playlists.data[i].picture_big,
            chartPlaylistId: response.playlists.data[i].id
        }
        chartPlaylists.push(chartPlaylist)
    }
    return chartPlaylists
}

function setPodcastListsState(response) {
    let chartPodcasts = [];
    for (let i = 0; i < response.podcasts.data.length; i++) {
        const chartPodcast = {
            title: response.podcasts.data[i].title,
            description: response.podcasts.data[i].description,
            coverImage: response.podcasts.data[i].picture_big,
            chartPodcastId: response.podcasts.data[i].id,
            fans: response.podcasts.data[i].fans
        }
        chartPodcasts.push(chartPodcast)
    }
    return chartPodcasts
}

function setAlbumListsState(response) {
    let chartAlbums = [];
    for (let i = 0; i < response.albums.data.length; i++) {
        const chartAlbum = {
            title: response.albums.data[i].title,
            coverImage: response.albums.data[i].cover_big,
            chartAlbumId: response.albums.data[i].id
        }
        chartAlbums.push(chartAlbum)
    }
    return chartAlbums
}

function setTrackListsState(response) {
    let chartTracks = [];
    for (let i = 0; i < response.tracks.data.length; i++) {
        const chartTrack = {
            title: response.tracks.data[i].title_short,
            rank: response.tracks.data[i].rank,
            coverImage: response.tracks.data[i].album.cover_big,
            chartTrackId: response.tracks.data[i].id,
            preview: response.tracks.data[i].preview
        }
        chartTracks.push(chartTrack)
    }
    return chartTracks
}

class Charts extends Component {
    state = {// charts = [{title, trackNums}, {title, trackNums}, {} ...]
        chartPlaylist: [], chartPodcast: [], chartAlbum: [], chartTrack: []
    }

    componentDidMount() {
        getCharts()
            .then(response => {
                // {title: .. , image: ..}, {title: .. , image: ..}
                console.log(response);
                if (response !== undefined) {
                    this.setState({
                        chartPlaylist: setPlaylistsState(response),
                        chartPodcast: setPodcastListsState(response),
                        chartAlbum: setAlbumListsState(response),
                        chartTrack: setTrackListsState(response)
                    })
                }
            })
    }

    render() {
        let chartPlaylist = this.state.chartPlaylist;
        let chartPodcastList = this.state.chartPodcast;
        let chartAlbumList = this.state.chartAlbum;
        let chartTrackList = this.state.chartTrack;

        return (
            <Grid container spacing={2}>
                <Grid item xs={12} style={{marginTop: '1rem', color: 'rgba(0,0,0,0.7)'}}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Playlists
                    </Typography>
                    <ChartPlaylistItems key={chartPlaylist.chartPlaylistId}
                                        chartPlaylist={chartPlaylist}/>
                </Grid>
                <Grid item xs={12} style={{marginTop: '1rem', color: 'rgba(0,0,0,0.7)'}}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Podcasts
                    </Typography>
                    <ChartPodcastItems key={chartPodcastList.chartPodcastId}
                                       chartPodcastList={chartPodcastList}/>
                </Grid>
                <Grid item xs={12} style={{marginTop: '1rem', color: 'rgba(0,0,0,0.7)'}}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Albums
                    </Typography>
                    <ChartAlbumItems key={chartAlbumList.chartAlbumId}
                                     chartAlbumList={chartAlbumList}/>
                </Grid>
                <Grid item xs={12} style={{marginTop: '1rem', color: 'rgba(0,0,0,0.7)'}}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Tracks
                    </Typography>
                    <ChartTrackItems key={chartTrackList.chartTrackId}
                                     chartTrackList={chartTrackList}/>
                </Grid>
            </Grid>

        );
    }
}

export default Charts;
