import Layout from '../components/Layout'
import Button from '../components/Button'

const MapatHaim = () => (
  <Layout title="מפת חיים">
  <section className="mapathaim-wrapper">
    <header>
      <h1>מפת חיים </h1>
    </header>
    <div className="img-wrapper"></div>
    <article className="mapathaim-info">
      <p>מהי מפת חיים אישית?</p>
      <p>בהבנת מפת אישיות האדם יוכל כל אחד לדעת את מאפייניו וכישוריו ואת הפוטנציאלים הגלומים במפת לידתו וכן יוכל לזהות את הצרכים הבסיסיים שלו, השאיפות והרצונות, וזיהוי היכולות להגשים את הייעוד בכל שלב ושלב בחיים. הייעוץ מעניק ידע מעמיק כדי להכיר את נפש האדם ואת אישיותו ולהכיר את צפונות ליבו על מנת לשפר את איכות חייו ולשפר את כישוריו המקצועיים, המשפחתיים, הציבוריים והחברתיים. אני מאמין כי המודעות העצמית שתבוא בעקבות האבחון תוביל לשינוי, לשיפור והתייעלות בכל תחומי החיים. האבחון יצליח להחדיר את החדווה והרצון לרצות להתפתח, להתעצם ולרכוש ביטחון עצמי, לרצות לעזור ליקרים ולמקורבים תוך פיוס והשלמה ולהאמין שראייה אופטימית יוצרת את מציאות העתיד.</p>
      <p>המאבחן מזין במפה את שמו הפרטי ושם המשפחה של המאובחן ואת תאריך הלידה, ואז מופיע למאבחן עולם ומלואו על המאובחן, כל מוקד במפה מסמן חלק אחר באדם ובחייו של האדם, לדוגמא, מוקד הראש מייצג את שאיפתו ורצונו של האדם ולהצלחה והגשמה, דוגמא נוספת היא מוקד הידיים שמייצג את בריאות האדם, חוסנו ויכולתו להגשים את עצמו בכל תחומי החיים, וכך כל מוקד במפה מייצג ומאפיין תכונות וערכים רבים ונוספים באדם ובחייו. חוץ מכל מוקדי המפה שמציינים ומאפיינים את האדם, יש גם את תבניות החיים של האדם שמייצג את התקופה הנוכחית בה נמצא האדם וגם את התקופה העתידית בה הוא עתיד להיות, וכך המאבחן יכול לספר למאובחן על התקופה בה הוא נמצא ועל כל הדרכים בה הוא יכול להפוך אותה להיות תקופה הרבה יותר טובה מבחינת בריאותית,כלכלית ,משפחתית,חברתית,לימודים, וכל תחום אחר. חוץ מכל הנאמר פה יש עוד מלא מרכיבים במפה לאישיותו ואופיו של האדם שבעזרתם ניתן לגלות את כל יכול לדעת איך לשפר איך איכות חייו של המאובחן בכל התחומים האלה ולהמליץ לו את דרכים שבעזרתם הוא יוכל להצליח מבחינה כלכלית, להיות בריא יותר, להצלחה בלימודים ובכל מה שהוא חפץ בו. זה היה ההסבר בקצרה על מהי האישיים ואיך ניתן להפוך אותם לחיים מאושרים יותר וכפי שחלמתם עליהם תקבלו בפגישה אישית אחד על אחד עם המאבחן.</p>
      <p>אתם יוצרים קשר עם המאבחן ומביאים לו את שמכם המלא ואת תאריך הלידה שלכם, המאבחן מכין לכם מפה אישית שלכם, עוד לפני הפגישה שלכם, המאבחן עובר על המפה שלכם ולפי לימודיו עובר על כל המפה כדי לאבחן אתכם בצורה הטובה ביותר, לאחר מכן אתם תקבעו פגישה שיתאים לכם מבחינה יום ושעה ובפגישה אתם תקבלו מפה אישית שלכם והסבר על כל מוקד ומוקד במפת האישיות שלכם, תקבלו הסבר מפורט על כל מוקד ומהו מהווה עבורכם בחיים ואיך תוכלו לשפר את חייכם בעזרת טיפים מדהימים שישנו את החיים שלכם לטובה, ואני מבטיח לכם שאתם תצאו מהפגישה עם חיוך גדול על הפנים ותגידו לעצמכם "איזה מזל שהגעתי לייעוץ" ותראו איך הכל יתחיל להסתדר לכם כמו שאתם רוצים... אז אל תהססו והתקשרו...</p>
    </article>
      <Button
        url="/contact"
        text="גלו את מפת החיים שלכם"
        mb="100"
      />
  </section>
  <style jsx>{`
      p {
        margin-bottom: 10px;
        text-align: right;
      }
      .mapathaim-wrapper {
        max-width: 1070px;
        margin: 0 auto;
      }
      header {
        margin: 50px auto;
      }

      .mapathaim-info {
        margin-bottom: 50px;
      }

      .img-wrapper {
        background: url('../static/images/black-and-white-light-man-172738.jpg');
        background-origin: center;
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100%;
        max-width: 100%;
        height: 55vh;
        margin-bottom: 30px;
      }

      @media(max-width: 600px) {
        p {
          text-align: center;
        } 
        article {
          margin-bottom: 100px;
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
  
  export default MapatHaim;
  