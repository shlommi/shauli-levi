import Link from '../components/ActiveLink';
import { useRouter } from 'next/router'


const Menu = () =>  {
  const router = useRouter()

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/about"  prefetch={false}>
            <a onMouseEnter={() => {
            router.prefetch('/about')
          }}>אודות</a>
          </Link>
        </li>
        <li>
          <Link href="/mapat-haim"  prefetch={false}>
            <a onMouseEnter={() => {
            router.prefetch('/mapat-haim')
          }}>מפת חיים</a>
          </Link>
        </li>
        <li>
          <Link href="/yeutz-hachvana"  prefetch={false}>
            <a onMouseEnter={() => {
            router.prefetch('/yeutz-hachvana')
          }}>ייעוץ והכוונה</a>
          </Link>
        </li>
        <li>
          <Link href="/contact"  prefetch={false}>
            <a onMouseEnter={() => {
            router.prefetch('/contact')
          }}> צור קשר</a>
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
}

export default Menu;