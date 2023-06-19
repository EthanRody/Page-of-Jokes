import React from "react"

export default function Joke({setup, punchline}) {
    return (
        <div className="joke">
            {setup && <h2>{setup}</h2>}
             <h3>{punchline}</h3>
        </div>
    )
}