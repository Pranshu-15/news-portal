import { Navbar, Nav, Form, FormControl, Button, Dropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Menu = ({ handleCategoryClick, handleSearch }) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          News App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCategoryClick("world")}>
                  World
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("business")}>
                  Business
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("technology")}>
                  Technology
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
                  Sports
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>
                  Entertainment
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>

          <Form onSubmit={handleSearch} className="d-flex">
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
}

export default Menu;
