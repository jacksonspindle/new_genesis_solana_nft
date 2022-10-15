import React from "react";
import { Link } from "react-router-dom";

const TechWeapon = () => {
    return(
        <div>
            <h1>Tech Weapon</h1>

            <p>You wake up in a room with a tech weapon in front of you... take it</p>

            <Link to='/monster-fight'>Monster Fight</Link>
        </div>
    )
}

export default TechWeapon