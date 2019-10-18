  import Logo from './Logo';
  import Menu from './Menu';

  const Header = () => (
    <>
    <header className="header-wrapper">
      <Logo />
      <Menu />
    </header >
    <style jsx>
      {`  
        .header-wrapper {
          max-width: 1070px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        @media (max-width: 600px) {
          .header-wrapper{
            display: block;
            text-align: center;
          }
        }
      `}
    </style>
    </>
  );

  export default Header;