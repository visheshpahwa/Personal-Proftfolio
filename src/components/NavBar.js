import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/VPLogoCrop.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY>50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Vishesh Pahwa"/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'actuve-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'actuve-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projets' ? 'actuve-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/pahwavishesh/" target="_blank"><img src={navIcon1} alt=""/></a>
                {/* <a href="https://www.facebook.com/vishu.net/" target="_blank"><img src={navIcon2} alt=""/></a> */}
                <a href="https://instagram.com/pahwa_vishesh?igshid=ZDdkNTZiNTM=" target="_blank"><img src={navIcon3} alt=""/></a>
            </div>
            <a href="https://drive.google.com/file/d/1pu8VYtA2VxM3V6fP6R_Z3CngEuMv07ox/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <button className='vvd' onClick={()=> console.log('connect')}><span>Resume</span></button>
            </a>
            {/* <button className='vvd' onClick={()=> console.log('connect')}><span>Resume</span></button> */}

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;