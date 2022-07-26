import React, { useState, useEffect } from 'react';
import "./contactus.css"
import { Funnel, Facebook, Twitter, Linkedin, Google, Clock, Phone, Messenger, Search, ChevronLeft, ChevronRight, Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function Contactus() {
    const [fixed, setfixed] = useState("p-nav-2-main-div");
    const handlescroll = () => {
        if (window.pageYOffset > 120) {
            setfixed("p-nav-2-main-div-fixed")


        } else {
            setfixed("p-nav-2-main-div")

        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handlescroll)
    }, [])

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

        <nav className={"navbar navbar-expand-lg " + fixed} >
            <div className="container-fluid">
                <img src={require("./images/constructo-logo-yelow-dark.png")} />

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-2-ul">


                    <li className="nav-item  dropdown ">

                        <Link className=" d-inline p-nav-2-link " aria-current="page" t to="/">HOME</Link>
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

                        <Link className=" d-inline nav-2-link " to="/projects">PROJECTS</Link>
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

                        <a className=" active d-inline p-nav-2-link" aria-current="page" href="#">CONTACT US</a>
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
                        <span>CONTACT US</span>


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


        <div className='map-div'>
            <img src={require("./images/geojango-maps-Z8UgB80_46w-unsplash.jpg")} />
        </div>




        <div className='contact-details-div-main'>
            <div className='contact-details-div'>
                <h3>CONTACT US</h3>
                <h4>Constructo lmt cor</h4>
                <p> 300 Pennsylvania Ave NW, Washington, DC 20006, USA 5555-96586</p>

                <div>
                    <span>Telephone:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> Mobile phone:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> FAX:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> E-mail:</span>
                    <span> mail@companyname.com</span>
                </div>
                <div>
                    <span>Website:</span>
                    <span>+www.yoursitename.com</span>
                </div>
            </div>
            <div className='contact-details-div'>
                <h3>CONTACT US</h3>
                <h4>Constructo lmt cor</h4>
                <p> 300 Pennsylvania Ave NW, Washington, DC 20006, USA 5555-96586</p>

                <div>
                    <span>Telephone:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> Mobile phone:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> FAX:</span>
                    <span>+386 40 222 555</span>
                </div>
                <div>
                    <span> E-mail:</span>
                    <span> mail@companyname.com</span>
                </div>
                <div>
                    <span>Website:</span>
                    <span>+www.yoursitename.com</span>
                </div>
            </div>
            <div className='contact-details-div-p'>
                Feel free to talk to our representative at any time you please use our contact form on our website or one of our contact numbers. Let us build your future together.

                You can always visit us at our HQ,<br /><br />
                we have a friendly staff and a mean cup of coffee.

                for international calls use our free <b>Phone number: 2-555-123-5637-555</b>
            </div>
        </div>

        <div className='contact-form-main-div'>
            <h3>Send us a message</h3>
            <form className='d-flex'>
                <div className='contact-input-div'>
                    <input placeholder='Name*' type="text" />
                    <input placeholder='Subject*' type="text" />
                    <input placeholder='Email*' type="email" />
                </div>
                <textarea className='contact-form-textarea'placeholder='Message*'></textarea>

            </form>
            <input type="submit" value="SUBMIT" className='btn btn-dark btn-submit'/>
        </div>
        {/* common fotter div */}

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
