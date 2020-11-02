import './App.css';
import React, {Component} from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Albums from "./components/Albums/Albums";

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
                {/*<Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>*/}
                <SearchAppBar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer showSideDrawer={this.state.sideDrawerOpen}/>
                {backdrop}
                <main style={{margin: '1rem'}}>
                    <Albums/>
                </main>
            </div>
        );
    }
}

export default App;
