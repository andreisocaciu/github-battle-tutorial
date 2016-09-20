/**
 * Created by Andrei on 9/19/2016.
 */

import React, {Component, PropTypes} from "react";
import ConfirmBattle from "../components/ConfirmBattle";
import {helpers} from "../utils/githubHelpers";

export default class ConfirmBattleContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            playersInfo: []
        }
    }

    componentDidMount() {
        const query = this.props.location.query;
        helpers.getPlayersInfo([query.playerOne, query.playerTwo])
               .then((players)=> {
                   this.setState({
                       isLoading: false,
                       playersInfo: [players[0], players[1]]
                   });
               })
    }

    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo,
            }
        });
    }

    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle.bind(this)} />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: PropTypes.object.isRequired
};
