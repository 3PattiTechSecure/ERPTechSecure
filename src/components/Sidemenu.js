import React,{useEffect,useState} from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { useSelectorWith } from 'use-selector-with'

function Sidemenu() {
  const [uName, setName] = useState('');
  const [pic,setPic]=useState('');
  const [deptCode,setDeptCode]=useState(0);
  const [deptName,setDeptName]=useState('');
  const [userCode, setCode] = useState(0);
  const location = useLocation();
  const loginID = location.state?.u_id;
  //const [ID, setLoginId] = useState(loginID);
  
  const userInfoFromStorage=localStorage.getItem('userInfo')? localStorage.getItem('userInfo'):null
  //? JSON.parse(localStorage.getItem('userInfo')):null
  const [ID,setLoginId]=useState(userInfoFromStorage)
  
  async function fetchSelected(userCode) {
    const res = await fetch('https://localhost:44374/GetAllUser?code=' + userCode);
    const json = await res.json();
    const row = json.readRecordData;
    console.log(row)
    if (row && row.length > 0) {
      const userName = row[0].userName;
      const pic=row[0].imageSrc;
      const deptId=row[0].deptId;

      setName(userName); // Update the user name after fetching.
      setPic(pic);
      setDeptCode(deptId);

    }
  }

  async function fetchUsersID() {
    const res = await fetch('https://localhost:44374/GetUserCode?user_Id=' + ID);
    const json = await res.json();
    const uCode = json.readRecordData;
    if (uCode && uCode.length > 0) {
      setCode(uCode[0].code);
      fetchSelected(uCode[0].code); // Fetch user info once code is set.
      localStorage.setItem('userCode',userCode);
    }
  }
  //https://localhost:44374/GetDepartment
  async function fetchDept() {
    const res = await fetch('https://localhost:44374/GetDepartment?code=' + deptCode);
    const json = await res.json();
    const Code = json.readDepartmentData;
    if (Code && Code.length > 0) {
      setDeptName(Code[0].deptName);
     // fetchSelected(Code[0].code); // Fetch user info once code is set.
    }
  }

  useEffect(() => {
    if (ID) {
      fetchUsersID(); // Call the function to fetch user data on component mount.
      fetchDept();
    }
  }, [ID]); // Ensure this runs whenever the ID changes.

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/home" className="brand-link">
          <img src="dist/img/favicon.png" alt=" Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">TechSecurERP</span>
        </Link>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional)dist/img/user2-160x160.jpg */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
            {/* "https://localhost:44374/Images/testimonia250015624.jpg" */}
              <img src={pic} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <span style={{ color: 'white' }}>
                {uName ? uName : 'Loading...'} {/* Render user name or loading state */}
              </span>&nbsp;
              <span style={{ color: 'white' }}>
               - {deptName ? deptName : 'Loading...'} {/* Render user name or loading state */}
              </span>
            </div>

    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
         <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
               Administrator
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                <p>User Master</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <Link to="/userregistration" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Add User
              <i className="right fas fa-angle-left" />
            </p>
          </Link></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
        <Link to="/userrights" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              User Rights
              <i className="right fas fa-angle-left" />
            </p>
          </Link></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <Link to="/userlist" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              User List
              <i className="right fas fa-angle-left" />
            </p>
          </Link></li>
          
          </ul>
            </li>
            
            
          </ul>
          
        </li>
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Master
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <Link to="/branchmaster" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Branch Master
              <i className="right fas fa-angle-left" />
            </p>
          </Link></li>
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Item Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Client/Vendor Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Country Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>State Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>City Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>UOM Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>HSN Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>SAC Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>TDS Master</p>
              </a>
            </li>
            <li className="nav-item">
            <Link to="/groupmaster" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Group Master</p>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/subgroupmaster" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Sub Group Master</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dept Master</p>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Country Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>State Master</p>
              </a>
            </li> */}
          </ul>
        </li>
        
        {/* <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li> */}
        <li className="nav-item">
          {/* <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right">6</span>
            </p>
          </a> */}
            <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gate Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gate Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gate Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          
          
          </ul>
            </li>
            
            
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Report</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Inward Register
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Outward Register
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          
          
          </ul>
            </li>
            
            
          </ul>
        </li>
          <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Purchase Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Indent
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Quotation
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Purchase Order
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          
          </ul>
            </li>
            
            
          </ul>

          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Approval Master</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
               Indent Check 
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Indent Approval
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Purchase Check
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
            Purchase Approval
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Report</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
               Indent Register
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
            Purchase Register
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          
          </ul>
            </li>
            
            
          </ul>
        </li>
        </li>
        <li className="nav-item">
          {/* <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right">6</span>
            </p>
          </a> */}
            <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Inventory Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* ------- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Finance Management
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
          <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Quality Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* ----- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              PPC Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* ----- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Production Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* ------- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Order Management
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* ----------- */}
        {/* ------- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Sale Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        {/* --------------- */}
        {/* ------- */}
        <li className="nav-item menu-open">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Maintenance Module
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Transection</p>
              </a>
              <ul>
              <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Inward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Material Outward
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Issue Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          <li className="nav-item ">
        {/* <li className="nav-item menu-open">*/}
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Return Entry
              <i className="right fas fa-angle-left" />
            </p>
          </a></li>
          </ul>
            </li>
            
            
          </ul>
        </li>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Charts
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/charts/chartjs.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>ChartJS</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/flot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/uplot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>uPlot</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tree" />
            <p>
              UI Elements
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/UI/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>General</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/icons.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/buttons.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Buttons</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/sliders.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Sliders</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/modals.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Modals &amp; Alerts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/navbar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Navbar &amp; Tabs</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/timeline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Timeline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/UI/ribbons.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ribbons</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Forms
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>General Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/advanced.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Advanced Elements</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/editors.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Editors</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/validation.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Validation</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
              Tables
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/tables/simple.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Simple Tables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/data.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>DataTables</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/tables/jsgrid.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>jsGrid</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">EXAMPLES</li>
        <li className="nav-item">
          <a href="pages/calendar.html" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Calendar
              <span className="badge badge-info right">2</span>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-image" />
            <p>
              Gallery
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/kanban.html" className="nav-link">
            <i className="nav-icon fas fa-columns" />
            <p>
              Kanban Board
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope" />
            <p>
              Mailbox
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/mailbox/mailbox.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inbox</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/compose.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Compose</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Pages
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/invoice.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Invoice</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/profile.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Profile</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/e-commerce.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>E-commerce</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/projects.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Projects</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-add.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Add</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-edit.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Edit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/project-detail.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Project Detail</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contacts.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contacts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/faq.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>FAQ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/contact-us.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Extras
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>
                  Login &amp; Register v1
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Login v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Register v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Forgot Password v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Recover Password v1</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>
                  Login &amp; Register v2
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Login v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/register-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Register v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Forgot Password v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/recover-password-v2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Recover Password v2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/examples/lockscreen.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Lockscreen</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Legacy User Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/language-menu.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Language Menu</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/404.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Error 404</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/500.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Error 500</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/pace.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Pace</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/blank.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Blank Page</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="starter.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Starter Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-search" />
            <p>
              Search
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/search/simple.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Simple Search</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/search/enhanced.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Enhanced</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">MISCELLANEOUS</li>
        <li className="nav-item">
          <a href="iframe.html" className="nav-link">
            <i className="nav-icon fas fa-ellipsis-h" />
            <p>Tabbed IFrame Plugin</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.1/" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Documentation</p>
          </a>
        </li>
        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-circle nav-icon" />
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-circle" />
            <p>
              Level 1
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>
                  Level 2
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-circle nav-icon" />
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-header">LABELS</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-danger" />
            <p className="text">Important</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-warning" />
            <p>Warning</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-circle text-info" />
            <p>Informational</p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}
export default Sidemenu;