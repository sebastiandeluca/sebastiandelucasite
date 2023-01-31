import React, { useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import logo from './logo.png';
import './App.scss';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import seb from './img/seb.jpg';
import appetment_logo from './img/appetment.png';
import prism_logo from './img/Prism.png';
import comm_logo from './img/comm.png';
import super_logo from './img/supercalculator.png';
import frontendpdf from './Components/sebastian deluca resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {faFlask, faDatabase, faReceipt, faFile} from '@fortawesome/free-solid-svg-icons';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const showcaseSkills = (textElement) => {
  var myskills = ['Passionate',
                  'Self-Starter',
                  'Detail-Oriented',
                  'Adaptable',
                  'Team Player',
                  'Driven',
                  'Optimistic']
}

const Navbar = (props) => {
  const onClickHandler = (event) => {
    props.changePage(event.target.value);
  }
  if (window.screen.width <= 600)
      {
        return (
          <div className="Nav">
            <button onClick={onClickHandler} value="About"className="Button">About</button>
            <button onClick={onClickHandler} value="Projects"className="Button">Projects</button>
          </div>
        )
      }
  else {
    return (
      <div className="Nav">
        <button onClick={onClickHandler} value="About"className="Button">About</button>
        <button onClick={onClickHandler} value="Projects"className="Button">Projects</button>
        
        <button onClick={onClickHandler} value="Resumes"className="Button">Resumes</button>
      </div>
    )
  }
  
}


const Splash = (props) => {

    return (
      <header className="App-header">
        <script src="https://kit.fontawesome.com/d73f57fe95.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <h1 className='name'>SEBASTIAN DELUCA</h1>
        <p className="subtitle">
          Aspiring Fullstack Web Developer
        </p>
        <Navbar changePage={props.changePage}></Navbar>
        
      </header>
    )
}


const Projects = (props) => {
  return (
    <div className="Projects">
      <Navbar changePage={props.changePage}></Navbar>
      <div className="Personal-info">
        <img className="Side-image-proj-2" src={appetment_logo} alt=""></img>
        <div className='text-block'>
          <h2 className='text-head'>Appetment</h2>
          <p className='description'>
            Appetment was a project I created as a submission for a final project for Harvard's CS50w course. The premise is that it is a service that allows you create profiles for your pets, and then create appointments for them, after which said appointment, along with your pet's info, will be forwarded to all nearby approved vet clinics. It utilizes JavaScript, Python, Django, and SQL. It is a project that I am passionate about and intend to finish, and am almost at that stage.
            To see more about Appetment, check out its <a href="https://github.com/sebastiandeluca/Appetment" rel="">repository.</a>
          </p>
        </div>
      </div>
      <div className="Personal-info">
        <img className="Side-image-proj-2" src={prism_logo} alt=""></img>
        <div className='text-block'>
          <h2 className='text-head'>Prism</h2>
          <p className='description'>
          Prism was a video game created in Python for the Grade 12 software development unit of my Intro to Computer Science class. My contributions to the project are the code for 3 of the 4 games, the code for the lobby, and creation of all of the artwork, as well as the concept and story of the game.
            To see more about Prism, check out its <a href="https://github.com/sebastiandeluca/Prism" rel="">repository.</a>
          </p>
        </div>
      </div>
      <div className="Personal-info">
        <img className="Side-image-proj-2" src={comm_logo} alt=""></img>
        <div className='text-block'>
          <h2 className='text-head'>Commerce</h2>
          <p className='description'>
          Commerce was yet another CS50w course assignment. It is an e-commerce site where you can participate in an auction for various differents types of items, a live comment section, and also has admin functionality, among other things. It utilizes JavaScript, Python, SQL, and Django.
          </p>
        </div>
      </div>
      <div className="Personal-info">
        <img className="Side-image-proj-2" src={super_logo} alt=""></img>
        <div className='text-block'>
          <h2 className='text-head'>Supercalculator</h2>
          <p className='description'>
          The Supercalculator was a personal project of mine made in Python. It is a calculator that is not only capable of the basic arithmetic operations, but can also perform the Quadratic Formula, Invert a 2x2 Matrix, calculate determinants, find derivatives, and more.
          To see more about Supercalculator, check out its <a href="https://github.com/sebastiandeluca/supercalculator" rel="">repository.</a>
          </p>
        </div>
      </div>
      <br></br><br></br>
      <div className='text-block' style={{textAlign:"center",padding:"5em"}}>
        <h2 className='text-head'>More Projects on my Github (on the right)</h2>
      </div>
        
    </div>
  )
}


const About = (props) => {
  let age = 1;
  let dob = new Date("07/07/2002");
  let month_diff = Date.now() - dob.getTime();
  let year = new Date(month_diff);
  age = Math.abs(year.getUTCFullYear() - 1970);
    return(
     
      <div className="About">
        <h1 className='name-pages'>SEBASTIAN DELUCA</h1>
        <Navbar changePage={props.changePage}></Navbar>
        <div className="Personal-info">
          <img className="Side-image" src={seb} alt=""></img>
          <div className='text-block'>
            <h2 className='text-head'>The Important Stuff</h2>
            <p className='description'>
              I’m a {age} year old aspiring fullstack developer from Queen’s University. I have a very strong passion for both front and backend development, and my skills come from both experience in school and learning in my spare time.
              <br></br><br></br>Some of my most important skills in the workplace are my good communication skills, how easily I can adapt, how quickly I learn, my work ethic, and how well I work both alone and in a team.
            </p>
          </div>
        </div>
        <div className='text-block' style={{ backgroundColor: '#07A5C3', color: 'white', padding: '2em'}}>
          <h2 className='text-head' style={{textAlign:'center'}}>Relevant Experience</h2>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Design Consulting Team Member (Current)</em> <br></br><strong>QMIND</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Leveraged tools like Python, OpenCV, and more to develop an ATM Crowd Counter AI with students from Jomo Kenyatta University of Agriculture and Technology.
          </p>
          <p className='Personal-info' style={{ color: '#4F2134', fontWeight: '600'}}>Python, numpy, opencv,
            Machine Learning, Slack</p>

          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Quality Assurance Technician (2022)</em> <br></br> <strong>Sentry Health Inc.</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Responsible for ensuring the quality of newly developed features, 
          and also developed tools for maintaining internal security. Operated 
          as a member of a development team utilziing the scrum development method.
          </p>
          <p className='Personal-info' style={{ color: '#4F2134', fontWeight: '600'}}>Python, JavaScript, Postman,
          Scrum, Quality Assurance,
          Cypress, Docker</p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Lead Web Designer (2022)</em> <br></br> <strong>DCL Group of Companies</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Utilized important UI design concepts to completely overhaul a majority of the company's websites using WordPress.
          </p>
          <p className='Personal-info' style={{ color: '#4F2134', fontWeight: '600'}}>WordPress</p>
          
        </div>
        <div className='text-body'>

        <h2 className='text-head' style={{paddingTop: '5vh'}}>Languages & Tools</h2>
        <div className='skills-section'>
          
          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faPython} />
          <p className='skill'>Python</p>
          </div>
          

          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faJs} />
          <p className='skill'>JavaScript</p>
          </div>

          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faReact} />
          <p className='skill'>React</p>
          </div>

          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faPython} />
          <p className='skill'>Django</p>
          </div>

          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faFlask} />
          <p className='skill'>Flask</p>
          </div>

          <div className='skill-container'>
            <FontAwesomeIcon className='fai' icon={faDatabase} />
          <p className='skill'>SQL</p>
          </div>
        </div>
        </div>
        <div className='text-block'  style={{backgroundColor: '#07A5C3', color: 'white'}}>
          <div className='skills-section-acco'>
          <h2 className='text-head' style={{paddingTop: '5vh', textAlign:'center'}}>Accolades</h2>
          
          <p className='description'>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Web Design in Python & JavaScript (2021)</em> <br></br> <strong>HarvardX</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Acquired the ability to leverage Django, as well as use Python and JavaScript in tandem more effectively.
          </p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Developing Cloud Applications with Node.js and React (2022)</em> <br></br> <strong>IBM</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Introduced me to certain aspects of Cloud Development and IBM DB2, as well as Node.js and React.
          </p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Python LinkedIn Assessment</em> <br></br> <strong>LinkedIn</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Scored in the top 30% of 4.1M users.
          </p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>JavaScript LinkedIn Assessment</em> <br></br> <strong>LinkedIn</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Scored in the top 5% of 2.5M users.
          </p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Git LinkedIn Assessment</em> <br></br> <strong>LinkedIn</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Scored in the top 30% of 1.3M users.
          </p>
          <p className='description-head'style={{ color: '#CFBF2D'}}><em>OOP LinkedIn Assessment</em> <br></br> <strong>LinkedIn</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Scored in the top 30% of 1.2M users.
          </p>
          
          </p>
          </div>
        </div>

        <div className='text-block'>
          <h2 className='text-head'>Contact Me</h2>
          <p className='description'>
            <strong>Phone Number:</strong> +1 6476882306<br></br>
            <strong>Email:</strong> delucaseb02@gmail.com
          </p>
        </div>
      </div>
      
    )
}


const Resumes = (props) => {
  return(
    <div className="Resumes">
      <h1 className='name-pages'>SEBASTIAN DELUCA</h1>
      <Navbar changePage={props.changePage}></Navbar>
       <div className='text-block'>
        <p className='description'>
        Feel free to download my resume and take a look at it!
        </p>
      </div>
      <div className='container-row' style={{backgroundColor: '#07A5C3', color: 'white'}}>
     
          <div className='container-col' id="resume">
          <p className='description-head'style={{ color: '#CFBF2D'}}><b>My Resume</b></p>
            <p className='description' style={{ color:'white'}}>
              Here, you can learn about my education, my previous work, and some of my other skills.
            </p>
            <button className="Button"><a className='animateda' href={frontendpdf} target="_blank" rel="noreferrer">Download</a></button>
          </div>
          
        </div>
        <div className="container-row">
            <p className='text-block'>
              Thank you for taking the time to check out my site. I hope to hear from you!
            </p>
          </div>
      </div>
      
  )
}


function App() {
  const [state, setState] = useState("Splash");
  const changePage = (newState) => {
    setState(newState);
  }
  if (window.screen.width <= 600) {
    return (
      
      <div className="App">
        <div className="notif" style={{display: "none"}}>
          Copied to clipboard.
        </div>
        <div className="connect">
          <img className="connect-image" src={github} onClick={() => {openInNewTab("https://github.com/sebastiandeluca")}}alt=""></img>
          <img className="connect-image" src={linkedin} onClick={() => {openInNewTab("https://www.linkedin.com/in/sebastian-deluca/")}} alt=""></img>
          <img className="connect-image" src={email} onClick={() => {navigator.clipboard.writeText('delucaseb02@gmail.com');runPopup();}}alt=""></img>
          <FontAwesomeIcon className='fai' icon={faFile} onClick={Navbar.onClickHandler} value="Resumes"style={{maxWidth:'2em', maxHeight:'2em'}}/>
        </div>
        
        <TransitionGroup className="Top">
          <CSSTransition key={state} in={state} timeout={1000} classNames="fade">
            <div>
            {/* <Navbar changePage={changePage}></Navbar> */}
            
              {state === "Resumes" && <Resumes changePage={changePage}></Resumes>}
  
              {state === "Splash" && <Splash changePage={changePage}></Splash>}
              
              {state === "About" && <About changePage={changePage}></About>}
  
              {state === "Projects" && <Projects changePage={changePage}></Projects>}
  
              
            </div>
          </CSSTransition>
        </TransitionGroup>
        
        
        <div className="body">
  
        </div>
      </div>
    );
  } else {
    return (
      
      <div className="App">
        <div className="notif" style={{display: "none"}}>
          Copied to clipboard.
        </div>
        <div className="connect">
          <img className="connect-image" src={github} onClick={() => {openInNewTab("https://github.com/sebastiandeluca")}}alt=""></img>
          <img className="connect-image" src={linkedin} onClick={() => {openInNewTab("https://www.linkedin.com/in/sebastian-deluca/")}} alt=""></img>
          <img className="connect-image" src={email} onClick={() => {navigator.clipboard.writeText('delucaseb02@gmail.com');runPopup();}}alt=""></img>
        </div>
        
        <TransitionGroup className="Top">
          <CSSTransition key={state} in={state} timeout={1000} classNames="fade">
            <div>
            {/* <Navbar changePage={changePage}></Navbar> */}
            
              {state === "Resumes" && <Resumes changePage={changePage}></Resumes>}
  
              {state === "Splash" && <Splash changePage={changePage}></Splash>}
              
              {state === "About" && <About changePage={changePage}></About>}
  
              {state === "Projects" && <Projects changePage={changePage}></Projects>}
  
              
            </div>
          </CSSTransition>
        </TransitionGroup>
        
        
        <div className="body">
  
        </div>
      </div>
    );
  }
  
}


async function runPopup() {
  var notif = document.querySelector(".notif");
  notif.style.display = "flex";
  await animateFadeIn(notif)
  notif.style.opacity = 0;
}


function animateFadeIn(notif)
{
  notif.animate([
    {opacity:0},
    {opacity:1}
  ], {
    duration: 3000
  });
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2500, "done");
  });
}


export default App;
