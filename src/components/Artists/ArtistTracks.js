import React from 'react';

// The work of component is in Progress (showing track list of an artists that user selects)
function getArtistTracks(some) {
    console.log(some);
    fetch('https://cors-anywhere.herokuapp.com/' + some + '')
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
