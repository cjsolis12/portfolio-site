import React from 'react'
import ProjectCard from '../components/ProjectCards'
import projectData from '../ProjectData'

export default function Portfolio() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
         {projectData.map((project,index) => (
            <ProjectCard key={index} project={project}/>
         ))}
        </div>
    )
}

