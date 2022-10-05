import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
    return (
        <div>
            <Header />

            <Hero />
            
            <Routes>
                <Route path='/'>Home</Route>
                <Route path='/'>Twitter</Route>
                <Route path='/'>Discord</Route>
                <Route path='/roadmap'>Roadmap</Route>
            </Routes>
        </div>
    )
}

export default App