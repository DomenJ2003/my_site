import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/aboutMe.css";

function aboutMe() {

    return (
        <div className="container">
            <Navbar selectedItem={2} />
            <div className="text-section">
                <h3>About me:</h3>
                <div style={{height: "30px"}}></div>
                <p>
                Welcome to my profile! <br/> I'm a passionate full stack developer currently studying at FERI (Faculty of Electrical Engineering and Computer Science) since October 2022.<br/> With a focus on both front-end and back-end technologies, I create dynamic and robust applications. I've gained professional programming experience since September 2022, continuously expanding my skill set and staying up-to-date with industry trends.<br/>I enjoy tackling challenging projects and collaborating effectively with teams. Feel free to explore my profile to learn more about my skills and experiences.<br/>Let's connect and explore potential opportunities together! <br />Check out my projects page to explore some of my hobby projects. 
                <br/>
                <Link style={{marginLeft: 0, marginTop: 10}}className="btn btn-light btn-md" to="/my-projects" role="button">My project page</Link>
                </p>
                <div style={{height: "200px"}}></div>
            </div>
        </div>
    )
}

export default aboutMe;