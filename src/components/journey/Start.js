import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div>
                Help the Rug Headquarters is taking all of our funds help us?
            </div>
            <Link to='/degen-portal' >Yes</Link>
            <Link to='/no-path-monster-scene' >No</Link>
        </div>
        )
}

export default Start