import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { ArrowRight, Check2Circle, } from 'react-bootstrap-icons';

function ExperienceDetails(props) {
    const [experience, setexperience] = useState({
        institution: "",
        position: "",
        description: "",
        duration: "",
        institution1: "",
        position1: "",
        description1: "",
        duration1: ""
    })

    const [institutionError, setinstitutionError] = useState("")
    const validationinstitution = () => {
        if (experience.institution) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.institution)) {
                setinstitutionError("");
                return true;
            }
            else {
                setinstitutionError("enter valid institution name");
            }
        }
        else {
            setinstitutionError("Required");
        }
        return false;
    };

    const [positionError, setpositionError] = useState("")
    const validationPosition = () => {
        if (experience.position) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.position)) {
                setpositionError("");
                return true;
            }
            else {
                setpositionError("enter valid position");
            }
        }
        else {
            setpositionError("Psition is Required");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (experience.description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experience.description)) {
                setdescError("");
                return true;
            }
            else {
                setdescError("enter valid description");
            }
        }
        else {
            setdescError("description is Required");
        }
        return false;
    };

    let updateUserData = (event) => {
        event.preventDefault();
        setexperience({
            ...experience,
            [event.target.name]: event.target.value,
        })
    }


    let navToExperience = () => {
        props.history.push('/projectDeveloped')
    }
    let navToExtra = (event) => {
        validationinstitution();
        validationPosition();
        validationDescription();
        if (validationinstitution() && validationPosition() && validationDescription()) {
            props.history.push('/extraDetails')
            props.sendData(experience)

        }
    }
    return (
        <div>
            <h1>Experience details</h1>
            <hr />
            <Form className='container'>
                <div className="row">
                    <h2> <Check2Circle /> Experience 1</h2>
                    <div class="col-md-4">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Institution/Organization*"
                                    name='institution'
                                    value={experience.institution}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                                <i class="bi bi-building"></i>
                            </span>
                            {institutionError && <div className="errMsg">{institutionError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Position*"
                                    name='position'
                                    value={experience.position}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                            </span>
                            {positionError && <div className="errMsg">{positionError}</div>}
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="number" placeholder="Duration"
                                name='duration'
                                value={experience.duration}
                                onChange={(event) => { updateUserData(event) }}
                            />
                        </Form.Group>
                    </div>
                    <div class="col-md-12">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Description*"
                                    name='description'
                                    value={experience.description}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                                <i class="bi bi-file-earmark-text"></i>

                            </span>
                            {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <h2>  <Check2Circle /> Experience 2</h2>
                    <div class="col-md-4">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Institution/Organization*"
                                    name='institution1'
                                    value={experience.institution1}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                                <i class="bi bi-building"></i>
                            </span>
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Position"
                                    name='position1'
                                    value={experience.position1}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                            </span>
                        </Form.Group>
                    </div>
                    <div class="col-md-4">
                        <Form.Group>
                            <Form.Control type="number" placeholder="Duration"
                                name='duration1'
                                value={experience.duration1}
                                onChange={(event) => { updateUserData(event) }}
                            />
                        </Form.Group>
                    </div>
                    <div class="col-md-12">
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text" placeholder="Description"
                                    name='description1'
                                    value={experience.description1}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                                <i class="bi bi-file-earmark-text"></i>

                            </span>
                        </Form.Group>
                    </div>
                </div>
                <div className='back'>
                    <button type="button" className="btn btn-primary" onClick={navToExperience}>Back</button>
                    <button type="button" className="btn btn-primary" onClick={navToExtra}>Next<ArrowRight /></button>
                </div>
                <div>
                    <h4>Page 4</h4>
                </div>
            </Form>
        </div>
    )
}

export default withRouter(ExperienceDetails)
