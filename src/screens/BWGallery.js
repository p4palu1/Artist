import React, { useState, useRef, useContext, useCallback } from 'react'
import p1 from "../css/pics/bw/0D6A0060.jpg"
import p2 from "../css/pics/bw/0D6A0092.jpg"
import p3 from "../css/pics/bw/0D6A0006.jpg"
import p4 from "../css/pics/bw/boat.PNG" // boat
import p5 from "../css/pics/bw/0D6A0009.jpg"
import p6 from "../css/pics/bw/0D6A0004.jpg"
import p7 from "../css/pics/bw/0D6A0012.jpg"
import p8 from "../css/pics/bw/0D6A9992.jpg" 
import p9 from "../css/pics/bw/0D6A0001.jpg" 
import p10 from "../css/pics/bw/48.PNG"
import p11 from "../css/pics/bw/0D6A9994.jpg"
import p12 from "../css/pics/bw/50.PNG" 
import p13 from "../css/pics/bw/51.PNG"
import p14 from "../css/pics/bw/0D6A0062.jpg"
import p15 from "../css/pics/bw/0D6A0048.jpg" 
import p16 from "../css/pics/bw/0D6A0042.jpg"
import p17 from "../css/pics/bw/55.PNG" 
import p18 from "../css/pics/bw/w1.jpeg"
import p19 from "../css/pics/bw/0D6A0014.jpg" 
import p20 from "../css/pics/bw/0D6A0010.jpg"
import p21 from "../css/pics/bw/0D6A0016.jpg" 
import p22 from "../css/pics/bw/0D6A0018.jpg"
import p23 from "../css/pics/bw/w2.jpeg" 
import p24 from "../css/pics/bw/w3.jpeg"
import p25 from "../css/pics/bw/0D6A0022.jpg" 
import p26 from "../css/pics/bw/0D6A0025.jpg"
import p27 from "../css/pics/bw/0D6A0028.jpg"
import p28 from "../css/pics/bw/0D6A0044.jpg"
import p29 from "../css/pics/bw/0D6A0031.jpg"
import p30 from "../css/pics/bw/0D6A0032.jpg"
import p31 from "../css/pics/bw/0D6A0038 copy.jpg"
import p32 from "../css/pics/bw/0D6A0034.jpg"
import p33 from "../css/pics/bw/w5.jpeg" 
import p34 from "../css/pics/bw/0D6A0047.jpg" 
import p35 from "../css/pics/bw/0D6A0056.jpg" 
import p36 from "../css/pics/bw/w6.jpeg" 
import p37 from "../css/pics/bw/z7.jpeg" 



import Slides from "../components/Slides"
import { IndexContext } from "./context.js"







const BWGallery = () => {

    const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37]
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
        else{

        }
    }


    return ( 
            <IndexContext.Provider value={{pindex, setPindex, display, setDisplay, setGaldisplay, galdisplay}}>
                    <span ref={myRef}></span>
                    <Slides photos={photos}/>
                <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px", display: galdisplay}}>
                <div className="column">
                    <img src={p6} onClick={() => changeDisplay(6)}/>
                    <img src={p9} onClick={() => changeDisplay(9)}/>
                    <img src={p13} onClick={() => changeDisplay(13)}/>
                    <img src={p17} onClick={() => changeDisplay(17)}/>
                    <img src={p21} onClick={() => changeDisplay(21)}/>
                    <img src={p25} onClick={() => changeDisplay(25)}/>
                    <img src={p33} onClick={() => changeDisplay(33)}/>
                    <img src={p37} onClick={() => changeDisplay(37)}/>
                    <img src={p35} onClick={() => changeDisplay(35)}/>


                </div>
                <div className="column">
                    <img src={p2} onClick={() => changeDisplay(2)}/>
                    <img src={p1} onClick={() => changeDisplay(1)}/>
                    <img src={p10} onClick={() => changeDisplay(10)}/>
                    <img src={p14} onClick={() => changeDisplay(14)}/>
                    <img src={p18} onClick={() => changeDisplay(18)}/>
                    <img src={p22} onClick={() => changeDisplay(22)}/>
                    <img src={p26} onClick={() => changeDisplay(26)}/>
                    <img src={p30} onClick={() => changeDisplay(30)}/>
                    <img src={p34} onClick={() => changeDisplay(34)}/>

                </div>
                <div className="column">
                    <img src={p3} onClick={() => changeDisplay(3)}/>
                    <img src={p7} onClick={() => changeDisplay(7)}/>
                    <img src={p11} onClick={() => changeDisplay(11)}/>
                    <img src={p15} onClick={() => changeDisplay(15)}/>
                    <img src={p19} onClick={() => changeDisplay(19)}/>
                    <img src={p23} onClick={() => changeDisplay(23)}/>
                    <img src={p27} onClick={() => changeDisplay(27)}/>
                    <img src={p31} onClick={() => changeDisplay(31)}/>
                    <img src={p20} onClick={() => changeDisplay(20)}/>

                </div>
                <div className="column">
                    <img src={p4} onClick={() => changeDisplay(4)}/>
                    <img src={p8} onClick={() => changeDisplay(8)}/>
                    <img src={p12} onClick={() => changeDisplay(12)}/>
                    <img src={p16} onClick={() => changeDisplay(16)}/>
                    <img src={p24} onClick={() => changeDisplay(24)}/>
                    <img src={p28} onClick={() => changeDisplay(28)}/>
                    <img src={p32} onClick={() => changeDisplay(32)}/>
                    <img src={p36} onClick={() => changeDisplay(36)}/>
                    <img src={p5} onClick={() => changeDisplay(5)}/>
                    <img src={p29} onClick={() => changeDisplay(29)}/>
                    

                </div>
                </div>
            </IndexContext.Provider>
           
    )
}

export default BWGallery