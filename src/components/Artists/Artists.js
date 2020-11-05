import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import ArtistElement from "./ArtistElement";
import CircularProgress from "@material-ui/core/CircularProgress";

function getArtists() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artist/artists?limit=21')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESS on getting artists');
                return res.json()
            } else {
                console.log('FAILURE on getting artists');
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
                    name: response.data[i].name,
                    coverImage: response.data[i].picture_big,
                    artistId: response.data[i].id,
                    trackList: response.data[i].tracklist
                }
                artists.push(artist);
            }
            this.setState({artistList: artists})
        })
    }

    render() {
        let artistList = this.state.artistList;
        if (artistList.length > 0) {
            return (
                <div>
                    {/*<Typography variant="h3" component="h3" style={{color: 'rgba(0,0,0,0.7)'}}>Top Artists</Typography>*/}
                    <Grid container>
                        {artistList.map(artist => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}
                                      style={{justify: 'space-between'}}
                                      key={artist.id}>
                                    <ArtistElement key={artist.artistId}
                                                   name={artist.name}
                                                   cover={artist.coverImage}/>
                                    {/*<ArtistTracks trackList={artist.trackList}/>*/}
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

export default Artists;
