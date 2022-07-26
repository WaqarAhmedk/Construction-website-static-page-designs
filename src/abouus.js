import React from 'react';
import "./aboutus.css"

import { Funnel, Facebook, Twitter, Linkedin, Google, Clock, Phone, Messenger, Search, ChevronDown, ChevronRight, Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function Aboutus() {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-light p-nav-1-main-div  " >
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-ul-1">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <Facebook className='small-nav-icon' />
                            </a>
                        </li>

                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#"><Twitter className='small-nav-icon' /></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Linkedin className='small-nav-icon' /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><Google className='small-nav-icon' /></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav  p-nav-1-ul-2">
                        <li className="nav-item  ">
                            <Clock className='d-inline ' />
                            <span className="nav-1-link ms-3" aria-current="page">Mon-7 matrch 2021</span>
                        </li>

                        <li className="nav-item ms-4">
                            <Phone className='d-inline' />
                            <span className=" nav-1-link ms-3" aria-current="page" >0344323232</span>
                        </li>

                        <li className="nav-item ms-4">
                            <Messenger className='d-inline' />
                            <span className="nav-1-link ms-3" aria-current="page" >Info@domain.co</span>
                        </li>

                    </ul>


                </div>
            </div>
        </nav>


        {/* Main Nav bar */}

        <nav className="navbar navbar-expand-lg p-nav-2-main-div " >
            <div className="container-fluid">
                <img src={require("./images/constructo-logo-yelow-dark.png")} />

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-2-ul">


                    <li className="nav-item  dropdown ">

                    <Link className=" d-inline p-nav-2-link " aria-current="page" to="/">HOME</Link>
                        <div class="dropdown-content">
                            <li>CLASSSIC DEMO</li>
                            <li>LIMITLESS DEMO</li>

                            <li>FULL SCREEN DEMO</li>

                            <li>VERTICAL DEMO</li>
                            <li>CLASSSIC DEMO</li>
                            <li>LIMITLESS DEMO</li>

                            <li>FULL SCREEN DEMO</li>

                            <li>VERTICAL DEMO</li>

                        </div>

                    </li>

                    <li className="nav-item  dropdown ">

                    <Link className=" d-inline p-nav-2-link " aria-current="page" to="/projects">PROJECTS</Link>
                        <div class="dropdown-content">
                            <li>STANDARD VIEW</li>
                            <li>CLASIC VIEW</li>

                            <li>RANDOM VIEW</li>

                            <li>FULL WIDTH</li>


                        </div>

                    </li>

                    <li className="nav-item  dropdown ">

                    <Link className=" d-inline p-nav-2-link " aria-current="page" to="/whatwedo">WHAT WE DO</Link>
                        <div class="dropdown-content">
                            <li>CONSTRUCTION</li>
                            <li>RENOVATIONS</li>

                            <li>CONSULTING</li>
                            <li>BIG PROJECTS</li>
                            <li>LIMITLESS DEMO</li>



                        </div>

                    </li>
                    <li className="nav-item">

                    <Link className=" d-inline p-nav-2-link " aria-current="page" to="/aboutus">ABOUT US</Link>
                    </li>

                    <li className="nav-item">

                        <a className="active d-inline p-nav-2-link" aria-current="page" href="#">BLOG</a>
                    </li>

                    <li className="nav-item">

                    <Link className=" d-inline p-nav-2-link " aria-current="page" to="/contactus">CONTACT US</Link>
                    </li>

                    <li className="nav-item">

                        <Search className=" active d-inline p-nav-2-link" aria-current="page" />
                    </li>


                </ul>


            </div>

        </nav>



        {/* 3rd div */}


        <div className='third-div-main'>
            <div className='third-div-inner-div-1'>
                <div className='third-div-overlay'>
                    {/* just for adding background color to image */}
                    <div className='d-flex third-div-overlay-inner'>
                        <span>About us</span>


                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><span>Home</span></li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>


                    </div>
                </div>
            </div>
        </div>


        {/* 4th  */}
        <div className='about-div-4'>

            <div className='about-div-4-inner-1' >
                <img  src={require("./images/41.jpg")} className="about-div-4-img-1"/>
            </div>
            <div className=' wedo-div-4-2'>
            
           
          
            <div className='about-div-4-inner'>
                <img src={require("./images/11.jpg")} className={"about-div-4-img "} />
                <h3 className='about-div-4-title'>COMPNY HISTORY</h3>
                <p>
                We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.
                </p>
               
            </div>
            <div className='about-div-4-inner'>
                <img src={require("./images/12.jpg")} className={"about-div-4-img "} />
                <h3 className='about-div-4-title'>OUR MISSION</h3>
                <p>
                We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.
                </p>
               
            </div>
            <div className='about-div-4-inner'>
                <img src={require("./images/13.jpg")} className={"about-div-4-img "} />
                <h3 className='about-div-4-title'>COMPANY VISION</h3>
                <p>
                We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.
                </p>
             
            </div>
            <div className='about-div-4-inner'>
                <img src={require("./images/14.jpg")} className={"about-div-4-img "} />
                <h3 className='about-div-4-title'>EXPANDING GOAL</h3>
                <p>
                We offer varioty of construction types. From small jobs to big projects. Renovations, house construction, road construction, corporate and industrial work.
                </p>
               
            </div>
            
        
        </div>

        </div>

        

{/* common footer dic across all pages */}
        

        <div className='d-flex div-7'>
            <div className='div-7-inner-div'>
                <h4>ABOUT US</h4>
                <img src={require("./images/constructo-logo-yelow1.png")} className="div-7-img" />
                <p>
                    lorewmsnd sdsdsa d ad ad ada dadadadaa  ad ad  d ad a da d ad a ad dadaadas sadadad sds dsds ada ad a dad
                </p>
            </div>
            <div className='div-7-inner-div'>
                <h4 className='ps-2'>NAVIGATION</h4>
                <ul class="div-7-ul">
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>WHAT WE DO</li>
                    <li>ABOUT US</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>


                </ul>
            </div>
            <div className='div-7-inner-div'>
                <h4>TAGS</h4>
                <span className='btn btn-dark'>big</span>
                <span className='btn btn-dark'>buildings</span>
                <span className='btn btn-dark'>homes</span>
                <span className='btn btn-dark'>simple</span>
                <span className='btn btn-dark'>modren</span>
            </div>
            <div className='div-7-inner-div'>
                <h4>OUR RECENT PROJECTS</h4>
                <ul class="div-7-ul">
                    <li>Modern Builiding</li>
                    <li>Interrior Concept</li>
                    <li>Corporate concept</li>
                    <li>Corporate Tower</li>
                    <li>Sea side Residence</li>

                </ul>
            </div>

        </div>

        {/* footer */}
        <footer>
            Constructo wordpress theme | © 2014 Constructo, All rights reserved
        </footer>

    </>
    )
}
