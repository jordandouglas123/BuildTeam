import "../css/dashbord.css";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const EmployeeDashboard = () => {
    const { logout, currentUser, authToken } = useAuth();
    const token = authToken;

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({});
    const [offer, setOffer] = useState({});


    const acceptedRef = useRef()

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
            "http://localhost:5000/api/employee" + currentUser.uid,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        setEmployee(res.data);
    };

    const fetchOffer = async (token) => {
        const res = await axios.get(
            "http://localhost:5000/api/employer" + employee[0]?.employerOfferID,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        setOffer(res.data);
    };

    const acceptedOffer = async(token) => {
        const res = await axios.post(
            "http://localhost:5000/api/offer" + employee[0].userId,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
                UserId: employee[0].userId,
                employerOfferId: employee[0].employerOfferID,
            }
        );
        if(res.data.ok){
            alert("Offer Accept Sent")
            window.location.reload();
        }
    }
    const declinedOffer = async(token) => {
        const res = await axios.post(
            "http://localhost:5000/api/declined" + employee[0].userId,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
                employeeUserId: employee[0].userId,
            }
        );
        if (res.data.ok) {
            alert("Offer Decline Sent")
            window.location.reload();
        }
    }

    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            fetchOffer(token);
        }
    }, [employee]);

    //console.log(employee)
    //console.log(offer);
    //console.log(authToken)

    return (
        <div className="container-fluid d-flex flex-column mt-4">
            <div className="row flex-grow-1 p-2">
                <div className="card rounded-0 p-0">
                    <div className="card-header navbar">
                        General info
                        <span>
                            Currently Logged in:{" "}
                            {employee[0]?.firstName || "Please Log in"}
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
                                    {employee[0]?.firstName}{" "}
                                    {employee[0]?.lastName}
                                </h3>
                                <h5 className="d-flex">
                                    Occupation:{" "}
                                    <p className="ms-2">
                                        {employee[0]?.occupation}
                                    </p>
                                </h5>
                                <h5 className="d-flex">
                                    Level:
                                    <p className="ms-2">{employee[0]?.level}</p>
                                </h5>
                                <p className="card-text">
                                    {employee[0]?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card rounded-0 p-0">
                    <div className="card-header">Job Based Statistics</div>
                    <div className="card-body">
                        <div className="row h-100 mb-2">
                            <div className="col">
                                <div className="d-flex justify-content-evenly mb-2">
                                    <div className="card statistic-card shadow">
                                        <h5 className="card-title m-auto">
                                            Offered
                                        </h5>
                                        <p className="card-text text-center m-auto">
                                            6
                                        </p>
                                    </div>
                                    <div className="card statistic-card shadow">
                                        <h5 className="card-title m-auto">
                                            Accepted
                                        </h5>
                                        <p className="card-text text-center m-auto">
                                            3
                                        </p>
                                    </div>
                                    <div className="card statistic-card shadow">
                                        <h5 className="card-title m-auto">
                                            Declined
                                        </h5>
                                        <p className="card-text text-center m-auto">
                                            0
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-evenly">
                                    <div className="card statistic-card text-center shadow">
                                        <h5 className="card-title m-auto">
                                            Completed
                                        </h5>
                                        <p className="card-text text-center m-auto">
                                            3
                                        </p>
                                    </div>
                                    <div className="card statistic-card text-center shadow">
                                        <h5 className="card-title m-auto">
                                            Aborted
                                        </h5>
                                        <p className="card-text text-center m-auto">
                                            0
                                        </p>
                                    </div>
                                </div>
                                <h5 className="text-center mt-4">
                                    Employer Rating
                                </h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        Excellent
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex-grow-1 p-2">
                {/* Pending Offers Card */}
                <div className="col ps-0">
                    <div className="card h-100 rounded-0">
                        {/* Card Header */}
                        <div className="card-header d-flex justify-content-between">
                            <div>Pending Offer</div>
                            <div
                                className="btn btn-outline-dark"
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Reload
                            </div>
                        </div>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            {/* List Group For Offer */}

                            {/* Accordion Control */}
                            <div
                                className="accordion accordion-flush"
                                id="pastJobs"
                            >
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="headingOne"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            {offer[0]?.name}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            {offer[0]?.description}
                                            <div className="d-flex justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success me-2"
                                                    onClick={() => {acceptedOffer()}}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    onClick={() => {declinedOffer()}}
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">View All Offers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
