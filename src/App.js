import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Start from "./components/journey/Start";
import DegenPortal from './components/journey/DegenPortal';
import NoPathMonsterScene from './components/journey/NoPathMonsterScene';
import TechWeapon from './components/journey/TechWeapon';
import YouDie from './components/journey/YouDie';
import MonsterFight from './components/journey/MonsterFight';
import WhitelistForm from './components/journey/WhitelistForm';
import Mint from './components/journey/Mint';
import LesserMint from './components/journey/LesserMint';

const App = () => {
    return (
        <div>
            <Header />

            
            <Routes>
                <Route path='/' element={<Hero />}>Home</Route>
                <Route path='/'>Twitter</Route>
                <Route path='/'>Discord</Route>
                <Route path='/roadmap'>Roadmap</Route>
                <Route path="/start" element={<Start />}></Route>
                <Route path="/degen-portal" element={<DegenPortal />}></Route>
                <Route path="/no-path-monster-scene" element={<NoPathMonsterScene />}></Route>
                <Route path="/tech-weapon" element={<TechWeapon />}></Route>
                <Route path="/you-die" element={<YouDie />}></Route>
                <Route path="/monster-fight" element={<MonsterFight />}></Route>
                <Route path="/whitelist-form" element={<WhitelistForm />}></Route>
                <Route path="/mint" element={<Mint />}></Route>
                <Route path="/lesser-mint" element={<LesserMint />}></Route>
            </Routes>
        </div>
    )
}

export default App