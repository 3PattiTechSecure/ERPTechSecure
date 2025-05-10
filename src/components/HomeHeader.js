import React from 'react'
import {  Link } from "react-router-dom";
export default function HomeHeader() {
  return (
    <div>
      <div className="contentiner bg-dark">
      {/* Main Sidebar Container */}
{/* <aside className="main-sidebar sidebar"> </aside> */}
  {/* Brand Logo # 6b9fc2   00bcac ,dcac35
 */}
    <div style={{  background:'#a7cfec'}}>
  <Link to="/" className="brand-link">
    <img src="dist/img/favicon.png" alt="TechSecurERP Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    {/* brand-text font-weight-light */}
    <span >TechSecurERP</span>
    </Link>
  </div>
    </div>
    </div>
  )
}
