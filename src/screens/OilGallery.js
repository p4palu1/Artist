import React from 'react'
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





const OilGallery = () => {
    return (
            <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px"}}>
                <div className="column">
                    <img src={p15}/>
                    <img src={p5}/>
                    <img src={p4}/>

                </div>
                <div className="column">
                    <img src={p11}/>
                    <img src={p6}/>
                    <img src={p7}/>
                    <img src={p8}/>
                    <img src={p17}/>
                </div>
                <div className="column">
                    <img src={p9}/>
                    <img src={p10}/>
                    <img src={p16}/>
                    <img src={p3}/>
                    <img src={p12}/>
                </div>
                <div className="column">
                    <img src={p13}/>
                    <img src={p14}/>
                    <img src={p1}/>
                    <img src={p2}/>
                    
                </div>
                </div>
    )
}

export default OilGallery

