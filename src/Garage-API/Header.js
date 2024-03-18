import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const Header = () => {

  return (
    <div> 
      <Container fluid className=' ps-sticky pb-2 mb-5'>
        <Container className='pt-2'>
          <Row className='align-items-center'>
            <div className="col-3">
              <Navbar expand="lg" className="">
                <Container>
                  <Navbar.Brand href="/"><img src="https://duruthemes.com/demo/html/carex/img/logo-light.png" className='w-100 img-fluid' alt="" /></Navbar.Brand>
                </Container>
              </Navbar>
            </div>

            <div className='col-9 justify-content-end  p-0 text-white align-items-center '>  
                <Navbar expand="lg" className="">
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end d-flex'>
                      <Nav className="" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold ps-5 fs-5 home-red' href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/about-us" >About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/service">Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/technician-login">Technician</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/customer-login">Customer</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </div>

            {/* icon section */}
            {/* <div className='col-4 p-0 justify-content-end d-flex'>
              <Navbar expand="lg" className="justify-content-end ">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" activeKey="/home">
                      <Nav.Item>
                        <Nav.Link className='hov ps-4 fs-3' href="/"><FaInstagram /></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov ps-4 fs-3' href="" ><FaFacebookF /></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov ps-4 fs-3' href="/"><FaTwitter /></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov ps-4 fs-3' href="/"><FaGooglePlusG /></Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div> */}

          </Row>
        </Container>
      </Container>

      <Container>
        <Row className='mb-5'></Row>
      </Container>
    </div>
  )
}

export default Header