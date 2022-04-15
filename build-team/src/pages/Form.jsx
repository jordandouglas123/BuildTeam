import { Link } from "react-router-dom";
const Form = () => {
    return (
        <div>
            <div align="center">
                <img src={require("../images/logo.PNG")} alt="" />
            </div>
            <h1 align="center">Project Requirements Form </h1>
            <div class="card w-75 mx-auto p-4 my-4">
                <form>
                    <div>
                        <label className="d-block text-center">
                            Project Description (Give a brief description of the
                            project you intend to execute.)
                        </label>
                        <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                        <br />
                        <label className="d-block text-center" htmlFor="">
                            Project Budget
                        </label>
                        <input
                            type="number"
                            data-type="currency"
                            placeholder="$100,000"
                            className="form-control"
                        />

                        <br />
                        <label className="d-block text-center" htmlFor="">
                            Desired team size (Specify the number of members you
                            think your project would require.)
                        </label>
                        <input
                            className="d-block text-center form-control"
                            type="number"
                        />
                        <br />
                        <label className="d-block text-center" htmlFor="">
                            Choose desired members (Choose the type of members
                            you would like team to consist of. ){" "}
                        </label>
                        <select className="form-control" name="" id="">
                            <option value="">Project Manager</option>
                            <option value="">System Analyst </option>
                            <option value="">Intern</option>
                            <option value="">Database Administrator</option>
                            <option value="">Software Developer</option>
                        </select>
                        <br />
                        <div align="center">
                            <Link
                                to="/employer"
                                type="button"
                                className="btn btn-primary"
                            >
                                Submit
                            </Link>{" "}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
