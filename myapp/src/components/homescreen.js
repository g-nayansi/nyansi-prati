import react from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Rating from '@mui/material/Rating'


function navbar(){
    return(
        <div>
            <div className="navbackground">
                <Navbar  expand="lg">
                    <Container className="navbar">
                        <Nav.Link><img className="logo" src="/images/companylogo.jpg" /></Nav.Link>
                        {/* <Navbar.Brand className="navbarbrand">Pratichakra</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto nav ">
                                <Nav.Link className="nav-item" href="#">About</Nav.Link>
                                <Nav.Link className="nav-item" href="#">Products</Nav.Link>
                                <Nav.Link className="nav-item" href="#">Pricing</Nav.Link>
                                <Nav.Link className="nav-item" href="#">Reviews</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
            <div className="para">
                <div class="container">
                    <div class="row ">
                      <div class="col-lg-6 col-12 colclass">
                        We make sure your special day goes off without a hitch!
                        <br></br>
                        <h6 className="h">
                        Your ultimate event companion. Carries all the information you need for the event</h6>
                        <button className="btn"><img src="/images/whatsapp.png" />Start The chat</button>
                        <div className="circlediv"></div>
                      </div>
                      <div className="col-lg-6 col-12 illust">
                        {/* <img className="eventphoto" src="/images/Untitled.png" alt="Event Photo"/> */}
                        <div className="container ">
                        <div className="row">
                            <div className="col Ist">
                                
                            </div>
                            <div className="col II">
                                
                            </div>
                            <div className="col III">
                               
                            </div>
                            <div className="col IV">
                                
                            </div>
                        </div>
                        </div>
                      </div>
                      
                    </div>
                    
                </div>
            </div>
                <div className="slides">
                    <h5 className="smalltext">Build Up Your Community</h5>
                    <h3 className="text">Get Your Managing Partner for Your Events</h3>
                <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <img className="conference" src="/images/conference.png" />
                            <h6 className="conference-text">We take care of your conferences and smooth processing . We 
                            have a great team of high understanding of the corporates events .</h6>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img className="conference" src="/images/wedding-rings.png" />
                            <h6 className="conference-text">Your Family functions can't be just simple and ordinary and we 
                            understand that . That's why we make your functions special and memorable for your family.</h6>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img className="conference" src="/images/incentive.png" />
                            <h6 className="conference-text">We track each and every step and complete them before the dates .
                            And follow your wishes for your events to make you satisfied.</h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            

                <div className="conatiner">
                    <h3 className="aboverow">Get Connected !</h3>
                    <div className="row ">
                        <div className="col-lg-6 col-12">
                           {/* 
                            <img className="colimages" src="/images/beach.jpg"></img>*/}
                            <img className="colimages" src="/images/planning.png" alt="resort image"/> 
                            
                           
                        </div>
                        <div className="col-lg-6 col-12 ">

                            <h3 className="col1h3">Planning an Event Simplified</h3>
                           <h5 className="h5"> Plan and start an event via single click, invite guests without any hassle
                            with our premium services and support.</h5>
                        </div>
                    </div >
                    <div className="row ">
                            <div className="col">
                                <h3 className="col2">Share memories with others</h3>
                                <h5 className="coltext2">Share memories with others and give us next chance to serve better for your future
                                 occasions.
                                </h5>
                            </div>
                            <div className="col ">
                            
                               <img className="colimages2" src="/images/shairing.png"></img>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col">
                           <img className="colimage3" src="/images/negotiate.png"></img>
                        </div>
                        <div className="col">
                            <h3 className="col3h3"> Negotiating Vendor with Ease</h3>
                           <h5 className="col3h5">Negotiate on your terms with the vendors best suitable for your list of programs
                           </h5>
                        </div>
                    </div>
                </div>
            {/* <div className="download">
                <h3 className="downloadh3">Download the Event Community App now !</h3>
                <h6 className="downloadh6">Be the first one to explore one of the best Event Application</h6>
                <img className="downloadbtn1" src="/images/googleplay.png" />
                <img src = "/images/128x128.png" />
            </div> */}

            <div className="container download">
                <div className="row ">
                    <div className="col-lg-12 col-12">
                        <h3 className="downloadh3">Download the Event Community App now !</h3>
                        <h6 className="downloadh6">Be the first one to explore one of the best Event Application</h6>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="downloadbtn1" src="/images/googleplay.png" />
                        <img  src = "/images/128x128.png" />
                    </div>

                </div>
            </div>

            <div className="row" id="footer">
                <div className="col">
                    <h5 className="footerh5">Company</h5>
                    <ul id="li">
                        <li>
                            Career
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            About US
                        </li>
                        <li>
                            Press Info
                        </li>
                        <li>
                            Features
                        </li>
                        <li>
                            Successes
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="footerh5">Event</h5>
                    <ul id="li">
                        <li>
                            Why Event
                        </li>
                        <li>
                            Enterprise
                        </li>
                        <li>
                            Customer Stories
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Security
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="footerh5">Resources</h5>
                    <ul id="li">
                        <li>
                            Download
                        </li>
                        <li>
                            Help Centre
                        </li>
                        <li>
                            Guides
                        </li>
                        <li>
                            Events
                        </li>
                        <li>
                            App Directory
                        </li>
                        <li>
                            Partners
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="footerh5">Extras</h5>
                    <ul id="li">
                        <li>
                            Podcast
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            Work
                        </li>
                        <li>
                            Fund
                        </li>
                        <li>
                            Integration
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h5 className="subs">Rating</h5>
                    {/* <form >
                    <input type="email" class="form-control input" data-inline="true" placeholder="Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <Button data-inline="true" className="inputbuttton">➜</Button>
                    </form> */}
                    <text className="p">8/10</text>
                    <p className="p">Overall Rating</p>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
            </div>
        </div>
        
    );
}

export default navbar;