export default function HeaderComp({page}) {
  return (
    <section id="header" className="container">
      <header>
        <div className="title">
          <h1>{page.title}</h1>
          <p>
          {page.desc}
          </p>
          <div className="buttons">
            <a className="button-primary" style={{marginRight: 20}}>
              {page.button}
            </a>
            <a className="link" href="http://discord.minehosting.fun" target="_blank">
              {page.button2} <i className="flaticon-right-arrow" />
            </a>
          </div>
        </div>
      </header>

      <style jsx>
        {`
          section {
            background-image: url("/static/header2.jpg");
            background-size: cover;
            background-position: center 80%;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            height: 60vh;
            min-height: 350px;
            margin: auto;
            padding-left: 30px;
            padding-right: 30px;
          }
          header{
            width: 100%;
          }
          .title {
            width: 100%;
            box-sizing: border-box;
            text-shadow: 1px 1px 2px #444; 
          }
          h1{
            color: white;
            margin-bottom: 10px;
            font-weight: 600;
            letter-spacing: 1px;
          }
          p{
            font-size: 20px;
            color: snow;
            line-height: 1.5em;
          }
          .buttons {
            margin-top: 40px;
          }
          .link{
            padding: 0 25px;
            background: var(--color-primary);
            color: white;
            text-shadow: 0 0 black;
          }
          .link:hover{
            background: rgb(129 212 243 / 30%);
          }
          .button-primary{
            display: none;
          }
          span {
            padding: 0 5px;
          }
          i:before {
            font-size: 14px;
            margin-left: 5px;
          }
          @media screen and (min-width: 480px) {
            .title {
              width: 70%;
            }
          }
          @media screen and (min-width: 768px) {
            .title {
              width: 60%;
            }
          }
          @media screen and (min-width: 990px) {
            .title {
              width: 50%;
            }
            @media screen and (min-width: 1220px) {
              section{
                max-width: 1170px;
              }
            }
          }
        `}
      </style>
    </section>
  );
}
