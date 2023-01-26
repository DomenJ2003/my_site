import { useState } from "react"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import "../styles/contactMePage.css"

function FormComponent() {

    const [mailError, setMailError] = useState("")
    const formRef = useRef()
    const nameRef = useRef()
    const senderMailRef = useRef()
    const bodyRef = useRef()
    const btnRef = useRef()

    const sendMail = (e) => {
        e.preventDefault();

        let vpisanoIme = nameRef.current.value;
        let vpisanEmail = senderMailRef.current.value;
        let vpisanBody = bodyRef.current.value;

        if (vpisanoIme == "") {
            nameRef.current.classList.add("text-for-name-error")
            setMailError("Name field can't be empty")
            return;
        } else {
            nameRef.current.classList.remove("text-for-name-error")
            setMailError("")
        }

        if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(vpisanEmail)
        ) {
            senderMailRef.current.classList.add("text-for-email-error")
            setMailError("Email error.");
            return;
        }
        if (senderMailRef.current.classList.contains("text-for-email-error")) {
            senderMailRef.current.classList.remove("text-for-email-error");
            setMailError("");
        }

        if (vpisanBody == "") {
            bodyRef.current.classList.add("text-for-msg-error")
            setMailError("Message field can't be empty")
            return;
        } else {
            bodyRef.current.classList.remove("text-for-msg-error")
            setMailError("")
        }
        
        btnRef.current.disabled = true;

        emailjs.sendForm('SERVICE_ID', "TEMPLATE_ID", formRef.current, 'PUBLIC_KEY')
          .then((result) => {
                    nameRef.current.value = "";
                    senderMailRef.current.value= "";
                    bodyRef.current.value= "";
                    btnRef.current.innerHTML="";
                    btnRef.current.innerHTML='<div class="check-1"></div><div class="check-2"></div>';
                    btnRef.current.classList.add("send-btn");
          }, (error) => {
                    nameRef.current.value = "";
                    senderMailRef.current.value= "";
                    bodyRef.current.value= "";
                    btnRef.current.innerHTML="";
                    btnRef.current.innerHTML="ERROR";
          });
    }
    return (
        <>
            <div className="text-center">
                <h2 className="mb-4">Contact me here</h2>
                <form ref={formRef} onSubmit={sendMail}>
                    <input type="text" id="name" name="from_name" className="form-control mb-4 input-name" ref={nameRef} required />
                    <span className="floating-label-name" >Name</span>
                    <input type="text" id="mail" name="from_email" className="form-control mb-4 input-email" ref={senderMailRef} required />
                    <span className="floating-label-email" >E-mail</span>
                    <div className="form-group">
                        <textarea className="form-control text-for-email text-for-msg" rows="3" name="message" ref={bodyRef} required></textarea>
                        <span className="floating-label-msg" >Message</span>
                    </div>
                    <div color="red">{mailError}</div>
                    <button type="submit" ref={btnRef} onClick={(e) => sendMail(e)} className="btn">SEND</button>
                </form>
            </div>
        </>
    );
}

export default FormComponent;