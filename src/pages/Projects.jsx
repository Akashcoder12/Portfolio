import React from 'react';
import Project from './Project.js';
import './Projects.css';

export default function Projects() {
  return (
    <div className='Projects'>
          {  
           
           Project.map((pro,index)=>{
             return (<div className='ProjectCard' key={index}>
             <img src={pro.ProjectImg} alt={pro.ProjectName}></img>
             <h3>{pro.id} . {pro.ProjectName}</h3>
             <p><b>Stacks:</b>{pro.TechStacks}</p>
             <p><b>Features:</b>{pro.Features}</p>
            </div>)
           })

          }   
    </div>
  )
}
