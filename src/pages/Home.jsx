import { Link } from "react-router-dom";
function Home() {
    return (
        <>
        <h1>Desarrollador</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quasi. Repellat, reprehenderit ex beatae earum quas nostrum eius quasi numquam ratione architecto illo porro est modi! Illo harum cum soluta.</p>
        <Link to='/Projects'>Projects</Link><br />
        <Link to='/Resume'>Resume</Link>
        </>
    )
       
    
}

export default Home;