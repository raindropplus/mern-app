import React from "react";

const ShowList = (props) => {
    return <>
        <ul>
            {props.names.map(n => <li>{n}</li>)}
        </ul>

    </>
}

const Cars= (props) => {
    return <>
        <>
            {props.names.map(n=> n)}
        </>

    </>
}

export default ShowList;