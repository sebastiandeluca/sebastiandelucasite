import './project.scss';
import '../../App.scss';
import React from 'react';

const Project = (props) => {
    // NEED TO FIX ON PORTRAIT-MODE IPAD
    // 
    return (
        <div className='project-container animateda shadow-on-hover' style={{'--order': props.order, color: '#cf392e'}}>
            <a style={{textDecoration: 'none', color: '#cf392e'}} href={`${props.data.link.url}`} target='blank'>
            <img className='proj-logo' src={props.data.title.logo} alt={`${props.data.title.title} logo`}></img>
            <h1>{props.data.title.title}</h1>
            <p className='date'>{props.data.date}</p>
            <p className='desc'>{props.data.desc}</p>
            <span className="tag" style={{ background: '#cf392e' }}>
                {props.data.category.tag}
            </span>
            </a>
        </div>
    )

}

export default Project;