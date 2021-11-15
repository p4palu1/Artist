import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Image } from "react-bootstrap"
import "../css/BioScreen.css"
import profilepic from "../css/profilepic.jpg"
import p1 from "../css/pics/0D6A0044.jpg"
import p2 from "../css/pics/0D6A0060.jpg"
import p3 from "../css/pics/0D6A0038 copy.jpg"
import p4 from "../css/pics/0D6A9955.jpg"
import p5 from "../css/pics/0D6A0075.jpg"
import p6 from "../css/pics/0D6A9983.jpg"



const BioScreen = () => {

    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

    return (
        <Container className="mt-5">
           <Row>
                <div className="text-center mt-4">
                    {/*<Image src={profilepic} height="171px" width="180px" rounded className="mb-4"/>*/}

                </div>

                <Row style={{marginBottom: "300px", marginTop: "50px"}} data-aos="fade-right">
                        <Col md={5} className="display-6 mb-5 text-end d-flex justify-content-center align-items-center">
                            
                        "רולס נולד ברמת גן בשנת 1941, עד מהרה בילדותו המוקדמת התגלה בו כישרון ציור ודחף עז לצייר ללא הרף"

                        </Col>
                        <Col md={7} className="text-start d-flex justify-content-center align-items-center">
                            <Image src={p5} width="100%" height="100%"/>
                        </Col>
                </Row>
                

                <Row style={{marginBottom: "300px"}} data-aos="fade-left">
                    
                    <Col md={5} className="text-end d-flex justify-content-center align-items-center">
                        <Image src={p3} width="100%" height="70%"/>
                    </Col>
                    <Col md={7} className="display-6 mb-5 text-start d-flex justify-content-center align-items-center">
                        "
רולס לא למד ציור מעודו והוא לימד את עצמו והתפתח כצייר אוטודידקט, עיון בלתי פוסק בספרי אמנות , קירבה אל ציירים בוגרי אקדמיות לציור באיטליה גרמו לו להתחבר במיוחד אל הציירים האימפרסיוניסטים כגון: פיסארו , ואן גוך, גוגן , סזאן , מאנה , רנואר , מונה ומודיליאני"

                    
                    </Col>
                </Row>

                <Row style={{marginBottom: "300px"}} data-aos="fade-right">
                    <Col md={5} className="display-6 mb-5 text-end d-flex justify-content-center align-items-center">
                        "
כאשר הגיע מועד גיוסו לצהל, גויס רולס לגדוד מרגמות כבדות של גולני, יחידה אשר סיירה בארץ לאורכה ולרוחבה , במעבר על על פני אתרים אשר נצרבו בנפשו כנושאים לציוריו העתידיים"


                    </Col>
                    <Col md={7} className="text-start d-flex justify-content-center align-items-center">
                        <Image src={p2} width="100%" height="100%"/>
                    </Col>
                </Row>


                <Row style={{marginBottom: "300px"}} data-aos="fade-left">
                    
                    <Col md={5} className="text-end d-flex justify-content-center align-items-center">
                        <Image src={p4} width="100%" height="100%"/>
                    </Col>
                    <Col md={7} className="display-6 mb-5 text-start d-flex justify-content-center align-items-center">
                        
"
במהלך שירותו הצבאי , הכיר רולס והתאהב בנערה בשם תמר , אשר זיהתה את כישרון הציור שלו והדחף לצייר, עודדה ותמכה בו ללא הרף, 
לאחר שלוש שנות חברות התחתנו, במהלך ששים ואחת שנות הזוגיות שלהם עד כה נולדו להם שני בנים, שתי בנות שבעה נכדים  וחמש נכדות".

                    
                    </Col>
                </Row>

                <Row style={{marginBottom: "300px"}} data-aos="fade-right">
                    <Col md={5} className="display-6 mb-5 text-end d-flex justify-content-center align-items-center">
                        "
טיולים משפחתיים ושלושים שנות שירות מילואים בצה"ל הנחילו לרולס מראות של אתרים אשר שימשו נושאים לציוריו.
ביקורים במוזיאונים בפריז, ניו יורק, אמסטרדם, בוסטון, סן פרנסיסקו, תל אביב וירושלים וניתוח יצירותיהם של גדולי הציירים האימפרסיוניסטים ליטשו את יכולת הציור של רולס.
"
                    </Col>
                    <Col md={7} className="text-start d-flex justify-content-center align-items-center">
                        <Image src={p1} width="100%" height="100%"/>
                    </Col>
                </Row>

                <Row style={{marginBottom: "300px"}} data-aos="fade-left">
                    
                    <Col md={5} className="text-end d-flex justify-content-center align-items-center">
                        <Image src={p6} width="100%" height="100%"/>
                    </Col>
                    <Col md={7} className="display-6 mb-5 text-start d-flex justify-content-center align-items-center">
                        
"
רולס התכבד בשבע תערוכות יחיד, ושבע תערוכות קבוצתיות ובתשבוחותיהם של בכירי מבקרי האמנות בארץ וכן בתשבוחותיהם של עשרות אורחים אשר כתבו את התרשמותיהם בספרי האורחים בתערוכות.

"
                    
                    </Col>
                </Row>

<br />
<br />


<br />
<br />

                
           </Row>
        </Container>
    )
}

export default BioScreen
