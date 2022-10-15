import React from 'react'
import { Link } from 'react-router-dom'

const DegenPortal = () => {
    return (
        <div>
            Degen Portal
            <br />
            We need to hurry! 
            <br/>
            Next you turn around again and Degen opens a portal... 
            <br />
            Enter the Portal?

            <Link to='/tech-weapon' >Yes</Link>
            <Link to='/you-die' >No</Link>
        </div>
        )
}

export default DegenPortal