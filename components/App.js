import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <>
            <h1 className="title">Humour</h1>
            <div className="joke-list">
                <Joke 
                    setup="What's the best thing about Switzerland?"
                    punchline="I don't know, but the flag is a big plus!"
                />
                <Joke 
                    setup="I got fired from the bank today."
                    punchline="A woman asked me to check her balance, so I pushed her."
                />
                <Joke 
                    punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                />
                <Joke 
                    setup="I once got caught stealing a calendar."
                    punchline="I got 12 months."
                />
                <Joke 
                    setup="What's blue and not very heavy?"
                    punchline="Light blue."
                />
            </div>
        </>
    )    
}