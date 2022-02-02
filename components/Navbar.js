import { Container, Nav, Navbar } from "react-bootstrap"
import   Link   from "next/link"

import  'bootstrap/dist/css/bootstrap.min.css' 

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <Navbar.Brand href="/">
                        Navbar
                    </Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/about-me">
                            <Nav.Link  href="/about-me">About me</Nav.Link>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/features">
                            <Nav.Link  href="/features">Features</Nav.Link>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/pricing">
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar