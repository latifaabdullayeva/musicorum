import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PodcastItems from "./PodcastItems";

function getPodcasts() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts?limit=50')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESS on getting podcasts');
                return res.json()
            } else {
                console.log('FAILURE on getting podcasts');
                throw new Error("Error re.ok false")
            }
        })
        .catch(error => console.log('ERROR' + error.message));
}

function setPodcastListsState(response) {
    let chartPodcasts = [];
    for (let i = 0; i < response.data.length; i++) {
        const chartPodcast = {
            title: response.data[i].title,
            description: response.data[i].description,
            coverImage: response.data[i].picture_big,
            chartPodcastId: response.data[i].id,
            fans: response.data[i].fans
        }
        chartPodcasts.push(chartPodcast)
    }
    return chartPodcasts
}

class Podcasts extends Component {
    state = {
        chartPodcast: []
    }

    componentDidMount() {
        getPodcasts()
            .then(response => {
                if (response !== undefined) {
                    this.setState({
                        chartPodcast: setPodcastListsState(response)
                    })
                }
            })
    }

    render() {
        let chartPodcastList = this.state.chartPodcast;

        if (chartPodcastList.length > 0) {
            return (
                <div>
                    <Grid container style={{marginBottom: '10rem'}}>
                        {chartPodcastList.map(podcast => {
                            return (
                                <Grid item xs={6} sm={6} md={4} lg={3}
                                      style={{justify: 'center'}}
                                      key={podcast.chartPodcastId}>
                                    <PodcastItems key={podcast.chartPodcastId}
                                                  title={podcast.title}
                                                  description={podcast.description}
                                                  coverImage={podcast.coverImage}
                                                  fans={podcast.fans}
                                    />
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

export default Podcasts;
