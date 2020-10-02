import Paypal from './mediosPago/paypal';

import {useState} from 'react';
export default function Producto({r}) {
    const [visible, setVisible] = useState(false);
    const modal = {
      zIndex: visible ? 10 : -1,
      opacity: visible ? 1 : 0
    }
    return(
<>
    <div key={r.id} className="service">
        <h3>{r.title}</h3>
        <p>${r.price} USD</p>
        <div className="buy">
          <Paypal price={r.price} name={r.title}/>
        </div>
        <ul>
            {r.features.map(f =>
            <li key={Math.random()}>{f}</li>
            )}
        </ul>
    </div>

    <div id={r.id} className="modalBg" style={modal} onClick={() => setVisible(false)}/>
    <div id={r.id} className="modal" style={modal}>
        <div className="imagen">
        <img src={r.img}/>
        </div>
        <div className="detalles">
        <h2>{r.title}</h2>
        <span>${r.price} USD</span>
        <ul>
            {r.features.map(f =>
            <li key={Math.random()}>{f}</li>
            )}
        </ul>
        <p>Tu nick en el server:</p>
        <input type="text"/>
        <div className="buy-buttons">
            <a className="button-primary" 
            href={r.paypal} 
            target="_blank" 
            rel="noopener noreferrer">
            <img src="/static/tienda/pp.svg" style={{marginRight: 5}}/><img src="/static/tienda/paypal.svg"/>
            </a>
            <a className="button-primary" 
            style={{background: '#009cde', color: 'white', marginBottom: 30}} 
            href={r.mercadopago} 
            target="_blank" 
            rel="noopener noreferrer">
            MercadoPago
            </a>
        </div>
          <a className="cerrar" onClick={() => setVisible(false)}> ← Cerrar </a>
        </div>
    </div>
<style jsx>{`
  input{
    width: calc(100% - 20px);
    padding: 10px 8px;
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
  }
  .buy-buttons{
    margin-top: 20px;
  }
  a.button-primary{
    background: #ffc439;
    color: #003087;
    width: 100%;
    min-height: 40px;
    margin-bottom: 10px;
  }
  div.button-primary:hover, a.button-primary:hover{
    box-shadow: none
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
    margin: 10px auto 20px;
  }
  :global(.services.promo) .service h3, :global(.services.promo) .modal h2 {
    font-weight: 600
  }
  .service {
    width: calc((100% / 4) - 52px);
    padding: 20px;
    margin-right: 10px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px solid #e8ecef;
    border-radius: 4px;
    transition: all .2s ease;
    text-decoration: none;
    cursor: pointer;
  }
  .service:hover{
      box-shadow: rgba(39, 79, 117, 0.2) 0px 40px 90px -30px;
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