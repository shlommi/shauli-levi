import Link from 'next/link';

const ContactBar = () => (
    <aside className="contact-bar">
    <div className="contact-bar-inner">
      <div className="icons">
          <a href="https://wa.me/052-4425859" target="_blank"  >
            <img src="/static/icons/whatsapp.png" alt="whatsapp" width="19.50"/>
          </a>
          <a href="https://www.facebook.com/pages/%D7%A9%D7%90%D7%95%D7%9C%D7%99-%D7%9C%D7%95%D7%99-%D7%90%D7%A1%D7%98%D7%A8%D7%95-%D7%A0%D7%95%D7%9E%D7%A8%D7%95%D7%9C%D7%95%D7%92-%D7%99%D7%95%D7%A2%D7%A5-%D7%95%D7%9E%D7%90%D7%91%D7%97%D7%9F/151852714842615"  target="_blank" >
            <img src="/static/icons/facebook.png" alt="facebook" width="18.35"/>
          </a>
        <Link href="/contact">
          <a>
            <img src="/static/icons/mail.png" alt="mail" width="24.5"/>
          </a>
        </Link>
      </div>
      <div className="phone">
        התקשרו עכשיו: 052-4425859
      </div>
    </div>
    <style jsx>{`
         .contact-bar {
            position: fixed;
            width: 100%;
            height: 44px;
            background-color: #263240;
          }
    
          .contact-bar-inner {
            max-width: 1070px;
            height:100%;
            margin: 0 auto;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
    
          .contact-bar-inner .icons {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }
    
          .icons img {
            margin-left: 30px;
          }
          .icons img:hover {
            transform: scale(1.1);
            text-shadow: 0.5px 0.5px 3px #fff;
          }

        

      
          
    `}</style>
  </aside>
)
export default ContactBar;