import React, {Component} from 'react';
import ChartPlaylistItems from "./ChartPlaylistItems";

function getChartPlaylists() {
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

class ChartPlaylists extends Component {
    state = {
        chartList: [] // charts = [{title, trackNums}, {title, trackNums}, {} ...]
    }

    componentDidMount() {
        getChartPlaylists().then(response => {
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
        return (
            <div>
                {chartList.map(chart => {
                    return (
                        <ChartPlaylistItems key={chart.chartPlaylistId}
                                            title={chart.title}
                                            trackNumbs={chart.trackNums}
                                            coverImage={chart.coverImage}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ChartPlaylists;

// response.tracks.data
// response.albums.data
// response.artists.data
// response.playlists.data
// response.podcasts.data
