import React from 'react'

export default function MatchDetailCard(props) {
    const {match} = props
    if(!match) return null
    return (
        <div className="MatchDetailCard">
            <h4>{match.team1} vs {match.team2}</h4>
        </div>
    )
}
