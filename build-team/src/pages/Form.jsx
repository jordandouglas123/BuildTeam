import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Form = () => {
    const descriptionRef = useRef();
    const projectBudgetRef = useRef();
    const projectDurationRef = useRef();

    const memberOneRef = useRef();
    const memberTwoRef = useRef();
    const memberThreeRef = useRef();
    const memberFourRef = useRef();
    const memberFiveRef = useRef();

    const levelOneRef = useRef();
    const levelTwoRef = useRef();
    const levelThreeRef = useRef();
    const levelFourRef = useRef();
    const levelFiveRef = useRef();

    const [loading, setLoading] = useState(false);

    const { authToken, currentUser } = useAuth();
    const token = authToken;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let memberOne;
        let memberTwo;
        let memberThree;
        let memberFour;
        let memberFive;

        let levelValueOne;
        let levelValueTwo;
        let levelValueThree;
        let levelValueFour;
        let levelValueFive;

        setLoading(true)
        if (memberOneRef.current.value === "1") {
            memberOne = "Project Manager";
        }

        if (memberOneRef.current.value === "2") {
            memberOne = "Database Administrator";
        }

        if (memberOneRef.current.value === "3") {
            memberOne = "Frontend Developer";
        }

        if (memberOneRef.current.value === "4") {
            memberOne = "Backend Developer";
        }

        if (memberOneRef.current.value === "5") {
            memberOne = "Fullstack Developer";
        }

        if (memberTwoRef.current.value === "1") {
            memberTwo = "Project Manager";
        }
        if (memberTwoRef.current.value === "2") {
            memberTwo = "Database Administrator";
        }
        if (memberTwoRef.current.value === "3") {
            memberTwo = "Frontend Developer";
        }
        if (memberTwoRef.current.value === "4") {
            memberTwo = "Backend Developer";
        }
        if (memberTwoRef.current.value === "5") {
            memberTwo = "Fullstack Developer";
        }

        if (memberThreeRef.current.value === "1") {
            memberThree = "Project Manager";
        }
        if (memberThreeRef.current.value === "2") {
            memberThree = "Database Administrator";
        }
        if (memberThreeRef.current.value === "3") {
            memberThree = "Frontend Developer";
        }
        if (memberThreeRef.current.value === "4") {
            memberThree = "Backend Developer";
        }
        if (memberThreeRef.current.value === "5") {
            memberThree = "Fullstack Developer";
        }

        if (memberFourRef.current.value === "1") {
            memberFour = "Project Manager";
        }
        if (memberFourRef.current.value === "2") {
            memberFour = "Database Administrator";
        }
        if (memberFourRef.current.value === "3") {
            memberFour = "Frontend Developer";
        }
        if (memberFourRef.current.value === "4") {
            memberFour = "Backend Developer";
        }
        if (memberFourRef.current.value === "5") {
            memberFour = "Fullstack Developer";
        }

        if (memberFiveRef.current.value === "1") {
            memberFive = "Project Manager";
        }
        if (memberFiveRef.current.value === "2") {
            memberFive = "Database Administrator";
        }
        if (memberFiveRef.current.value === "3") {
            memberFive = "Frontend Developer";
        }
        if (memberFiveRef.current.value === "4") {
            memberFive = "Backend Developer";
        }
        if (memberFiveRef.current.value === "5") {
            memberFive = "Fullstack Developer";
        }

        if (levelOneRef.current.value === "1") {
            levelValueOne = "Expert";
        }

        if (levelOneRef.current.value === "2") {
            levelValueOne = "Advanced";
        }

        if (levelOneRef.current.value === "3") {
            levelValueOne = "Intermediate";
        }

        if (levelOneRef.current.value === "4") {
            levelValueOne = "Intern";
        }

        if (levelTwoRef.current.value === "1") {
            levelValueTwo = "Expert";
        }

        if (levelTwoRef.current.value === "2") {
            levelValueTwo = "Advanced";
        }

        if (levelTwoRef.current.value === "3") {
            levelValueTwo = "Intermediate";
        }

        if (levelTwoRef.current.value === "4") {
            levelValueTwo = "Intern";
        }

        if (levelThreeRef.current.value === "1") {
            levelValueThree = "Expert";
        }

        if (levelThreeRef.current.value === "2") {
            levelValueThree = "Advanced";
        }

        if (levelThreeRef.current.value === "3") {
            levelValueThree = "Intermediate";
        }

        if (levelThreeRef.current.value === "4") {
            levelValueThree = "Intern";
        }

        if (levelFourRef.current.value === "1") {
            levelValueFour = "Expert";
        }

        if (levelFourRef.current.value === "2") {
            levelValueFour = "Advanced";
        }

        if (levelFourRef.current.value === "3") {
            levelValueFour = "Intermediate";
        }

        if (levelFourRef.current.value === "4") {
            levelValueFour = "Intern";
        }

        if (levelFiveRef.current.value === "1") {
            levelValueFive = "Expert";
        }

        if (levelFiveRef.current.value === "2") {
            levelValueFive = "Advanced";
        }

        if (levelFiveRef.current.value === "3") {
            levelValueFive = "Intermediate";
        }

        if (levelFiveRef.current.value === "4") {
            levelValueFive = "Intern";
        }

        await axios
            .post("http://localhost:5000/api/suggestedTeam" + currentUser.uid, {
                description: descriptionRef.current.value,
                projectBudget: projectBudgetRef.current.value,
                projectDuration: projectDurationRef.current.value,
                teamMemberOne: memberOne,
                teamMemberOneLevel: levelValueOne,

                teamMemberTwo: memberTwo,
                teamMemberTwoLevel: levelValueTwo,

                teamMemberThree: memberThree,
                teamMemberThreeLevel: levelValueThree,

                teamMemberFour: memberFour,
                teamMemberFourLevel: levelValueFour,

                teamMemberFive: memberFive,
                teamMemberFiveLevel: levelValueFive,
            })
            .then((res) => {
                if (res.data.ok) {
                    navigate("/employer");
                }
            });
            setLoading(false)
    };

    return (
        <div>
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "480px" }}>
                    <div className="card mb-5 shadow">
                        <div className="card-body">
                            <img
                                src={require("../images/logo.PNG")}
                                className=" rounded mx-auto d-block"
                            />
                            <h3 className="text-center mb-4">
                                Team Data Capture Form
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        placeholder="Breif Project Description"
                                        rows="4"
                                        ref={descriptionRef}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <input
                                        type="number"
                                        className="form-control me-2"
                                        placeholder="Project Budget"
                                        ref={projectBudgetRef}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <input
                                        type="number"
                                        className="form-control me-2"
                                        placeholder="Project Duration"
                                        ref={projectDurationRef}
                                    />
                                </div>

                                <div className="input-group mb-3 d-flex">
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={memberOneRef}
                                    >
                                        <option value="1">
                                            Project Manager
                                        </option>
                                        <option value="2">
                                            Database Administrator
                                        </option>
                                        <option value="3">
                                            Frontend Developer
                                        </option>
                                        <option value="4">
                                            Backend Developer
                                        </option>
                                        <option value="5">
                                            Fullstack Developer
                                        </option>
                                    </select>

                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={levelOneRef}
                                    >
                                        <option value="1">Expert</option>
                                        <option value="2">Advanced</option>
                                        <option value="3">Intermidate</option>
                                        <option value="4">Intern</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={memberTwoRef}
                                    >
                                        <option value="1">
                                            Project Manager
                                        </option>
                                        <option value="2">
                                            Database Administrator
                                        </option>
                                        <option value="3">
                                            Frontend Developer
                                        </option>
                                        <option value="4">
                                            Backend Developer
                                        </option>
                                        <option value="5">
                                            Fullstack Developer
                                        </option>
                                    </select>
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={levelTwoRef}
                                    >
                                        <option value="1">Expert</option>
                                        <option value="2">Advanced</option>
                                        <option value="3">Intermidate</option>
                                        <option value="4">Intern</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={memberThreeRef}
                                    >
                                        <option value="1">
                                            Project Manager
                                        </option>
                                        <option value="2">
                                            Database Administrator
                                        </option>
                                        <option value="3">
                                            Frontend Developer
                                        </option>
                                        <option value="4">
                                            Backend Developer
                                        </option>
                                        <option value="5">
                                            Fullstack Developer
                                        </option>
                                    </select>
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={levelThreeRef}
                                    >
                                        <option value="1">Expert</option>
                                        <option value="2">Advanced</option>
                                        <option value="3">Intermidate</option>
                                        <option value="4">Intern</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={memberFourRef}
                                    >
                                        <option value="1">
                                            Project Manager
                                        </option>
                                        <option value="2">
                                            Database Administrator
                                        </option>
                                        <option value="3">
                                            Frontend Developer
                                        </option>
                                        <option value="4">
                                            Backend Developer
                                        </option>
                                        <option value="5">
                                            Fullstack Developer
                                        </option>
                                    </select>
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={levelFourRef}
                                    >
                                        <option value="1">Expert</option>
                                        <option value="2">Advanced</option>
                                        <option value="3">Intermidate</option>
                                        <option value="4">Intern</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={memberFiveRef}
                                    >
                                        <option value="1">
                                            Project Manager
                                        </option>
                                        <option value="2">
                                            Database Administrator
                                        </option>
                                        <option value="3">
                                            Frontend Developer
                                        </option>
                                        <option value="4">
                                            Backend Developer
                                        </option>
                                        <option value="5">
                                            Fullstack Developer
                                        </option>
                                    </select>
                                    <select
                                        type="text"
                                        className="form-select"
                                        ref={levelFiveRef}
                                    >
                                        <option value="1">Expert</option>
                                        <option value="2">Advanced</option>
                                        <option value="3">Intermidate</option>
                                        <option value="4">Intern</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-100 btn btn-primary mb-3"
                                    disabled={loading}
                                >
                                    Submit
                                </button>
                            </form>

                            <div
                                style={{
                                    paddingBottom: "15px",
                                    textAlign: "center",
                                }}
                            >
                                {" "}
                                Back to Dashboard{" "}
                                <Link to="/employer"> Back </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
