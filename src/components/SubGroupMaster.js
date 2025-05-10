import React,{ use, useEffect, useState } from 'react'
import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import UserHeader from './UserHeader'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function SubGroupMaster() {
    const handleExit=()=>
        {
         
          //setDataVisible(false);
        }
  return (
    <>
        <div>
        <UserHeader/>
                <Sidemenu/>
                {/* ----------------------- */}
                <div>
              {/* User Id is {userId.state.User_ID} */}
        <div className="content-wrapper">
        <section className="content-header">
                    <div className="container-fluid">
                      <div className="row mb-2">
                        <div className="col-sm-6">
                          <h1>Accounts Schedules Master</h1>
                        </div>
                        {/* <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active"><Link to="/userregistration">Add User</Link></li>
                          </ol>
                        </div> */}
                      </div>
                    </div>{/* /.container-fluid */}
                  </section>
          
        {/* <div className="container text-center">

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className='container'>
          <div className='card'> */}
          
          
          {/* ------------- */}
          
          {/* main-header */}
                {/* <nav className=" navbar navbar-expand ">
                          
                          
                          <ul className="navbar-nav">
                            
                            
                            
                            <li className="nav-item d-none d-sm-inline-block">
                            <div class="input-group-prepend">
                            <button style={{width:'71px'}}  class="btn btn-primary" 
                            //onClick={()=>handleNew()}
                            >New</button> &nbsp;
                          </div></li>&nbsp;&nbsp;&nbsp;
                          <li className="nav-item d-none d-sm-inline-block">
                            <div class="input-group-prepend">
                            <button style={{width:'71px'}}  class="btn btn-primary" 
                            //onClick={()=>handleList()}
                            >List</button> &nbsp;
                          </div></li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item d-none d-sm-inline-block">
                              {/* <a href="index3.html" className="nav-link">Home</a> */}
                              {/* <div class="input-group-prepend">
                            <button style={{width:'71px'}}  class="btn btn-primary">Save</button> &nbsp;
                          </div> */}
                              {/* <Link to="/userwelcome" className="nav-link">New(User List)</Link>  
                            </li> &nbsp;&nbsp;&nbsp;
                            <li className="nav-item d-none d-sm-inline-block">
                            <button style={{width:'71px'}} class="btn btn-primary">Edit</button> &nbsp;
                              {/* <a href="index3.html" className="nav-link">Home</a> */}
                              {/* <Link to="/userwelcome" className="nav-link">Edit</Link>  
                            </li> &nbsp;&nbsp;
                            <li className="nav-item d-none d-sm-inline-block">
                              {/* <a href="index3.html" className="nav-link">Home</a> 
                              <button  style={{width:'71px'}} class="btn btn-primary">Export</button> &nbsp;
                            </li>&nbsp;&nbsp;
                            <li className="nav-item d-none d-sm-inline-block">
                              {/* <a href="index3.html" className="nav-link">Home</a> 
                              <button style={{width:'71px'}}  class="btn btn-primary"
                               onClick={()=>handleExit()}
                               >Exit</button> &nbsp;
                            </li>
                            
                            
                          </ul>
                          
                          
                          
                        </nav> */}
                        <div className="card card-default">
      
      {/* /.card-header */}
      
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Entry No.</label>
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
              <label>Entry Date</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            <div className="form-group">
              <label>Main Group</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            <div className="form-group">
              <label>Sub Group</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            <div className="form-group">
              <label>Parameter 5</label>
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
            {/* /.form-group */}
          </div>
          {/* /.col */}
          <div className="col-md-6">
            
            {/* /.form-group */}
            <div className="form-group">
              <label>Ledger Show BS/PNL(0=NO/1=Yes)</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            
            
            <div className="form-group">
              <label>Parameter 2</label>
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
              <label>Parameter 3</label>
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
            <div className="form-group">
              <label>Parameter 4</label>
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
            
            <div className="form-group">
              <label></label>
              <div className="select2-purple">

            
            {/* <div class="input-group-prepend"> */}
                        <button  class="btn btn-primary">Save</button>
                        {/* <button  onClick={handleFormSubmit} className="btn-click">Save</button> */}
                      {/* </div> */}
          {/* /.col */}
          </div>
        </div>
          </div>
          
        </div>
        
      </div>

          </div>
    
          </div>
            </div>
          </div>
        
        </>
  )
}
