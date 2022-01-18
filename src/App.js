import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import EducationDetails from './components/EducationDetails';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import PersonDetails from './components/PersonDetails';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JSONHTTP from './axiosConfig';
import ResumePage from './components/ResumePage';

// import { IconName} from 'bootstrap-icons/bs'


function App() {

  const [submit, setsubmit] = useState()
  let isSubmit = (recived)=>{
    setsubmit(recived)
  }


const [resumeData, setresumeData] = useState([])
let sendData=(Data)=>{
let allDataCopy=[...resumeData];
allDataCopy.push(Data);
setresumeData(allDataCopy)

console.log('data',allDataCopy);
}


useEffect(()=>{
  fetchProducts();
  console.log("useeffect");
},[submit]);

let fetchProducts= async()=>{
  try{
      const response= await JSONHTTP.post("resumeData",resumeData);
      console.log(response.data);
      if(response.data.error) {
          const errMessage=response.data.message;
      }
      else{
          const fetchedProducts=response.data.allDataCopy;
      }
  }catch(err)
  {
      console.log(err);
  }
};

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/'>
      <PersonDetails sendData={sendData}/>
      </Route>
      <Route  path='/educationDetails'>
      <EducationDetails sendData={sendData} />
      </Route>
      <Route  path='/projectDeveloped'>
      <ProjectsDeveloped sendData={sendData} />
      </Route>
      <Route path='/experienceDetails'>
      <ExperienceDetails sendData={sendData}/>
      </Route>
      <Route  path='/extraDetails'>
      <ExtraDetails sendData={sendData} isSubmit={isSubmit} />
      </Route>
      <Route path='/resumePage'>
        <ResumePage />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
