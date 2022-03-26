import React, { useState, useRef } from 'react'
import p1 from "../css/pics/oil/2F1A6779_1.jpg"
import p2 from "../css/pics/oil/2F1A6786_1.jpg"
import p3 from "../css/pics/oil/2F1A6787.jpg"
import p4 from "../css/pics/oil/2F1A6793_1.jpg"
import p5 from "../css/pics/oil/2F1A6795_1.jpg"
import p6 from "../css/pics/oil/2F1A6800_1.jpg"
import p7 from "../css/pics/oil/2F1A6809_1.jpg"
import p8 from "../css/pics/oil/2F1A6815_1.jpg"
import p9 from "../css/pics/oil/2F1A6819.jpg"
import p10 from "../css/pics/oil/2F1A6825_1.jpg"
import p11 from "../css/pics/oil/2F1A6827_1.jpg"
import p12 from "../css/pics/oil/2F1A6829_1.jpg"
import p13 from "../css/pics/oil/2F1A6831_1.jpg"
import p14 from "../css/pics/oil/2F1A6837_1.jpg"
import p15 from "../css/pics/oil/2F1A6842_1.jpg"
import p16 from "../css/pics/oil/2F1A6843_1.jpg"
import p17 from "../css/pics/oil/a2.jfif"
import p18 from "../css/pics/oil/newoil1.jpeg"
import p19 from "../css/pics/oil/newoil2.jpeg"
import p20 from "../css/pics/oil/newoil3.jpeg"
import p21 from "../css/pics/oil/z1.jpeg"
import p22 from "../css/pics/oil/z2.jpeg"
import p23 from "../css/pics/oil/z3.jpeg"
import p24 from "../css/pics/oil/z4.jpeg"
import p25 from "../css/pics/oil/z5.jpeg"
import p27 from "../css/pics/oil/z7.jpeg"
import p28 from "../css/pics/oil/z8.jpeg"
import p29 from "../css/pics/oil/z9.jpeg"
import p30 from "../css/pics/oil/z10.jpeg"
import p31 from "../css/pics/oil/z11.jpeg"
import p32 from "../css/pics/oil/z12.jpeg"
import p33 from "../css/pics/oil/z13.jpeg"
import Slides from "../components/Slides"
import { IndexContext } from "./context.js"





const OilGallery = () => {

    const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p27, p27, p28, p29, p30, p31, p32, p33]
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
                    <img src={p5} onClick={() => changeDisplay(5)}/>
                    <img src={p4} onClick={() => changeDisplay(4)}/>
                    <img src={p21} onClick={() => changeDisplay(21)}/>
                    <img src={p25} onClick={() => changeDisplay(25)}/>
                    <img src={p29} onClick={() => changeDisplay(29)}/>
                    <img src={p33} onClick={() => changeDisplay(33)}/>
                    
                    
                </div>
                <div className="column">
                    <img src={p11} onClick={() => changeDisplay(11)}/>
                    <img src={p6} onClick={() => changeDisplay(6)}/>
                    <img src={p7} onClick={() => changeDisplay(7)}/>
                    <img src={p8} onClick={() => changeDisplay(8)}/>
                    <img src={p17} onClick={() => changeDisplay(17)}/>
                    <img src={p19} onClick={() => changeDisplay(19)}/>
                    <img src={p22} onClick={() => changeDisplay(22)}/>
                    <img src={p30} onClick={() => changeDisplay(30)}/>


                </div>
                <div className="column">
                    <img src={p9} onClick={() => changeDisplay(9)}/>
                    <img src={p10} onClick={() => changeDisplay(10)}/>
                    <img src={p16} onClick={() => changeDisplay(16)}/>
                    <img src={p3} onClick={() => changeDisplay(3)}/>
                    <img src={p12} onClick={() => changeDisplay(12)}/>
                    <img src={p20} onClick={() => changeDisplay(20)}/>
                    <img src={p23} onClick={() => changeDisplay(23)}/>
                    <img src={p27} onClick={() => changeDisplay(27)}/>
                    <img src={p31} onClick={() => changeDisplay(31)}/>


                </div>
                <div className="column">
                    <img src={p13} onClick={() => changeDisplay(13)}/>
                    <img src={p14} onClick={() => changeDisplay(14)}/>
                    <img src={p1} onClick={() => changeDisplay(1)}/>
                    <img src={p2} onClick={() => changeDisplay(2)}/>
                    <img src={p18} onClick={() => changeDisplay(18)}/>
                    <img src={p24} onClick={() => changeDisplay(24)}/>
                    <img src={p28} onClick={() => changeDisplay(28)}/>
                    <img src={p32} onClick={() => changeDisplay(32)}/>
                    
                </div>
                </div>
        </IndexContext.Provider>
    )
}

export default OilGallery

