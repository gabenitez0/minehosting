export default function HeaderComp() {
  return (
    <section id="header">
      <header className="container">
        <div className="title">
          <h1>Tienda Capital MC</h1>
          <p>
          Todo el dinero recaudado será principalmente destinado al mantenimiento, mejoras y actualizaciones del servidor. ¡Con tu compra estás contribuyendo a que sigamos mejorando y generando una gran comunidad!
          </p>
        </div>
      </header>

      <style jsx>
        {`
          section {
            background-image: url("/static/header2.jpg");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 100%;
            min-height: 50vh;
            display: flex;
            align-items: center;
            height: auto;
          }
          .title {
            width: 100%;
            box-sizing: border-box;
          }
          h1, p{
            color: white;
          }
          .buttons {
            margin-top: 40px;
          }
          span {
            padding: 0 5px;
          }
          i:before {
            font-size: 14px;
            margin-left: 3px;
          }
          @media screen and (min-width: 480px) {
          }
          @media screen and (min-width: 768px) {
          }
          @media screen and (min-width: 990px) {
          }
        `}
      </style>
    </section>
  );
}
