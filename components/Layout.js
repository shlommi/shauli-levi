import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactBar from './ContactBar';



const Layout = props => (
  <>
    <ContactBar/>
    <main className="site-wrapper">
        <Header/>
        <article className="content-wrapper">
            {props.children}
        </article>
        <Footer/>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Alef:400,700&display=swap&subset=hebrew');
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        direction: rtl;
        -webkit-locale: "he-IL";
      }

      body {
        margin: 0;
        font-size: 18px;
        line-height: 1.5em;
        font-weight: 400;
        background: #F5F5F1;
        color: #263240;
        font-family: 'Alef','Open Sans Hebrew', Arial, sans-serif;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #263240;
        text-decoration: none;
      }

      h1,
      h2,
      h3 {
        margin: 40px 0 30px;
      }

      h1 {
        font-size: 42px;
      }

      h2 {
        font-size: 36px;
      }

      p {
        margin: 0 0 10px;
      }

      img {
        max-width: 100%;
      }

      /* Layout */

        .site-wrapper {
        margin:0 auto;
      }

      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
      
    

    `}</style>
    </main>
  </>
    
)

export default Layout;