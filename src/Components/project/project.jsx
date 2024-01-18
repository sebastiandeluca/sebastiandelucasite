import './project.scss';
import '../../App.scss';
import React from 'react';

const Project = (props) => {
    // NEED TO FIX ON PORTRAIT-MODE IPAD
    // 
    return (
        <div className='project-container animateda' style={{'--order': props.order}}>
            
            <img className='proj-logo' src={props.data.title.logo} alt={`${props.data.title.title} logo`}></img>
            <h1>{props.data.title.title}</h1>
            <p className='date'>{props.data.date}</p>
            <p className='desc'>{props.data.desc}</p>
            <span className="tag" style={{ background: '#cf392e' }}>
                {props.data.category.tag}
            </span>
        </div>
    )

}

export default Project;