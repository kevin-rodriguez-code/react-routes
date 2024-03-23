import {studies, experiences} from '../data/resume'
import { Link } from 'react-router-dom';

function Resume(){
    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Currículum</h1>
        <h2>Estudios</h2>
        <ul>
            {studies.map(study =>
                <li key={study.id}>
                    <p>Título: {study.title}</p>
                    <p>Institución: {study.institution}</p>
                    <p>Fecha: {study.date}</p>
                </li>)}
        </ul>
        <h2>Experiencia</h2>
        <ul>
            {experiences.map(experience =>
                <li key={experience.id}>
                    <p>Título: {experience.title}</p>
                    <p>Compañía: {experience.company}</p>
                    <p>Fecha: {experience.date}</p>
                </li>)}
        </ul>
        </>
    )

}

export default Resume;