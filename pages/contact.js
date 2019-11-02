import Layout from '../components/Layout'
import FormContainer from '../components/FormContainer'



const Contact = () => (
  <Layout>
  <section className="contact-wrapper">
    <header>
      <h1>צור קשר</h1>
    </header>
    <div className="form-wrapper">

    <FormContainer/>
    </div>
    <div className="form-bg-tab">
      <img src="../static/images/bg-tab.png" alt="bg"/>
    </div>
  </section>
  <style jsx>{`
      .contact-wrapper {
        max-width: 1070px;
        margin: 0 auto 20px;
      }
      header {
        margin: 50px auto;
      }

      .form-wrapper {
        background-color: #F2E6D0;
        max-width: 1070px;
        padding: 50px 115px 0;
        font-size: 22px;
        margin: 0 auto;
      }

      p {
        margin-bottom: 10px;
        text-align: center;
      }
      
      @media(max-width: 600px) {
        .form-wrapper {
          font-size: 18px;
          padding: 15px  20px 0;
        }
        p {
          margin: 20px 20px;
        }
      }
    
  `}</style>
</Layout>   
  );
  
  export default Contact;


    // @media(max-width: 600px) {
    //   .contact-wrapper {
    //     margin: 30px auto ;
    //   }
    //   p {
    //     text-align: center;
    //   } 
    //   header {
    //     margin: 10px auto;
    //   }

    //   h1 {
    //     font-size: 32px;
    //   } 

    //   .form-wrapper {
    //     max-width: 100%;
    //     padding: 0;
    //     margin: 30px auto;
    //     font-size: 18px;
    //   }

    // }