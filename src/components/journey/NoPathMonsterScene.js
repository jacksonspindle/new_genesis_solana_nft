import React from 'react'
import { Link } from 'react-router-dom'

const NoPathMonsterScene = () => {
    return (
        <div>
            No Path Monster Scene 

            <br/>
            <p>RUNS AWAY</p>

            <p>He starts running at you then monster start running at you and you black out </p>
            <p>You wake up in a room with rug pullers...</p>

            <p>Join us?</p>


            <Link to='/lesser-mint'>Yes</Link>
            <Link to='/you-die'>No</Link>
        </div>
        )
}

export default NoPathMonsterScene