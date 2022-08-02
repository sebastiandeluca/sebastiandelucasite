import React, { useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import logo from './logo.png';
import './App.css';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import seb from './img/seb.jpg';
import appetment_logo from './img/appetment.png';
import prism_logo from './img/Prism.png';
import comm_logo from './img/comm.png';
import super_logo from './img/supercalculator.png';
import pdf from './Components/SebastianDeluca.pdf';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Navbar = (props) => {
  const onClickHandler = (event) => {
    props.changePage(event.target.value);
  }
  return (
    <div className="Nav">
      <button onClick={onClickHandler} value="About"className="Button">About</button>
      <button onClick={onClickHandler} value="Projects"className="Button">Projects</button>
      <button className="Button"><a href={pdf} target="_blank" rel="noreferrer">Resume</a></button>
    </div>
  )
}


const Splash = (props) => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <img src={logo} className="App-logo-still" alt="logo" />
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
        <img src={logo} className="App-logo-still" alt="logo" />
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
        <div className='text-block'>
          <h2 className='text-head'>Work Experience</h2>
          <p className='description'>
            <em>Quality Assurance Technician (2022)</em> - <strong>Sentry Health Inc.</strong><br></br>
            Ensured that newly developed features were implemented correctly and also developed tools for various purposes.
          </p>
          <p className='description'>
            <em>Lead Web Designer (2022)</em> - <strong>DCL Group of Companies</strong><br></br>
            Completely redesigned both the portfolio site and a construction project’s site, consistently implementing client requests exactly as requested with efficiency.
          </p>
        </div>
        <div className='text-block'>
          <h2 className='text-head'>Certifications</h2>
          <p className='description'>
            - Web Design in Python & JavaScript (Acq. 2021) - <strong>HarvardX</strong><br></br>
            - Developing Cloud Applications with Node.js and React (Acq. 2022) - <strong>IBM</strong>
          </p>
        </div>
        <div className='text-block'>
          <h2 className='text-head'>Languages</h2>
          <p>Python</p>
          <div className='Skill-container'>
            <div className="Skill py">100%</div>
          </div>
          <p>JavaScript</p>
          <div className='Skill-container'>
            <div className="Skill js">100%</div>
          </div>
          <p>React</p>
          <div className='Skill-container'>
            <div className="Skill rt">85%</div>
          </div>
          <p>Django</p>
          <div className='Skill-container'>
            <div className="Skill dj">85%</div>
          </div>
          <p>SQL</p>
          <div className='Skill-container'>
            <div className="Skill sql">70%</div>
          </div>
          <p>C</p>
          <div className='Skill-container'>
            <div className="Skill c">60%</div>
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


function App() {
  const [state, setState] = useState("Splash");
  const changePage = (newState) => {
    setState(newState);
  }
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
    duration: 1000
  });
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2500, "done");
  });
}


export default App;
