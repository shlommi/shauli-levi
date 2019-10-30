import Layout from '../components/Layout'
import FormContainer from '../components/FormContainer'



const Contact = () => (
  <Layout>
  <section className="contact-wrapper">
    <header>
      <h1>צור קשר</h1>
    </header>
    <div className="form-wrapper">
      <p>אז מה שנותר עכשיו הוא להשאיר פרטים ושאולי רוה יחזור אליכם. חשוב להשאיר פרטים מדוייקים שכוללים שם מלא (שרשום בתעודת זהות) + תאריך לידה מלא.</p>
      <p>תוכן האתר נכתב בלשון זכר מטעמי נוחיות, אך מיועד לשני המינים כאחד.</p>
    <FormContainer/>
    </div>
    <div className="form-bg-tab">
      <img src="../static/images/bg-tab.png" alt="bg"/>
    </div>
  </section>
  <style jsx>{`
      .contact-wrapper {
        max-width: 1070px;
        margin: 0 auto;
      }
      header {
        margin: 50px auto;
      }

      .form-wrapper {
        background-color: #F2E6D0;
        max-width: 1070px;
        max-height: 800px ;
        margin-bottom: 0;
        padding: 50px 115px;
        font-size: 22px;
      }

      p {
        margin-bottom: 10px;
        text-align: center;
      }


      @media(max-width: 600px) {
        p {
          text-align: center;
        } 
        header {
          margin: 10px auto;
        }

        h1 {
          font-size: 32px;
        } 

        .form-wrapper {
          max-width: 100%;
          height: 35vh;
          margin: 0 auto 30px;
        }
      
      }
  `}</style>
</Layout>   
  );
  
  export default Contact;