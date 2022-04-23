import "../css/dashbord.css"
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios"



const EmployeeDashboard = () => {
    const { logout, currentUser, authToken } = useAuth();
    const token = authToken;

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({});
    const [offer, setOffer] = useState({});

    const handleSignout = async () => {
        try {
            await logout();
            navigate("/login")
        } catch (error) {
            console.log(error.message)
        }
    }

    const fetchData = async (token) => {
        const res = await axios.get("http://localhost:5000/api/employee" + currentUser.uid, {
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        setEmployee(res.data)
    }

    const fetchOffer = async (token) => {
        const res = await axios.get("http://localhost:5000/api/employer" + employee.employerOfferID, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        setOffer(res.data)
    }

    useEffect(() => {
        if(token){
            fetchData(token);
        }
    }, [token])

    //console.log(employee)
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
                                <h3 className="card-title">{employee[0]?.firstName} {employee[0]?.lastName}</h3>
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
                                <div className="d-flex">
                                    <h5>Skills:</h5>
                                    <div className="mx-2">
                                        <span className="badge bg-info mx-1">
                                            HTML
                                        </span>
                                        <span className="badge bg-info mx-1">
                                            CSS
                                        </span>
                                        <span className="badge bg-info mx-1">
                                            Javascript
                                        </span>
                                        <span className="badge bg-info mx-1">
                                            React
                                        </span>
                                    </div>
                                </div>
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
                            <div>Pending Offers</div>
                            <div className="btn btn-outline-dark" onClick={() => {window.location.reload()}}>Reload</div>
                        </div>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            {/* List Group For Offer */}
                            <div className="list-group list-group-flush">
                                {/* Offer 1 */}
                                <Link
                                    to="/eview"
                                    className="list-group-item list-group-item-action"
                                >
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>FANG</h5>
                                        <small>just now</small>
                                    </div>
                                </Link>

                                {/* Offer 2 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>TT Ride Share</h5>
                                        <small>3 days ago</small>
                                    </div>
                                </a>

                                {/* Offer 3 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Prestige Holdings</h5>
                                        <small>4 days ago</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">View All Offers</div>
                    </div>
                </div>

                {/* Job History Card */}
                <div className="col pe-0">
                    <div className="card h-100 rounded-0">
                        {/* Card Header */}
                        <div className="card-header">Job History</div>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            {/* Accordion Control */}
                            <div
                                className="accordion accordion-flush"
                                id="pastJobs"
                            >
                                {/* Item 1 */}
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
                                            Apple
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            Short Job Description
                                        </div>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Google
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            Short Job Description 2
                                        </div>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="headingThree"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Netflix
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            Short Job Description 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                            View Entire Job History
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EmployeeDashboard;