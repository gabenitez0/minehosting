export default function HeaderComp({page}) {
  return (
    <section id="header">
      <header className="container">
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
            background-position: center 70%;
            background-repeat: no-repeat;
            width: 100%;
            display: flex;
            align-items: center;
            height: 100vh;
            min-height: 550px;
          }
          header{
            width: 100%;
          }
          .title {
            width: 100%;
            box-sizing: border-box;
            text-shadow: 1px 1px 2px black; 
          }
          h1{
            margin-bottom: 10px;
          }
          h1, p{
            color: white;
          }
          .buttons {
            margin-top: 20px;
          }
          .link{
            border-radius: 4px;
            padding: 0;
          }
          .link:hover{
            background: rgb(255 255 255 / 25%);
            padding: 0 15px;
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
          }
        `}
      </style>
    </section>
  );
}
