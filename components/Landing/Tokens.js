export default function Soporte() {

  return (
    <section id="soporte">
      <div className="container">
        <div className="title-section">
          <span>Tienda </span>
          <h2>¿Qué son los Tokens y cómo consigo Vip?</h2>
        </div>
        <div className="soporte">
          <div className="colText">
            <h1 className="h2">
              Es una Moneda de Alto Valor dentro del juego
          </h1>
            <p>
              Con ella puedes adquirir objetos y rangos de alto valor dentro del juego, incluyendo Rango Vip y Beneficios Exclusivos. También puedes conseguir los Tokens jugando.
          </p>
          </div>
          <div className="comprar-tokens">
            <h3 className="h2">Comprar Tokens</h3>
            <div className="mediopago">
              <div className="field">
                <h4>Cantidad</h4>
                <select>
                  <option id="1" value="500">500 Tokens</option>
                  <option id="2" value="1000">1000 Tokens</option>
                  <option id="3" value="2000">2000 Tokens</option>
                  <option id="4" value="5000">5000 Tokens</option>
                </select>
              </div>
              <div className="field">
                <h4>Medio de pago</h4>
                <select>
                  <option id="1">Transferencia bancaria</option>
                  <option id="2">MercadoPago</option>
                  <option id="3">PayPal</option>
                </select>
              </div>
              <div className="total">
                <p>Total</p>
                <p style={{fontWeight: 600}}>$0 USD</p>
              </div>
              <a className="button-primary" href="#!">
                Compra segura
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        span{
          color: goldenrod
        }
        h1 {
          margin-bottom: 20px !important;
        }
        p {
          margin-bottom: 33px;
        }
        a{
          background: goldenrod
        }
        a:hover{
          box-shadow: rgb(189 161 59 / 60%) 0px 9px 20px -5px;
        }
        section{
          padding: 70px 30px 80px;
        }
        h4{
          font-weight: 400;
          margin: 10px 0;
        }
        select{
          width: 100%;
          padding: 7px;
        }
        .field{
          margin-bottom: 20px;
        }
        .total{
          border-top: 1px solid gray;
          margin: 30px 0 10px;
          display: flex;
          justify-content: space-between
        }
        .total p{
          margin: 0
        }
        .comprar-tokens a{
          width: 100%;
        }
        .card p {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 0;
          color: var(--color-secondary);
        }
        .soporte {
          display: flex;
          align-items: center;
        }
        .soporte > div {
          width: 50%;
        }
        .colText {
          padding-left: 15px;
          padding-right: calc(132px + 15px) !important;
        }
        .colPasos {
          display: flex;
          flex-wrap: wrap;
          padding-left: 20px;
        }
        .comprar-tokens {
          width: calc(50% - 25px - 40px);
          margin-left: 25px;
          margin-bottom: 27px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          transition: box-shadow 0.3s ease-in-out 0s;
          padding: 30px;
          border-radius: 10px;
          box-shadow: rgb(154 118 27 / 0.20) 0px 8px 20px 0px;
        }
        .card:hover {
          box-shadow: rgba(16, 66, 97, 0.1) 0px 16px 35px 0px;
        }
        .card:nth-child(2n) {
          position: relative;
          top: 22px;
        }
        @media screen and (min-width: 480px) {
          .card {
            padding: 30px 20px;
            width: calc(50% - 25px - 40px);
          }
        }
        @media screen and (min-width: 768px) {
          .card {
            padding: 30px 20px;
            width: calc(50% - 25px - 40px);
          }
        }
        @media screen and (min-width: 990px) {
          .card {
            padding: 53px 40px;
            width: calc(50% - 25px - 80px);
          }
        }
        @media only screen and (max-width: 1200px) {
          .colText {
            padding-right: calc(32px + 15px) !important;
          }
          .colPasos {
            padding-left: 0;
          }
        }
        @media only screen and (max-width: 991px) {
          .colText {
            padding-right: 0 !important;
          }
        }
        @media only screen and (max-width: 767px){
          .colText {
            margin-bottom: 40px;
          }
          .soporte{
            flex-direction: column;
            padding: 30px 20px
          }
          .soporte > div {
            width: 100%
          }
          .card:nth-child(2n+1){
            margin-left: 0
          }
          .card {
            width: calc(50% - 13px - 40px);
          }
        }
      `}</style>
    </section>
  );
}
