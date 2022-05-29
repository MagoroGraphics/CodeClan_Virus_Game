import react, { useState, useEffect } from 'react'
import PlayerCreation from './PlayerCreation'
import PlayerTurn from './PlayerTurn'

const CovatarsGameContainer = () => {

    return (
        <>
            <h1> Covatars Game Container </h1>
            <p>Include routes to pages in here or in app.js to render following components as different pages:</p>
            <ul>
                <li>PlayerCreation (or = homepage?) </li>
                <li>PlayerTurn for Player 1</li>
                <li>PlayerTurn for Player 2</li>
            </ul>
            
            {/* DISPLAY TESTS - ALL WORKING */}
            {/* <PlayerCreation /> */}
            {/* <PlayerTurn player = "Player One" />
            <PlayerTurn player = "Player Two" /> */}
        </>
    )
}

export default CovatarsGameContainer