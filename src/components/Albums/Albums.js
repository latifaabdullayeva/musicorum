import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import CardElement from "../CardElement/CardElement";

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
        getAlbums().then(data => {
            let albumTitles = [];
            for (let i = 0; i < data.data.length; i++) {
                albumTitles.push(data.data[i].title);
            }
            this.setState({albumList: albumTitles})
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
                                <CardElement key={album} title={album}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default Albums;
