import Project from "./Project"
import data from '../data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './Projects.css'
export default function Projects() {
    
    const [projects, setProjects ] = useState([])
    const [filtered, setFiltered] = useState([])
    const [techStacks, setTechStacks] = useState([])
    const [filter, setFilter] = useState('')

    const colors = [
        {   
            primary: '',
            secondary:'',
            
        }
    ]

    useEffect(() => {
        setProjects(data)
        setFiltered(data)
        let ts = new Set()
        ts.add('All')
        data.forEach(project => project.technologies.forEach(tech => ts.add(tech)))
        setTechStacks([...ts])
    }, [])


    function handleTechStackClick (event,tech) {
        if (tech === 'All') {
            setFilter('All')
            setFiltered(projects)
            return
        }
        const filteredProjects = projects.filter(project => project.technologies.includes(tech))
        console.log(filteredProjects)
        setFiltered(filteredProjects)
        setFilter(tech)

        // setProjects(projects.filter())
    }

    const projectElems = filtered.map((project,id) => (
        <Project key={'project'+id} project={project} />
    ))
    const techStacksElems = techStacks.map((tech,id) => 
        <p 
            onClick={(event) => handleTechStackClick(event, tech)}
            key={id}
            style={tech === filter?{
                backgroundColor: 'gray',
                borderColor: 'gray',
                color: 'white'
            }:{}}
        >
            
            {tech}
        </p>
        
        )

    return(
    <div className="project-container container">



    <h1>PROJECTS</h1>
    <div className="tech">
        <h1><FontAwesomeIcon icon={faFilter}/> Filter</h1>
        {techStacksElems}
    </div>
    <div 
        layout
        className="projects">
        <AnimatePresence>
            {projectElems}
        </AnimatePresence>

    </div>
    </div>
    )
}