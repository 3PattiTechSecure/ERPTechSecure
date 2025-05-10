
import React,{} from 'react';
import {BrowserRouter as Router,Route, Routes ,Link} from "react-router-dom";
import './App.css';
// import Header from './components/Header';

// import Sidemenu from './components/Sidemenu';
// import SubHeadLogo from './components/SubHeadLogo';
import HomeHeader from './components/HomeHeader';
import Home from './components/Home';
import Login from './components/Login';
// import UserHeader from './components/UserHeader';
import UserHome from './components/UserHome';
import UserRegistration from './components/UserRegistration';
import UserRights from './components/UserRights';
import UserWelcome from './components/UserWelcome';
import UserList from './components/UserList';
import BranchMaster from './components/BranchMaster';
import GroupMaster from './components/GroupMaster';
import SubGroupMaster from './components/SubGroupMaster';
import TestModule from './components/TestModule';
import Logout from './components/Logout';
import Footer from './components/Footer';
import Error from './components/Error'
function App() {
  return (
    <div className='wrapper'>
{/* <Header/> */}


<Router>
{/* <Header/> */}
<Routes>


<Route exact path="/" element={<Home/>}/>
<Route exact path="/homeheader" element={<HomeHeader/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/userhome" element={<UserHome/>}/>
<Route path='/userwelcome' element={<UserWelcome/>}/>
<Route path='/userregistration' element={<UserRegistration/>}/>
<Route path='/userrights' element={<UserRights/>}/>
<Route path='/userlist' element={<UserList/>}/>
<Route path='branchmaster' element={<BranchMaster/>}/>
<Route path='groupmaster' element={<GroupMaster/>}/>
<Route path='subgroupmaster' element={<SubGroupMaster/>}/>
<Route path='testmodule' element={<TestModule/>}/>
<Route path='/logout' element={<Logout/>}/>
<Route Path="/*" element={<Error/>}/> 
</Routes>
</Router>
<Footer/>
    </div>
  );
}

export default App;
