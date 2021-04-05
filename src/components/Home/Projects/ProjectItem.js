import React from 'react'
// import Card from '../../../UIElements/Card';
import './ProjectItem.css';
import {Link} from 'react-router-dom';
const ProjectItem = props => {

   
    return (
        <li className="list-item">
            <Link to={`/${props.name}`}>
                <div> 
                    <img src={props.image} alt={props.name} className="item-image" />
                </div>
                
                <div className="item-desc">
                    <h4> {props.description} </h4>
                </div>
            
            </Link>
        </li>
    )
}

export default ProjectItem
