import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { FaMobileAlt,FaAddressCard, FaBlogger, FaMailchimp, FaAddressBook, FaMedium, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, #003366 0%, #0099cc 100%)`,
          color: 'white',
        }}
      >
        <Container>
          <div className="row p-5">
            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4">
              <h5>GET IN TOUCH</h5>
              <p>
              <FaMailchimp></FaMailchimp> info@example.com
              </p>
              <p>
              <FaMobileAlt></FaMobileAlt> +673 853 605
                985
              </p>
              <p>
                <FaAddressCard></FaAddressCard> Colonial Rd, Brooklyn,
                NY 11209
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4">
              <h5>QUICK LINKS</h5>
              <p>
                <FaBlogger></FaBlogger> Blogs
              </p>
              <p>
                <FaMedium></FaMedium> About
              </p>
              <p>
              <FaAddressBook></FaAddressBook>  Contact Us
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4">
              <h5>NEWSLETTER</h5>
              <form>
                <div style={{ display: 'flex' }}>
                  <div
                    className="emailIcon"
                    style={{ backgroundColor: 'white', padding: '10px' }}
                  >
                    <FaMailBulk style={{color: 'blue'}}></FaMailBulk>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      style={{ border: 'none' }}
                    ></input>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <Button
                    style={{
                      padding: '8px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      width: '245px',
                      backgroundColor: '#003366',
                    }}
                  >
                    SUBSCRIBE NOW
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="footerEnd"
        style={{
          backgroundColor: '#0099cc',
          color: 'white',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <p>
          © 2022 Copyright By <b>Saifur</b>. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer