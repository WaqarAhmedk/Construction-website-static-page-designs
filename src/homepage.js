
import React, { useEffect, useState } from 'react';
import "./navbar.css";
import Carousel from 'react-bootstrap/Carousel';
import { Facebook, Twitter, Linkedin, Google, Clock, Phone, Messenger, Search, ChevronLeft, ChevronRight, Check } from 'react-bootstrap-icons';
import { CarouselItem } from 'react-bootstrap';
import Constructioncomponent from './components/constructioncomponent';
import Renovationcomponet from './components/renovationcomponet';
import Consultationcomponet from './components/consultationcomponet';
import Contractorcomponet from './components/contractorcomponent';
import Archicomponet from './components/arcitecturecomponent';
import Plancomponet from './components/plancomponent';
import { Link } from 'react-router-dom';



export default function Homepage() {
    const [compname, setComname] = useState("const");
    const [fixed, setfixed] = useState("nav-2-main-div");
    const [fixedlink, setfixedlink] = useState("nav-2-link");
    const [higlight ,sethighlight]=useState("")

    const component = () => {
        if (compname === "const") {
            return <Constructioncomponent />

        } else if (compname === "renv") {
            return <Renovationcomponet />

        }
        else if (compname === "consu") {
            return <Consultationcomponet />

        }
        else if (compname === "cont") {
            return <Contractorcomponet />

        }
        else if (compname === "arch") {
            return <Archicomponet />

        }
        else if (compname === "plan") {
            return <Plancomponet />

        }
        else {
            return "ddh"
        }
    }
    const handlescroll = () => {
        if (window.pageYOffset > 120) {
            setfixed("nav-2-main-div-fixed")
            setfixedlink("nav-2-link-fixed")

        } else {
            setfixed("nav-2-main-div")
            setfixedlink("nav-2-link")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handlescroll)
    }, [])

    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item className='carousel-img'>
                    <img
                        className="d-block w-100 h-100"
                        src={require("./images/slider1-demo31.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h4>CONSTRUCTTO WORDPRESS THEME</h4>
                        <h2>CONSTRUCTION AT ITS BEST</h2>
                        <p>
                            Ideal theme for any construction business you need
                            <br />
                            With Visual Composer, Revolution Slider and other awesome
                            <br />
                            features, got better, with new options you can't go wrong.
                        </p>
                        <span className='btn btn-primary'>BUY THEME</span>
                        <span className='btn btn-warning ms-2'>CONTINUE</span>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className='carousel-img' >
                    <img
                        className="d-block w-100 h-100"
                        src={require("./images/slider2-demo3.jpg")}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-caption ju'>
                        <h4>CONSTRUCTTO WORDPRESS THEME</h4>
                        <h2>CONSTRUCTION AT ITS BEST</h2>
                        <p>
                            Ideal theme for any construction business you need
                            <br />
                            With Visual Composer, Revolution Slider and other awesome
                            <br />
                            features, got better, with new options you can't go wrong.
                        </p>
                        <span className='btn btn-primary '>BUY THEME</span>
                        <span className='btn btn-warning ms-2'>CONTINUE</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-img'>
                    <img
                        className="d-block w-100 h-200 h-100"
                        src={require("./images/slider3-demo2 (1).jpg")}
                        alt="Third slide"
                        sizes='900px'

                    />

                    <Carousel.Caption className='carousel-caption-3'>
                        <h4>CONSTRUCTTO WORDPRESS THEME</h4>
                        <h2>RENOVATE YOUR HOME</h2>
                        <h3>AND JOIN OVER 1200 SATISFIED COSTUMERS</h3>

                        <div>
                            <span className='btn btn-warning ms-2'>BUY THEME</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* small nav bar */}
            <nav className="navbar navbar-expand-lg navbar-light nav-1-main-div " >
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-1-ul-2">
                            <li className="nav-item ">
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

            <nav className={"navbar navbar-expand-lg navbar-light  " + fixed}>
                <div className="container-fluid">
                    {
                    fixedlink==="nav-2-link" ?
                    <img src={require("./images/constructo-logo-yelow1.png")} /> :
                    <img src={require("./images/constructo-logo-yelow-dark.png")} />

                    }
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-2-ul">


                        <li className="nav-item  dropdown ">

                            <a className={" d-inline " + fixedlink} aria-current="page" href="">HOME</a>
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

                            <Link className={" d-inline " + fixedlink} aria-current="page" to="/projects">PROJECTS</Link>
                            <div class="dropdown-content">
                                <li>STANDARD VIEW</li>
                                <li>CLASIC VIEW</li>

                                <li>RANDOM VIEW</li>

                                <li>FULL WIDTH</li>


                            </div>

                        </li>

                        <li className="nav-item  dropdown ">

                            <Link className={" d-inline " + fixedlink} aria-current="page" to="/whatwedo">WHAT WE DO</Link>
                            <div class="dropdown-content">
                                <li>CONSTRUCTION</li>
                                <li>RENOVATIONS</li>

                                <li>CONSULTING</li>
                                <li>BIG PROJECTS</li>
                                <li>LIMITLESS DEMO</li>



                            </div>

                        </li>
                        <li className="nav-item">

                            <Link className={" d-inline " + fixedlink} aria-current="page" to="/aboutus">ABOUT US</Link>
                        </li>

                        <li className="nav-item">

                            <Link className={" d-inline " + fixedlink} aria-current="page" to="/blog">BLOG</Link>
                        </li>

                        <li className="nav-item">
                        <Link className={" d-inline " + fixedlink}aria-current="page" to="/contactus">CONTACT US</Link>                        </li>

                        <li className="nav-item">

                            <Search  className={" d-inline " + fixedlink} aria-current="page" />
                        </li>


                    </ul>


                </div>

            </nav>


            {/* 2nd part div */}

            <div className='second-part-main-div' >
                <div className='second-part-inner-div-1'>
                    <div className='overlay'>
                        {/* just for adding background color to image */}
                    </div>
                </div>
                <div className='second-part-inner-div-2'>
                    <div className='inner-div-2-child'>
                        <p>FAST AND RELIABLE SERVICE FOR YOUR PROJECT OR A QUICK FIX, WE DO IT ALL!</p>
                        <span className='btn'>GET A QUOTE</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className="card" style={{
                            "width": "23rem",
                            "height": "400px",


                        }}>
                            <img className="card-img-top card-img" src={require("./images/slider1-demo31.jpg")} alt="Card image cap" />

                            <h5 className="card-title ">PLANNING YOUR PROJECT FROM SCRATCH</h5>
                            <hr />

                            <span className="body-heading">FREE CONSULTATION FOR YOUR PROJECT</span>
                            <p >

                                Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.
                            </p>
                        </div>
                        <div className="card ms-5" style={{
                            "width": "23rem",
                            "height": "400px",


                        }}>
                            <img className="card-img-top card-img" src={require("./images/slider1-demo31.jpg")} alt="Card image cap" />

                            <h5 className="card-title ">PLANNING YOUR PROJECT FROM SCRATCH</h5>
                            <hr />

                            <span className="body-heading">FREE CONSULTATION FOR YOUR PROJECT</span>
                            <p >

                                Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.
                            </p>
                        </div>
                        <div className="card ms-5" style={{
                            "width": "23rem",
                            "height": "400px",


                        }}>
                            <img className="card-img-top card-img" src={require("./images/slider1-demo31.jpg")} alt="Card image cap" />

                            <h5 className="card-title ">PLANNING YOUR PROJECT FROM SCRATCH</h5>
                            <hr />

                            <span className="body-heading">FREE CONSULTATION FOR YOUR PROJECT</span>
                            <p >

                                Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.
                            </p>
                        </div>


                    </div>

                </div>
            </div>

            {/* 3rd div */}

            <div className='carousel-2-div'>
                <div className='carousel-2-inner-div'>
                    <h4>FEATURED WORK</h4>
                    <div className='arrow-div'>
                        <ChevronLeft className='arrow' />
                        <ChevronRight className='arrow' />
                    </div>
                </div>
                <Carousel >
                    <CarouselItem >
                        <div className='carouselitem'>
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                        </div>


                    </CarouselItem>

                    <CarouselItem >
                        <div className='carouselitem'>
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                        </div>


                    </CarouselItem>
                    <CarouselItem >
                        <div className='carouselitem'>
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                            <img src={require("./images/slider2-demo3.jpg")} className="d1" />
                        </div>


                    </CarouselItem>


                </Carousel>
            </div>


            {/* 4th div */}

            <div className='d-flex div-4'>
                <div className=''>
                    <ul className="list-group div-4-ul">
                        <li className="list-group-item selected" onClick={() => setComname("const")}>Construction</li>
                        <li className="list-group-item" onClick={() => {
                            console.log("clicked");
                            setComname("renv")
                        }}>Renvations</li>
                        <li className="list-group-item" onClick={() => setComname("consu")}>Consulting</li>
                        <li className="list-group-item" onClick={() => setComname("cont")}>Contractor</li>
                        <li className="list-group-item" onClick={() => setComname("arch")}>Architecture</li>
                        <li className="list-group-item" onClick={() => setComname("plan")}>Planning</li>

                    </ul>
                </div>

                <div className='div-4-content'>

                    {
                        component()
                    }


                </div>
                <div className='div-4-content-2'>
                    <img src={require("./images/consultation22.jpg")} />
                    <h2>GET YOU FREE CONSULTATION</h2>
                    <p>Have an idea, a dream? We can make it happen. Join our family, we offer free consultation to achieve your goals with creativity and quality that you deserve.</p>
                </div>
            </div>

            {/* 5th div */}
            <div>
                <div className='div-5-inner '>
                    <div className='div-5-overlay'>
                        {/* just for adding background color to image */}
                    </div>
                </div>
                <div className='div-5-inner-2'>
                    <h1>FROM IDEA, PLAN TO FINAL SOLUTION</h1>
                    <button className='btn btn-dark div-5-btn'>BUY CONSTRUCTO</button>
                </div>
            </div>


            {/* 6th div */}

            <div className='mt-5 mb-5'>

                <div className='div-6-1'>

                    <h4>CLIENTS THAT TRUST US</h4>

                </div>
                <hr className='hr-1 mt-3' />
                <hr className='hr-2 mt-5 ' />
                <div className='div-6-img'>

                    <img src={require("./images/buildproplus_full.png")} />
                    <img src={require("./images/constructis1.png")} />

                    <img src={require("./images/giantbuild_full.png")} />

                    <img src={require("./images/stormcoll_full.png")} />

                    <img src={require("./images/constructis1.png")} />

                </div>
                <hr className='hr-2 ' />
                <span className='div-6-span'>some of our clients that trust us, be shure to be one of them</span>
            </div>

            {/* 7th div */}
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
