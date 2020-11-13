export default function Producto({r}) {
    const paypal = "https://paypal.me/1tiendaonline/"+r.price
    return(<>
    <div key={r.id} className="service">
        <h3>{r.title}</h3>
        {r.title === "Instalación Panel Pterodactyl" 
          ? <p>${r.price} USD</p>
          : r.price != "Precio variable" 
          ? <p>${r.price} USD/mes</p>
          : <p>{r.price}</p>
        }
        <div className="buy">
          <a 
          className="button-primary" 
          price={r.price} 
          name={r.title} 
          href={r.price != "Precio variable" ? paypal : "https://paypal.me/1tiendaonline/"}>
            <sup>Pagar con</sup> Paypal
          </a>
        </div>
        <ul>
            {r.features.map(f =>
            <li key={Math.random()}>{f}</li>
            )}
        </ul>
    </div>

<style jsx>{`
  input{
    width: calc(100% - 20px);
    padding: 10px 8px;
  }
  sup{
    top: -2px;
    position: relative;
    margin-right: 5px;
    font-weight: 400;
    letter-spacing: 0;
  }
  .cerrar{
      padding-bottom: 20px;
      cursor: pointer;
  }
  div.button-primary{
    margin-top: 15px!important;
  }
  h2{
    margin: 5px 0;
    line-height: 1.4
  }
  span{
    margin: 20px 0 30px;
    display: block;
  }
  h3 {
    margin: 0;
    padding: 0 20px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2em;
  }
  .buy-buttons{
    margin-top: 20px;
  }
  a.button-primary{
    background: #0070ba;
    width: 100%;
    border-radius: 2px;
  }
  a.button-primary:hover{
    background: #48a6e4;
  }
  a img{
    max-height: 20px
  }
  .imgProducto{
    width: 100%;
    border-radius: 4px;
  }
  .modalBg{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgb(0 0 0 / 40%);
    transition: all .3s;
    transform: cubic-bezier(0.25, 1, 0.5, 1);
  }
  .modal{
    position: fixed;
    display: flex;
    background: white;
    padding: 30px;
    top: 0;
    margin: 30px 30px 0 30px;
    left: calc(50% - 480px);
    max-width: 840px;
    width: 100%;
    max-height: calc(100% - 90px);
    overflow-y: auto;
    transition: all .3s;
    transform: cubic-bezier(0.25, 1, 0.5, 1);
  }
  .imagen{
    width: 50%;
    margin-bottom: 30px;
  }
  .imagen img{
    width: 100%;
    border-radius: 4px;
  }
  .detalles{
    width: 50%;
    padding-left: 30px;
  }
  .service div {
    margin: 20px auto 30px;
  }
  :global(.services.promo) .service h3, :global(.services.promo) .modal h2 {
    font-weight: 600
  }
  .service {
    width: calc((100% / 4) - 52px);
    padding: 30px 20px;
    margin-right: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px solid rgb(0 172 236 / 0.3);
    transition: all .2s ease;
    text-decoration: none;
  }
  .service:hover{
      box-shadow: rgb(99 181 239 / 20%) 0px 40px 90px -30px;
      border: 1px solid var(--color-primary);
  }
  
  @media (max-width: 1219px) {
    .service {
      width: calc((100% / 4) - 52px);
    }
  }
  @media screen and (max-width: 991px) {
    .modal{
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      left: calc(50% - 310px);
    }
    .imagen, .detalles{
      width: 100%;
      padding-left: 0;
    }
    .service {
      width: calc((100% / 2) - 52px);
    }
    @media (max-width: 768px) {
      .service {
        width: calc((100% / 2) - 52px);
      }
    }
    @media screen and (max-width: 550px) {
      .service {
        width: 100%;
        margin-right: 0;
      }
      :global(.services.promo) .service {
        width: 100%;
      }
      .modal{
        left: 0;
        top: 0;
        margin: 0;
        width: calc(100% - 40px);
        max-width: 505px;
        max-height: 100%;
        height: calc(100% - 40px);
        padding: 20px;
        border-radius: 0;
      }
    }
  }
`}</style>
</>
)
}