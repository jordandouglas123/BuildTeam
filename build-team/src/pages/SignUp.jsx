import "../css/signupform.css";

const SignUp = () => {
  
 
  return (
    <div className="b">
      <div className=" form-contain mx-auto ">
        <img
          src={require("../images/logo.PNG")}
          className=" rounded mx-auto d-block  "
        />

        {/* NAVIGATION BAR  onClick={}*/}

        <ul class="nav nav-pills mb-3">
          <li className="nav-item text-center">
            {" "}
            <button
              className=" btl btn"
              id="employee1"
              data-toggle="pill"
              href="#employee"
            >
              Employee
            </button>{" "}
          </li>
          <li className="nav-item text-center">
            {" "}
            <button
              className=" btr btn"
              id="employer1"
              data-toggle="pill"
              href="#employer"
            >
              Employer
            </button>{" "}
          </li>
        </ul>

        {/* TAB CONTENT */}

        <form>
          <div className="tab-content">
            {/* EMPLOYEE CONTENT */}
            <div
              className="tab-pane fade show active m-4"
              id="employee"
              role="tabpanel"
            >
              <div className="mx-auto">
                <input
                  type="text"
                  name="last name"
                  placeholder="First Name"
                  id="FirstName"
                  className="field"
                  autocomplete="off"
                  required
                />
                <input
                  type="text"
                  name="first name"
                  placeholder="Last Name"
                  id="LastName"
                  className="field"
                  autocomplete="off"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="Email"
                  className="field"
                  minlength="8"
                  autocomplete="off"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  id="Address"
                  className="field"
                  autocomplete="off"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phonenumber"
                  placeholder="Phone Number"
                  id="phone number"
                  pattern="[0-9]{3}-[0-9]{4}"
                  className="field"
                  autocomplete="off"
                  required
                />
              </div>

              <div>
                <input
                  type="float"
                  name="salary"
                  placeholder="Salary($)"
                  id="Salary"
                  className="field"
                  required
                />
                <label for="file" className="form-label ">
                  {" "}
                  CV/Resume{" "}
                </label>
                <input
                  class="form-control form-control-sm mb-5"
                  type="file"
                  id="file"
                />
              </div>

              {/* END OF EMPLOYEE LISTINGS */}
            </div>

            {/* EMPLOYER CONTENT */}
            <div class="tab-pane fade show m-4" id="employer">
              <div className="mb-3">
                <input
                  type="text"
                  name="cname"
                  placeholder="Company Name"
                  id="cname"
                  className="field"
                  autocomplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  id="Address"
                  className="field"
                  autocomplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-3" for="description">
                  <b>Description</b>
                </label>
                <textarea
                  id="description"
                  className="fields"
                  rows="8"
                  cols="53"
                  autocomplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="file" className="form-label ">
                  {" "}
                  Company Logo{" "}
                </label>
                <input
                  class="form-control form-control-sm mb-5"
                  type="file"
                  id="file"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mb-4 w-75">
            Sign Up
          </button>

          <div style={{ paddingBottom: "15px", textAlign: "center" }}>
            {" "}
            Already have an account ?{" "}
            <a href="http://localhost:3000/login"> Login </a>
          </div>
        </form>
      </div>
    </div> // container
  );
};

export default SignUp;
