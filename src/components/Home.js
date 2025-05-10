import React from 'react'
import { Link } from "react-router-dom"
import HomeHeader from './HomeHeader'
// import SubHeadLogo from './SubHeadLogo'


export default function Home() {
  
  return (
    <>
    {/* <SubHeadLogo/> */}
    <HomeHeader/>
    <div>
    
      {/* Content Wrapper. Contains page content */}
<div className="contentiner mt-2">
<div className="container text-center">
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 data-aos="fade-up">Welcome to <span>TechSecurERP</span></h1>
      <p data-aos="fade-up" data-aos-delay="100">Quickly start your ERP now and set the stage for success<br/></p>
      <div class="card-footer">
                  <Link class="btn btn-primary" to="/login">Get Started</Link>
                </div>
      <img src="dist/img/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" style={{height:'350px',width:'350px'}}/>
    </div>
  </div>
</div>
{/* /.content-wrapper */}

    </div>
    </>
  )
}
