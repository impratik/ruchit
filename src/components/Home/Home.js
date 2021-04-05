import React from 'react'
import Hero from './Hero'
import Project from './Projects/Project';
import './Home.css'


const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Project />
        </div>
    )
}

export default Home
