import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function EmployerForm() {

    const { currentUser } = useAuth();
    const uid = currentUser?.uid;
    const [employerUid, setEmployerUid] = useState();
    const [loading, setLoading] = useState(false);

    const nameRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios
            .post("http://localhost:5000/api/employers", {
                userId: employerUid,
                name: nameRef.current.value,
                type: typeRef.current.value,
                description: descriptionRef.current.value,
                budget: 0,
            })
            .then((res) => {
                if (res.data.ok) {
                    navigate("/employer");
                }
            });
        setLoading(false);
    }

    useEffect(() => {
        setEmployerUid(uid);
    }, []);

  return (
    <div>
        <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "480px"}}>
                <div className='card mb-5 shadow'>
                    <div className='card-body'>
                        <img src={require("../images/logo.PNG")} className=" rounded mx-auto d-block"/>
                        <h3 className='text-center mb-4'>Employer Detail Form</h3>
                        <form onSubmit={handleSubmit}>

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control me-2" placeholder="Company Name" ref={ nameRef }/>
                           </div> 

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control" placeholder="Type" ref={ typeRef }/>
                           </div> 
 
                           <div className='input-group mb-3'>
                               <textarea type="text" className="form-control" placeholder="Please Describe Your Company" rows="4" ref={ descriptionRef }/>
                           </div>

                           <button type="submit" className="w-100 btn btn-primary mb-3" disabled={loading}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployerForm