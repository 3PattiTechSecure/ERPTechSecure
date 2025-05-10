import React from 'react'
import { Link } from 'react-router-dom'
export default function SubHeadLogo() {
  return (
    <div>
      {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
    <img src="dist/img/favicon.png" alt="TechSecurERP Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">TechSecurERP</span>
  </Link>
  
</aside>

    </div>
  )
}
