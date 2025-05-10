import React,{ use, useEffect, useState } from 'react'
import SubHeadLogo from './SubHeadLogo'
import Sidemenu from './Sidemenu'
import UserHeader from './UserHeader'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import SubHeadLogo from './SubHeadLogo'


export default function UserRights() {
  
    const [userCode,setUserCode] = useState();
    const [userName,setUserName] = useState();
const [isVisible,setDataVisible] = useState(true);
const [isUserVisible,setUserVisible] = useState(false);
const [isVisibleSubRightsDetail,setisVisibleSubRightsDetail] = useState(false);
 const [isVisibleSubRights,setVisibleSubRights]=useState(false);
    const [userData,setData] = useState([]);
    const [userRightsData,setUserRightsData] = useState([]);
    const [userSubRightsData,setUserSubRightsData] = useState([]);
    const [search,setSearch] = useState([]);
    const [show, setShow] = useState(false);
    const [showRights, setshowRights] = useState(false);
   // const [showSubRights, setSubRightsList] = useState(false);
    const [showUserList,setUserList] = useState(false);
    const handleClose = () => setShow(false);
   // const handleNo = () => setShow(false);
    const handleRightsClose = () => setshowRights(false);
    //const handleSubRightsClose = () => setshowSubRights(false);
    const handleShow = () => setShow(true);
   // const handleSubRightsList =() =>setSubRightsList(true );
    const handleUserList =() =>setUserList(true );
    
     const [selectedRow,setSelectedRow]=useState(null);
     const[hoveredRow,setHoveredRow]=useState(null)
  
  // -------------------
  
    ///////////////////
    const handleMouseEnter=(id)=>{
      setHoveredRow(id);
      //alert(id);
        console.log('Row Selected: ', id)
    }
    const handleMouseLeave=()=>
    {
      setHoveredRow(null);
    }
    const handleRowClick = (uCode,uName) => {
      setSelectedRow(uCode);
      setUserCode(uCode);
      setUserName(uName);
 // setshowRights(true)-----to show popup
      //console.log('Row Clicked1: ', row)
    }
    const handleRightsMouseEnter=(id)=>{
      setHoveredRow(id);
      //alert(id);
        console.log('Row Selected: ', id)
    }
    const handleRightsMouseLeave=()=>
    {
      setHoveredRow(null);
    }
    const handleRightsRowClick = (Code) => {
      setSelectedRow(Code);
      setVisibleSubRights(true);
      fetchUsersSubRights(Code);      
     // setshowRights(true)-----to show popup
      console.log('Row Clicked1: ', Code)
      setshowRights(false);
      setUserList(false);
      setisVisibleSubRightsDetail(false);
    }
    const handleSubRightsRowClick = (Code) => {
      setSelectedRow(Code);
      //setUserCode(uCode);
      //setUserName(uName);
//setshowSubRights(true);

      handleUserSubRights();
     // setisVisibleSubRights(true);
      
           // setshowRights(true)-----to show popup
           // fetchUsersSubRights(MenuCode);     
           setisVisibleSubRightsDetail(true);
           //setVisibleSubRights(false);
            console.log('Row Clicked1: ', Code)
            setVisibleSubRights(false);
             fetchUsersSubRights(Code); 
    }
    async function fetchUsers() {
        // try{
            const res=await fetch('https://localhost:44374/GetAllUser')
            //const res=await fetch('https://localhost:44374/GetAllUser?code='+4)
            res.json().then(json=>{
                console.log(json)
                setData(json.readRecordData)
            })
        
    }
    async function  fetchSelected(id) {
      
        const res=await fetch('https://localhost:44374/GetAllUser?code='+id)
        res.json().then(json=>{
            console.log(json)
            setSearch(json.readRecordData)
        })
}
                useEffect(()=>
                {
                 fetchUsers();

                },[]);

                const handleNew=()=>
                  {//const {id}=useParams();
                    handleShow();
                    setDataVisible(false);
                    setUserVisible(false);
                    //fetchSelected(id);
                    // if(window.confirm('Are U Sure to delete this user')===true)
                     // alert(id)
                  }
                  const handleNoUserList=()=>
                  {
                    setDataVisible(true);
                      setUserVisible(true);
                      handleUserList();
                  }
                  const handleList=()=>
                    {
                      setDataVisible(true);
                      setUserVisible(false);
                      handleUserList();

                    }
                  const handleExit=()=>
                  {
                   
                    setDataVisible(false);
                    setUserVisible(false);
                    setVisibleSubRights(false);
                    setisVisibleSubRightsDetail(false);
                  }
                const handleAllUserList=()=>
                {
                  setShow(false);
                  setDataVisible(true);
                  setUserVisible(false);
                  handleUserList();
                }
                const handleUserSubRights=()=>
                  {
                   // handleSubRightsList();
                     //handleClose(false);
                     setUserVisible(true);
                    // setisVisibleSubRights(true);
                  }
                async function fetchUsersRights() {
                  // try{
                      const res=await fetch('https://localhost:44374/GetUserRightsData')
                      //const res=await fetch('https://localhost:44374/GetAllUser?code='+4)
                      res.json().then(json=>{
                          console.log(json)
                          setUserRightsData(json.readUserRightsData)
                      })
                  
              }
              //https://localhost:44374/GetUserSubRightsData
              async function fetchUsersSubRights(Code) {
                // try{
               // alert('Test Data '+Code)
                    const res=await fetch('https://localhost:44374/GetUserSubRightsData?Code='+Code)
                    //const res=await fetch('https://localhost:44374/GetAllUser?code='+4)
                    res.json().then(json=>{
                        console.log(json)
                        setUserSubRightsData(json.readUserSubRightsData)
                    })
                    
            }
                const handleMenuList=()=>
                {
                  setshowRights(true)
                  fetchUsersRights();
                  setShow(false);
  
                }
                const handleNo=()=>
                {
                  setUserVisible(true);
                  handleClose(false);
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
                      <h1>User Rights</h1>
                    </div>
                    
                  </div>
                </div>
              </section>
        
      
              <Modal id="MShow" show={show} onHide={handleClose}>
        <Modal.Header 
        //closeButton
        >
          {/* <Modal.Title>User Detail</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>   
           <div style={{textAlign :"left"}}>
      
<span>Do you want to copy rights from other user? </span>
</div></Modal.Body>
        <Modal.Footer>
        {/* handleUserList */}
        <Button variant="primary"  onClick={handleAllUserList}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleNo}>
            No
          </Button>
          
        </Modal.Footer>
      </Modal>

      <Modal id="MShow" show={showRights} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>User Rights</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
        
           <div style={{textAlign :"left"}}>
           <table id="userList" style={{width:'480px',fontSize:'16px',textAlign:'left'}} className='table table-bordered'>
        <thead style={{background:'#1078e0'}} className=' text-white'>
            <tr>
                {/* <th>Code</th> */}
                {/* <th></th> */}
                {/* <th>User ID</th> */}
                <th>Description <br/> 
                
                </th>
                
            </tr>
        </thead>
        <tbody>
        {
          userRightsData && userRightsData.length>0
            ?
            userRightsData.map((row)=>{
                return(
                    <tr key={row.code} onMouseEnter={()=>handleRightsMouseEnter(row.code)}  
                    onMouseLeave={()=>handleRightsMouseLeave}
                     onClick={()=>handleRightsRowClick(row.code)} 
                    style={{backgroundColor: hoveredRow===row.code?'#f0f0f0':'transparent',cursor:'pointer'}}>
                    {/* <td>{i+1}</td> */}
                        {/* <td>{item.code}</td> */}
                        {/* <td>{item.user_ID}</td> */}
                         <td>{row.description}</td>
                        {/* <td>{row.createdBy}</td>
                        <td>{row.createdDate}</td> 
                        <td>{row.updatedBy}</td>
                        <td>{row.updatedDate}</td> */}
                        
                    </tr>
                )
            })
            :"No Data Found"
        
        }
        {/* {showUserList===false ? show : true} */}
           </tbody>
        
        </table>
{/* <span>Do you want to copy the icon from other user? </span> */}
</div></Modal.Body>
        {/* <Modal.Footer>
        
        <Button variant="primary"  onClick={handleAllUserList}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleRightsClose}>
            Cancel
          </Button>
          
        </Modal.Footer> */}
      </Modal>

      {/* <Modal id="MShow" show={showSubRights} onHide={handleSubRightsClose}>
        <Modal.Header >
          <Modal.Title>User Sub Rights</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
        
</Modal.Body>
        <Modal.Footer>
        
        <Button variant="primary"  onClick={handleUserSubRights}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleSubRightsClose}>
            Cancel
          </Button>
          
        </Modal.Footer>
      </Modal> */}
      

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
                        <button style={{width:'71px'}}  class="btn btn-primary" onClick={()=>handleNew()}>New</button> &nbsp;
                      </div></li>&nbsp;&nbsp;&nbsp;
                      <li className="nav-item d-none d-sm-inline-block">
                        <div class="input-group-prepend">
                        <button style={{width:'71px'}}  class="btn btn-primary" onClick={()=>handleList()}>List</button> &nbsp;
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
                    {isUserVisible &&(
                    <div style={{paddingLeft:'10px',textAlign:'left'}}>
                    
                      <span>User Name</span> &nbsp;
                      <button style={{width:'30px',height:'28px',backgroundColor:'yellow'}}   
                      onClick={()=>handleNoUserList()}>!</button> 
                      &nbsp;&nbsp;&nbsp;
                      <input type="text" autoComplete="Off" 
                style={{width:'120px',height:'28px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="User Code" name="user_code"
                           value={userCode}
                           //onChange={handleInputChange}
                           />&nbsp;&nbsp;&nbsp;
                           <input type="text" autoComplete="Off" 
                style={{width:'120px',height:'28px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="User Name" name="user_Name"
                           value={userName}
                           //onChange={handleInputChange}
                           />&nbsp;&nbsp;&nbsp;
                      <button style={{width:'120px',height:'28px',fontSize:'15px'}}     
                       onClick={()=>handleMenuList()}
                       >Select Menu</button> 
                   
                    </div>
                  ) }
                  </div>
      {/* ------------------- */}
      <div className='card-body'>
      
                        {showUserList && 
                          isVisible && (
              <table id="userList" style={{width:'880px',fontSize:'16px',textAlign:'left'}} className='table table-bordered'>
        <thead style={{background:'#1078e0'}} className=' text-white'>
            <tr>
                {/* <th>Code</th> */}
                {/* <th></th> */}
                {/* <th>User ID</th> */}
                <th>User Name <br/> 
                <input type="text" autoComplete="Off" 
                style={{width:'120px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="User Name" name="user_Name"
                           // value={values.user_ID}
                           //onChange={handleInputChange}
                           />
                </th>
                <th>Created By <br/> 
                <input type="text" autoComplete="Off" 
                style={{width:'120px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="Created By" name="Created_By"
                           // value={values.user_ID}
                           //onChange={handleInputChange}
                           /></th>
                <th>Created Date
                <br/> 
                <input type="text" autoComplete="Off" 
                style={{width:'120px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="Created Date" name="Created_Date"
                           // value={values.user_ID}
                           //onChange={handleInputChange}
                           /></th> 
                <th>Updated By
                <br/> 
                <input type="text" autoComplete="Off" 
                style={{width:'120px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="Updated By" name="Updated By"
                           // value={values.user_ID}
                           //onChange={handleInputChange}
                           /></th>
                <th>Updated Date
                <br/> 
                <input type="text" autoComplete="Off" 
                style={{width:'120px',fontSize:'12px'}}
                //className={"form-control form-control-border"}
                            placeholder="Updated Date" name="Updated_Date"
                           // value={values.user_ID}
                           //onChange={handleInputChange}
                           /></th>
                {/* <th>Option</th> */}

            </tr>
        </thead>
        <tbody>
        {
                    userData && userData.length>0
            ?
            userData.map((row)=>{
                return(
                    <tr key={row.code} onMouseEnter={()=>handleMouseEnter(row.code)}  
                    onMouseLeave={()=>handleMouseLeave}
                     onClick={()=>handleRowClick(row.code,row.userName)} 
                    style={{backgroundColor: hoveredRow===row.code?'#f0f0f0':'transparent',cursor:'pointer'}}>
                    {/* <td>{i+1}</td> */}
                        {/* <td>{item.code}</td> */}
                        {/* <td>{item.user_ID}</td> */}
                         <td>{row.userName}</td>
                        <td>{row.createdBy}</td>
                        <td>{row.createdDate}</td> 
                        <td>{row.updatedBy}</td>
                        <td>{row.updatedDate}</td>
                        
                    </tr>
                )
            })
            :"No Data Found"
        
        }
        {showUserList===false ? show : true}
           </tbody>
        </table>
        )
        }
        <br/>
        {/* -------------Sub Menu---------- */}
{isVisibleSubRights && (
           <table id="SubRightsList" style={{width:'480px',fontSize:'16px',textAlign:'left'}} className='table table-bordered'>
        <thead style={{background:'#1078e0'}} className=' text-white'>
            <tr>
                
                <th> Sub Description<br/> 
                </th>
            </tr>
        </thead>
        <tbody>
        {
         userSubRightsData && userSubRightsData.length>0
            ?
            userSubRightsData.map((row)=>{
                return(
                    <tr key={row.code} 
                    
                     onClick={()=>handleSubRightsRowClick(row.code)} 
                    style={{backgroundColor: hoveredRow===row.code?'#f0f0f0':'transparent',cursor:'pointer'}}>
                    
                         <td>{row.description}</td>
                    
                        {/* <td>
                        <table>
                          <tr>
<td>{row.menuName}
&nbsp;&nbsp;
                        <input type="checkbox" 
                        
                        />
</td>
                          </tr>
                        </table>
                        </td> */}
                    </tr>
                )
            })
            :"No Data Found"
        
        }
        
           </tbody>
        
        </table>
      )}
      {/* ---------------------Sub Detail------------- */}
      <br/>
      {isVisibleSubRightsDetail && (
           <table id="SubRightsList" style={{width:'900px',fontSize:'16px',textAlign:'left'}} className='table table-bordered'>
        <thead style={{background:'#1078e0'}} className=' text-white'>
            <tr>
                
                <th> Detail<br/> 
                </th>
                <th>Allow New</th>
                <th>Allow Edit</th>
                <th>Allow Print</th>
                <th>Allow Delete</th>
                
            </tr>
        </thead>
        <tbody>
        {
         userSubRightsData && userSubRightsData.length>0
            ?
            userSubRightsData.map((row)=>{
                return(
                    <tr key={row.code} 
                     onMouseEnter={()=>handleRightsMouseEnter(row.code)}
                    //  onClick={()=>handleSubRightsRowClick(row.code)} 
                    style={{backgroundColor: hoveredRow===row.code?'#f0f0f0':'transparent',cursor:'pointer'}}>
                    
                         <td>{row.description}</td>
                         <td><input type="checkbox" /></td>
                         <td><input type="checkbox" /></td>
                         <td><input type="checkbox" /></td>
                         <td><input type="checkbox" /></td>
                         {/* <td>{row.description}</td> */}
                    {/* <td><input type="checkbox" /></td> */}
                        
                    </tr>
                )
            })
            :"No Data Found"
        
        }
        <tr><td><div class="input-group-prepend">
                        <button style={{width:'71px'}}  class="btn btn-primary" onClick={()=>handleNew()}>Save</button> &nbsp;
                      </div></td></tr>
           </tbody>
        
        </table>
      )}
        </div>
    <br/>
    <div className='card-body'>
{/* -------------Sub Menu Detail---------- */}

      {/* <div style={{textAlign :"left"}}> */}
      
{/* <span>Do you want to copy the icon from other user? </span> */}
{/* // </div> */}
  
      
</div>
      
</div>
      </div>

      </div>
        </div>
      </div>
    </div>
        
    {/* ---------------------------- */}
      
    
    </>
  )
}
