import React, {Component} from 'react';
import ChartPlaylistItems from "./ChartPlaylistItems";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function getCharts() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
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

class Charts extends Component {
    state = {
        chartList: [] // charts = [{title, trackNums}, {title, trackNums}, {} ...]
    }

    componentDidMount() {
        getCharts().then(response => {
            let charts = []; // [{title, trackNums}, {title, trackNums}, {} ...]
            for (let i = 0; i < response.playlists.data.length; i++) {
                const chart = {
                    title: response.playlists.data[i].title,
                    trackNums: response.playlists.data[i].nb_tracks,
                    coverImage: response.playlists.data[i].picture_big,
                    chartPlaylistId: response.playlists.data[i].id
                }
                charts.push(chart)
            }
            this.setState({chartList: charts})
        })
    }

    render() {
        let chartList = this.state.chartList;

        console.log(chartList)
        return (
            <Grid container spacing={1} style={{justifyContent: 'center'}}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Playlists
                    </Typography>
                    <ChartPlaylistItems key={chartList.chartPlaylistId}
                                        chartList={chartList}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h3" component="h3">
                        Top Albums
                    </Typography>
                    <ChartPlaylistItems key={chartList.chartPlaylistId}
                                        chartList={chartList}/>
                </Grid>

            </Grid>

        );
    }
}

export default Charts;

// response.tracks.data
// response.albums.data
// response.artists.data
// response.playlists.data
// response.podcasts.data

/*{chartList.map(chart => {*/
/*    return (*/
/*        <ChartPlaylistItems key={chart.chartPlaylistId}*/
/*                            title={chart.title}*/
/*                            trackNumbs={chart.trackNums}*/
/*                            coverImage={chart.coverImage}*/
/*        />*/
/*    )*/
/*})}*/
