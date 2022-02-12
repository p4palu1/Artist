import React from 'react'
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




const BodyGallery = () => {
    return (
            <div className=" row mb-5" style={{marginLeft: "20px", marginRight: "20px"}}>
                <div className="column">
                    <img src={p15}/>
                    <img src={p2}/>
                    <img src={p3}/>
                    <img src={p5}/>

                </div>
                <div className="column">
                    <img src={p11}/>
                    <img src={p6}/>
                    <img src={p7}/>
                    <img src={p8}/>
                    <img src={p18}/>
                </div>
                <div className="column">
                    <img src={p9}/>
                    <img src={p10}/>
                    <img src={p4}/>
                    <img src={p12}/>
                </div>
                <div className="column">
                    <img src={p13}/>
                    <img src={p14}/>
                    <img src={p1}/>
                    <img src={p16}/>
                    <img src={p17}/>
                </div>
                </div>
    )
}

export default BodyGallery

