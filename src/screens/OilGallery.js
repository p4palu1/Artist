import React, { useState, useRef, useCallback } from 'react'
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
//import p28 from "../css/pics/oil/z8.jpeg"
import p28 from "../css/pics/oil/m11.png"
//import p29 from "../css/pics/oil/z9.jpeg"
import p29 from "../css/pics/oil/m10.png"
import p30 from "../css/pics/oil/z10.jpeg"
//import p31 from "../css/pics/oil/z11.jpeg"
import p31 from "../css/pics/oil/m5.png"
import p32 from "../css/pics/oil/z12.jpeg"
import p33 from "../css/pics/oil/z13.jpeg"
import p34 from "../css/pics/oil/m17.png"
import p35 from "../css/pics/oil/m18.png"
import p36 from "../css/pics/oil/m19.png"
import p37 from "../css/pics/oil/m20.png"
import p38 from "../css/pics/oil/m21.png"
import p39 from "../css/pics/oil/m23.png"
import p40 from "../css/pics/oil/m24.png"
import p41 from "../css/pics/oil/m25.png"
import p42 from "../css/pics/oil/m26.png"
import p43 from "../css/pics/oil/m32.png"
import p44 from "../css/pics/oil/m33.png"
import p45 from "../css/pics/oil/m37.png"
import Slides from "../components/Slides"
import { IndexContext } from "./context.js"
import { useLongPress, LongPressDetectEvents } from "use-long-press";


// turn [photos] into an array of objects with an attribute of photo anf

// add m4 m29 m35!!!!!!!!!!

// name on mobile!!!
const OilGallery = () => {

    const photos = [{image:p1, text: ""}, {image:p2, text: "אום ג'וני והירדן בדגניה א'"}, {image:p3, text: "מבט על הרי יהודה"}, {image:p4, text: "סמטת מצודת דוד"}, {image:p5, text: "הירקון ברמת גן"}, {image:p6, text: "מצוק ארבל"}, {image:p7, text: "חוף הכנרת"}, {image:p8, text: "הירדן למרגלות קיבוץ אלומות"}, {image:p9, text: "צפון עמק הירדן והכנרת"}, {image:p10, text: "פרש במטע זיתים"}, {image:p11, text: "הר מירון מעל מושב ספסופה"}, {image:p12, text: "דרך מצודת דוד בירושלים"}, {image:p13, text: "מבט על הכינרת מקיבוץ דגניה א'"}, {image:p14, text: ""}, {image:p15, text: "הר החרמון"}, {image:p16, text: "שפך הכנרת לירדן"}, {image:p17, text: "פרש במטע זיתים"}, {image:p18, text: ""}, {image:p19, text: ""}, {image:p20, text: ""}, {image:p21, text: ""}, {image:p22, text: "הדרך אל מצוק ארבל"}, {image:p23, text: "סירות מפרש בסמוך לחוף דור"}, {image:p24, text: ""}, {image:p25, text: ""}, {image:p27, text: ""}, {image:p27, text: ""}, {image:p28, text: "מבט אל טבריה וצפון הכנרת ממצפה כנרת"}, {image:p29, text: "מבט להר מירון מגוש חלב"}, {image:p30, text: "חוף יפו בלילה"}, {image:p31, text: "מבט ממטולה על אצבע הגליל"}, {image:p32, text: "מגדל דוד בצהוב"}, {image:p33, text: "מגדל דוד בירוק"}, {image:p34, text: ""}, {image:p35, text: "מבט על הגלבוע משדות עין חרוד"}, {image:p36, text: ""}, {image:p37, text: ""}, {image:p38, text: "עץ בודד בסמוך לרמת ישי"}, {image:p39, text: "תחילת רכס הכרמל"}, {image:p40, text: ""}, {image:p41, text: "אבן האוהבים ליד חוף קיבוץ געש"}, {image:p42, text: "חוף קיבוץ געש"}, {image:p43, text: "מצודת דוד וחומת ירושלים"}, {image:p44, text: ""}, {image:p45, text: "מצודת דוד באדום"}]
    
    
    const [display, setDisplay] = useState("none")
    const [pindex, setPindex] = useState(0)
    const [galdisplay, setGaldisplay] = useState("")

    const myRef = useRef(null)

    const executeScroll = () =>{
        myRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' }) 
    }

      const callback = useCallback(() => {
    alert("Long pressed!");
  }, []);

  const bind = useLongPress(callback, {
    
    onStart: () => console.log("Press started"),
    onFinish: () => console.log("Long press finished"),
    onCancel: () => console.log("Press cancelled"),
    //onMove: () => console.log("Detected mouse or touch movement"),
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH
  });

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
                    <img src={p34} onClick={() => changeDisplay(34)}/>
                    <img src={p35} onClick={() => changeDisplay(35)}/>
                    <img src={p25} onClick={() => changeDisplay(25)}/>
                    <img src={p41} onClick={() => changeDisplay(41)}/>
                    <img src={p29} onClick={() => changeDisplay(29)}/>
                    <img src={p33} onClick={() => changeDisplay(33)}/>
                    
                    
                </div>
                <div className="column">
                    <img src={p11} onClick={() => changeDisplay(11)}/>
                    <img src={p6} onClick={() => changeDisplay(6)}/>
                    <img src={p7} onClick={() => changeDisplay(7)}/>
                    <img src={p8} onClick={() => changeDisplay(8)}/>
                    {/*<img src={p36} onClick={() => changeDisplay(36)}/>*/}
                    <img src={p17} onClick={() => changeDisplay(17)}/>
                    <img src={p19} onClick={() => changeDisplay(19)}/>
                    <img src={p42} onClick={() => changeDisplay(42)}/>
                    <img src={p22} onClick={() => changeDisplay(22)}/>
                    <img src={p30} onClick={() => changeDisplay(30)}/>
                    <img src={p45} onClick={() => changeDisplay(45)}/>


                </div>
                <div className="column">
                    <img src={p9} onClick={() => changeDisplay(9)}/>
                    <img src={p10} onClick={() => changeDisplay(10)}/>
                    <img src={p31} onClick={() => changeDisplay(31)}/>
                    <img src={p16} onClick={() => changeDisplay(16)}/>
                    <img src={p3} onClick={() => changeDisplay(3)}/>
                    <img src={p12} onClick={() => changeDisplay(12)}/>
                    <img src={p37} onClick={() => changeDisplay(37)}/>
                    <img src={p40} onClick={() => changeDisplay(40)}/>
                    <img src={p20} onClick={() => changeDisplay(20)}/>
                    <img src={p23} onClick={() => changeDisplay(23)}/>
                    <img src={p27} onClick={() => changeDisplay(27)}/>
                    <img src={p43} onClick={() => changeDisplay(43)}/>


                </div>
                <div className="column">
                    <img src={p13} onClick={() => changeDisplay(13)}/>
                    <img src={p14} onClick={() => changeDisplay(14)}/>
                    <img src={p1} onClick={() => changeDisplay(1)}/>
                    <img src={p2} onClick={() => changeDisplay(2)}/>
                    <img src={p18} onClick={() => changeDisplay(18)}/>
                    <img src={p38} onClick={() => changeDisplay(38)}/>
                    <img src={p39} onClick={() => changeDisplay(39)}/>
                    <img src={p24} onClick={() => changeDisplay(24)}/>
                    <img src={p28} onClick={() => changeDisplay(28)}/>
                    <img src={p44} onClick={() => changeDisplay(44)}/>
                    <img src={p32} onClick={() => changeDisplay(32)}/>
                    
                </div>
                </div>
        </IndexContext.Provider>
    )
}

export default OilGallery

