import React,{useEffect,useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import HomeHeader from "./HomeHeader";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import SubHeadLogo from './SubHeadLogo'
//import {combineReducers,applyMiddleware} from redux;
import { connect } from 'react-redux';

import {userLoginReducer} from '../reducers/UserReducer'
import { combineReducers } from "redux";
import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from "../constants/userConstants";

const initialFieldValues={
  // Code:0,
    User_ID :'',
    // UserName:'',
    Password:''
 
   }
   const reducer = combineReducers({
    userLogin : userLoginReducer,
   }

   );
   export default function Login() {
    const navigate=useNavigate();
    const[values,setValues]=useState(initialFieldValues)
    const [errors,setErrors]=useState({})
    const [companyData,setCompanyData]=useState([]);
    const [finYearData,setFinYearData]=useState([]);
    const [selectedOption,setSelectedOption]=useState('');
    const [selectedYearOption,setSelectedYearOption]=useState('');
    const [userCode, setCode] = useState(0);
    
  async function  fetchCompany(){
    const res=await fetch('https://localhost:44374/GetCompanyData')
          
          res.json().then(json=>{
              console.log(json)
              setCompanyData(json.readCompanyData)
  })
}
async function  fetchFinYear(){
  const res=await fetch('https://localhost:44374/GetFinYear')
        
        res.json().then(json=>{
            console.log(json)
            setFinYearData(json.readFinYearData)
})
}

    useEffect(()=>{
      fetchCompany()
      fetchFinYear()
      sessionStorage.clear();
    },[]);
    const handleInputChange = e =>{
      const {name,value} = e.target;
      setValues({
        ...values,
        [name]:value
      })
    }
    const validate=()=>
      {
        let temp={}
        temp.User_ID=values.User_ID==""?false:true;
        
        
        temp.Password=values.Password==""?false:true;
        
        setErrors(temp)
        return Object.values(temp).every(x=>x==true)
      }
      const  resetForm=()=>{
        setValues(initialFieldValues)
        
        setErrors({})
      }
      const uLogin=(formData,onSuccess)=>
        {   
        //https://localhost:44374/api/UserMaster/UserRegistraion
        try{
        const url="https://localhost:44374/LoginUser";
        axios.post(url,formData).then((result)=>
       {
  
          onSuccess(result);
          //console.log(result)
        // Login.dispatch({type:USER_LOGIN_REQUEST})
        //Login.dispatch({type:USER_LOGIN_REQUEST})
          if (result.data.isSucess===true)
          {
            // Login.dispatch({
            //   type:USER_LOGIN_SUCCESS,
            //   payload:values.User_ID})
            localStorage.setItem('userInfo',values.User_ID);
            fetchUsersID();

            const u_id=values.User_ID;
            const p_word=values.Password;
            sessionStorage.setItem("userID",values.User_ID);
           navigate("/userwelcome",{state:{u_id,p_word}});
          // alert(values.User_ID)
          }
          else
          {
            if(result.data.isSucess===false)
            {
           alert('Invalid User Details')
            }
          }
          //console.log(res)
  
      
      })}
      catch(error)
      {
      //   Login.dispatch(
      //   {
      //     type:USER_LOGIN_FAIL,
      //     payload:
      //     error.response && error.response.data.message
      //     ? error.response.data.message
      //     :error.message,
      //   }
      // )

      }
      //.catch(err=>console.log(err))
        }
         const handleFormLogin=e=>
         {
           e.preventDefault()
           if(validate()){
             const formData=new FormData()
             //formData.append('Code',values.Code);
             formData.append('User_ID',values.User_ID)
             
             formData.append('Password',values.Password)
             
             //formData.append('Status',1);
             
             uLogin(formData,resetForm)
     
           } 
         }

         const handleChange=(e)=>{
          setSelectedOption(e.target.value);
          setSelectedYearOption(e.target.value);
          
        }

        async function fetchUsersID() {
          const res = await fetch('https://localhost:44374/GetUserCode?user_Id=' + values.User_ID);
          const json = await res.json();
          const uCode = json.readRecordData;
          if (uCode && uCode.length > 0) {
           // setCode(uCode[0].code);
           // fetchSelected(uCode[0].code); // Fetch user info once code is set.
          // alert(uCode[0].code)
           sessionStorage.setItem("userCode",uCode[0].code);
            //localStorage.setItem('userCode',userCode);
          }
        }
      
         const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'invalidtxt-field':'')
      // ---------------
  
  return (
    <>
  <HomeHeader/>
    {/* <SubHeadLogo/>
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      
      {/* Right navbar links */}
      
    {/* </nav> */} 
<div>
  
  
<div className="contentiner mt-2">
<div className="container text-left">
  {/* Content Header (Page header) */}
  <section className="content-header">
    {/* <div className="container-fluid">
      <div className="row mb-12">
      <div className='card-header'> */}
      <div className="row">
  <div className="col-md-12">
    <div className="card card-outline card-info">
      <div className="card-header">
      <div style={{textAlign:'center'}}>
        <h3>Login</h3>
      </div>
      </div>
        {/* <div className="col-sm-12">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active"><Link to="/login">Login Form</Link></li>
          </ol>
        </div> */}
      </div>
    </div>{/* /.container-fluid */}
    </div>
  </section>
  {/* Main content className="content" */}
  <div style={{width: '65%',paddingLeft:'450px'}}>
  <section  >
  <div className="row">
  <div className="col-md-12">
    <div className="card card-outline card-info">
      <div className="card-header">
      <form  onSubmit={handleFormLogin}>
      <label>Company Code</label>
                <select className="form-control select2" style={{width: '83%'}} value={selectedOption} onChange={handleChange}>
                <option value="">Select Company Code</option>
                {
                  companyData && companyData.length>0
            ?
            companyData.map((item,i)=>{
                return(
                  //companyData.map((item)=>(
                    <option key={item.code} value={item.code}>{item.companyName}</option>
                  )
            })
            :"No Data Found"
        }
                  
                  
                </select>
                <label>Fin Year</label>
                <select className="form-control select2" style={{width: '83%'}} 
                value={selectedYearOption} onChange={handleChange}>
                <option value="">Select Year</option>
                {
                  finYearData && finYearData.length>0
            ?
            finYearData.map((item,i)=>{
                return(
                  //companyData.map((item)=>(
                    <option key={item.code} value={item.code}>{item.desp}</option>
                  )
            })
            :"No Data Found"
        }
                  
                  
                </select>
                
                <label>User Id</label>
                
                  {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                  <input className={"form-control form-control-border"+applyErrorClass('User_ID')} 
               placeholder="User ID"  name="User_ID"
              value={values.User_ID} onChange={handleInputChange} />
              
              {/* /.form-group */}
              
                <label>Password</label>
                
                  {/* <label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label> */}
                  <input type="text"  className={"form-control form-control-border"+applyErrorClass('Password')} 
               placeholder="Password"  name="Password"
              value={values.Password} onChange={handleInputChange}/>
                <br/>
              {/* /.form-group */}
              <div class="input-group-prepend">
                    {/* <button onClick={handleFormLogin} class="btn btn-primary">Login</button> */}
                    <button class="btn btn-primary">Login</button>
                  </div>
                </form>
      </div>
      {/* /.card-header */}
      {/* <div className="card-body">
        <textarea id="summernote" defaultValue={"Place <em>some</em><u>text</u><strong>here</strong>\n"} />
      </div> */}
      
    </div>
  </div>
  {/* /.col*/}
</div>

    
    {/* /.container-fluid */}
  </section></div>
  {/* /.content */}
  </div>
</div>

</div>

    </>
  )
}
