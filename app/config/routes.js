/**
 * Created by Andrei on 9/16/2016.
 */

import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Main from "../components/Main";
import Home from "../components/Home";
import PromptContainer from "../containers/PromptContainer";
import ConfirmBattleContainer from "../containers/ConfirmBattleContainer";
import ResultsContainer from "../containers/ResultsContainer";

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' header='Battle' component={ConfirmBattleContainer} />
            <Route path='results' header='Results' component={ResultsContainer} />
        </Route>
    </Router>
);
