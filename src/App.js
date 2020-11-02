import './App.css';
import React, {Component} from "react";
import Toolbar from "./components/ToolBar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

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
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer showSideDrawer={this.state.sideDrawerOpen}/>
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <p>This is a page Content</p>
                </main>
            </div>
        );
    }
}

export default App;
