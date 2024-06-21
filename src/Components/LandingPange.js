import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import landingPageImage from '../media/landingPage.jpg'
import { gsap } from 'gsap';

const LandingPage = () => {
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 }, '-=0.25')
        .from(paragraphRef.current, { y: 50, opacity: 0, duration: 1 }, '-=0.25')
        .from(buttonRef.current, { y: 50, opacity: 0, duration: 1 }, '-=0.25')
        .from(imageRef.current, { y: 80, opacity: 0, duration: 1 }, '-=0.25');
        
        gsap.to(imageRef.current, {
            y: '30px',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          });
    }, []);
  return (
    <Container fluid className="landing-page -mt-8">
      <Row className="min-vh-100 align-items-center">
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 ref={titleRef} className="display-4 fw-bold mb-4">Welcome to News Portal</h1>
          <p ref={paragraphRef} className="lead mb-4">
            Stay informed with the latest news from around the world. Explore articles on various topics including business, technology, science, and more.
          </p>
          <Link to="/news">
            <Button ref={buttonRef} variant="primary" size="lg">
              Explore News
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <img
            ref={imageRef}
            src={landingPageImage}
            alt="News Portal"
            className="img-fluid rounded shadow w-100 landing-pg-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;