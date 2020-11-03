import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import ArtistElement from "./ArtistElement";

function getArtists() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artist/artists?limit=100')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESS');
                return res.json()
            } else {
                console.log('FAILURE');
                throw new Error("Error res.ok false")
            }
        })
        .catch(error => console.log('ERROR' + error.message));
}

class Artists extends Component {
    state = {
        artistList: []
    }

    componentDidMount() {
        getArtists().then(response => {
            let artists = [];
            for (let i = 0; i < response.data.length; i++) {
                const artist = {
                    title: response.data[i].name,
                    coverImage: response.data[i].picture_big
                }
                artists.push(artist);
            }
            this.setState({artistList: artists})
        })
    }

    render() {
        let artistList = this.state.artistList;
        return (
            <div>
                <h1>Top Artists</h1>
                <Grid container spacing={1}>
                    {artistList.map(artist => {
                        return (
                            <Grid item xs={3} key={artist}>
                                <ArtistElement key={artist} title={artist.title} cover={artist.coverImage}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default Artists;
