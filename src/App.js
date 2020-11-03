import './App.css';
import React, {Component} from "react";
import ToolBar from "./components/ToolBar/ToolBar";
import Artists from "./components/Artists/Artists";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./components/SideMenu/SideMenu";
import Backdrop from "./components/BackDrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
    state = {
        sideDrawerOpen: false
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop clickBackdrop={this.backdropClickHandler}/>
        }
        return (
            <div>
                <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer showSideDrawer={this.state.sideDrawerOpen}/>
                {backdrop}
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <SideMenu/>
                    </Grid>
                    <Grid item md={9} style={{padding: '0.5rem'}}>
                        <Artists/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

/// xs sm md lg
export default App;
