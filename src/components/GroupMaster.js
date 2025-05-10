import React,{ use, useEffect, useState } from 'react'
import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import UserHeader from './UserHeader'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function GroupMaster() {
  const [isNewVisible,setNewVisible] = useState(false);
    const handleExit=()=>
        {
          setNewVisible(false);
          //setDataVisible(false);
        }
        const handleNew=()=>
          {
            setNewVisible(true);
          }
  return (
    <>
    <UserHeader/>
                <Sidemenu/>
                <div className="content-wrapper">
    <section className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1>Account Groups Master</h1>
                    </div>
                    
                  </div>
                </div>
              </section>
              
                <div className="container text-center">
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className='container'>
  <div className='card'>
  
  
  {/* ------------- */}
  
  {/* main-header */}
        <nav className=" navbar navbar-expand ">
                  {/* Left navbar links */}
                  
                  <ul className="navbar-nav">
                    
                    {/*  */}
                    
                    {/* <li className="nav-item">
                      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li> */}
                    <li className="nav-item d-none d-sm-inline-block">
                    <div class="input-group-prepend">
                    <button style={{width:'71px'}}  class="btn btn-primary" 
                   onClick={()=>handleNew()}
                    >New</button> &nbsp;
                  </div></li>&nbsp;&nbsp;&nbsp;
                  <li className="nav-item d-none d-sm-inline-block">
                    <div class="input-group-prepend">
                    <button style={{width:'71px'}}  class="btn btn-primary" 
                    //onClick={()=>handleList()}
                    >List</button> &nbsp;
                  </div></li>&nbsp;&nbsp;&nbsp;
                    {/* <li className="nav-item d-none d-sm-inline-block">
                      
                      <div class="input-group-prepend">
                    <button style={{width:'71px'}}  class="btn btn-primary">Save</button> &nbsp;
                  </div>
                      
                    </li> &nbsp;&nbsp;&nbsp; */}
                    <li className="nav-item d-none d-sm-inline-block">
                    <button style={{width:'71px'}} class="btn btn-primary">Edit</button> &nbsp;
                      {/* <a href="index3.html" className="nav-link">Home</a> */}
                      {/* <Link to="/userwelcome" className="nav-link">Edit</Link>  */}
                    </li> &nbsp;&nbsp;
                    <li className="nav-item d-none d-sm-inline-block">
                      {/* <a href="index3.html" className="nav-link">Home</a> */}
                      <button  style={{width:'71px'}} class="btn btn-primary">Export</button> &nbsp;
                    </li>&nbsp;&nbsp;
                    <li className="nav-item d-none d-sm-inline-block">
                      {/* <a href="index3.html" className="nav-link">Home</a> */}
                      <button style={{width:'71px'}}  class="btn btn-primary" onClick={()=>handleExit()}>Exit</button> &nbsp;
                    </li>
                    
                    
                  </ul>
                  {/* Right navbar links */}
                  
                  
                </nav>
                <br/>
                <div className="card card-default">
      
      {/* /.card-header */}
      
      <div className="card-body">
      {/* ---------Add New ----------- */}
      {
        isNewVisible&&(
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Opt_No</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            {/* /.form-group */}
            <div className="form-group">
              <label>Opt_Date</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            <div className="form-group">
              <label>Master Name</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            {/* /.form-group */}
          </div>
          {/* /.col */}
          <div className="col-md-6">
            
            {/* /.form-group */}
            <div className="form-group">
              <label>Type Code</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            
            
            <div className="form-group">
              <label>A/c Code</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            {/* /.form-group */}
            <div className="form-group">
              <label>Class Code</label>
              <div className="select2-purple">
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
              </div>
            </div>
            <div style={{textAlign:'left'}}
           // className="form-group"
            >
            {/* <div class="input-group-prepend"> */}
                        <button  class="btn btn-primary">Save</button>&nbsp;
                        <button  class="btn btn-primary">Add Subgroup</button>
                        {/* <button  onClick={handleFormSubmit} className="btn-click">Save</button> */}
                      {/* </div> */}
          {/* /.col */}
        </div>
          </div>
          
        </div>
      )
    }
      </div>

          </div>
        
              {/* User Id is {userId.state.User_ID} */}
        
          
          </div>
          </div>
          </div>
          </div>
          </div>
        </>
  )
}
