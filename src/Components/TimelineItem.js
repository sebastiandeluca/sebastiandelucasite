import React from 'react';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: '#CFBF2D' }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <img src={data.title.logo} alt='Logo'></img>
            <h2>{data.title.title}</h2>
            <p>{data.desc}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
                
            )}
            <span className="circle" />
        </div>
        
    </div>
    

);
export default TimelineItem;