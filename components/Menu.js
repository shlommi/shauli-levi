import Link from 'next/link';


const Menu = () =>  {

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/about"  >
            <a>אודות</a>
          </Link>
        </li>
        <li>
          <Link href="/mapat-haim">
            <a>מפת חיים</a>
          </Link>
        </li>
        <li>
          <Link href="/yeutz-hachvana" >
            <a>ייעוץ והכוונה</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" >
            <a> צור קשר</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
            .menu {
              margin: 5px 0 0;
              padding: 0;
              list-style: none;
              display: flex;
            }

            li {
              position:relative;

            }

            .menu li a {
              font-size: 23px;
              color:#263240;
              font-weight: 300;
              padding: 5px 2px;
              margin: 0 10px;
              text-decoration: none;
            }
  
            .menu li a::before {
              background-color: #877450;
              position: absolute;
              display:inline-block;
              content:"";
              width: 50%;
              height: 1px;
              bottom:-10px;
              left:0;
              right: 0;
              margin: 0 auto;
              opacity: 0;
              transition: all 0.7s;
            }
  

            .menu li a:hover::before {
              opacity: 1;
            }

  
              @media (max-width: 600px) {
                .menu {
                  display: block;
                  margin-top: 20px;
                }
                .menu li {
                  display: inline-block;
                }
                .menu li a {
                  font-size: 18px;
                }
              }
          `}</style>
    </nav>
  
  );
}

export default Menu;