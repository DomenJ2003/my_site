import 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        props.selectedItem == 0
                            ?
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                    }
                    {
                        props.selectedItem == 1
                            ?
                            <li className="nav-item active">
                                <Link className="nav-link" to="/my-projects">My Projects</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/my-projects">My Projects</Link>
                            </li>

                    }
                    {
                        props.selectedItem == 2
                            ?
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about-me">About Me</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-me">About Me</Link>
                            </li>

                    }
                    {
                        props.selectedItem == 3
                            ?
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contact-me">Contact Me</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-me">Contact Me</Link>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar