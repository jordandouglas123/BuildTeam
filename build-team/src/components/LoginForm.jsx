import "../css/loginform.css";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
    const { login, currentUser } = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const employeeRef = useRef();
    const employerRef = useRef();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (employeeRef.current.checked) {
                await login(emailRef.current.value, passwordRef.current.value);
                navigate("/employee");
            } else if (employerRef.current.checked) {
                await login(emailRef.current.value, passwordRef.current.value);
                navigate("/employer");
            }
        } catch (error) {
            alert("Invalid Credentials, please email/ password");
            console.log(error.message);
        }
        setLoading(false);
    };

    return (
        <div>
            <div className="bg">
                <div className=" form-container mx-auto ">
                    <img
                        src={require("../images/logo.PNG")}
                        className=" rounded mx-auto d-block "
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating m-3">
                            <input
                                type="email"
                                className="form-control w-100 "
                                id="Email"
                                required
                                ref={emailRef}
                            />
                            <label htmlFor="Email">Email address</label>
                        </div>
                        <div className="form-floating m-3">
                            <input
                                type="password"
                                className="form-control mb-4 w-100"
                                id="Password"
                                required
                                ref={passwordRef}
                            />
                            <label htmlFor="Password">Password</label>
                        </div>

                        <div className="form-check px-5 mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                ref={employeeRef}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                            >
                                Employee
                            </label>
                        </div>

                        <div className="form-check px-5 mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                ref={employerRef}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                            >
                                Employer
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary mb-5 w-75"
                                disabled={loading || currentUser}
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div
                        style={{
                            paddingBottom: "15px",
                            textAlign: "center",
                        }}
                    >
                        {" "}
                        Register New Account Here{" "}
                        <Link to="/signup"> SignUp </Link> |{" "}
                        <Link to="/"> Home </Link>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
}

export default LoginForm;
