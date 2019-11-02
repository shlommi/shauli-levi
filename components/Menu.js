import Link from '../components/ActiveLink';

const Menu = () => (
  <nav>
    <ul className="menu">
      <li>
        <Link href="/about">
          <a>אודות</a>
        </Link>
      </li>
      <li>
        <Link href="/mapat-haim">
          <a>מפת חיים</a>
        </Link>
      </li>
      <li>
        <Link href="/yeutz-hachvana">
          <a>ייעוץ והכוונה</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
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
          .menu li a {
            font-size: 23px;
            color:#263240;
            font-weight: 300;
            padding: 5px 2px;
            margin: 0 10px;
            text-decoration: none;
          }

          .menu li a:hover {
            opacity: 0.7;
            color:  #877450;
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

export default Menu;