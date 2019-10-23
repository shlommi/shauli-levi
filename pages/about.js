import Layout from '../components/Layout'
import SubTitle from '../components/SubTitle'

const About = () => (
    <Layout>
       <section className="about-wrapper">
         <header>
            <h1>אודות</h1>
         </header>
         <div className="about-shauli">
            <figure>
               <img src="../static/images/shauli.PNG"  alt="about-shauli" width="450" />
            </figure>
               <p> 
               שמי שאולי רוה לוי ואני יועץ ומאבחן אישיות פסיכו-דיאגנוסטי, במגמת אסטרו-נומרולוגיה. אני מאבחן את האדם בעזרת מפת חיים אישית של האדם.
               </p>
               <p>
               מפת החיים היא מפת הלידה והיא מתארת את מרכיבי אישיותו של האדם, היא פורשת בפנינו תמונת צרכים מקיפים, רגשות, פחדים, כעסים, ממנה ניתן להבין את צרכיו של האדם בכל תחום מתחומי החיים,מה רצוי לו לעשות ומה היכולות שלו, היכן קל לו והיכן עליו להתאמץ,להשקיע ולהתמודד. המפה אינה מגלה למאבחן את מצבו הכלכלי,החברתי והמשפחתי של המאובחן.  
               </p>
               <p>   המפה כן מגלה את ההשפעה המשפחתית והסביבתית של האדם אותו ספג במשך חייו. יש משקל רב בחייו של האדם העשויים להשפיע על תנאי החיים ולהטות את האדם ממודעות ומההכרה של מימוש צרכיו האישיים והרגשיים. מפת החיים היא הדנ"א של האדם ובה אפשר לגלות את המגרעות ואת תכונותיו.
            </p>
           
         </div>
            <SubTitle title="לקוחות מספרים"/>
            <SubTitle title="קטעי ווידאו"/>
      </section>
         <style jsx>
            {`
            header {
              margin: 70px auto;
            }
            
            .about-wrapper {
               max-width: 1070px;
               margin: 0 auto;
            }
            .about-shauli {
                  width: 100%;
                  text-align: right;
                  margin-bottom: 100px;
               }
               .about-shauli img {
                  float: left;
                  margin: 10px 20px 20px 0px;
               }
             
               @media (max-width: 600px) {
                  h1  {
                     font-size: 32px;
                  }
               .about-shauli img {
                  float: none;
                  display: block;
                  margin: 0 auto 30px;
               }
            `}
         </style>
   </Layout>     
);

export default About;