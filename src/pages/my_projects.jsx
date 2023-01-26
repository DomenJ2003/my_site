import Navbar from "../components/navbar";
import "../styles/myProjects.css"

function myProjects() {

    return (
        <div className="container" style={{ overflowY: "auto", maxHeight: "max-content" }}>
            <Navbar selectedItem={1} />
            <div className="d-flex-collumn justify-content-center">
                <h3 className="mt-4 text-center">Tasks App</h3>
                <iframe src="/src/components/tasks/opravila.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0" width={"100%"} height={512}></iframe>
                <p>Tasks app is a web application. Where you can add or delete category of your task. And write new tasks or delete them. In this web application was also used localstore. This means all data stay same after refresh page. The application was made with jQuery and Bootstrap. <b>Please try it.</b></p>
                <hr />
                <h3 className="mt-3 text-center">Message App</h3>
                <div className="row p-3 justify-content-lg-around justify-content-xl-around justify-content-md-center justify-content-sm-center" >
                    <iframe className="virtual-phone chat-phone" src="/src/components/MessageApp/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                    <iframe className="virtual-phone chat-phone" src="/src/components/MessageApp/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                </div>
                <p>Chat App is also Flutter application for mobile or web. If you want to try it. Login in both devices with username: <b>test1@gmail.com</b> and password: <b>test1234</b> and another device with username: <b>test2@gmail.com</b> and password: <b>test1234</b>. You can also register a new user. In app, you can send and receive messages. if you want to start chatting with someone, you need to send them friend request. <b>Please try it.</b></p>
                <hr />
                <h3 className="mt-3 text-center">Tic Tac Toe</h3>
                <div className="row p-3 justify-content-lg-around justify-content-xl-around justify-content-md-center justify-content-sm-center">
                    <iframe className="virtual-phone" src="/src/components/TicTacToe/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                    <p className="ml-3 text-left">Tic Tac Toe is a mobile and web application. You have two ways to play. For one player and for two players. In single player mode, you can play against A.I. Tic Tac Toe was created with flutter framework. <b>Please try it.</b></p>
                </div>
            </div>


        </div>
    )
}

export default myProjects;