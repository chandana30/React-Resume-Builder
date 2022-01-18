import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { ArrowRight, } from 'react-bootstrap-icons';
import { withRouter } from 'react-router-dom';


function PersonDetails(props) {
    const [personDetails, setpersonDetails] = useState({
        firstName: '',
        email: '',
        lastName: '',
        phoneNumber:"",
        website:"",
        linkdIn:"",
        github:"",
        twitter:"",
        facebook:"",
        instagram:"",
    })
    console.log('person', personDetails);
    const [firstNameError, setfirstNameError] = useState("")
    const validateFirstName = () => {
        if (personDetails.firstName) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(personDetails.firstName)) {
                setfirstNameError("");
                return true;
            }
            else {
                setfirstNameError("enter valid firstName");
            }
        }
        else {
            setfirstNameError("First Name is Requied");
        }
        return false;
    };

    const [lastNameError, setlastNameError] = useState("")
    const validatelastName = () => {
        if (personDetails.lastName) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(personDetails.lastName)) {
                setlastNameError("");
                return true;
            }
            else {
                setlastNameError("enter valid lastName");
            }
        }
        else {
            setlastNameError("Last Name is Required");
        }
        return false;
    };

    const [emailError, setemailError] = useState("")
    const validateEmail = () => {
        if (personDetails.email) {
            let regex = /^\S+@\S+$/;
            if (regex.test(personDetails.email)) {
                setemailError("");
                return true;
            }
            else {
                setemailError("enter valid Email-Id");
            }
        }
        else {
            setemailError("Email is Required");
        }
        return false;
    };
    let updateUserData = (event) => {
        // event.preventDefault();
        setpersonDetails({
            ...personDetails,
            [event.target.name]: event.target.value,
        })
    }

    let handleSubmit = (event) => {
        // event.preventDefault();
    }

    let navToEducation = (event) => {
        event.preventDefault();

        validateFirstName();
        validateEmail();
        validatelastName();
        if (validateFirstName() && validateEmail() && validatelastName()) {
            console.log('props', props);
            props.history.push('/educationDetails');
            props.sendData(personDetails)
        }


    }
    return (
        <div className='container'>
            <h1>Personal details</h1>
            <hr />
            <Form>
                <div className="row">
                    <div class="col-md-6">
                        <Form.Group>

                            <Form.Control type="text"
                                placeholder="First Name*"
                                name='firstName'
                                value={personDetails.firstName}
                                onChange={(event) => { updateUserData(event) }}
                            />
                            {firstNameError && <div className="errMsg">{firstNameError}</div>}

                        </Form.Group>
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={personDetails.email}
                                    onChange={(event) => { updateUserData(event) }}

                                />
                                <i class="bi bi-envelope-fill"></i>
                            </span>
                            {emailError && <div className="errMsg">{emailError}</div>}

                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Your Website" 
                             name='website'
                             value={personDetails.website}
                             onChange={(event) => { updateUserData(event) }}
                             />
                            <i class="bi bi-globe"></i>
                            </span>
                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Linked In" 
                            name='linkdIn'
                            value={personDetails.linkdIn}
                            onChange={(event) => { updateUserData(event) }}
                            />
                            <i class="bi bi-linkedin"></i>
                            </span>
                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="facebook"
                            name='facebook'
                            value={personDetails.facebook}
                            onChange={(event) => { updateUserData(event) }}
                             />
                            <i class="bi bi-facebook"></i>
                            </span>
                        </Form.Group>

                        <div className='back'>
                            <button type="button" className="btn btn-primary" disabled>Back</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last Name*"
                                name="lastName"
                                value={personDetails.lastName}
                                onChange={(event) => { updateUserData(event) }}
                            />
                            {lastNameError && <div className="errMsg">{lastNameError}</div>}

                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="number" placeholder="Phone Number"
                            name='phoneNumber'
                            value={personDetails.phoneNumber}
                            onChange={(event) => { updateUserData(event) }}
                             />
                            <i class="bi bi-telephone"></i>
                            </span>
                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Github" 
                            name='github'
                            value={personDetails.github}
                            onChange={(event) => { updateUserData(event) }}
                            />
                            <i class="bi bi-github"></i>
                            </span>
                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Twitter"
                            name='twitter'
                            value={personDetails.twitter}
                            onChange={(event) => { updateUserData(event) }}
                             />
                            <i class="bi bi-twitter"></i>
                            </span>
                        </Form.Group>
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Instagram" 
                            name='instagram'
                            value={personDetails.instagram}
                            onChange={(event) => { updateUserData(event) }}
                            />
                            <i class="bi bi-instagram"></i>
                            </span>
                        </Form.Group>

                        <div className='next'>

                            <button type="submit" className="btn btn-primary" onClick={navToEducation} onSubmit={handleSubmit}>Next<ArrowRight /></button>

                        </div>
                    </div>
                </div>
                <div>
                <h4>Page 1</h4>
                </div>
            </Form>
           
        </div>
    )
}

export default withRouter(PersonDetails)
