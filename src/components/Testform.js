import React from 'react'

export default function Testform() {
  return (
    <div>
    <ul className="todo-list" data-widget="todo-list">
      {
                   
                   search.map(sData=>{
                     return(  
                            <li key={sData.code}>
<div >

                 <img style={{ height: '120px', width: '110px' }} src={sData.imageSrc} className="brand-image img-circle elevation-3"  />
               </div>
<div style={{Width:"40%",textAlign:"left"}}>
<h6>User Name</h6></div>
<div style={{Width:"50%",textAlign:"center"}}><input type='text'></input></div>
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
                    ) })}
</ul>
    </div>
  )
}
