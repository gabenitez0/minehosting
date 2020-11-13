
import Producto from './Producto'

export default function Services() {

  const altoRendimiento = [
    {
      id: 0,
      img: "/static/tienda/oferta1.jpg",
      title: "Aguile PRO i5",
      price: 85,
      features: [
        "Intel Core i5 9600K CPU",
        "6 Cores @3,7 GHz / 6T",
        "64 GB DDR4 RAM",
        "2 x 480 GB SSD",
        "Intel Graphics UHD 630",
        "1 Gbps Ancho de banda",
        "Anti DDoS",
        "Soporte en español"
      ]
    },
    {
      id: 1,
      img: "/static/tienda/oferta1.jpg",
      title: "Aguile PRO i7",
      price: 105,
      features: [
        "Intel Core i7 9700K CPU",
        "8 Cores @3,6 GHz / 8T",
        "64 GB DDR4 RAM",
        "2 x 960 GB SSD",
        "Intel Graphics UHD 630",
        "1 Gbps Ancho de banda",
        "Anti DDoS",
        "Soporte en español"
      ]
    },
    {
      id: 2,
      img: "/static/tienda/oferta1.jpg",
      title: "Aguile PRO i9",
      price: 115,
      features: [
        "Intel Core i9 9900K CPU",
        "8 Cores @3,6 GHz / 16T",
        "64 GB DDR4 RAM",
        "2 x 960 GB SSD",
        "Intel Graphics UHD 630",
        "1 Gbps Ancho de banda",
        "Anti DDoS",
        "Soporte en español"
      ]
    },
    {
      id: 3,
      img: "/static/tienda/oferta1.jpg",
      title: "Aguile PRO R9",
      price: 135,
      features: [
        "AMD Ryzen 9 3900x CPU",
        "12 Cores @3,6GHz / 24T",
        "64 GB DDR4 RAM",
        "1 TB SSD NVMe",
        "GF GT 710 1 GB",
        "1 Gbps Ancho de banda",
        "Anti DDoS",
        "Soporte en español"
      ]
    }
  ];

  const complementarios = [
    {
      id: 0,
      title: "Dominio Personalizado",
      price: "Precio personalizado",
      features: [
        "miserver.mineserver.fun",
        "miserver.minehosting.fun",
        "Otros (consultar)"
      ]
    },
    {
      id: 1,
      img: "/static/tienda/5000tokens.jpg",
      title: "Seguridad Avanzada",
      price: "Precio personalizado",
      features: [
        "Protección Anti BOTs",
        "Protección Anti Hacks",
        "Protección Anti X-Ray"
      ]
    },
    {
      id: 2,
      img: "/static/tienda/5000tokens.jpg",
      title: "Bot Discord + Hosting",
      price: "Precio personalizado",
      features: [
        "Responde de forma automática hasta a 5 mensajes configurables sin necesidad de escribir un comando.",
        "Solicita una prueba por discord"
      ]
    },
    {
      id: 3,
      img: "/static/tienda/5000tokens.jpg",
      title: "Configuración del server",
      price: "Precio personalizado",
      features: [
        "Config Plugins",
        "Config Paper / Spigot",
        "Config BungeeCord",
        "Instalación DataPack / Mods"
      ]
    }
  ]

  return (
    <section id="services">
      <div className="title-section">
        <h2>Servidores Dedicados de Alto Rendimiento</h2>
      </div>
      <div className="services promo">
        {altoRendimiento.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section">
        <h2>Servicios complementarios</h2>
      </div>
      <div className="services">
        {complementarios.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>


      <style jsx>{`
        section {
          padding: 70px 0 20px;
          width: 100%;
        }
        .services {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        .title-section:first-child{
          margin-top: 0;
        }
        .title-section{
          margin-bottom: 30px;
          margin-top: 60px;
        }
        h2{
          text-align: left;
        }
        @media screen and (min-width: 480px) {
        }
        @media screen and (min-width: 990px) {
        }
        @media only screen and (max-width: 991px) {
          section {
            padding: 40px 0 20px 0;
          }
        }
      `}</style>
    </section>
  );
}
