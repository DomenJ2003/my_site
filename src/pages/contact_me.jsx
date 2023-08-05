import "../styles/contactMePage.css"
import Navbar from "../components/navbar"
import FormComponent from "../components/form_component"


function ContactMePage() {


    return (
        <>
            <div className="container">
                <Navbar selectedItem={3} />

                <div className="row full-height">
                    <div className="col-5 justify-content-center" style={{ height: "calc(100vh - 56px)" }}>
                        <div className="contact-me-text d-flex flex-column">
                            <h1>Get in touch with me</h1>
                            <a href="https://www.linkedin.com/in/domen-jakopi%C4%8D-2274b324a/">
                                <img src="./linkedin-logo.png" alt="linkdin" style={{width:16, height:16, marginBottom: 5 }}/>
                                <span className="p-2">
                                    Domen Jakopič
                                </span>
                            </a>
                            <a href="mailto:domen.jakopic2@gmail.com">
                                <img src='./google-logo.png' alt="google" style={{width:16, height:16, marginBottom: 5 }}/>
                                <span className="p-2">
                                    domen.jakopic2@gmail.com
                                </span>
                            </a>
                        </div>

                    </div>

                    {/* <div className="col-1 d-flex-collumn justify-content-center or-sign">
                        <div className="line-up"></div>
                        <h5 className="circle">OR</h5>
                        <div className="line-down"></div>
                    </div>
                    <div className="col-6">
                        <FormComponent />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ContactMePage