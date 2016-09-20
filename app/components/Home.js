/**
 * Created by Andrei on 9/16/2016.
 */

import React, {Component} from "react";
import {Link} from "react-router";
import MainContainer from "../containers/MainContainer";

export default class Home extends Component {
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </MainContainer>
        );
    }
}
