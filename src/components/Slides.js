import React, { useState, useContext } from 'react';
import { Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import p1 from "../css/pics/body/0D6A0073.jpg"
import p2 from "../css/pics/body/0D6A0075.jpg"
import p3 from "../css/pics/body/0D6A0077.jpg"
import p4 from "../css/pics/body/0D6A0079.jpg"
import p5 from "../css/pics/body/0D6A0081.jpg"
import p6 from "../css/pics/body/0D6A0084.jpg"
import p7 from "../css/pics/body/0D6A0086.jpg"
import p8 from "../css/pics/body/0D6A0088.jpg"
import p9 from "../css/pics/body/0D6A0106.jpg"
import p10 from "../css/pics/body/0D6A0108.jpg"
import p11 from "../css/pics/body/0D6A0110.jpg"
import p12 from "../css/pics/body/0D6A0112.jpg"
import p13 from "../css/pics/body/0D6A0113.jpg"
import p14 from "../css/pics/body/0D6A0115.jpg"
import p15 from "../css/pics/body/0D6A9955.jpg"
import p16 from "../css/pics/body/0D6A9974 copy.jpg"
import p17 from "../css/pics/body/0D6A9983.jpg"
import p18 from "../css/pics/body/a1.jfif"
import "../css/Slides.css"
import { IndexContext } from "../screens/context.js"

const Slides = ({photos}) => {
    
    const {pindex, setPindex, display, setDisplay, setGaldisplay, galdisplay } = useContext(IndexContext)
    const handleRight= () => {
        if(pindex === photos.length - 1) {
            setPindex(0)
        }
        else{
            setPindex(pindex + 1)
        }
        console.log(pindex)
    }

    const handleLeft= () => {
        if(pindex === 0) {
            setPindex(photos.length - 1)
        }
        else{
            setPindex(pindex - 1)
        }
        console.log(pindex)
    }

    const exit = () => {
        setDisplay("none")
        setGaldisplay("flex")
    }
    
    return <div className="slides" style={{display: display}}>
            <FontAwesomeIcon icon={faCircleXmark} onClick={() => exit()}/>
                <div className="outer" >
                        <FontAwesomeIcon classname="arrow left" icon={faArrowLeft} onClick={() => handleLeft()}/>
                            <img src={photos[pindex]} height="600px" />
                        <FontAwesomeIcon classname="arrow right" icon={faArrowRight} onClick={() => handleRight()}/>
                </div>
            </div>
                
};

export default Slides;

