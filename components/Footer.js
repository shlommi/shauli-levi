import Link from 'next/link';

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-main">
      <ul className="footer-list">
        <li className="footer-list-item">
        <Link href="/">
          <a>
          <div className="ft-logo">
            <img src="../static/images/logo.png" alt="logo" />
          </div>
          </a>
        </Link>
        </li>
        <li className="footer-list-item">
          <h3>לימדו עליי...</h3>
          <ul className="navigator-list">
            <li>
              <Link href="/">
                <a >דף הבית</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a >אודות</a>
              </Link>
            </li>
            <li>
              <Link href="/mapat-haim">
                <a >מפת חיים</a>
              </Link>
            </li>
            <li>
              <Link href="/yeutz-hachvana">
                <a >ייעוץ והכוונה</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a >צור קשר</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="footer-list-item">
          <h3>דברו אליי...</h3>
          <ul className="navigator-list">
            <li>
                <a href="https://www.google.com/maps/place/%D7%A9%D7%90%D7%95%D7%9C%D7%99+%D7%9C%D7%95%D7%99+-+%D7%A0%D7%95%D7%9E%D7%A8%D7%95%D7%9C%D7%95%D7%92%E2%80%AD/@31.939953,34.832008,15z/data=!4m2!3m1!1s0x0:0xd0c541270f5d9990?sa=X&ved=2ahUKEwiug4jsuKPlAhWSfFAKHYLwBX0Q_BIwE3oECA0QCA"  target="_blank" >
                  שדרות האלונים,<br /> באר-יעקב
                </a>
            </li>
            <li>
              <Link href="/contact">
                <a target="_blank">הודעה למייל </a>
              </Link>
            </li>
            <li>
                <a href="https://wa.me/052-4425859" target="_blank" >טלפון: 052-4425859 </a>
            </li>
          </ul>
        </li>
        <li className="footer-list-item">
          <h3>הצטרפו אליי...</h3>
          <ul className="navigator-list">
            <li>
                <a href="https://www.facebook.com/pages/%D7%A9%D7%90%D7%95%D7%9C%D7%99-%D7%9C%D7%95%D7%99-%D7%90%D7%A1%D7%98%D7%A8%D7%95-%D7%A0%D7%95%D7%9E%D7%A8%D7%95%D7%9C%D7%95%D7%92-%D7%99%D7%95%D7%A2%D7%A5-%D7%95%D7%9E%D7%90%D7%91%D7%97%D7%9F/151852714842615" target="_blank">
                  <span style={{ marginLeft: '10px' }}>
                    <img src="/static/icons/facebook.png" alt="facebook" width="18.35" />
                  </span>
                  דף הפייסבוק שלי
                </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="footer-bottom">
      <div className="copyright"> כל הזכויות שמורות לשאולי רוה לוי © {new Date().getFullYear()}</div>
      <div className="sc-log">
        <img src="../static/images/shlomicohen.png" alt="footer-logo" />
      </div>
    </div>
    <style jsx>
      {`  
          
          .footer-wrapper{
            width: 100%;
          }
          .footer-main {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #263240;
            height: 450px;
            width: 100%;
          }
          

          .ft-logo {
            display: inline-block;
            width: 215px;
            height: 200px;
            padding: 9px;
            background-color: #fff;
          }

          .footer-list {
            padding: 0;
            width: 1070px;
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            align-items:center;
          }

          .footer-list-item {
            width: 215px;
            height: 200px;
            border-right: 1px dashed #FFFFFF; 
            font-size: 17px;
            color:#FFFFFF;
            text-align: center;
            text-decoration: none;
          }

          .footer-list-item:nth-child(1) {
            margin-left: 50px;
            border-right: none;
            margin-right: 0;
          }

          h3 {
            margin:0;
            padding: 0;
          }

          .navigator-list {
            list-style: none;
            margin-top: 20px;
            padding:0;
          }

          .navigator-list li a {
            color:#FFFFFF;
            transition: all 0.1s linear;

          }

          .navigator-list li:hover {
            color:#FFFFFF;
            transform: scale(1.1);
            text-shadow: 0.5px 0.5px 3px #fff;
          }

          .footer-bottom {
            display: flex;
            width: 1070px;
            height: 65px;
            justify-content: space-between;
            margin: 0 auto;
            padding: 20px 0;
          }

          .copyright {
            margin-bottom:20px;
            margin-left: 20px;
          }

          @media (max-width: 600px) {
            .footer-main {
              height: 900px;
              flex-direction: column;         
            }

            .footer-list {
              flex-direction: column;
              width: 100%;
            }

            .footer-bottom {
              width: 100%;
            }

            .footer-list-item {
              border-bottom: 1px dashed #FFFFFF;
              border-right: none;
              margin-bottom: 20px;
            }

            .footer-list-item:nth-child(4) {
              border-bottom: none;
              height: 120px;
            } 

            .footer-list-item:nth-child(1) {
              margin-left: 0;    
            }
            .footer-bottom {
              display: block;
              margin: 0 auto;
              text-align: center;
              padding:0;
            }
          }
        `}
    </style>
  </footer>
);

export default Footer;

