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
import p38 from "../css/pics/bw/072.png" 
import p39 from "../css/pics/bw/o43.png" 
import p40 from "../css/pics/bw/o44.png" 
import p41 from "../css/pics/bw/o45.png" 
import p42 from "../css/pics/bw/o56.png" 
import p43 from "../css/pics/bw/o57.png" 
import p44 from "../css/pics/bw/o61.png" 
import p45 from "../css/pics/bw/o67.png" 
import p46 from "../css/pics/bw/o68.png" 
import p47 from "../css/pics/bw/o69.png" 
import p48 from "../css/pics/bw/o73.png" 
import p49 from "../css/pics/bw/o76.png" 
import p50 from "../css/pics/bw/o79.png" 
import p51 from "../css/pics/bw/o82.png" 
import p52 from "../css/pics/bw/o46.png" 
import p53 from "../css/pics/bw/o86.png" 
import "../css/Gallery.css"


 


import Slides from "../components/Slides"
import { IndexContext } from "./context.js"





const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const BWGallery = () => {

    const photos = [{image:p1, text:"רכס ארבל מבט אל הכנרת"}, {image:p2, text:"הירדן בעמק החולה"}, {image:p3, text:"סירות דייגים בחוף יפו"}, {image:p4, text:"סירת דייג בחוף נמל חיפה"}, {image:p5, text:"תחנת הרכבת קרית מוצקין"}, {image:p6, text:"גשרון בעמק יזרעאל"}, {image:p7, text:"עץ מחט בעמק זבולון"}, {image:p8, text:"מטע זיתים ליד כרמיאל"}, {image:p9, text:"בוסתן בעמק על יד כרמיאל"}, {image:p10, text:"עץ אלה בסמוך לכרמיאל"}, {image:p11, text:"עץ זית בעמק יזרעאל"}, {image:p12, text:"עץ אלה בסמוך לכרמיאל"}, {image:p13, text:""}, {image:p14, text:"מקטע חורש בגליל המערבי"}, {image:p15, text:"בניית סוכה בשכונת ימין משה בירושלים"}, {image:p16, text:"היכל הסםר מוזיאון ישראל ירושלים"}, {image:p17, text:"מקטע חורש בכרמל"}, {image:p18, text:"אילת הים האדום"}, {image:p19, text:"מבט אל זיכרון יעקב ממצפה עופר"}, {image:p20, text:"גשרון בירקון ברמת גן"}, {image:p21, text:"סירת משוטים בירקון ברמת גן"}, {image:p22, text:"ספסל בגן ברמת גן"}, {image:p23, text:"מקטע נוף במורדות הכרמל"}, {image:p24, text:""}, {image:p25, text:"עצי זית עתיקים במבואות ירושלים"}, {image:p26, text:"שער יפו וחומת ירושלים"}, {image:p27, text:"הכותל המערבי"}, {image:p28, text:"כנסת ישראל בירושלים"}, {image:p29, text:"עיר דוד ירושלים"}, {image:p30, text:"בית הכנסת החורבה בירושלים"}, {image:p31, text:"תחנת הקמח בשכונת מונטיפיורי"}, {image:p32, text:""}, {image:p33, text:""}, {image:p34, text:"רחוב המדרגות היורדות ימין משה ירושלים"}, {image:p35, text:"רחוב המדרגות היורדות שכונת ימין משה ירושלים"}, {image:p36, text:"נוף מעבר לירקון ברמת גן"}, {image:p37, text:""},{image:p38, text:""},{image:p39, text:"צריפון דייגים ליד הכנרת"},{image:p40, text:"צריף דייגים בטבריה"},{image:p41, text:"צפון הכנרת"},{image:p42, text:"איכר חורש במטע זיתים"},{image:p43, text:"שביל הליכה בגליל המערבי"},{image:p44, text:""},{image:p45, text:"המסגד בגבול תל אביב יפו"},{image:p46, text:""},{image:p47, text:"מצודת דוד בירושלים"},{image:p48, text:"מצודת דוד ומקטע של חומת ירושלים"},{image:p49, text:"בית סוהר האסירים בתקופת המנדט הבריטי"},{image:p50, text:"תעלת התחמושת בירושלים"},{image:p51, text:"אגנית האבן שכונת ימין משה ירושלים"},{image:p52, text:"אום ג'וני בדגניה א'"}, {image: p53, text: "מצדה וים המלח"}]
    const [display, setDisplay] = useState("none")
    const [pindex, setPindex] = useState(0)
    const [galdisplay, setGaldisplay] = useState("")
    const [photoName, setPhotoName] = useState("")
    const [photoNameDisplay, setPhotoNameDisplay] = useState("none")
    const myRef = useRef(null)

    const executeScroll = () =>{
        myRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' }) 
    }
       const changeDisplay = async (indexx) => {
        if(window.innerWidth > 900){
        setPindex(indexx - 1)
        setDisplay("flex")
        setGaldisplay("none")
        executeScroll()
        }
        else{
            setPhotoName(photos[indexx-1].text)
            setPhotoNameDisplay("")
            await delay(5000)
            setPhotoNameDisplay("none")
            
            
        }
    }


    return ( 
            <IndexContext.Provider value={{pindex, setPindex, display, setDisplay, setGaldisplay, galdisplay}}>
                    <span ref={myRef}></span>
                    <Slides photos={photos}/>
            <div style={{ display: photoNameDisplay}} className="name-bar">{photoName}</div>

                <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px", display: galdisplay}}>
                <div className="column">
                    <img src={p6} onClick={() => changeDisplay(6)}/>
                    <img src={p9} onClick={() => changeDisplay(9)}/>
                    
                    <img src={p17} onClick={() => changeDisplay(17)}/>
                    <img src={p21} onClick={() => changeDisplay(21)}/>
                    <img src={p25} onClick={() => changeDisplay(25)}/>
                    <img src={p33} onClick={() => changeDisplay(33)}/>
                    <img src={p37} onClick={() => changeDisplay(37)}/>
                    
                    <img src={p42} onClick={() => changeDisplay(42)}/>
                    <img src={p35} onClick={() => changeDisplay(35)}/>
                    <img src={p50} onClick={() => changeDisplay(50)}/>
                   


                </div>
                <div className="column">
                    <img src={p2} onClick={() => changeDisplay(2)}/>
                    <img src={p1} onClick={() => changeDisplay(1)}/>
                    
                    <img src={p14} onClick={() => changeDisplay(14)}/>
                    <img src={p22} onClick={() => changeDisplay(22)}/>
                    <img src={p26} onClick={() => changeDisplay(26)}/>
                    <img src={p30} onClick={() => changeDisplay(30)}/>
                    <img src={p34} onClick={() => changeDisplay(34)}/>
                    <img src={p39} onClick={() => changeDisplay(39)}/>
                    <img src={p43} onClick={() => changeDisplay(43)}/>
                    <img src={p46} onClick={() => changeDisplay(46)}/>
                    <img src={p49} onClick={() => changeDisplay(49)}/>
                    <img src={p18} onClick={() => changeDisplay(18)}/>
                    <img src={p53} onClick={() => changeDisplay(53)}/>
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
                    <img src={p40} onClick={() => changeDisplay(40)}/>
                    <img src={p44} onClick={() => changeDisplay(44)}/>
                    <img src={p47} onClick={() => changeDisplay(47)}/>
                    
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
                    <img src={p41} onClick={() => changeDisplay(41)}/>
                    <img src={p45} onClick={() => changeDisplay(45)}/>
                    <img src={p48} onClick={() => changeDisplay(48)}/>
                    <img src={p51} onClick={() => changeDisplay(51)}/>
                    <img src={p52} onClick={() => changeDisplay(52)}/>
                    

                </div>
                </div>
            </IndexContext.Provider>
           
    )
}

export default BWGallery