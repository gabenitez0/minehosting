import Link from "next/link";

export default function Nav() {
  return (
    <nav className="container">
      <div className="nav">
        <Link href="/">
          <a>
            <h2>MineHosting</h2>
          </a>
        </Link>
        <div className="links">
          <Link href="/">
            <a>Nuestros Planes</a>
          </Link>
          <a href="https://panel.minehosting.fun/" target="_blank">
            Panel
          </a>
        </div>
      </div>
      <style jsx global>{`
        .nav {
          position: absolute;
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          max-width: 750px; 
          align-items: center;
          width: calc(100% - 60px);
        }
        a h2{
          color: white;
          font-weight: 600;
        }
        a{
          text-decoration: none;
        }
        .logo {
          height: 45px;
        }
        .logo:hover {
          cursor: pointer;
        }
        .links :global(a) {
          text-decoration: none
          margin-left: 20px;
          font-weight: 400;
        }
        .links :global(a:hover) {
          border-bottom: 1px solid;
        }
        .links a {
          color: white;
          margin-left: 30px;
          letter-spacing: 1px;
          text-decoration: none;
          font-weight: 400
        }
        @media screen and (min-width: 992px){
          .nav{
            max-width: 970px; 
          }
        }
        @media screen and (min-width: 1220px){
          .nav{
            max-width: 1170px; 
          }
        }
      `}</style>
    </nav>
  );
}
