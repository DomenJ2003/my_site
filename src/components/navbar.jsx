import 'react';

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
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                    }
                    {
                        props.selectedItem == 1
                            ?
                            <li className="nav-item active">
                                <a className="nav-link" href="/my-projects">My Projects</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/my-projects">My Projects</a>
                            </li>

                    }
                    {
                        props.selectedItem == 2
                            ?
                            <li className="nav-item active">
                                <a className="nav-link" href="/about-me">About Me</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/about-me">About Me</a>
                            </li>

                    }
                    {
                        props.selectedItem == 3
                            ?
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact-me">Contact Me</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-me">Contact Me</a>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar