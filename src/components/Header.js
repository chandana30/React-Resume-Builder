import React from 'react'
import { Container, Navbar, } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Container>
  <Navbar expand="lg" variant="dark" bg="primary">
    <Container>
      <Navbar.Brand href="#">Resume Builder</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
        </div>
    )
}

export default Header
