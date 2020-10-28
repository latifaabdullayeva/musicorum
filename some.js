console.log("I am in JS");
// DEEZER API urls:
// First 50 Eminem songs: api.deezer.com/artist/13/top?limit=50
// Search the word 'Eminem': http://api.deezer.com/search/artist?q=eminem
// Deezer Radio: http://api.deezer.com/radio
// Request through a public CORS proxy https://cors-anywhere.herokuapp.com/ to enables cross-origin requests to anywhere
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists?limit=10')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS');
        } else {
            console.log('FAILURE');
        }
        return res.json()
    })
    .then(data => {
        const parsedJSON = JSON.parse(JSON.stringify(data.data));
        let eminemSongList = "";
        console.log(parsedJSON)
        for (let i = 0; i < parsedJSON.length; i++) {
            eminemSongList += parsedJSON[i].title + "<br>";
            document.getElementById('pID').innerHTML = eminemSongList;
        }
    })
    .catch(error => console.log('ERROR' + error.message));
