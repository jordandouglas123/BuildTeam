import "../css/home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <nav
                id="home_nav"
                className="navbar navbar-light d-flex justify-content-center"
            >
                <a className="navbar-brand" href="#">
                    <img id="logo" src={require("../images/logo.PNG")} alt="" />
                </a>
            </nav>

            <div
                id="jumbotron"
                className="jumbotron jumbotron-fluid text-center "
            >
                <div className="container">
                    <h1 id="jumboTitle" className="display-4-header">
                        Welcome to BuildTeam
                    </h1>
                </div>
                <div
                    className="container d-flex justify-content-evenly"
                    id="buttons"
                >
                    <Link
                        to="/signup"
                        id="signUp"
                        type="button"
                        className="btn btn-outline-light btn-lg"
                    >
                        {" "}
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        type="button"
                        className="btn btn-outline-light btn-lg"
                    >
                        {" "}
                        Employer Login
                    </Link>
                    <Link
                        to="/login"
                        type="button"
                        className="btn btn-outline-light btn-lg"
                    >
                        {" "}
                        Employee Login
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-light btn-lg"
                    >
                        Learn More
                    </button>
                </div>
            </div>
            <div className=" container" id="cardsContainer">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="card text-center" id="card">
                            <img
                                className=" card-img-top"
                                src={require("../images/team.jpg")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title" id="cardText">
                                    Reliable Project Team Generetion
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card text-center" id="card">
                            <img
                                className=" card-img-top"
                                src={require("../images/fast.jpg")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Fast and Efficient
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card text-center" id="card">
                            <img
                                className=" card-img-top"
                                src={require("../images/user2.jpg")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Easy to Use User Interface
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card text-center-justify">
                    <h1 className="h1 card-header text-center">
                        What is BuildTeam?
                    </h1>
                    <p className="card-body text-center">
                        This application generates a project team based on some
                        provided criteria( skills, qualifications, experience,
                        budget, salary demands etc..). This application would
                        compile the information given and generate project
                        groups based on budget, duration and skillset. . The
                        business personnel would open the app, enter their login
                        details, then they would find a team via search button,
                        a form would be displayed on the screen, and they would
                        enter their requirements for the project (budget, length
                        of project, project description and the project team
                        required) and submit the form. On submission, the app
                        will generate a suggested team based on the criteria
                        provided in the form and availability of the registered
                        IT personnel. Qualified IT personnel can also register
                        on the application. During the registration process,
                        they are required to provide some personal information
                        (name, DOB, etc).
                    </p>
                </div>
            </div>
            <br />
            <div className="container">
                <h1 className="container-header text-center">Meet The Team</h1>
                <div className="row">
                    <div className="col">
                        <div className="card text-center">
                            <img
                                className=" card-img-top"
                                src={require("../images/jaels.png")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Jael Romain</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center">
                            <img
                                className=" card-img-top"
                                src={require("../images/me.png")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Hasie Alexander</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src={require("../images/jordans.jpeg")}
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Jordan Douglas</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
