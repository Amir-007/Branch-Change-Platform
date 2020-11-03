import React from 'react'
import './index.css'
import axios from "axios"
import {API} from '../../config'
import Session from 'react-session-api'

export default class StudentHome extends React.Component{
    constructor(){
        super();
        this.requestBranchChange=this.requestBranchChange.bind(this);
        this.viewRequest=this.viewRequest.bind(this);
    }
    requestBranchChange=()=>{
        this.props.history.push('/branchChangeRequest');
    }
    viewRequest=()=>{
        axios({
            method: 'get',
            url: `${API}/users/view-branch-application`,
            headers: {
              Accepts:'application/json',
              "Content-Type":"application/json",
              Authorization: 'Bearer '+Session.get('token')
             }
          })
          .then(response=>{
              console.log(response);
          })
    }
    render(){
        const imagePath=localStorage.getItem('imagePath');
        const name=localStorage.getItem('studentName');
        const admissionNo=localStorage.getItem('admissionNo');
        const course=localStorage.getItem('course');
        const branch=localStorage.getItem('branch');
        const branchChangeRequestSubmitted=localStorage.getItem('branchChangeRequestSubmitted')==='true';
        return(
            <div>
            <div className="box1">
                <div style={{marginLeft:"10px"}}>
                    Student Details:
                </div>
                <div className="box2">
                <div>
                <img src={`${imagePath}`} alt="Student Image" />
                </div>
                <div className="details">
                {name}<br/>{admissionNo}<br/>{course}<br/>{branch}
                </div>
                </div>
            </div><br/><br></br>
            {branchChangeRequestSubmitted ? 
            <div className="buttonSpace">
            <div>
            <button type="submit" class="btn btn-lg btn-primary" onClick={this.viewRequest}>
                View Request
            </button>
            </div><br/>
            <div>
            <button type="submit" class="btn btn-lg btn-primary disabled" disabled>
                Request Branch Change
            </button>
            </div>
            </div>
            :
            <div className="buttonSpace">
                <div>
            <button type="submit" class="btn btn-lg btn-primary disabled" disabled>
                View Request
            </button>
            </div><br/>
            <div>
            <button type="submit" class="btn btn-lg btn-primary" onClick={this.requestBranchChange}>
            Request Branch Change
            </button>
            </div>
            </div>
            }
            </div>
        )
    }
}