import React,{ useState,useEffect } from 'react'
// import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import UserHeader from './UserHeader';
export default function UserWelcome() {
  
    const userInfoFromStorage=localStorage.getItem('userInfo')? localStorage.getItem('userInfo'):null
    //? JSON.parse(localStorage.getItem('userInfo')):null
    const [ID,setLoginId]=useState(userInfoFromStorage)
  //? JSON.parse(localStorage.getItem('userInfo')):null
    const usenavigate=useNavigate();
      //const location=useLocation();
     // const loginID=location.state?.u_id;
     //const loginID=userInfoFromStorage;
      
      useEffect(()=>
      {
      let userid=sessionStorage.getItem('userID');
     // alert(userid);
    if(userid===''||userid===null){
    usenavigate('/login');
    }
      },[]);
  return (
    <>
        {/* <SubHeadLogo/> */}
    <UserHeader/>
          
        <Sidemenu/>
        <div>
          {/* User Id is {userId.state.User_ID} */}
    <div className="content-wrapper">
    <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">Welcome to <span>TechSecurERP</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Quickly start your ERP now and set the stage for success<br/></p>
          {/* <div class="card-footer">
                      <Link class="btn btn-primary" to="/login">Get Started</Link>
                    </div> */}
          <img src="dist/img/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" style={{height:'250px',width:'350px'}}/>
        </div>
      </div>
    </div>
        </div>
        </>
  )
}
