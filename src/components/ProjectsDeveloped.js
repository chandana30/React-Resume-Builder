import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { ArrowRight, } from 'react-bootstrap-icons';
import { withRouter } from 'react-router-dom';


function ProjectsDeveloped(props) {
    const [projects, setprojects] = useState({
        title:"",
        link:"",
        description:"",
        title1:"",
        link1:"",
        description1:"",

    })
    const [titleError, settitleError] = useState("")
    const validationTitle = () => {
        if (projects.title) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projects.title)) {
                settitleError("");
                return true;
            }
            else {
                settitleError("enter valid title");
            }
        }
        else {
            settitleError("Required");
        }
        return false;
    };

    // const [linkError, setlinkError] = useState("")
    // const validationLink = () => {
    //     if (projects.link) {
    //         let regex = /^[a-zA-Z ]{2,30}$/;
    //         if (regex.test(projects.link)) {
    //             setlinkError("");
    //             return true;
    //         }
    //         else {
    //             setlinkError("enter valid link");
    //         }
    //     }
    //     else {
    //         setlinkError("Required");
    //     }
    //     return false;
    // };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (projects.description) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projects.description)) {
                setdescError("");
                return true;
            }
            else {
                setdescError("enter valid description");
            }
        }
        else {
            setdescError("Required");
        }
        return false;
    };

    let updateUserData = (event) => {
        event.preventDefault();
        setprojects({
            ...projects,
            [event.target.name]: event.target.value,
        })
    }


    
    let navToEducation=()=>{
        props.history.push('/educationDetails')
    }
    let navToExperience=(event)=>{
        event.preventDefault();
        validationDescription();
       
        validationTitle();
        if(validationTitle()&& validationDescription()){
            props.history.push('/experienceDetails');
            props.sendData(projects);
        }
        
    }
    return (
        <div>
             <h1>Project Details</h1>
            <hr />
            <Form className='container'>
                <div className="row">
                    <h2>Project 1</h2>
                    <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Title*" 
                            name='title'
                            value={projects.title}
                            onChange={(event) => { updateUserData(event) }}
                        />
                        <i class="bi bi-fonts"></i>
                        </span>
                        {titleError && <div className="errMsg">{titleError}</div>}
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Link*" 
                           name='link'
                           value={projects.link}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       <i class="bi bi-link"></i>
                       </span>
                       {/* {linkError && <div className="errMsg">{linkError}</div>} */}
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Description*" 
                           name='description'
                           value={projects.description}
                           onChange={(event) => { updateUserData(event) }}
                       />
                       <i class="bi bi-file-earmark-text"></i>
                       </span>
                       {descError && <div className="errMsg">{descError}</div>}
                        </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                    <h2>Project 2</h2>
                    <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Title" 
                            name='title1'
                            value={projects.title1}
                            onChange={(event) => { updateUserData(event) }}
                            />
                            <i class="bi bi-fonts"></i>
                            </span>
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Link"
                             name='link1'
                             value={projects.link1}
                             onChange={(event) => { updateUserData(event) }}
                             />
                             <i class="bi bi-link"></i>
                            </span>
                        </Form.Group>
                        </div>
                        <div class="col-md-12">
                        <Form.Group>
                        <span className='input-group'>
                            <Form.Control type="text" placeholder="Description"
                             name='description1'
                             value={projects.description1}
                             onChange={(event) => { updateUserData(event) }}
                             />
                             <i class="bi bi-file-earmark-text"></i>
                             </span>
                        </Form.Group>
                        </div>
                        <div className='back'>
                        <button type="button" className="btn btn-primary" onClick={navToEducation}>Back</button>
                        <button type="submit" className="btn btn-primary" onClick={navToExperience} >Next<ArrowRight /></button>
                    </div>
                    </div>
                    <div>
                <h4>Page 3</h4>
                </div>
            </Form>
        </div>
    )
}

export default withRouter(ProjectsDeveloped)
