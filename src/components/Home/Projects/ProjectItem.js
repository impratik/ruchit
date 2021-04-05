import React from 'react'
import Card from '../../../UIElements/Card';
import './ProjectItem.css';
import {Link} from 'react-router-dom'
const ProjectItem = props => {
    return (
        <li className="list-item">
            <Link to={`/${props.name}`}>
            <Card>
                <div>
                    <img src={props.image} alt={props.name} />
                </div>
                <div>
                    <h4> {props.description} </h4>
                </div>
            </Card>
            </Link>
        </li>
    )
}

export default ProjectItem
