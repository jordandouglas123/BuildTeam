import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const EmployerDashboard = () => {
    const { logout, currentUser, authToken } = useAuth();
    const token = authToken;
    const navigate = useNavigate();

    const [employeer, setEmployer] = useState({});
    const [suggestedTeam, setSuggestedTeam] = useState([]);
    const [currentTeam, setCurrentTeam] = useState([]);

    const handleSignout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchData = async (token) => {
        const res = await axios.get(
            "http://localhost:5000/api/employer" + currentUser.uid,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        setEmployer(res.data);
    };

    const fetchSuggestedTeamData = async (token) => {

        const teamRes = await axios.get(
            "http://localhost:5000/api/suggestedTeam",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        setSuggestedTeam(teamRes.data);
    }


    useEffect(() => {
        if (token) {
            fetchData(token);
            fetchSuggestedTeamData(token);
        }
    }, [token]);

    //console.log(employeer) 
    //console.log(suggestedTeam);

    return (
        <div className="container-fluid d-flex flex-column mt-4">
            <div className="row flex-grow-1 p-2">
                <div className="card rounded-0 p-0">
                    <div className="card-header navbar">
                        General Info
                        <span>
                            Currently Logged in:{" "}
                            {employeer[0]?.name || "Please Log in"}
                        </span>
                        <button
                            className="btn btn-outline-dark"
                            onClick={handleSignout}
                        >
                            Logout
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="row h-100 mb-2">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <h3 className="card-title">
                                    {employeer[0]?.name}
                                </h3>
                                <h5 className="d-flex">
                                    Type:{" "}
                                    <p className="ms-2">{employeer[0]?.type}</p>
                                </h5>
                                <p className="card-text text-center">
                                    {employeer[0]?.description}
                                </p>
                                <h6 className="d-flex">
                                    Propose Team Budget:{" "}
                                    <p className="ms-2">$1.25M</p>
                                </h6>
                                <h6 className="d-flex">
                                    Propose Duration:{" "}
                                    <p className="ms-2">12 Months</p>
                                </h6>
                                <div className="d-flex">
                                    <h5>Positions Required:</h5>
                                    <div className="mx-2">
                                        <span className="badge bg-info mx-1">
                                            Frontend Developer
                                        </span>
                                        <span className="badge bg-info mx-1">
                                            Backend Developer
                                        </span>
                                        <span className="badge bg-info mx-1">
                                            Database Administrator
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <h5>Desired Positions:</h5>
                                    <div className="mx-2">
                                        <span className="badge bg-success mx-1">
                                            Fullstack Developer
                                        </span>
                                        <span className="badge bg-success mx-1">
                                            Software Designer
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex-grow-1 p-2">
                {/* Current Team */}
                <div className="col ps-0">
                    <div className="card h-100 rounded-0">
                        {/* Card Header */}
                        <div className="card-header d-flex justify-content-between">
                            <div>Current Team</div>
                        </div>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            {/* List Group For Offer */}
                            <div className="list-group list-group-flush">
                                {/* Team Member 1 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Anthon Mapp</h5>
                                        <small>Expert</small>
                                    </div>
                                    <small>Frontend Web Dev</small>
                                </a>

                                {/* Team Member 2 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Alica Martin</h5>
                                        <small>Expert</small>
                                    </div>
                                    <small>Backend Web Dev</small>
                                </a>

                                {/* Team Member 3 */}
                                <Link
                                    to="/employee"
                                    className="list-group-item list-group-item-action"
                                >
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Jewel Santana</h5>
                                        <small>Intern</small>
                                    </div>
                                    <small>Fullstack Developer</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggested Team Card */}
                <div className="col pe-0">
                    <div className="card h-100 rounded-0">
                        {/* Card Header */}
                        <div className="card-header">Suggested Team</div>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            {/* Accordion Control */}
                            <div
                                className="accordion accordion-flush"
                                id="pastJobs"
                            >
                                {/* Item 1 */}
                                {suggestedTeam?.map((member, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 
                                            className="accordion-header"
                                            id={`heading${index}`}
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${index}`}
                                            >
                                                <div className="d-flex flex-column">
                                                    <h6>{member.firstName} {member.lastName}</h6>
                                                    <small>{member.occupation}</small>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index}`} 
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading${index}`}
                                            data-bs-parent="#pastJobs"
                                        >
                                            <div className="accordion-body">
                                                <p>Level: {member.level}</p>
                                                <p>Desired Salary: ${member.desiredSalary}/mo.</p>
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-success me-2"
                                                    >
                                                        Invite
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                    >
                                                        Decline
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer d-flex justify-content-evenly">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                            >
                                Refactor
                            </button>
                            <Link
                                to="/form"
                                type="button"
                                className="btn btn-outline-secondary"
                            >
                                Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;
