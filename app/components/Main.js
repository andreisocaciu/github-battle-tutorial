/**
 * Created by Andrei on 9/16/2016.
 */

import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        );
    }
}
