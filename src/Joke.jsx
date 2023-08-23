import React from "react"

export default function RandomJoke(props) {
    return (
        <div className="joke--component">
            <h2 className="joke--setup"><div>{props.setup}</div></h2>
            <h2 className="joke--punchline"><div>{props.punchline}</div></h2>
        </div >)
}