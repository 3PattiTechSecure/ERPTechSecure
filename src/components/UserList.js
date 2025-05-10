import React,{ useEffect, useState } from 'react'
import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import UserHeader from './UserHeader'
import { useLocation,Link,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import SubHeadLogo from './SubHeadLogo'
const defaultImageSRC = "dist/img/user.png";
const initialFieldValues = {
  // Code:0,
  user_ID: '',
  userName: '',
  password: '',
  user_Type: 0,
  email_ID: '',
  mobileNo: '',
  status:'',
  imageName: '',
  imageSrc: defaultImageSRC,
  ImageFile: null
  //    userImage:null
}


// const editInitialFieldValues = {
  
//   // Code:0,
//   user_ID: '',
//   userName: '',
//   password: '',
//   user_Type: '',
//   email_ID: '',
//   mobileNo: '',
//   status:'Y',
//   imageName: '',
//   imageSrc: defaultImageSRC,
//   ImageFile: null
//   //    userImage:null
// }

export default function UserList() {
  const [isActive,setIsActive]=useState('Y');
  const [userTypeData,setuserTypeData]=useState([]);
  const [selecteduserTypeOption,setSelecteduserTypeOption]=useState('');
  const defaultImageSRC = "dist/img/user.png";
  const [values, setValues] = useState(initialFieldValues)
  //const [editValues, setEditValues] = useState(editInitialFieldValues)
    const [showEdit, setShowEdit] = useState(false);
    const [show, setShow] = useState(false);
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => setShowEdit(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const [userEditCode, setEditUserCode] = useState(0);
    ////const[column,setColumn]=useState([]);
    const [userData,setData] =useState([]);
    //const [search,setSearch]=useState([]);
    const [userEditData,setEditData] =useState([]);
    
       let userCode=sessionStorage.getItem('userCode');
       const[LogedInUserCode,setLogedInUserCode]=useState(userCode);

    // ----------------------
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
    const handleUpdate = e => {
      e.preventDefault()

if(validate())
  
{

  const url='https://localhost:44374/UpdateAllUser?code='+values.code;
  const formData = new FormData()
        
        formData.append('User_ID', values.user_ID)
        formData.append('UserName', values.userName)
        formData.append('Password', values.password)
        formData.append('User_Type', values.user_Type)
        formData.append('Email_ID', values.email_ID)
        formData.append('UpdatedBy', LogedInUserCode)
        
        formData.append('MobileNo', values.mobileNo)
        // if(document.getElementById('image-uploader').value === null)
        // {
        //   document.getElementById('image-uploader').value = values.imageName;
        // }
        formData.append('imageSrc',values.imageSrc)
         formData.append('ImageName', values.imageName)
        // formData.append('ImageName', values.imageSrc)
         formData.append('ImageFile', values.ImageFile)

        //  formData.append('Status',values.status);
        formData.append('Status',isActive);
  axios.put(url,formData)
  .then((result)=>{
    fetchUsers();
   // resetForm();
   
    if(result.data.status===200)
    {
    alert('Record Updated..')
    
    }
    handleEditClose();
  }).catch((errors)=>{
    alert(errors)
  })
  
}    }
  
  
  
    const validate = () => {
      let Isproceed = true;
      let errormessage = 'Please enter the value in '
      
      if (values.user_ID === "" || values.user_ID === null) {
        Isproceed = false;
        errormessage += 'User ID';
      }
      if (values.userName === "" || values.userName === null) {
        Isproceed = false;
        errormessage += 'User Name';
      }
      // if (values.password === "" || values.password === null) {
      //   Isproceed = false;
      //   errormessage += 'Password';
      // }
      if (values.mobileNo === "" || values.mobileNo === null) {
        Isproceed = false;
        errormessage += 'Mobile No.';
      }
      if (values.email_ID === "" || values.email_ID === null) {
        Isproceed = false;
        errormessage += 'Email ID';
      }
      if(!Isproceed)
      {
        alert(errormessage);
      }
      else
      {
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email_ID)){
  
        }else
        {
          Isproceed=false;
          alert('Please enter valid Email Id')
        }
  
      }
      return Isproceed;
  
      
    }
    const resetForm = () => {
      setValues(initialFieldValues)
     
      document.getElementById('image-uploader').value = null;
     
    }
    //const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'invalidtxt-field' : '')
  // -------------------
  
    ///////////////////
    async function  fetchUserType(){
      const res=await fetch('https://localhost:44374/GetUserType')
            
            res.json().then(json=>{
                console.log(json)
                setuserTypeData(json.readUserTypeData)
    })
    }
    const handleChange=(e)=>{
    
    
      setSelecteduserTypeOption(e.target.value);
      //fetchDepartment(e.target.value);
      values.user_Type=e.target.value;

    }
    async function fetchUsers() {
        // try{
        
            const res=await fetch('https://localhost:44374/GetAllUser')
            //const res=await fetch('https://localhost:44374/GetAllUser?code='+4)
            res.json().then(json=>{
                
                setData(json.readRecordData)
                
            })
        
    }
    async function fetchSelected(id) {
      
      //console.log( 'Test Data :'+ userEditCode)
    // alert(id)
      const res = await fetch('https://localhost:44374/GetAllUser?code=' + id);
      const json = await res.json();
      setEditData(json.readRecordData)
     
      const row = json.readRecordData;
      //console.log(row)
      if (row && row.length > 0) {
        values.userName = row[0].userName;
        values.imageSrc=row[0].imageSrc;
        values.user_ID=row[0].user_ID;
        values.mobileNo=row[0].mobileNo;
        // values.createdBy=row[0].createdBy;
        // values.createdDate=row[0].createdDate;
        // values.updatedBy=row[0].updatedBy;
        //values.status=row[0].status;
        setIsActive(row[0].status);
        values.email_ID=row[0].email_ID;
        values.user_Type=row[0].user_Type;
       // values.ImageFile= row[0].imageSrc;
       // values.imageName= row[0].imageName;
       // document.getElementById('image-uploader').value = values.imageName
        values.code=id;
        setEditUserCode(values.code)
 // console.log(document.getElementById('image-uploader').value)
       // setName(userName); // Update the user name after fetching.
        //setPic(pic);
       // setLogedInUserCode(id);
        
      }
    }        
           
    


                useEffect(()=>
                {
                  fetchUserType();
                  fetchUsers();

                },[]);

                const handleEdit =(id)=>
                {//const {id}=useParams();
                  setEditUserCode(id);
     //console.log();
                
                  handleEditShow();
                  fetchSelected(id);
                  //if(window.confirm('Are U Sure to delete this user')===true)
                   // alert(id)
                }
                
               
                
                const handleDetail=(id)=>
                {
                  
                  handleShow();
                  fetchSelected(id);
            
                }

                  const handleInputChange = e => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value
                    })
                    
                  }
                const handleActiveChange=(e)=>
                {
                  //console.log(isActive)
                  if(e.target.checked){
                   setIsActive('Y');
                  //values.status='Y'
                  }
                  else{
                     setIsActive('N');
                   //values.status='N'
                  }
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
    <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className='container'>
      <div className='card'>
      <div className='card-header'>
        <h3>User List</h3>
      </div><div><Link to="">Export</Link></div>
      <div className='card-body'>

    
      <br/>
        <table className='table table-bordered'>
        <thead className='bg-dark text-white'>
            <tr>
                {/* <th>Code</th> */}
                <th></th>
                <th>User ID</th>
                {/* <th>User Name</th>
                <th>Email ID</th>
                <th>Mobile No</th> */}
                <th>User Type</th>
                <th>Status</th>
                <th>Option</th>

            </tr>
        </thead>
        <tbody>
        {
            userData && userData.length>0
            ?
            userData.map((item,i)=>{
                return(
                    <tr key={i}>
                    <td>{i+1}</td>
                        {/* <td>{item.code}</td> */}
                        <td>{item.user_ID}</td>
                        {/* <td>{item.userName}</td>
                        <td>{item.email_ID}</td>
                        <td>{item.mobileNo}</td> */}
                        <td>{item.user_Type}</td>
                        <td>{item.status}</td>
                        <td colSpan={2}><button className='button btn-primary'
                         onClick={()=>handleEdit(item.code)}>Edit</button> &nbsp;
                        {/* <button className='button btn-danger' onClick={()=>handleDelete(item.code)}>View Detail</button> */}
                        <button className='button btn-danger' onClick={()=>handleDetail(item.code)}>View Detail</button>
                        </td>
                    </tr>
                )
            })
            :"No Data Found"
        }
           </tbody>
        
        </table>
      </div> 
      <Modal id="MEdit" show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>      <div style={{textAlign :"left"}}>
        <form className="card-body" >
                  {/* onSubmit={handleFormLogin} */}
                  
                    {/* { */}
                   
                   
                  {/* userEditData.map(eData=>{ */}
                  {/* search.map(eData=>{
                   return(  */}
                
                      <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Profile Pic</label>
                        <div >
                        {/* card-img-top   */}
                          {/* <img style={{ height: '120px', width: '110px' }} src={eData.imageSrc} */}
                          <img style={{ height: '120px', width: '110px' }} src={values.imageSrc}
                           className="brand-image img-circle elevation-3" />
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
                          <input type="text" autoComplete="Off" className={"form-control form-control-border" }
                            placeholder="User ID" name="user_ID"
                            value={values.user_ID}
                            onChange={handleInputChange}

                            />
                            
                        </div>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>User Name</label><span className="errmsg">*</span>
                        <div class="form-group">
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          <input type="text" className={"form-control form-control-border" }
                          //+ applyErrorClass('User_ID')}
                            placeholder="User Name" name="userName"
                            // value={eData.userName}
                            value={values.userName}
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
                            placeholder="Mobile No." name="mobileNo"
                            value={values.mobileNo}
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
                            placeholder="Email ID" name="email_ID"
                            value={values.email_ID}
                            onChange={handleInputChange}
                          // onChange={e=>Email_IDChange(e.target.value)}

                          />
                        </div>

                      </div>
                      {/* /.form-group */}

                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Status</label>
                        
                          {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                          {/* <input type='radio' name="Status" value={values.status} id="AStatus" 
                          checked={values.status=== 1 ?true:false} onChange={(e)=>setIsActive(e)}/><label>Active</label>
                          <input type='radio' name="Status" value={values.status} id="NStatus"
                           checked={values.status===0 ? true:false} onChange={(e)=>handleActive(e)}/><label>Inactive</label> */}
                           &nbsp;&nbsp;
                        <input type="checkbox" 
                        checked={isActive === 'Y' ? true : false}
                        //checked={values.status === 'Y' ? true : false}
                        // value={values.status} 
                         value={isActive}
                          onChange={(e)=>handleActiveChange(e)}
                        />&nbsp;&nbsp;<label>IsActive</label>

                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>User Type</label>
                        <div class="form-group">
                           {/* <select value={values.user_Type} className="form-control select2" 
                           onChange={handleInputChange} style={{width: '100%'}} >
                  <option value={"Admin"} >Admin</option>
                  <option value={"Client"} >Client</option>
                  <option value={"Sales"} >Sales</option>
                  <option value={"IT"} >IT</option>
                </select> */}
                <select className="form-control select2" style={{width: '83%'}}
                           // value={selecteduserTypeOption}
                             value={values.user_Type} 
                            onChange={handleChange}>
                <option value="">Select Type</option>
                {
                  userTypeData && userTypeData.length>0
            ?
            userTypeData.map((item,i)=>{
                return(
                  //companyData.map((item)=>(
                    <option key={item.userTypeId} 
                     value={item.userTypeId}
                   // value={values.user_Type}
                    >{item.userType}</option>
                  )
            })
            :"No Data Found"
        }
                  
                  
                </select>
                        </div>

                      </div>
                      
                    </div>
                    {/* /.col */}
                  </div>

                {/* )
                    })} */}
            
                  {/* /.row */}
                </form>

</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal id="MShow" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
           <div style={{textAlign :"left"}}>
      
      <ul className="todo-list" data-widget="todo-list">
      {
        userEditData.map(sData=>{
                   //search.map(sData=>{
                     return(  
                      <li key={sData.code}>
<div >

                 <img style={{ height: '120px', width: '110px' }} src={sData.imageSrc} className="brand-image img-circle elevation-3"  />
               </div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>User Name</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.userName}</span></div>
{/* ------------- */}
<div style={{Width:"10%"}}>

</div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>User ID</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.user_ID}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Email ID</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.email_ID}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Mobile No.</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.mobileNo}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Created By</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.createdBy}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Created Date</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.createdDate}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Updated By</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.updatedBy}</span></div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>Updated Date</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.updatedDate}</span></div>
<h6>Status</h6>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.status}</span></div>
<h6>User Type</h6>
<div style={{Width:"50%",textAlign:"center"}}><span className="text">{sData.user_Type}</span></div>
</li>

 )})
      
      }
</ul>
</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      </div>

      </div>
        </div>
      </div>
    </div>
        </div>
    {/* ---------------------------- */}
      
    </div>
    </>
  )
}
