import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { LinkContainer } from "react-router-bootstrap"
import { Button, Carousel } from "react-bootstrap";
import '../css/HeroSection.css';
import p1 from "../css/pics/2F1A6795_1.jpg"
import p2 from "../css/pics/0D6A0092.jpg"
import p3 from "../css/pics/0D6A9955.jpg"
import p4 from "../css/pics/col5.jpg"
import ReactDOM from "react-dom";


const HeroSection = () => {

    const [bgIndex, setBgIndex] = useState(0)
    const bgs = [
      {
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },
      {
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },{
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },{
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },{
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },{
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },{
        i: p1,
        text: 'ציורי נוף - שמן'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים'
      },
      {
        i: p3,
        text: 'ציורי גוף'
      },
      {
        i: p4,
        text: 'ביוגרפיה'
      },
    ]

    useEffect(() => {
        setInterval(() => {
          setBgIndex(bgIndex => bgIndex + 1)
      }, 5000)
      setInterval(() => {
          window.location.reload(false);
      }, 50000)
    }, [])

    return (
    <div className='hero-container' style={{background: `url(${bgs[bgIndex].i}) center center/cover no-repeat`, transition: 'background 0.5s ease'}}>
      <div className='hero-btns'>
          <LinkContainer to="/repertoire" style={{backgroundColor: 'rgb( 0, 0, 0)',textDecoration: 'none', letterSpacing: '4px', fontSize: '20px'}}>
            <Button style={{backgroundColor: 'rgb( 0, 0, 0)'}} variant="dark" className="btn-lg mb-5">
              {bgs[bgIndex].text} <i class="fas fa-dumbbell"></i>
            </Button>  
          </LinkContainer> 
      </div>
    </div>
  );
}

export default HeroSection