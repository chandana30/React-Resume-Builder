import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import JSONHTTP from '../axiosConfig';
import './Style.css'
// import { IconName} from './bootstrap-icons'
import { ArrowRight, } from 'react-bootstrap-icons';

function EducationDetails(props) {
    const [educationDetails, seteducationDetails] = useState({
        college: "",
        school:"",
        c_qualification: "",
        c_description: "",
        c_year_start:"",
        c_Year_end:"",
        s_qualification: "",
        s_description: "",
        s_year_start:"",
        s_Year_end:"",


    })
    const [collegeError, setcollegeError] = useState("")
    const validateCollege = () => {
        if (educationDetails.college) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.college)) {
                setcollegeError("");
                return true;
            }
            else {
                setcollegeError("enter College Name");
            }
        }
        else {
            setcollegeError("College name is Required");
        }
        return false;
    };

    const [schoolError, setschoolError] = useState("")
    const validateSchool = () => {
        if (educationDetails.school) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.school)) {
                setschoolError("");
                return true;
            }
            else {
                setschoolError("enter School name");
            }
        }
        else {
            setschoolError("School name is required");
        }
        return false;
    };

    const [qualificationError, setqualificationError] = useState("")
    const validateQualification = () => {
        if (educationDetails.c_qualification) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.c_qualification)) {
                setqualificationError("");
                return true;
            }
            else {
                setqualificationError("enter Qualification");
            }
        }
        else {
            setqualificationError("Qualifiaction is Required");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (educationDetails.c_description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(educationDetails.c_description)) {
                setdescError("");
                return true;
            }
            else {
                setdescError("enter description");
            }
        }
        else {
            setdescError("Description is required");
        }
        return false;
    };

    let updateUserData = (event) => {
        event.preventDefault();
        seteducationDetails({
            ...educationDetails,
            [event.target.name]: event.target.value,
        })
    }


    let navToPerson = () => {
        props.history.push('/')

    }
    let navToProjects = (event) => {
        event.preventDefault();
        validateCollege();
        validateQualification();
        validateSchool();
        validationDescription();
        if (validateCollege() && validationDescription()&& validateQualification()&& validateSchool()) {
            props.history.push('/projectDeveloped');
            props.sendData(educationDetails)
        }
    }
    return (
        <div>
            <h1>Education Details</h1>
            <hr />
            <Form className='container'>
                <div className="row">
                    <div class="col-md-4">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="College University*"
                                name='college'
                                value={educationDetails.college}
                                onChange={(event) => { updateUserData(event) }}
                            />
                            <i class="bi bi-mortarboard-fill"></i>
                            </span>
                            {collegeError && <div className="errMsg">{collegeError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy"
                            name="c_year_start"
                             value={educationDetails.c_year_start}
                             onChange={(event) => { updateUserData(event) }}
                              />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" 
                            name="c_Year_end"
                             value={educationDetails.c_Year_end}
                             onChange={(event) => { updateUserData(event) }}
                             />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Qualification*"
                            name='c_qualification'
                            value={educationDetails.c_qualification}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {qualificationError && <div className="errMsg">{qualificationError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-8">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description*"
                              name='c_description'
                              value={educationDetails.c_description}
                              onChange={(event) => { updateUserData(event) }}
                          />
                          {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div class="col-md-4">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="School*" 
                            name='school'
                            value={educationDetails.school}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        <i class="bi bi-mortarboard-fill"></i>
                        </span>
                        {schoolError && <div className="errMsg">{schoolError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy"
                            name="s_year_start"
                            value={educationDetails.s_year_start}
                            onChange={(event) => { updateUserData(event) }}
                             />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="date" placeholder="dd-mm-yyyy" 
                            name="s_Year_end"
                             value={educationDetails.s_Year_end}
                             onChange={(event) => { updateUserData(event) }}
                             />
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Qualification"
                            name='s_qualification'
                            value={educationDetails.s_qualification}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        {qualificationError && <div className="errMsg">{qualificationError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-8">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" 
                             name='s_description'
                             value={educationDetails.s_description}
                             onChange={(event) => { updateUserData(event) }}
                         />
                         {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <div className='back'>
                    <button type="button" className="btn btn-primary" onClick={navToPerson}>Back</button>
                    <button type="submit" className="btn btn-primary" onClick={navToProjects}>Next<ArrowRight /></button>
                </div>
                <div>
                <h4>Page 2</h4>
                </div>
            </Form>
        </div>
    )
}

export default withRouter(EducationDetails)
