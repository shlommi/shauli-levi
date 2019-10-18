import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/static/images/logo.png" alt="logo"/>
      </a>
    </Link>
    <style jsx>
   {`
   
    .logo {
      margin-bottom: -25px;
      margin-top: 44px;
    }


   .logo img {
     width: 203px;
     height: 203px;
     display: block;
     margin-top:20px;
     
   }

   @media (max-width: 600px) {
     .logo  {
       display: inline-block;
     }
   }
   `}
    </style>
  </div>
);

export default Logo;