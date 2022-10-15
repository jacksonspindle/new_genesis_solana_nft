import React, { useState } from "react";
import { Link } from "react-router-dom";

const MonsterFight = () => {


    var [count, setCount] = useState(10)

    var countdown = setInterval(() => {
        if(count > 0) {
            setCount(count - 1)
        }
        else{
            // setCount(count - 1)
            clearInterval(countdown)
        }
    }, 1000)

    const [monsterHealth, setMonsterHealth] = useState(65)

    console.log(count)


    return(
        <div >
            <h1>Monster Fight</h1>


            <p>Lets get him! </p>

            <p>Click the Screen to fight the Monster</p>

            <p>Monster Dies</p>

            <h1>MONSTERS HEALTH: {monsterHealth}</h1>



            <h1>Count Down:</h1>
            {(count > 0) ? <h2 >{count}</h2> : <h2></h2>}


            <div onClick={() => {
                 setMonsterHealth((monsterHealth > 0) ? monsterHealth - 1 : 0)
                }}>
                <video width={600} height={600} autoPlay={true} muted loop >
                    <source src="/public/img/monster_video.MOV"></source>
                </video>
            </div>
        


            <Link to='/whitelist-form'>Whitelist Form</Link>
        </div>
    )
}

export default MonsterFight