import React from 'react';

function getArtistTracks(some) {
    let artistTracksURL = 'https://api.deezer.com/artist/' + some + '/top?limit=50';
    console.log(artistTracksURL);
    fetch('https://cors-anywhere.herokuapp.com/' + artistTracksURL + '')
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

function ArtistTracks(props) {
    let somevar = props.trackList;
    getArtistTracks(somevar);
    return (
        <div>
            <p>Artist Traaacks</p>
            <p>{somevar}</p>
        </div>
    );
}

export default ArtistTracks;
