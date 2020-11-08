import React, {useState} from "react";
import SearchCardList from "./SearchCardList";
import './Search.css';
import SearchBar from "./SearchBar";
import SearchSource from "./SearchSource";
import MusicorumLogoTransparent from "../../MusicorumLogoTransparent.png";
import Grid from "@material-ui/core/Grid";

function Search() {
    const [state, setState] = useState({
        results: []
    });

    const onSearch = async (text) => {
        const results = await SearchSource.get("/", {
            params: {q: text},
        });

        setState(prevState => {
            return {...prevState, results: results}
        })
    };

    return (
        <Grid container className="Search" >
            <Grid item xs={12} style={{width: '100%', padding: '2rem 1rem 2rem 1rem'}}>
                <img src={MusicorumLogoTransparent} className="Search-logo" alt="logo"/>
                <p>We are ready to help you</p>
                <SearchBar onSearch={onSearch}/>
            </Grid>
            <SearchCardList results={state.results}/>
        </Grid>
    );
}

export default Search;
