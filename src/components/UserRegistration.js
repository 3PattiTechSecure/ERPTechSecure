import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import UserHeader from "./UserHeader";
import Sidemenu from "./Sidemenu";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
// import SubHeadLogo from './SubHeadLogo'
const defaultImageSRC = "dist/img/user.png";
const initialFieldValues = {
  // Code:0,
  User_ID: '',
  User_Name: '',
  Password: '',
  User_Type: '',
  Email_ID: '',
  MobileNo: '',
  //Status:1,
  ImageName: '',
  imageSrc: defaultImageSRC,
  ImageFile: null
  //    userImage:null
}


function UserRegistration() {
  
  const [values, setValues] = useState(initialFieldValues)
  const [errors, setErrors] = useState({})
  const [sUserType,setUserType]=useState();
  const [userTypeData,setuserTypeData]=useState([]);
  const [selecteduserTypeOption,setSelecteduserTypeOption]=useState('');
  const [departmentData,setDepartmentData]=useState([]);
const [selectedDepartmentOption,setSelectedDepartmentOption]=useState('');


async function  fetchUserType(){
  const res=await fetch('https://localhost:44374/GetUserType')
        
        res.json().then(json=>{
            console.log(json)
            setuserTypeData(json.readUserTypeData)
})
}
async function  fetchDepartment(){
  const res=await fetch('https://localhost:44374/GetDepartment')
        
        res.json().then(json=>{
            console.log(json)
            setDepartmentData(json.readDepartmentData)
})
}

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value

    })
  }
//   const handleSelect = e =>{
//     let sValue=e.target.value;
//   setValues(
//     {
// ...values,
// sValue
//  }
//   )
//   console.log(values.User_Type);
//   }
  const showPreview = e => {
    if (e.target.files && e.target.files[0]) {
      let ImageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setValues(
          {
            ...values,
            ImageFile,
            imageSrc: x.target.result
          }
        )
      }
      reader.readAsDataURL(ImageFile)

    }
    else {
      setValues(
        {
          ...values,
          ImageFile: null,
          imageSrc: defaultImageSRC
        }
      )
    }
  }

  const handleChange=(e)=>{
    
    
    setSelecteduserTypeOption(e.target.value);
    //fetchDepartment(e.target.value);
  }
  const handleDeptChange=(e)=>
  {
    setSelectedDepartmentOption(e.target.value);
  }

 useEffect(()=>
                {
                  resetForm();
                  
                  fetchUserType();
                  fetchDepartment();

                },[]);



  const validate = () => {
    let Isproceed = true;
    let errormessage = 'Please enter the value in '
    if (values.User_ID === "" || values.User_ID === null) {
      Isproceed = false;
      errormessage += 'User ID';
    }
    if (values.User_Name === "" || values.User_Name === null) {
      Isproceed = false;
      errormessage += 'User Name';
    }
    if (values.Password === "" || values.Password === null) {
      Isproceed = false;
      errormessage += 'Password';
    }
    if (values.MobileNo === "" || values.MobileNo === null) {
      Isproceed = false;
      errormessage += ' Mobile No.';
    }
    if (values.Email_ID === "" || values.Email_ID === null) {
      Isproceed = false;
      errormessage += ' Email ID';
    }
    if( values.ImageFile === null||values.ImageFile==="")
    {
      Isproceed = false;
      errormessage += ' Profile Pic';
    }
    if(!Isproceed)
    {
      alert(errormessage);
    }
    else
    {
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.Email_ID)){

      }
      else if(/^\d{10}$/.test(values.MobileNo))
      {

      }
      else
      {
        if(values.MobileNo.length !==10)
{
  Isproceed=false;
  alert('Mobile No. must be exactly 10 digits.')
}
else{
        Isproceed=false;
        alert('Please enter valid Email Id')
      }}

    }
    return Isproceed;

    
  }
  const resetForm = () => {

    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    
  }

 
  const handleFormSubmit = e => {
    e.preventDefault()
    if (validate()) {
      const formData = new FormData()
      //formData.append('Code',values.Code);
      formData.append('User_ID', values.User_ID)
      formData.append('UserName', values.User_Name)
       formData.append('Password', values.Password)
    //  formData.append('User_Type', values.User_Type)
    formData.append('User_Type', selecteduserTypeOption)
    formData.append('DeptCode', selectedDepartmentOption)
      formData.append('Email_ID', values.Email_ID)
      formData.append('MobileNo', values.MobileNo)
      formData.append('ImageName', values.ImageName)
      formData.append('ImageFile', values.ImageFile)
      // formData.append('Status',1);

////////////
const url = "https://localhost:44374/UserRegistraion";
    axios.post(url, formData).then((result) => {
      //console.log(result.formData);
      if(result.status===200)
      {
        alert('Record Saved..')
      }
      else
      {
        alert('Something went wronge.. ');
      }

      //onSuccess(result);
resetForm();
    })
      .catch(err => console.log(err))

    }
  }
  
  return (
    <>
      
      
      <div>
<UserHeader/>
            <Sidemenu/>

        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Add User</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active"><Link to="/userregistration">Add User</Link></li>
                  </ol>
                </div>
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* SELECT2 EXAMPLE */}
              <div className="card card-default">
                {/* <div className="card-header">
          
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times" />
            </button>
          </div>
        </div> */}
                {/* /.card-header */}
                {/* onSubmit={handlesubmit} */}
                <form className="card-body" >
                  {/* onSubmit={handleFormLogin} */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Profile Pic</label>
                        <div >
                        {/* card-img-top   */}
                          <img style={{ height: '120px', width: '110px' }} src={values.imageSrc} className="brand-image img-circle elevation-3" />
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <input type="file" accept="image/*" className={"form-control-file" }
                        //+ applyErrorClass('imageSrc')}
                          onChange={showPreview}
                          id="image-uploader" />

                      </div>
                      {/* /.form-group */}

                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>User ID</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input autoComplete="Off" className={"form-control form-control-border"}
                          // + applyErrorClass('User_ID')}
                            placeholder="User ID" name="User_ID"
                            value={values.User_ID}
                            onChange={handleInputChange}
                          //onChange={e=>User_IDChange(e.target.value)}

                          />
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>User Name</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input type="text" autoComplete="Off" className={"form-control form-control-border" }
                          //+ applyErrorClass('User_ID')}
                            placeholder="User Name" name="User_Name"
                            value={values.User_Name}
                            onChange={handleInputChange}
/>
                        </div>

                      </div>
                      {/* /.form-group */}

                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mobile No.</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input autoComplete="Off" className={"form-control form-control-border" }
                          //+ applyErrorClass('MobileNo')}
                            placeholder="Mobile No." name="MobileNo"
                            value={values.MobileNo}
                            onChange={handleInputChange}
                          //onChange={e=>MobileNoChange(e.target.value)}

                          />
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>Email ID</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input autoComplete="Off" type="text" className={"form-control form-control-border" }
                          //+ applyErrorClass('Email ID')}
                            placeholder="Email ID" name="Email_ID"
                            value={values.Email_ID}
                            onChange={handleInputChange}
                          // onChange={e=>Email_IDChange(e.target.value)}

                          />
                        </div>

                      </div>
                      <div className="form-group">
                        <label>Department</label><span className="errmsg">*</span>
                        <div class="form-group">
                        <div class="form-group">
                        <select className="form-control select2" style={{width: '83%'}} 
                        value={selectedDepartmentOption} onChange={handleDeptChange}>
                <option value="">Select Depatment</option>
                {
                  departmentData && departmentData.length>0
            ?
            departmentData.map((item,i)=>{
                return(
                  //companyData.map((item)=>(
                    <option key={item.code} value={item.code}>{item.deptName}</option>
                  )
            })
            :"No Data Found"
        }
                  
                  
                </select>
                        </div>

                        </div>

                      </div>
                      {/* /.form-group */}

                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Password</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input autoComplete="Off" type="Password" className={"form-control form-control-border" }
                          //+ applyErrorClass('Password')}
                            placeholder="Password" name="Password"
                            value={values.Password}
                            //onChange={e=>PasswordChange(e.target.value)}
                            onChange={handleInputChange}
                          />
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>User Type</label>
                        <div class="form-group">
                           {/* <select value={sUserType} className="form-control select2" onChange={e=>setUserType(e.target.value)} style={{width: '100%'}} > */}
                           <select className="form-control select2" style={{width: '83%'}}
                            value={selecteduserTypeOption} onChange={handleChange}>
                <option value="">Select Type</option>
                {
                  userTypeData && userTypeData.length>0
            ?
            userTypeData.map((item,i)=>{
                return(
                  //companyData.map((item)=>(
                    <option key={item.userTypeId} value={item.userTypeId}>{item.userType}</option>
                  )
            })
            :"No Data Found"
        }
                  
                  
                </select>
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        &nbsp;
                        <div class="form-group">
                        <div class="input-group-prepend">
                        <button onClick={handleFormSubmit} class="btn btn-primary">Save</button> &nbsp;
                        <button  class="btn btn-primary">Cancel</button> &nbsp;

                        {/* <button  onClick={handleFormSubmit} className="btn-click">Save</button> */}
                      </div>
                        </div>

                      </div>
                      
                    </div>
                    {/* ------ */}
                    
                    {/* /.col */}
                  </div>
                  {/* /.row */}





                  {/* /.row */}
                </form>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>

      </div>

    </>
  )
}
export default UserRegistration;