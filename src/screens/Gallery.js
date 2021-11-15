import React from 'react'
import "../css/DataScreen.css"
import p1 from "../css/pics/0D6A0044.jpg"
import p2 from "../css/pics/0D6A0060.jpg"
import p3 from "../css/pics/0D6A0038 copy.jpg"
import p4 from "../css/pics/0D6A9955.jpg"
import p5 from "../css/pics/0D6A0075.jpg"
import p6 from "../css/pics/0D6A9983.jpg"
import p7 from "../css/pics/0D6A0113.jpg"
import p8 from "../css/pics/0D6A9985.jpg"
import p9 from "../css/pics/0D6A9991.jpg"
import p10 from "../css/pics/0D6A0048.jpg"

const Gallery = () => {
    return (
        <div className=" row mt-5 mb-5" data-aos="zoom-in-up">
              <div className="column">
                <img src={p1}/>
                <img src={p2}/>
                <img src={p3}/>
                <img src={p4}/>
              </div>
              <div className="column">
                <img src={p5}/>
                <img src={p6}/>
                <img src={p7}/>
                <img src={p8}/>
              </div>
              <div className="column">
                <img src={p9}/>
                <img src={p10}/>
                <img src={p9}/>
                <img src={p10}/>
              </div>
              <div className="column">
                <img src={p5}/>
                <img src={p6}/>
                <img src={p7}/>
                <img src={p8}/>
              </div>
              <div className="column">
                <img src={p9}/>
                <img src={p10}/>
                <img src={p9}/>
                <img src={p10}/>
              </div>
        </div>
    )
}

export default Gallery
