import { useState, useEffect } from 'react';
import { NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logon.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/githubs.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  };

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
              <Navbar.Brand href="#home">
                  <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link
                          href="#home"
                          className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"}
                          onClick={() => onUpdateActiveLink('home')}
                      >
                          Home
                      </Nav.Link>
                      <Nav.Link
                          href="#skills"
                          className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"}
                          onClick={() => onUpdateActiveLink('skills')}
                      >
                          Skills
                      </Nav.Link>
                      <Nav.Link
                          href="#projects"
                          className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"}
                          onClick={() => onUpdateActiveLink('projects')}
                      >
                          Projects
                      </Nav.Link>
                  </Nav>
                  <span className="navbar-text">
                      <div className="social-icon">
                          <a
                              href="https://www.linkedin.com/in/okpaise-mimi-a384a524a"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <img src={navIcon1} alt="LinkedIn" />
                          </a>
                          <a
                              href="https://github.com/MiMoSa00"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <img src={navIcon2} alt="Github" />
                          </a>
                          <a
                              href="https://www.instagram.com/dramaqueen._101/?hl=en"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <img src={navIcon3} alt="Instagram" />
                          </a>
                      </div>
                      <button className="vvd" onClick={() => window.location.href = '#contact'}>
    <span>Let's Connect</span>
</button>
                  </span>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBar;