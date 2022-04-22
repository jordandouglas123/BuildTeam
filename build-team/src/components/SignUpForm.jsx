import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/signupform.css";

export default function SignUpForm() {
    const employeeEmailRef = useRef();
    const employeePasswordRef = useRef();
    const employerEmailRef = useRef();
    const employerPasswordRef = useRef();

    const { signup, currentUser } = useAuth();
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if(employeeEmailRef.current.value){
                await signup(employeeEmailRef.current.value, employeePasswordRef.current.value);
                navigate("/employeeform");
            }
            else{
                await signup(employerEmailRef.current.value, employerPasswordRef.current.value);
                navigate("/employerform");
            }
        } catch (error) {
            console.log(error.message)
        }
        setLoading(false);
    }

    return (
        <div>
            <div className="b d-flex align-items-center justify-content-center">
                <div className=" form-contain">
                    <img
                        src={require("../images/logo.PNG")}
                        className=" rounded mx-auto d-block"
                    />

                    {/* NAVIGATION BAR  onClick={}*/}

                    <ul className="nav nav-pills mb-3" role="tablist">
                        <li className="nav-item text-center">
                            {" "}
                            <button
                                className=" btl btn nav-link"
                                id="employee1"
                                data-bs-toggle="pill"
                                data-bs-target="#employee"
                                href="#employee"
                                role="tab"
                            >
                                Employee
                            </button>{" "}
                        </li>
                        <li className="nav-item text-center">
                            {" "}
                            <button
                                className=" btr btn nav-link"
                                id="employer1"
                                data-bs-toggle="pill"
                                data-bs-target="#employer"
                                href="#employer"
                                role="tab"
                            >
                                Employer
                            </button>{" "}
                        </li>
                    </ul>

                    {/* TAB CONTENT */}

                    <form onSubmit={ handleSubmit } noValidate>
                        <div className="tab-content">
                            {/* EMPLOYEE CONTENT */}
                            <div
                                className="tab-pane fade show m-4"
                                id="employee"
                                role="tabpanel"
                            >
                                <div>
                                    <input
                                        type="email"
                                        placeholder="something@something.com"
                                        id="Email"
                                        className="field"
                                        autoComplete="off"
                                        required
                                        ref={ employeeEmailRef }
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="Address1"
                                        className="field"
                                        required
                                        ref={ employeePasswordRef }
                                    />
                                </div>

                                {/* END OF EMPLOYEE LISTINGS */}
                            </div>

                            {/* EMPLOYER CONTENT */}
                            <div className="tab-pane fade show m-4" id="employer">
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        placeholder="something@example.com"
                                        id="cname"
                                        className="field"
                                        autoComplete="off"
                                        required
                                        ref={ employerEmailRef }
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="Password"
                                        placeholder="Enter Password "
                                        id="Address"
                                        className="field"
                                        autoComplete="off"
                                        required 
                                        ref={ employerPasswordRef }
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mb-4 w-75"
                            disabled={loading || currentUser}
                        >
                            Sign Up
                        </button>

                        <div
                            style={{
                                paddingBottom: "15px",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Already have an account ?{" "}
                            <Link to="/login"> Login </Link>
                        </div>
                    </form>
                </div>
            </div>{" "}
        </div>
    );
}
