import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import AlbumElement from "./AlbumElement";

function getAlbums() {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists?limit=20')
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
            for (let i = 0; i < response.data.length; i++) {
                const album = {
                    title: response.data[i].title,
                    coverImage: response.data[i].picture_big
                }
                albums.push(album);
            }
            this.setState({albumList: albums})
        })
    }

    render() {
        let albumList = this.state.albumList;
        return (
            <div>
                <h1>Top Albums</h1>
                <Grid container spacing={1}>
                    {albumList.map(album => {
                        return (
                            <Grid item xs={3} key={album}>
                                <AlbumElement key={album} title={album.title} cover={album.coverImage}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default Albums;
