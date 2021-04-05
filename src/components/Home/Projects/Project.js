import React from 'react';
import ProjectList from './ProjectList';
import Sportsadd from '../../../assets/sportsadda.jpg'
const Project = () => {

    const PROJECTS = [
        {
            id: 'u1',
            name:'sportsaddle',
            image: `${Sportsadd}`,
            description: 'test descer'
        },
        {
            id: 'u2',
            name:'sportsaddle',
            image: 'https://play-lh.googleusercontent.com/fQnFNflzDkzoBrGBJz2M_tsod6lIIsRHcNE6pgNDsqqGT3L14SMiB2BgCey-Jd5FkjLd',
            description: 'test descer'
        },
        {
            id: '3',
            name:'sportsaddle',
            image: 'https://play-lh.googleusercontent.com/fQnFNflzDkzoBrGBJz2M_tsod6lIIsRHcNE6pgNDsqqGT3L14SMiB2BgCey-Jd5FkjLd',
            description: 'test descer'
        },
    ];

    return <ProjectList items = {PROJECTS} />; 
}



export default Project
