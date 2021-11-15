import React from 'react';
import '../App.css';
import { LinkContainer } from "react-router-bootstrap"
import { Button } from "react-bootstrap";
import '../css/HeroSection.css';


const HeroSection = () => {
    return (
    <div className='hero-container'>
      <div className='hero-btns'>
          <LinkContainer to="/repertoire" style={{backgroundColor: 'rgb( 0, 0, 0)',textDecoration: 'none', letterSpacing: '4px', fontSize: '20px'}}>
            <Button style={{backgroundColor: 'rgb( 0, 0, 0)'}} variant="dark" className="btn-lg mb-5">
              תיק עבודות <i class="fas fa-dumbbell"></i>
            </Button>  
          </LinkContainer> 
      </div>
    </div>
  );
}

export default HeroSection