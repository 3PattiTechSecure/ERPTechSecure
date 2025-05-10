import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import UserHeader from "./UserHeader";
import Sidemenu from "./Sidemenu";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

export default function BranchMaster() {
  return (
    <>
          <UserHeader/>
          <Sidemenu/>
          <div className="content-wrapper">
         
    <section className="content">
  <div className="container-fluid">
    {/* SELECT2 EXAMPLE */}
    <section className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1>Branch Master</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active"><Link to="/branchmaster">Branch Master</Link></li>
                      </ol>
                    </div>
                  </div>
                </div>{/* /.container-fluid */}
              </section>
    <div className="card card-default">
      
      {/* /.card-header */}
      
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Plant Name</label>
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
              <label>Branch Code</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            <div className="form-group">
              <label>TRN/GST/VAT No.</label>
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
              <label>PAN No.</label>
              <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="" name="User_ID"
                            // value={values.User_ID}
                            // onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
            </div>
            
            
            <div className="form-group">
              <label>CIN No.</label>
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
              <label>Email ID</label>
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
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        {/* <h5>Address Details</h5> */}
      
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Address (Line1)</label>
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
          
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Address (Line 2)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>RegdOffice_addr(Line 1)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Address (Line 3)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>RegdOffice_addr(Line2)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>City</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>RegdOffice_Phone/Fax</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>State</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Head-Office_addr(Line1)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Country </label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Head-Office_addr(Line2)</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Pin Code</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Head-Office_Phone/Fax</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Telephone No.</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
            <label>Bank Name</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Bank Address1</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
            <label>Bank Address 2</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label>Bank A/c No.</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
            <label>Bank_RTGS/IFSC_Code</label>
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
          <div className="col-12 col-sm-6">
            <div className="form-group">
              
            </div>
            {/* /.form-group */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6">
            <div className="form-group">
            <div class="input-group-prepend">
                        <button  class="btn btn-primary">Save</button>
                        {/* <button  onClick={handleFormSubmit} className="btn-click">Save</button> */}
                      </div>
          {/* /.col */}
        </div>
            
            </div>
            {/* /.form-group */}
          </div>
          {/* /.col */}
          
        {/* /.row */}
      </div>
      
    </div>
    
  </div>
  {/* /.container-fluid */}
</section>
</div>
    </>
    
  )
}
