import Layout from '../components/Layout'
import CardList from '../components/CardList';


const YeutzHachvana = () => (
    <Layout>
      <section className="yeutz-wrapper">
        <header>
          <h1> ייעוץ והכוונה</h1>
        </header>
        <div className="img-wrapper"></div>
        <article className="yeutz-info">
          <p>
          שאולי רוה לוי אסטרו נומרולוג יועץ ומאבחן יכוון אותך לדרך חדשה בחיים. אני אראה לך איך להתמודד עם הקשיים שלך בחיים ואיך להפוך את הקשיים לקלים הרבה יותר. אני אראה לך כיצד ניתן להעניק עוצמה לחייך. אני אראה לך כיצד להתמודד עם אי-החלטות בחייך ואפתור לך המון התלבטויות בחיים. אני אכווין אותך מבחינה מקצועית, מהו המקצוע המתאים לך ובמה תהייה הכי מאושר לעבוד. אני אכווין אותך מבחינה זוגית ואגיד לך מתי הוא הזמן הנכון לזוגיות / חתונה / קניית דירה משותפת. אני אכווין אותך מבחינה עסקית, מתי הזמן הנכון לפתוח עסק חדש, האם לעבוד לבד או עם שותף. אני אראה לך את כל הדרכים הנכונות לחיים מאושרים יותר, חיים שמחים יותר, חיים שלווים יותר, חיים עם המון נחת, חיים עם אהבה רבה יותר, חיים שתמיד חלמת עליהם יש בכל אחד מאיתנו את הכוח לשנות את חייו ולהפוך אותם לטובים יותר, כל מה שצריך לעשות בשביל זה הוא רק לדעת את מרכיבי האישיות שלנו (מפת החיים שלנו) ובכך נוכל לדעת על עצמנו הרבה יותר.
          </p>
        </article>
        <div className="yeutz-methods">
          <CardList/>
        </div>
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

          .img-wrapper {
            background: url('../static/images/blank-daylight-direction-1638830.jpg');
            background-origin: center;
            background-position: top;
            background-repeat: no-repeat;
            background-size: 100%;
            max-width: 100%;
            height: 55vh;
            margin-bottom: 30px;
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
              margin-bottom: 30px;
            }

            header {
              margin: 10px auto;
            }

            h1 {
              font-size: 32px;
            } 

            .img-wrapper {
              background-position: center;
              background-size: right;
              max-width: 100%;
              height: 35vh;
              margin: 0 auto 30px;
              
            }
          
          }
      `}</style>
    </Layout>   
);

export default YeutzHachvana;