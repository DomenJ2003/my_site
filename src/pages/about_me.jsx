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
                    I am Domen Jakopič. Software developer from Slovenia.<br />
                    I am currently studying at the Faculty of Computer Science, Electrical Engineering and Informatics in Maribor.<br />
                    In addition to my studies, I also work as a web developer. <br />You can also see some of my hobby projects on <a className="link-about-me" href="./my-projects">the my projects page</a>.
                </p>
                <div style={{height: "200px"}}></div>
            </div>
        </div>
    )
}

export default aboutMe;