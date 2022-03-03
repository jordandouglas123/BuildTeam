const EmployerDashboard = () => {
    return (
        <div className="container-fluid d-flex flex-column mt-4">
            <div className="row flex-grow-1 p-2">
                <div className="card rounded-0 p-0">
                    <div className="card-header">General Info</div>
                    <div className="card-body">
                        <div className="row h-100 mb-2">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <h3 class="card-title">FANG Tech</h3>
                                <h5 className="d-flex">
                                    Occupation:{" "}
                                    <p className="ms-2">Web Designer</p>
                                </h5>
                                <h6 className="d-flex">
                                    Level: <p className="ms-2">Intern</p>
                                </h6>
                                <p className="card-text">
                                    Hardworking determined young lady that works
                                    well with others.
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
                                {/* Offer 1 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Company Name</h5>
                                        <small>Expert</small>
                                    </div>
                                    <small>Frontend Web Dev</small>
                                </a>

                                {/* Offer 2 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Company Name</h5>
                                        <small>Expert</small>
                                    </div>
                                    <small>Backend Web Dev</small>
                                </a>

                                {/* Offer 3 */}
                                <a className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5>Jewel Santana</h5>
                                        <small>Intern</small>
                                    </div>
                                    <small>Fullstack Developer</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job History Card */}
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
                                            Job 1
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
                                            Job 2
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
                                            Job 3
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
                        <div className="card-footer">View Full History</div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
 
export default EmployerDashboard;