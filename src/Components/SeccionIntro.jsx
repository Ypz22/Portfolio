import React from "react";

const SeccionIntro = (props) => {
    return (
        <div className="container-intro">
            <h1>{props.label}</h1>
            <p>{props.description}</p>
        </div>
    )
};

export default SeccionIntro;