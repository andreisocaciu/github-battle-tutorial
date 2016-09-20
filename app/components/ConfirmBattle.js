/**
 * Created by Andrei on 9/19/2016.
 */

import React, {PropTypes} from "react";
import {Link} from "react-router";
import styles from "../styles";
import MainContainer from "../containers/MainContainer";
import UserDetails from "../components/UserDetails";
import UserDetailsWrapper from "../components/UserDetailsWrapper";
import Loading from "../components/Loading";

export default function ConfirmBattle(props) {
    return props.isLoading === true ?
        (<Loading text="Wait one moment" speed={500} />) :
        (
            <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player One">
                        <UserDetails info={props.playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player Two">
                        <UserDetails info={props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={styles.space}>
                        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                            Initiate Battle!
                        </button>
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="/playerOne">
                            <button type="button" className="btn btn-lg btn-danger">
                                Reselect Players
                            </button>
                        </Link>
                    </div>
                </div>
            </MainContainer>
        );
}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
};
