import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import ArtistElement from "../Artists/ArtistElement";

function getAlbums() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/11621109')
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

class Albums extends Component {
    state = {
        albumList: []
    }

    componentDidMount() {
        getAlbums().then(response => {
            let albums = [];
            const album = {
                nb_album: response.nb_album
            }
            albums.push(album);

            this.setState({albumList: albums})
        })
    }

    render() {
        let albumList = this.state.albumList;
        return (
            <div>
                <Grid container spacing={1}>
                    {albumList.map(album => {
                        return (
                            <Grid item xs={4} key={album}>
                                <ArtistElement albumNumb={album.nb_album}/>
                            </Grid>
                        );
                    })}
                </Grid>
                <h1>{this.props.artistID}</h1>;
            </div>
        );
    }
}

export default Albums;
