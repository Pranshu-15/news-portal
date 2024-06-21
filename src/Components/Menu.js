import React, { useEffect, useRef } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { gsap } from 'gsap';

const Menu = ({ handleCategoryClick, handleSearch }) => {
  const navRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const navItems = navRef.current.querySelectorAll('.nav-link, .dropdown');
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(navRef.current, { 
      y: -50, 
      opacity: 0, 
      duration: 1
    })
    .from(navItems, { 
      opacity: 0, 
      y: 20, 
      stagger: 0.1, 
      duration: 1
    }, "-=0.25") // Start slightly before the previous animation ends
    .from(searchRef.current, { 
      opacity: 0, 
      x: 50, 
      duration: 1
    }, "-=0.25"); // Start slightly before the previous animation ends

    return () => tl.kill(); // Cleanup
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          News Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto" ref={navRef}>
            <Nav.Link
              as={Link}
              to="/news"
              onClick={() => handleCategoryClick("")}
            >
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
            <>
              
              <>
                <>
                  <Nav.Link onClick={() => handleCategoryClick("world")}>
                    World
                  </Nav.Link>
                </>
                <>
                  <Nav.Link onClick={() => handleCategoryClick("business")}>
                    Business
                  </Nav.Link>
                </>
                <>
                  <Nav.Link onClick={() => handleCategoryClick("technology")}>
                    Technology
                  </Nav.Link>
                </>
                <>
                  <Nav.Link onClick={() => handleCategoryClick("science")}>
                    Science
                  </Nav.Link>
                </>
                <>
                  <Nav.Link
                    onClick={() => handleCategoryClick("entertainment")}
                  >
                    Entertainment
                  </Nav.Link>
                </>
              </>
            </>
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex" ref={searchRef}>
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              name="search"
            />
            <Button variant="outline-primary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;