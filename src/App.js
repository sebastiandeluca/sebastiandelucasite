import React, { useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './App.scss';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import seb from './img/seb.JPEG';
import appetment_logo from './img/appetment.png';
import qbnb from './img/QBNBLogo.jpg';
import prism_logo from './img/Prism.png';
import comm_logo from './img/comm.png';
import ntw_logo from './img/ntw_logo.png';
import mhirj from './img/mhirjlogo.png';
import frontendpdf from './Components/sebastian deluca resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faReact, faDocker} from '@fortawesome/free-brands-svg-icons';
import {faFlask, faDatabase, faCubes, faFileExcel, faFeather} from '@fortawesome/free-solid-svg-icons';
import Project from './Components/project/project';
import Contact from './Components/contact/contact';

var color = "#cf392e";

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
      
      <button onClick={onClickHandler} value="Resumes"className="Button">Resume</button>
    </div>
  )
  
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
          Fullstack Web Developer
        </p>
        <Navbar changePage={props.changePage}></Navbar>
        
      </header>
    )
}


const Projects = (props) => {
  window.scrollTo(0,0)
  const url = new URL(window.location);
  url.searchParams.set('key', 'projects');
  window.history.pushState(null, '', url.toString());
  const timelineData = [
    {
      title: {title: 'PRISM',
      logo: prism_logo},
      date: 'Spring 2020',
      desc: "Prism was a video game created in Python for the Grade 12 software development unit of my Intro to Computer Science class. Prism leverages PyGame and SQL, and was one of the most technically advanced projects to come out of the class.",
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faCubes,
          name: 'Pygame'
        },
        { 
          icon: faDatabase,
          name: 'SQLite'
        },
      ],
      category: {
        tag: 'Game Development',
        color: '#CFBF2D'
      },
      link: {
        url: 'https://github.com/sebastiandeluca/Prism',
        text: 'View on GitHub'
      }
    },
    {
      title: {title: 'Commerce',
      logo: comm_logo},
      date: 'Fall 2021',
      desc: "Commerce was an online peer-to-peer auction website that leveraged Django, Python, JavaScript and SQL.",
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faJs,
          name: 'JavaScript'
        },
        { 
          icon: faCubes,
          name: 'Django'
        },
        { 
          icon: faDatabase,
          name: 'SQLite'
        },
      ],
      category: {
        tag: 'Fullstack Web Development',
        color: color
      },
      link: {
        url: 'https://github.com/me50/sebastiandeluca/tree/web50/projects/2020/x/commerce',
        text: 'View on GitHub'
      }
    },
    {
      title: {title: 'The Network',
      logo: ntw_logo},
      date: 'Winter 2021',
      desc: "The Network was a Twitter clone created as a project for Harvard University's CS50 course. It leveraged Django, JavaScript, Python, and SQLite.",
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faJs,
          name: 'JavaScript'
        },
        { 
          icon: faCubes,
          name: 'Django'
        },
        { 
          icon: faDatabase,
          name: 'SQLite'
        },
      ],
      category: {
        tag: 'Fullstack Web Development',
        color: color
      },
      link: {
        url: 'https://github.com/sebastiandeluca/The-Network',
        text: 'View on GitHub'
      }
    },
    {
      title: {title: 'Appetment',
              logo: appetment_logo},
      date: 'Winter 2021 to Present',
      desc: "A personal project designed to streamline the veterinary process for animals. Allows you to create personalized profiles for your pets and, using them, send out that profile to all nearby vet clinics when you need to bring your pet to the clinic. Leverages Python, JS, and Django-- and uses APIs like Twilio and DistranceMatrix AI.",
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faJs,
          name: 'JavaScript'
        },
        { 
          icon: faCubes,
          name: 'Django'
        },
        { 
          icon: faDatabase,
          name: 'SQLite'
        },
      ],
      category: {
        tag: 'Fullstack Web Dev.',
        color: color
      },
      link: {
        url: 'https://github.com/sebastiandeluca/Appetment',
        text: 'View on GitHub'
      }
    },
    {
      title: {title: 'QBNB',
      logo: qbnb},
      date: 'Fall 2022',
      desc: "An online marketplace meant to imitate AirBnB and VRBO that leverages Python, SQLite, MySQL, Docker, and Flask.",
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faFlask,
          name: 'Flask'
        },
        { 
          icon: faDocker,
          name: 'Docker'
        },
        { 
          icon: faDatabase,
          name: 'SQLite/MySQL'
        },
      ],
      category: {
        tag: 'Fullstack Web Development',
        color: color
      },
      link: {
        url: 'https://github.com/sebastiandeluca/QBNB',
        text: 'View on GitHub'
      }
    },
    {
      title: {title: 'MHIRJ Fullstack Project',
              logo: mhirj},
      date: 'Summer 2023 - Fall 2024',
      desc: 'I developed and maintained a proprietary fullstack application at MHIRJ during my 16-month internship with React, Flask, Python, and SQL.',
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faFlask,
          name: 'Flask'
        },
        { 
          icon: faReact,
          name: 'React'
        },
        { 
          icon: faDatabase,
          name: 'SQLite/MySQL'
        },
      ],
      category: {
        tag: 'Fullstack Web Development',
        color: color
      },
      link: {
        url: '',
        text: 'No Link Available'
      }
    },
    {
      title: {title: 'MHIRJ Backend Projects',
              logo: mhirj},
      date: 'Summer 2023 - Fall 2024',
      desc: 'I proposed and developed two GUI-based tools to automate monthly report generation by leveraging Python, POLARS, and Tkinter.',
      stack: [
        { 
          icon: faPython,
          name: 'Python'
        },
        { 
          icon: faFileExcel,
          name: 'Pandas'
        },
        { 
          icon: faFeather,
          name: 'Tkinter'
        },
      ],
      category: {
        tag: 'Backend Development',
        color: color
      },
      link: {
        url: '',
        text: 'No Link Available'
      }
    }
    
  ]

  return (
  timelineData.length > 0 && (
    <div>
      <h1 className='name-pages'>SEBASTIAN DELUCA</h1>
        <Navbar changePage={props.changePage}></Navbar>
        <div className='Project'>
        <h2 className='text-head' style={{textAlign:'center', paddingBottom: '.25vh'}}>My Projects</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}} className='hide-gap'>
        <div className='Projects'>
          <div className='project-holder'>
          {timelineData.map((data, idx) => (
            <Project data={data} key={idx} order={idx} />
          ))}
          </div>
          <div style={{zIndex: 2, padding: '2em', color: 'white'}}>... and much more to come!</div>
        </div>
      </div>
      
    </div>
  ))
}

const About = (props) => {
  window.scrollTo(0,0)
  const url = new URL(window.location);
  url.searchParams.set('key', 'about');
  window.history.pushState(null, '', url.toString());
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
              I’m a {age} year old fullstack developer from Queen’s University. I have a very strong passion for both front and backend development, and my skills come from both experience in school and learning in my spare time.
              <br></br><br></br>Some of my most important skills in the workplace are my good communication skills, how easily I can adapt, how quickly I learn, my work ethic, and how well I work both alone and in a team.
            </p>
          </div>
        </div>
        <div className='text-block' style={{ backgroundColor: '#07A5C3', color: 'white', padding: '2em'}}>
          <h2 className='text-head' style={{textAlign:'center'}}>Relevant Experience</h2>

          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Fullstack Developer & Analyst (2023-2024)</em> <br></br><strong>MHIRJ Aviation Group</strong></p>
          <p className='description'style={{ color: 'white'}}>
          Utilized tools like React, Flask, Python, PowerBI, and SQL to maintain current and develop new apps for MHI. Beyond this,
          I also developed tools to automate unit testing for the apps and automate monthly report generation.
          </p>
          <p className='Personal-info' style={{ color: '#4F2134', fontWeight: '600'}}>Python, React, Flask, SQL, Excel, Selenium, Cypress, Pandas/POLARS, more</p>

          <p className='description-head'style={{ color: '#CFBF2D'}}><em>Design Consulting Team Member (2023)</em> <br></br><strong>QMIND</strong></p>
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
          <h2 className='text-head'  style={{textAlign: 'center'}}>Contact Me</h2>
          <Contact />
          <p className='description' style={{textAlign: 'center'}}>
            <strong>Phone Number:</strong> +1 6476882306<br></br>
            <strong>Email:</strong> sebdelucatech@gmail.com
          </p>
        </div>
        
      </div>
      
    )
}


const Resumes = (props) => {
  window.scrollTo(0,0)
  const url = new URL(window.location);
  url.searchParams.set('key', 'resume');
  window.history.pushState(null, '', url.toString());
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
    return (
      
      <div className="App">
        <div className="notif" style={{display: "none"}}>
          Copied to clipboard.
        </div>
        <div className="connect">
          <img className="connect-image" src={github} onClick={() => {openInNewTab("https://github.com/sebastiandeluca")}}alt=""></img>
          <img className="connect-image" src={linkedin} onClick={() => {openInNewTab("https://www.linkedin.com/in/sebastian-deluca/")}} alt=""></img>
          <img className="connect-image" src={email} onClick={() => {navigator.clipboard.writeText('sebdelucatech@gmail.com');runPopup();}}alt=""></img>
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


async function runPopup() {
  var notif = document.querySelector(".notif");
  notif.style.display = "flex";
  await animateFadeIn(notif)
  await animateFadeOut(notif);
}


function animateFadeIn(notif)
{
  notif.animate([
    {opacity:0},
    {opacity:1}
  ], {
    duration: 1500
  });
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2500, "done");
  });
}

function animateFadeOut(notif)
{
  notif.animate([
    {opacity:1},
    {opacity:0}
  ], {
    duration: 1500
  });
  
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 2500, "done");
    notif.style.display = 'none';
  });
}


export default App;
