import './App.css';
import React, {Component} from "react";
import ToolBar from "./components/ToolBar/ToolBar";
import Artists from "./components/Artists/Artists";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./components/SideMenu/SideMenu";
import Backdrop from "./components/BackDrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ArtistTracks from "./components/Artists/ArtistTracks";
import Charts from "./components/Charts/Charts";
import Test from "./components/Test";

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
            <Router>
                <div>
                    <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer showSideDrawer={this.state.sideDrawerOpen}/>
                    {backdrop}
                    <Grid container spacing={1}>
                        <Grid item md={3}>
                            <SideMenu/>
                        </Grid>
                        <Grid item md={9} style={{padding: '0.5rem'}}>
                            <Switch>
                                <Route path='/' exact component={Artists}/>
                                <Route path='/artists' exact component={Artists}/>
                                <Route path='/charts' component={Charts}/>
                                <Route path='/artistTracks' component={ArtistTracks}/>
                                {/*<Route path='/test' component={Test}/>*/}
                                {/*<Route path="/genres" component={Genres}></Route>*/}
                                {/*<Route path="/podcasts" component={Podcasts}></Route>*/}
                            </Switch>
                        </Grid>

                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
