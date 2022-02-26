import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { LinkContainer } from "react-router-bootstrap"
import { Button, Carousel } from "react-bootstrap";
import '../css/HeroSection.css';
import p1 from "../css/pics/hero1.jpg"
import p2 from "../css/pics/hero2.jpg"
import p3 from "../css/pics/hero3.jpg"
import p4 from "../css/pics/col5.jpg"
import p5 from "../css/pics/hero1-small.jpg"
import p6 from "../css/pics/hero2-small.jpg"
import p7 from "../css/pics/hero3-small.jpg"
import p8 from "../css/pics/col-5.jpeg"
import ReactDOM from "react-dom";


const HeroSection = () => {

    const [bgIndex, setBgIndex] = useState(0)
    const bgs = [
      {
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },{
        i: p1,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p2,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p3,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p4,
        text: 'ביוגרפיה',
        link: "/bio"
      },
    ]

    const bgsSmall = [
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
      },
      {
        i: p5,
        text: 'ציורי נוף - שמן',
        link: '/gallery/oil'
      },
      {
        i: p6,
        text: 'ציורי נוף - רישומים',
        link: '/gallery/bw'
      },
      {
        i: p7,
        text: 'ציורי גוף',
        link: '/gallery/body'
      },
      {
        i: p8,
        text: 'ביוגרפיה',
        link: "/bio"
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

    const width = window.innerWidth

    return (
   <div>
    {
    width >= 1100 
    ? <div className='hero-container' style={{background: `url(${bgs[bgIndex].i}) center center/cover no-repeat`, transition: 'background 0.5s ease'}}>
          <div className='hero-btns'>
              <LinkContainer to={bgs[bgIndex].link} style={{backgroundColor: 'rgb( 0, 0, 0)',textDecoration: 'none', letterSpacing: '4px', fontSize: '20px'}}>
                <Button style={{backgroundColor: 'rgb( 0, 0, 0)'}} variant="dark" className="btn-lg mb-5">
                  {bgs[bgIndex].text}<i class="fas fa-dumbbell"></i>
                </Button>  
                
              </LinkContainer> 
          </div>
       </div>
    : <div className='hero-container' style={{background: `url(${bgsSmall[bgIndex].i}) center center/cover no-repeat`, transition: 'background 0.5s ease'}}>
          <div className='hero-btns'>
              <LinkContainer to={bgsSmall[bgIndex].link} style={{backgroundColor: 'rgb( 0, 0, 0)',textDecoration: 'none', letterSpacing: '4px', fontSize: '20px'}}>
                <Button style={{backgroundColor: 'rgb( 0, 0, 0)'}} variant="dark" className="btn-lg mb-5">
                  {bgsSmall[bgIndex].text}<i class="fas fa-dumbbell"></i>
                </Button>  
                
              </LinkContainer> 
          </div>
       </div>}
      
   </div>
    
  );
}

export default HeroSection