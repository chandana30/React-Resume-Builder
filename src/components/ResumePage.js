import React, { useEffect, useRef, useState } from 'react'
import JSONHTTP from '../axiosConfig';
import './resume.css'
import {useReactToPrint} from 'react-to-print'

function ResumePage(props) {
    const [resume, setresume] = useState([])
    console.log("resume",resume);
    useEffect(()=>{
        getResumeData();
    },[]);
    let getResumeData=async ()=>{
        const response= await JSONHTTP.get("resumeData");
        console.log('finalData',response);
        const fetchData=response.data;
        console.log('fetch',fetchData[0]);
        setresume(fetchData)

    }

    return (
        <div>
           { 
           resume.map((data,index)=>{
                console.log("datamap1",data);
            return(
                <div key={index} className='container'>
                    <div className='person'> 
                   <h4>{data[0].firstName} {data[0].lastName}</h4>
                    <h6>Email: {data[0].email}</h6>
                    <h6>Phone Number: {data[0].phoneNumber}</h6>
                        </div>
                   <hr />
                    <div className='row'>
                   <h3>Education Details</h3>
                   <div className='col-md-6'>
                       <h6>College:{data[1].college}</h6>
                       <h6>qualification:{data[1].c_qualification}</h6>
                       <h6>description:{data[1].c_description}</h6>
                       <h6>Start Year:{data[1].c_year_start}</h6>
                       <h6>End Year:{data[1].c_Year_end}</h6>
                   </div><br/>
                   <div className='col-md-6'>
                       <h6>School:{data[1].school}</h6>
                       <h6>qualification:{data[1].s_qualification}</h6>
                       <h6>description:{data[1].s_description}</h6>
                       <h6>Start Year:{data[1].s_year_start}</h6>
                       <h6>End Year:{data[1].s_Year_end}</h6>
                   </div>
                   </div>
                   <hr/>
                   <div className='row'>
                        <h3>Projects Developed</h3>
                        <div className='col-md-6'>
                            <h3>Project 1</h3>
                            <h6>Project Title:{data[2].title}</h6>
                            <h6>Project Title:{data[2].link}</h6>
                            <h6>Project Title:{data[2].description}</h6>
                   </div>
                   <div className='col-md-6'>
                            <h3 >Project 2</h3>
                            <h6>Project Title:{data[2].title1}</h6>
                            <h6>Project Title:{data[2].link1}</h6>
                            <h6>Project Title:{data[2].description1}</h6>
                   </div>
                   </div>
                   <hr/>
                   <div className='row'>
                   <h3>Experience Details</h3>
                   <div className='col-md-6' >
                       <h4>Experience 1</h4>
                      
                       <h6>Institution:{data[3].institution}</h6>
                       <h6>Position:{data[3].position}</h6>
                       <h6>Duration:{data[3].duration}</h6>
                       <h6>Description:{data[3].description}</h6>
                           </div>
                           <br/>
                           <div className='col-md-6'>
                           <h4>Experience 2</h4>
                       
                       <h6>Institution:{data[3].institution1}</h6>
                       <h6>Position:{data[3].position1}</h6>
                       <h6>Duration:{data[3].duration1}</h6>    
                       <h6>Description:{data[3].description1}</h6>
                           </div>
                  
                   </div>
                   <hr/>
                   <div className='row'>
                       <h3>Extra Details</h3>
                       <div className='col-md-6'>
                           <h4>Skills/Languages</h4>
                       <h6>{data[4].skill1}</h6>
                       <h6>{data[4].skill2}</h6>
                       <h6>{data[4].skill3}</h6>
                       <h6>{data[4].skill4}</h6>
                       <h6>{data[4].skill5}</h6>
                       <h6>{data[4].skill6}</h6>
                       </div>
                       <br/>
                       <div className='col-md-6'>
                           <h4>Interest</h4>
                       <h6>{data[4].interest1}</h6>
                       <h6>{data[4].interest2}</h6>
                       <h6>{data[4].interest3}</h6>
                       <h6>{data[4].interest4}</h6>
                       <h6>{data[4].interest5}</h6>
                       <h6>{data[4].interest6}</h6>
                       </div>
                   </div>
                   <div>
                       
                       </div>
                   <button className="btn btn-success btn-lg"
             onClick={() => window.print()}>
             PRINT
           </button>
                </div>
            )
           })
           
           
        } 
        </div>
    )
}

export default ResumePage
