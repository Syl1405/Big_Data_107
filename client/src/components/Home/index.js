import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import Login from './Login';
import Sidebar from './Sidebar';
import Mainview from './Mainview';
import '../css/styles.css';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
class Landing extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render () {
        const loginRegLink = (
            <Login />
        )

        const userLink = (
            <div>
                <div className="navigator">
                    <Sidebar />
                </div>
                <div className="mainPanel">
                    <Mainview />
                </div>
            </div>
        )
        return (
            <div className="home-page">
             {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        )
    }
}

export default Landing