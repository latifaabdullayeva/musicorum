import React from "react";
import SearchCardItem from "./SearchCardItem";
import {Grid} from "@material-ui/core";

function SearchCardList({results}) {
    let data = [];
    if (results.data) {
        data = results.data.data;
    }

    function test(trackID) {
        // xranit sostoyaniya
        // id pesni kliknu
        console.log();
    }

    return (
        <Grid container style={{ backgroundColor: 'white'}}>
            {data.map((item) => (
                <SearchCardItem key={item.id} movie={item} test={test}/>
            ))}
        </Grid>
    );
}

export default SearchCardList;
