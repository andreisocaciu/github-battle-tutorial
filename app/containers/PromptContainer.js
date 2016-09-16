/**
 * Created by Andrei on 9/16/2016.
 */

var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            username: ''
        }
    },
    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser(e) {
        e.preventDefault();

        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            this.context.router.push({
                pathname: '/playerTwo/' + this.state.username
            });
        }
    },
    render() {
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        );
    }
});

module.exports = PromptContainer;
