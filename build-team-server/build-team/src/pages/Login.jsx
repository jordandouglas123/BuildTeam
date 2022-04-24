import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div
            style={{
                color: "#fff",
                background: "#63738a",
                backgroundImage: `url('${require("../images/communication.jpg")}')`,
                fontFamily: `'Roboto', sans-serif`,
            }}
        >
            <div
                style={{
                    height: "1000px",
                    width: "510px",
                    marginTop: "30px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "0px",
                    padding: "0px",
                }}
            >
                <br />
                <br />

                <form
                    id="form"
                    style={{
                        marginTop: "30px",
                        height: "700px",
                        color: "#999",
                        borderRadius: "3px",
                        marginBottom: "15px",
                        background: "#fff",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
                        padding: "30px",
                    }}
                >
                    <img
                        src={require("../images/logo.PNG")}
                        style={{ paddingLeft: "130px" }}
                    />

                    {/* EMAIL*/}

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="Email"
                            style={{
                                height: "41px",
                                width: "450px",
                                background: "#f2f2f2",
                                boxShadow: "none !important",
                                border: "none",
                                borderRadius: "3px",
                                marginBottom: "20px",
                                paddingRight: "10px",
                            }}
                            minlength="8"
                            required
                        />
                    </div>
                    {/* PASSWORD */}
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="passwrd"
                            style={{
                                height: "41px",
                                width: "450px",
                                background: "#f2f2f2",
                                boxShadow: "none !important",
                                border: "none",
                                borderRadius: "3px",
                                marginBottom: "20px",
                            }}
                            minlength="8"
                            required
                        />
                        <small>Must have at least 8 characters</small>
                    </div>

                    <Link
                        to="/employer"
                        type="button"
                        className="btn btn-primary"
                        style={{
                            marginTop: "4em",
                            marginLeft: "186px",
                            marginRight: "auto",
                            marginBottom: "auto",
                            width: "100px",
                            height: "40px",
                        }}
                    >
                        Login
                    </Link>
                </form>

                <div style={{ paddingBottom: "15px", textAlign: "center" }}>
                    Have you registered with us as yet ?{" "}
                    <a
                        href="http://localhost:3000/signup"
                        style={{ color: "white" }}
                    >
                        {" "}
                        Sign Up Now{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
