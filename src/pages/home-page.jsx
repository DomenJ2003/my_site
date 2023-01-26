import LazyLoad from 'react-lazy-load';
import Navbar from "../components/navbar";
import "../styles/homePage.css"
function HomePage() {
    return (
        <>
        <div style={{maxHeight: "100vh", overflowY: "hidden"}}>
            <div className="container" style={{paddingBottom: 15 }}>
                <Navbar selectedItem={0}/>
            </div>
            <div
                className="text-center d-flex align-items-center justify-content-center"
                style={{height: "calc(100vh - 75px)"}}
            >
                <div className="homePageContent" style={{borderRadius: "15px", width: "70%"}}>
                    <div className="d-flex  align-items-center p-3">
                        <div className="d-flex flex-column justify-content-left ">
                            <h1 className="mb-3" style={{textAlign: "left"}}>Domen Jakopič</h1>
                            <h4 className="mb-3" style={{textAlign: "left"}}>Full Stack Developer</h4>
                            <div className="icons" style={{textAlign: "left", fontSize: "20px"}}>
                            <i className="fa-solid fa-code m-1"></i>
                            <i className="fa-brands fa-html5 m-1"></i>
                            <i className="fa-brands fa-css3-alt m-1"></i>
                            <i className="fa-brands fa-square-js m-1"></i>
                            <i className="fa-brands fa-react m-1"></i>
                            <i className="fa-brands fa-node-js m-1"></i>
                            <i className="fa-brands fa-java m-1"></i>
                            <i className="fa-brands fa-python m-1"></i>
                            <i className="fa-solid fa-c m-1"></i>
                            <i className="fa-solid fa-code m-1"></i>
                            </div>
                            <div className="d-flex m-row">
                            <a className="btn btn-light btn-lg" href="/my-projects" role="button">
                                My Projects
                            </a>
                            <a className="btn btn-light btn-lg" href="/about-me" role="button">
                                About Me
                            </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        </>
    )
}

export default HomePage;