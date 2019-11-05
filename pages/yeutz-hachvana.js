import Layout from '../components/Layout'
import CardList from '../components/CardList';
import Button from '../components/Button';
import SpinnerIcon from '../components/SpinnerIcon'

import {useState} from 'react';


const YeutzHachvana = () => {
  const [loading, setLoading] = useState(true)
  const handleLoading = () => setLoading(false)

  return (
    <Layout title="ייעוץ והכוונה">
      <section className="yeutz-wrapper">
        <header>
          <h1> ייעוץ והכוונה</h1>
        </header>
          <div  style={{display: loading ? "block" : "none"}}>
          <SpinnerIcon/>
          </div> 
        <img onLoad={handleLoading} style={{display: loading ? "none" : "block"}} src="../static/images/blank-daylight-direction-1638830.jpg"  alt="picture"/>
        <article className="yeutz-info">
          <p>
          שאולי רוה לוי אסטרו נומרולוג יועץ ומאבחן יכוון אותך לדרך חדשה בחיים. אני אראה לך איך להתמודד עם הקשיים שלך בחיים ואיך להפוך את הקשיים לקלים הרבה יותר. אני אראה לך כיצד ניתן להעניק עוצמה לחייך. אני אראה לך כיצד להתמודד עם אי-החלטות בחייך ואפתור לך המון התלבטויות בחיים. אני אכווין אותך מבחינה מקצועית, מהו המקצוע המתאים לך ובמה תהייה הכי מאושר לעבוד. אני אכווין אותך מבחינה זוגית ואגיד לך מתי הוא הזמן הנכון לזוגיות / חתונה / קניית דירה משותפת. אני אכווין אותך מבחינה עסקית, מתי הזמן הנכון לפתוח עסק חדש, האם לעבוד לבד או עם שותף. אני אראה לך את כל הדרכים הנכונות לחיים מאושרים יותר, חיים שמחים יותר, חיים שלווים יותר, חיים עם המון נחת, חיים עם אהבה רבה יותר, חיים שתמיד חלמת עליהם יש בכל אחד מאיתנו את הכוח לשנות את חייו ולהפוך אותם לטובים יותר, כל מה שצריך לעשות בשביל זה הוא רק לדעת את מרכיבי האישיות שלנו (מפת החיים שלנו) ובכך נוכל לדעת על עצמנו הרבה יותר.
          </p>
        </article>
        <div className="yeutz-methods">
          <CardList/>
        </div>
        <Button 
          url="/contact" 
          text="הגעתם ליעד, ליחצו !"
          mt="30"
          mb="50"
          />
      </section>
      <style jsx>{`
          p {
            margin-bottom: 10px;
            text-align: right;
          }
          .yeutz-wrapper {
            max-width: 1070px;
            margin: 0 auto;
          }
          header {
            margin: 50px auto;
          }

          article {
            text-align: right;
          }
            
          img {
            margin: 0 auto 30px;
            width:1070px;  
            height:500px;  
          }

          .yeutz-methods {
            display: inline-block;
            margin: 10px auto;
          }

          @media(max-width: 600px) {
            p {
              text-align: center;
            } 
            article {
              margin: 0 10px 30px ;
            }

            header {
              margin: 10px auto;
            }

            h1 {
              font-size: 32px;
            } 

            img {
              height: 270px;
              width: 375px;
            }
          
          }
      `}</style>
    </Layout>   
);
}

export default YeutzHachvana;