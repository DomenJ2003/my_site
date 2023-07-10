import Navbar from "../components/navbar";
import "../styles/myProjects.css"

function myProjects() {

    return (
        <div className="container" style={{ overflowY: "auto", maxHeight: "max-content" }}>
            <Navbar selectedItem={1} />
            <div className="d-flex-collumn justify-content-center">
                <h3 className="mt-4 text-center">Tasks App</h3>
                <iframe src="/src/components/tasks/opravila.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0" width={"100%"} height={512}></iframe>
                <p>
The Tasks app is a web application that helps you stay organized by managing your tasks. You can add or delete categories, create new tasks, and delete them. The app uses local storage, so your data remains intact even after refreshing the page. Developed with jQuery and Bootstrap, it offers a user-friendly interface and a seamless experience across devices. Stay organized and efficient with the Tasks app.<b>Please try it.</b></p>
                <hr />
                <h3 className="mt-3 text-center">Message App</h3>
                <div className="row p-3 justify-content-lg-around justify-content-xl-around justify-content-md-center justify-content-sm-center" >
                    <iframe className="virtual-phone chat-phone" src="/src/components/MessageApp/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                    <iframe className="virtual-phone chat-phone" src="/src/components/MessageApp/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                </div>
                <p>Chat App is a versatile Flutter application designed for both mobile and web platforms. To try it out, follow these steps:
                    <ol>
                        <li>
                            Login to the app on two different devices:
                            <ul>
                                <li>
                                Device 1: Use the username "test1@gmail.com" and the password "test1234".
                                </li>
                                <li>
                                Device 2: Use the username "test2@gmail.com" and the password "test1234".
                                </li>
                            </ul>
                        </li>
                        <li>
                        Alternatively, you can register a new user within the app.
                        </li>
                    </ol>    
                    Once you're logged in, you can take advantage of the following features:
                    <ul>
                        <li>Send and receive messages: The app allows you to exchange messages with other users.</li>
                        <li>Initiate chats: To start a conversation with someone, send them a friend request.</li>
                        <li>Explore the app's functionality and experience the chat feature firsthand.</li>
                    </ul>
                    <b>Enjoy using the Chat App to communicate and connect with others conveniently!</b>
                </p>
                <hr />
                <h3 className="mt-3 text-center">Tic Tac Toe</h3>
                <div className="row p-3 justify-content-lg-around justify-content-xl-around justify-content-md-center justify-content-sm-center">
                    <iframe className="virtual-phone" src="/src/components/TicTacToe/index.html" scrolling="no" style={{ border: "2px solid black", overflowX: "hidden" }} frameBorder="0"></iframe>
                    <p className="ml-3 text-left">Tic Tac Toe is a mobile and web application that offers both single player and two-player modes. In single player mode, you can challenge the A.I., while in two-player mode, you can compete against a friend. Built with Flutter, it provides a seamless experience across devices. Enjoy the classic game of Tic Tac Toe and test your skills!</p>
                </div>
            </div>


        </div>
    )
}

export default myProjects;