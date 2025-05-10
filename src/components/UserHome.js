import React, { useEffect } from 'react'
// import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import { useLocation,Link,useNavigate } from 'react-router-dom'
const UserHome=()=> {
  const usenavigate=useNavigate();
  //const userId=useLocation();
//   useEffect(()=>
//   {
//   let userid=sessionStorage.getItem('userID');
// if(userid===''||userid===null){
// usenavigate('/login');
// }
//   },[]);

  return (
    <>
    {/* <SubHeadLogo/> */}
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      {/* <a href="index3.html" className="nav-link">Home</a> */}
      <Link to="/" className="nav-link">Home</Link> 
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <Link href="#" className="nav-link">Logout</Link>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    
  </ul>
</nav>
    <Sidemenu/>
    <div>
      {/* User Id is {userId.state.User_ID} */}

    </div>
    </>
  )
}
export default UserHome;