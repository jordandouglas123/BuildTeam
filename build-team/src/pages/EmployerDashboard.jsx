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
                                    Type:{" "}
                                    <p className="ms-2">
                                        Mobile Development Studio
                                    </p>
                                </h5>
                                <p className="card-text text-center">
                                    FANG is a moblie development studio that has
                                    produced multiple to industry standard apps
                                    including three top ten trending apps. We
                                    are currently looking for a team that
                                    develop our first Fullstack Progressive Web
                                    app. We currently with a well put together
                                    team we can deliver and app that would
                                    revolutionize how we interact in Trinidad
                                    and Tobago.
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
                                            <div className="d-flex flex-column">
                                                <h6>Mark Shang</h6>
                                                <small>Software Designer</small>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            <p>Level: Advance</p>
                                            <p>Desired Salary: $20000/mo.</p>
                                            <div className="d-flex justify-content-end">
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-success me-2"
                                                >
                                                    Invite
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Decline
                                                </button>
                                            </div>
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
                                            <div className="d-flex flex-column">
                                                <h6>Elton John</h6>
                                                <small>
                                                    Database Administrator
                                                </small>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#pastJobs"
                                    >
                                        <div className="accordion-body">
                                            <p>Level: Expert</p>
                                            <p>Desired Salary: $12500/mo.</p>
                                            <div className="d-flex justify-content-end">
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-success me-2"
                                                >
                                                    Invite
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-danger"
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer d-flex justify-content-evenly">
                            <button type="button" class="btn btn-outline-secondary">
                                Refactor
                            </button>
                            <button type="button" class="btn btn-outline-secondary">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
 
export default EmployerDashboard;