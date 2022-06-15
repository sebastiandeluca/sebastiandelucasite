import React, { useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import logo from './logo.png';
import './App.css';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import seb from './img/seb.jpg';

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
      <button onClick={onClickHandler} className="Button">Resume</button>
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
      <div className='text-block'>
          <h2 className='text-head'>Coming Soon.</h2>
          <p className='description'>
            This part of the site hasn't been designed yet. While you wait, go check out <a href="https://sebastiandeluca.github.io/">sebastiandeluca.github.io!</a>
          </p>
        </div>
    </div>
  )
}


const About = (props) => {
    return(
     
      <div className="About">
        <img src={logo} className="App-logo-still" alt="logo" />
        <Navbar changePage={props.changePage}></Navbar>
        <div className="Personal-info">
          <img className="Side-image" src={seb} alt=""></img>
          <div className='text-block'>
            <h2 className='text-head'>The Important Stuff</h2>
            <p className='description'>
              I’m a 19 year old aspiring fullstack developer from Queen’s University. I have a very strong passion for both front and backend development, and my skills come from both experience in school and learning in my spare time.
              <br></br><br></br>Some of my most important skills in the workplace are my good communication skills, how easily I can adapt, how quickly I learn, my work ethic, and how well I work both alone and in a team.
            </p>
          </div>
        </div>
        <div className='text-block'>
          <h2 className='text-head'>Work Experience</h2>
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
        <img src={github} onClick={() => {openInNewTab("https://github.com/sebastiandeluca")}}alt=""></img>
        <img src={linkedin} onClick={() => {openInNewTab("https://www.linkedin.com/in/sebastian-deluca/")}} alt=""></img>
        <img src={email} onClick={() => {navigator.clipboard.writeText('delucaseb02@gmail.com');runPopup();}}alt=""></img>
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
