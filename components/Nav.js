import Link from "next/link";

export default function Nav() {
  return (
    <nav className="container">
      <div className="nav">
        <Link href="/">
          <a>
            <img className="logo" src="/static/LOGO.svg" alt="minehosting servidores dedicados"/>
          </a>
        </Link>
        <div className="links">
          <Link href="/">
            <a>Servidores Dedicados</a>
          </Link>
          <Link href="">
            <a href="http://discord.minehosting.fun/" target="_blank">Discord</a>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .nav {
          padding: 20px 0;
          width: 100%;
          text-align: center;
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
        .links{
          margin: 20px 0 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .links a {
          color: var(--color-secondary);
          margin: 0 20px 10px;
          text-decoration: none;
          font-weight: 400;
          font-size: 16px;
        }
        .links :global(a:hover) {
          border-bottom: 1px solid;
        }
        @media screen and (min-width: 992px){
          .nav{
            display: flex;
            flex-wrap: wrap;
            max-width: 970px; 
            justify-content: space-between;
            align-items: center;
          }
        }
        @media screen and (min-width: 1220px){
          .nav{
            max-width: 1170px; 
          }
        }
        @media screen and (max-width: 567px){
        }
      `}</style>
    </nav>
  );
}
