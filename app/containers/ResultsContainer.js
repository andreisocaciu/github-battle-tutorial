/**
 * Created by Andrei on 9/20/2016.
 */

import React, {Component, PropTypes} from "react";
import Results from "../components/Results";
import {helpers} from "../utils/githubHelpers";

export default class ResultsContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            scores: []
        }
    }

    componentDidMount() {
        helpers.battle(this.props.location.state.playersInfo)
               .then((scores) => {
                   this.setState({
                       scores: scores,
                       isLoading: false
                   })
               });
    }

    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playersInfo={this.props.location.state.playersInfo}
                header={this.props.route.header} />
        );
    }
}
