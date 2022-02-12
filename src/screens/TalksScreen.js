import React from 'react'
import "../css/TalksScreen.css"
import talk1 from "./talks/talk1" 
import talk2 from "./talks/talk2" 
import talk3 from "./talks/talk3" 
import talk4 from "./talks/talk4" 
import talk5 from "./talks/talk5" 
import talk6 from "./talks/talk6" 
import talk7 from "./talks/talk7" 
import talk8 from "./talks/talk8" 
import talk9 from "./talks/talk9" 
import talk10 from "./talks/talk10" 
import talk11 from "./talks/talk11" 
import talk12 from "./talks/talk12" 
import talk13 from "./talks/talk13.js" 
import talk14 from "./talks/talk14" 
import talk15 from "./talks/talk15" 
import talk16 from "./talks/talk1" 


const TalksScreen = () => {

    const talks = [
        {
            title: 'איגרת הרמב"ן',
            talk: talk1, 
        },
        {
            title: 'עצי ארץ ישראל',
            talk: talk2
        },
         {
            title: 'שמן זית',
            talk: talk3
        },
        {
            title: 'ארץ ישראל',
            talk: talk4
        },
        {
            title: 'השפעות',
            talk: talk5
        },
        {
            title: 'חפצים בבית',
            talk: talk6
        },
        {
            title: 'ספרות',
            talk: talk7
        } ,
        {
            title: 'התנ"ך ואני',
            talk: talk8
        },
        {
            title: 'מקומות',
            talk: talk9
        },
        {
            title: 'חלומות בצבע',
            talk: talk10
        },
        {
            title: 'אסתטיקה',
            talk: talk11
        },
        {
            title: 'ירושלים',
            talk: talk12
        },
        {
            title: 'הסירה',
            talk: talk13
        },
        {
            title: 'סצנת היכרות',
            talk: talk14
        }
        ,
        {
            title: 'תמר',
            talk: talk15
        }
        
    ]

    return (
        <div>
            <h1 className="mt-5 mb-5">שיחות עם יוסף רולס(חוקו)</h1>
            <section>
                {talks.map(t => 
                    <t.talk />
                )}
            </section>
            
            
        </div>
    )
}

export default TalksScreen
