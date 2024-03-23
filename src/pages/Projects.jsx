import projects from '../data/projects'
import { Link } from 'react-router-dom';


function Projects(){
    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Proyectos</h1>
        <ul>
            {projects.map(project =>
                <li key={project.id}>
                    <img src={project.image} />
                    <p>Nombre: {project.name}</p>
                    <p>Descripción: {project.description}</p>
                </li>)}
        </ul>
        </>
    )

}

export default Projects;