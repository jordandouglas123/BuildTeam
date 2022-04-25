const EmployerComp = () => {
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
        </div>
    );
}
 
export default EmployerComp;