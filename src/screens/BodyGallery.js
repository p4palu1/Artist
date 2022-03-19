import React, { useState, useRef } from 'react'
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
import Slides from "../components/Slides"
import { IndexContext } from "./context.js"


const BodyGallery = () => {
    const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18]
    const [display, setDisplay] = useState("none")
    const [pindex, setPindex] = useState(0)
    const [galdisplay, setGaldisplay] = useState("")

    const myRef = useRef(null)

    const executeScroll = () =>{
        myRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' }) 
    }
    const changeDisplay = (indexx) => {
        if(window.innerWidth > 900){
        setPindex(indexx - 1)
        setDisplay("flex")
        setGaldisplay("none")
        executeScroll()
        }
    }

    

    return (
        <IndexContext.Provider value={{pindex, setPindex, display, setDisplay, setGaldisplay, galdisplay}}>
            <span ref={myRef}></span>
            <Slides photos={photos} />

            <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px", display: galdisplay}}>
                    <div className="column">
                    <img src={p15} onClick={() => changeDisplay(15)}/>
                    <img src={p2} onClick={() => changeDisplay(2)}/>
                    <img src={p3} onClick={() => changeDisplay(3)}/>
                    <img src={p5} onClick={() => changeDisplay(5)}/>

                    </div>
                    <div className="column">
                        <img src={p11} onClick={() => changeDisplay(11)}/>
                        <img src={p6} onClick={() => changeDisplay(6)}/>
                        <img src={p7} onClick={() => changeDisplay(7)}/>
                        <img src={p8} onClick={() => changeDisplay(8)}/>
                        <img src={p18} onClick={() => changeDisplay(18)}/>
                    </div>
                    <div className="column">
                        <img src={p9} onClick={() => changeDisplay(9)}/>
                        <img src={p10} onClick={() => changeDisplay(10)}/>
                        <img src={p4}  onClick={() => changeDisplay(4)}/>
                        <img src={p12}  onClick={() => changeDisplay(12)}/>
                    </div>
                    <div className="column">
                        <img src={p13}  onClick={() => changeDisplay(13)}/>
                        <img src={p14}  onClick={() => changeDisplay(14)}/>
                        <img src={p1}  onClick={() => changeDisplay(1)}/>
                        <img src={p16}  onClick={() => changeDisplay(16)}/>
                        <img src={p17} onClick={() => changeDisplay(17)}/>
                    </div>
                </div>
        </IndexContext.Provider>
    )
}

export default BodyGallery

