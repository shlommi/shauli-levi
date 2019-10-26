import Layout from '../components/Layout';
import Button from '../components/Button';

const Homepage = () => (
    <Layout>
      <section className="homepage-wrapper">
        <header>
          <div className="img-wrapper"></div>
        </header>
        <article className="homepage-info">
          <p>
          מחפשים תחום לימודים ועיסוק לחיים ולא יודעים במה לעסוק ובמה לעבוד? לא אוהבים את מקום העבודה שלכם? יש לכם יום רע ואתם לא מבינים למה? אתם מחליפים עבודות כמו חול ולא מצליחים להישאר קבועים וממוקדים במטרה? אתם עקשנים מאוד ולא מוכנים לוותר על דברים? אתם פגיעים ?מאוד וזה מפריע לכם מבחינה חברתית? ?סובלים מבעיות בריאות?
          </p>
          <p>
          רוצים לפתור את הבעיות שלכם? אם לפחות אחד מכל הדברים האלה קשור אליכם, אני מבטיח לכם שבעזרת מפה נומרולוגית שבעזרתה ניתן לאבחן את אישיותו ומרכביו של האדם אני יוכל לעזור לכם בכל תחום בחיים ואני יעזור לכם לפתור כל בעיה שרק תרצו בחיים.
          </p>
          <p>
          שאולי רוה לוי, מאבחן אישיות במגמת אסטרו-נומרולוגיה, יאבחן אתכם באמצעות מפת האישיות שלכם ויגלה לכם דברים שאפילו אתם לא ידעתם על עצמכם, תנסו ותדהמו.
          </p>
          <Button 
          url="/yeutz-hachvana" 
          text="צרו קשר לקבלת ייעוץ"
          mt="30"
          mb="50"
          />
        </article>
      </section>
      <style jsx>
        {`
          .homepage-wrapper {
            width: 100%;
          }

          .img-wrapper {
            margin: 40px 0;
            background: url('../static/images/sunset.jpg');
            background-origin: center;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            width: 100%;
            min-height: 55vh;
            overflow: hidden;
          }

          article.homepage-info {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            max-width: 750px;
            margin: 0 auto;
          }
        
          @media(max-width: 600px) {
            .img-wrapper {
              margin: 0;
            }
          }
        `}
      </style>
    </Layout> 
  );
export default Homepage;