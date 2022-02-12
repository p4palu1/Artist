import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/DataScreen.css"
import { Container, Image } from "react-bootstrap"
import p1 from "../css/pics/bw/0D6A0044.jpg"
import p2 from "../css/pics/bw/0D6A0060.jpg"
import p3 from "../css/pics/bw/0D6A0038 copy.jpg"
import p4 from "../css/pics/0D6A9955.jpg"
import p5 from "../css/pics/0D6A0075.jpg"
import p6 from "../css/pics/0D6A9983.jpg"
import p7 from "../css/pics/0D6A0113.jpg"
import p8 from "../css/pics/0D6A9985.jpg"
import p9 from "../css/pics/bw/0D6A9991.jpg"
import p10 from "../css/pics/bw/0D6A0048.jpg"
import barel from"../css/pics/barel.jfif" 
import eli from"../css/pics/eli.jpg" 
import miriam from"../css/pics/miriam.jpg" 
import refaeli from"../css/pics/refaeli.jpg" 
import aguda from"../css/pics/aguda.png" 





const DataSection = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    const critics = [
      {
        id: 0,
        photo: barel,
        name: 'יואב בראל "הארץ"',
        text:'רישום וירטואוזי, עם נטייה גרפית חזקה מייצג את יוסף רולס. אמנם הסוס שברישום עשוי בטכניקה אחרת מזו שבה עשוי העירום , אך הציור בכללותו בעל מתח, מבנה מעניין ויכולת מרובה. ',
      },
      {
        id: 1,
        photo: eli,
        name: 'אלי לנצמן "ידיעות אחרונות "',
        text: 'מן התצוגה עולה דמות אמביציוזית ומוכשרת . רישומיו החופשיים של יוסף רולס מעידים על כישרון ויכולת אמנותית הראויים לתשומת לב.'
      },
      {
        id: 2,
        photo: refaeli,
        name: 'צבי רפאלי מרצה לאמנות באוניברסיטת חיפה ובטכניון העברי.',
        text: 'בחיפוש מתמיד אחר קורטוב של אושר יתור יוסף רולס עם רבים אחרים אחר הרצוי והמצוי במתאר קו בודד , בהצללה , אפורה של פחם יחשוף את עולמו הפנימי , את אשר יחוש ויראה ברוחו מבלי שייתן דעתו על כך , מה מוקדם כאן ומה מאוחר. כל יצירת אמנות באשר היא, הינה בריאה מחדש של מאווים, של תשוקה מתמדת אל רזי העולם, העולם אשר לעיתים מסתיר את סודותיו מאיתנו ועלינו לתור השכם והערב אחר הנסתר והנעלם שנבצר מאיתנו לראותו. ברישומיו השחורים – לבנים מתקרס יוסף רולס אל סף החוויה והדמיון , כאשר שניהם מהולים במציאות לאשורה , ואינו מודע לכך , היכן ראשיתה של המציאות וגלגולה החדש במחוז ההזייה .  קווי נופים רגועים , קטעי יער אחדים , פינות המסתור והסוד, בו שולטים זכרי ילדות רחוקים קרובים, נוה זעיר, בקתות בודדות, דרכים מתפתלות המובילות אל גן העדן האבוד  והנשכח מאז החטא הקדמון. וכבעולם האגדה – הסוס והאדם חד המה כאותו המיתוס על פגסוס , שרוח אנוש הייתה בקרבו. האדם החי והצומח יחיו בכפיפה אחת, כאשר המטורמפוזיס המתמיד יהפוך את המציאות לדמיון וחוזר חלילה. ברישומיו השחורים – לבנים מתקרס יוסף רולס אל סף החוויה והדמיון , כאשר שניהם מהולים במציאות לאשורה , ואינו מודע לכך , היכן ראשיתה של המציאות וגלגולה החדש במחוז ההזייה .  קווי נופים רגועים , קטעי יער אחדים , פינות המסתור והסוד, בו שולטים זכרי ילדות רחוקים קרובים, נוה זעיר, בקתות בודדות, דרכים מתפתלות המובילות אל גן העדן האבוד  והנשכח מאז החטא הקדמון. וכבעולם האגדה – הסוס והאדם חד המה כאותו המיתוס על פגסוס , שרוח אנוש הייתה בקרבו. האדם החי והצומח יחיו בכפיפה אחת, כאשר המטורמפוזיס המתמיד יהפוך את המציאות לדמיון וחוזר חלילה. ברישומיו השחורים – לבנים מתקרס יוסף רולס אל סף החוויה והדמיון , כאשר שניהם מהולים במציאות לאשורה , ואינו מודע לכך , היכן ראשיתה של המציאות וגלגולה החדש במחוז ההזייה .  קווי נופים רגועים , קטעי יער אחדים , פינות המסתור והסוד, בו שולטים זכרי ילדות רחוקים קרובים, נוה זעיר, בקתות בודדות, דרכים מתפתלות המובילות אל גן העדן האבוד  והנשכח מאז החטא הקדמון. וכבעולם האגדה – הסוס והאדם חד המה כאותו המיתוס על פגסוס , שרוח אנוש הייתה בקרבו. האדם החי והצומח יחיו בכפיפה אחת, כאשר המטורמפוזיס המתמיד יהפוך את המציאות לדמיון וחוזר חלילה. יוסף רולס הינו אוטודידקט, לא למד ציור מעודו ועל כן כה יקרת מציאות היא יצירתו הצנועה, המהיימנה והתמימה כאחד'
      },
      {
        id: 3,
        photo: miriam,
        name: 'מרים טל מבקרת אמנות של "ידיעות אחרונות", "עולם האמנות", "גזית", חברה בארגון הבינלאומי של מבקרי האמנות.',
        text: 'רישומים רבים ריאליסטיים וריאלסטיים דמיוניים בוצעו בידע ויש בהם אוירה. תיאור בעלי חיים , תיאור חפצים- הצליח בהחלט, למר יוסף רולס – גרעין של אישיות ופוטנציאל ברור.'
      },
      {
         id: 4,
        photo: aguda,
        name: 'הצייר א.נסטי אגודת הציירים והפסלים בישראל.',
        text: 'כוחו יפה בטכניקות שבגרפיקה אמנותית. במיוחד השתלט יפה על הטכניקה של תחריטי נחושת ואבץ על כל סוגיהם. ביצירותיו שפע און ובטחון עצמי. ביצירותיו בהם מתרחק יוסף רולס מהריאליזם ועובר להתמודדות עם המופשט, הופכים הגוונים להיות חיותיים ותוקפניים. בסגנון זה הוא מחפש את האסתטיקה ומבליט את הקו וכתם הצבע. מתרחק ללא סייג מהצורה והערכים שבריאליזם. התערוכה נאה ומרשימה מאוד.'
      }
    ]

    const [bikoret, setBikoret] = useState(0)

    const handleGallery = (id) => {
      setBikoret(id)
    }

    return (
        <Container className="mt-5 mb-5" >
          <div className="d-flex justify-content-center">
              <div style={{maxWidth: '500px'}} className="mb-5" data-aos="zoom-in-up">
                  <div  className="lead text-end font-italic">
                      "מן התצוגה עולה דמות אמביציוזית ומוכשרת. רישומיו החופשיים של יוסף רולס מעידים על כישרון ויכולת אמנותית הראויים לתשומת לב."
                  </div>
                  <div className="text-start mt-3">
                      אלי לנצמן, "ידיעות אחרונות"
                  </div>
              </div>
          </div>

            <div className=" row mt-5 mb-5" data-aos="zoom-in-up">
              <div className="column">
                <img src={p1}/>
                <img src={p2}/>
              </div>
              <div className="column">
                <img src={p3}/>
                <img src={p4}/>
              </div>
              <div className="column">
                <img src={p5}/>
                <img src={p6}/>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div style={{maxWidth: '500px'}} className="mb-5 mt-5" data-aos="zoom-in-up">
                  <div  className="lead text-end font-italic">
                  "רישומים רבים ריאליסטיים וריאלסטיים דמיוניים בוצעו בידע ויש בהם אוירה. תיאור בעלי חיים , תיאור חפצים- הצליח בהחלט, למר יוסף רולס – גרעין של אישיות ופוטנציאל ברור."
                  </div>
                  <div className="text-start mt-3">
                  מרים טל מבקרת אמנות של "ידיעות אחרונות", "עולם האמנות", "גזית", חברה בארגון הבינלאומי של מבקרי האמנות.
                  </div>
              </div>
          </div>

          <div className=" row mt-5 mb-5" data-aos="zoom-in-up">
              <div className="column">
                <img src={p7}/>
                <img src={p8}/>
              </div>
              <div className="column">
                <img src={p9}/>
                <img src={p10}/>
              </div>
            </div>

            <h1 className="mt-5" data-aos="zoom-in-up">ביקורות אומנותיות</h1>
            <section class="gallery" data-aos="zoom-in-up">
            <div className="cont">
              {critics.map(c => 
                <div onClick={() => handleGallery(c.id)} className="gallery-pic">
                    <img src={c.photo} alt="" className={c.id === bikoret ? "chosen-bikoret" : ""}/>
                </div>
                )}
            </div>

            <div className="mt-5">
              <p>{critics[bikoret].text}</p>
              <h4>{critics[bikoret].name}</h4>
            </div>
        </section>
        </Container>
    )
}

export default DataSection
