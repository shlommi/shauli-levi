import Layout from '../components/Layout'
import SubTitle from '../components/SubTitle'
import Gallery from '../components/Gallery'
import AnchorLink from '../components/AnchorLink'


const imagesColOne = [
   '/static/images/comment01.jpg',
   '/static/images/comment02.JPG',
   '/static/images/comment03.JPG',
   '/static/images/comment04.JPG'
   
];

const imagesColTwo = [

   '/static/images/comment05.JPG'
];

const About = () => (
      <Layout title="אודות">
         <section className="about-wrapper">
         <header>
            <h1>אודות</h1>
         </header>
         <article className="about-shauli">
               <img src="../static/images/photo02.jpg"  alt="about-shauli" width="640"  />
               <p> 
               שמי שאולי רוה לוי ואני יועץ ומאבחן אישיות פסיכו-דיאגנוסטי, במגמת אסטרו-נומרולוגיה. אני מאבחן את האדם בעזרת מפת חיים אישית של האדם.
               </p>
               <p>
               מפת החיים היא מפת הלידה והיא מתארת את מרכיבי אישיותו של האדם, היא פורשת בפנינו תמונת צרכים מקיפים, רגשות, פחדים, כעסים, ממנה ניתן להבין את צרכיו של האדם בכל תחום מתחומי החיים,מה רצוי לו לעשות ומה היכולות שלו, היכן קל לו והיכן עליו להתאמץ,להשקיע ולהתמודד. המפה אינה מגלה למאבחן את מצבו הכלכלי,החברתי והמשפחתי של המאובחן.  
               </p>
               <p>   המפה כן מגלה את ההשפעה המשפחתית והסביבתית של האדם אותו ספג במשך חייו. יש משקל רב בחייו של האדם העשויים להשפיע על תנאי החיים ולהטות את האדם ממודעות ומההכרה של מימוש צרכיו האישיים והרגשיים. מפת החיים היא הדנ"א של האדם ובה אפשר לגלות את המגרעות ואת תכונותיו.
            </p>
         </article>
            <SubTitle title="לקוחות מספרים"/>
            <div className="comments-wrapper">
               <Gallery images={imagesColOne}/>
               <Gallery images={imagesColTwo}/>
            </div>
            <SubTitle title="קטעי ווידאו"/>
         <div className="videos-wrapper">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F151852714842615%2Fvideos%2F469897860532826%2F&show_text=1&width=560" width="560" height="407" style={{border:"none",overflow:"hidden"}} scrolling="no" allow="encrypted-media" ></iframe>
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F151852714842615%2Fvideos%2F458276261679917%2F&show_text=1&width=560" width="560" height="452" style={{border:"none",overflow:"hidden"}} scrolling="no" allow="encrypted-media"></iframe>
         </div>
         <AnchorLink 
         linkText="https://www.facebook.com/pg/%D7%A9%D7%90%D7%95%D7%9C%D7%99-%D7%A8%D7%95%D7%94-%D7%9C%D7%95%D7%99-%D7%A0%D7%95%D7%9E%D7%A8%D7%95%D7%9C%D7%95%D7%92-%D7%92%D7%A8%D7%A4%D7%95%D7%9C%D7%95%D7%92-%D7%95%D7%99%D7%95%D7%A2%D7%A5-%D7%A2%D7%A1%D7%A7%D7%99-151852714842615/videos/?ref=page_internal" 
         title="לקטעי ווידאו נוספים"
         />
      </section>
         <style jsx>
            {`

               p {
                  margin-bottom: 10px;
               }

               header {
                  margin: 50px auto;
               }
               
               .about-wrapper {
                  max-width: 1070px;
                  margin: 50px auto;
               }

               img {
                  box-shadow: 0px 3px 6px #00000029;
               
               }
               .about-shauli {
                  margin: 0 auto 50px;
                  max-width: 950px;
                  text-align: right;
               }
               .comments-wrapper {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  max-width: 1070px;
                  margin: 50px auto;
               }

               .about-shauli img {
                  float: left;
                  margin: 10px 20px 20px 0;
               }

               .videos-wrapper {
                  justify-content: space-evenly;
                  align-items: center; 
                  margin: 40px auto;
                  display: flex;
                  flex-wrap: wrap;
                  min-height: 700px;
               }
               
               @media(max-width: 600px) {
                  header {
                     margin: 10px auto;
                  }

                  h1  {
                     font-size: 32px;
                  } 
                  .about-shauli img{
                     float: none;
                     display: block;
                     margin: 0 auto 30px;
                  }
                  .about-shauli {
                     margin: 0 auto;
                     max-width: 100%;
                     text-align: center;
                  }
                  .videos-wrapper {
                     margin: 10px auto;

                  }

                  p {
                     margin-left: 10px;
                     margin-right: 10px;
                  }

               }
            `}
         </style>
   </Layout>     
);

export default About;