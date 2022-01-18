import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { ArrowDownCircle, ArrowRight, Check2Circle,  } from 'react-bootstrap-icons';
import JSONHTTP from '../axiosConfig';
import ResumePage from './ResumePage';

function ExtraDetails(props) {
    const [extraDetails, setextraDetails] = useState({
        skill1:"",
        skill2:"",
        skill3:"",
        skill4:"",
        skill5:"",
        skill6:"",
        interest1:"",
        interest2:"",
        interest3:"",
        interest4:"",
        interest5:"",
        interest6:"",
    })


    let updateUserData = (event) => {
        event.preventDefault();
        setextraDetails({
            ...extraDetails,
            [event.target.name]: event.target.value,
        })
    }
    let navToExperience=()=>{
        props.history.push("/experienceDetails")
    }
    let submit=(event)=>{
        event.preventDefault();
        props.sendData(extraDetails);    
        props.isSubmit(true)
    }
    let getResumeData=()=>{
        props.history.push('/resumePage')

    }
    
    return (
        <div>
        <h1>Extra Details</h1>
        <hr />
        <Form>
            <div className="row">
                <h2> <Check2Circle/> Skills/Languages</h2>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 1" 
                        name='skill1'
                        value={extraDetails.skill1}
                        onChange={(event) => { updateUserData(event) }}
                        />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 2" 
                         name='skill2'
                         value={extraDetails.skill2}
                         onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 3"
                         name='skill3'
                         value={extraDetails.skill3}
                         onChange={(event) => { updateUserData(event) }}
                          />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 4"
                         name='skill4'
                         value={extraDetails.skill4}
                         onChange={(event) => { updateUserData(event) }}
                          />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 5" 
                         name='skill5'
                         value={extraDetails.skill5}
                         onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Skill 6" 
                         name='skill6'
                         value={extraDetails.skill6}
                         onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                </div>
                <div className="row">
                <h2><Check2Circle/> Interest</h2>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 1" 
                         name='interest1'
                         value={extraDetails.interest1}
                         onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 2" 
                        name='interest2'
                        value={extraDetails.interest2}
                        onChange={(event) => { updateUserData(event) }}
                        />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 3" 
                        name='interest3'
                        value={extraDetails.interest3}
                        onChange={(event) => { updateUserData(event) }}
                        />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 4"
                        name='interest4'
                        value={extraDetails.interest4}
                        onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 5" 
                        name='interest5'
                        value={extraDetails.interest5}
                        onChange={(event) => { updateUserData(event) }}
                        />
                    </Form.Group>
                </div>
                <div class="col-md-4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Interest 6"
                        name='interest6'
                        value={extraDetails.interest6}
                        onChange={(event) => { updateUserData(event) }}
                         />
                    </Form.Group>
                </div>
                </div>
                <hr/>
                <div className='back'>
                        <button type="button" className="btn btn-primary" onClick={navToExperience}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </div><br/>
                <button type="submit" className="btn btn-success" onClick={getResumeData}>Download Resume  < ArrowDownCircle/></button>
            </Form>
           
        </div>
    )
}

export default withRouter(ExtraDetails)
