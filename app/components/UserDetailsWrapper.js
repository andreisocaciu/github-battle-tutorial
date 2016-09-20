/**
 * Created by Andrei on 9/20/2016.
 */

import React from "react";

export default function UserDetailsWrapper(props) {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
}
