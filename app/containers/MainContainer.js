/**
 * Created by Andrei on 9/20/2016.
 */

import React, {PropTypes} from "react";
import styles from "../styles";

export default function MainContainer(props) {
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            {props.children}
        </div>
    );
}
