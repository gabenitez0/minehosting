
import Producto from './Producto'

export default function Services() {

  const altoRendimiento = [
    {
      id: 0,
      img: "/static/tienda/oferta1.jpg",
      title: "IRON 2GB",
      price: "8.00",
      features: [
        "Intel Core i9-9900K CPU",
        "1 vCores",
        "2 GB DDR4 RAM",
        "20 GB SSD NVMe",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 1,
      img: "/static/tienda/oferta1.jpg",
      title: "DIAMOND 4GB",
      price: "16.00",
      features: [
        "Intel Core i9-9900K",
        "2 vCores",
        "4 GB DDR4 RAM",
        "40 GB SSD NVMe",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 2,
      img: "/static/tienda/oferta1.jpg",
      title: "NETHERITE 8GB",
      price: "28.00",
      features: [
        "Intel Core i9-9900K",
        "4 vCores",
        "8 GB DDR4 RAM",
        "80 GB SSD NVMe",
        "Panel Pterodactyl: +$4 USD",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 3,
      img: "/static/tienda/oferta1.jpg",
      title: "EXTREME 16GB",
      price: "52.00",
      features: [
        "Intel Core i9-9900K",
        "8 vCores",
        "16 GB DDR4 RAM",
        "160 GB SSD NVMe",
        "Panel Pterodactyl: +$4 USD",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
  ];

  const medioRendimiento = [
    {
      id: 0,
      img: "/static/tienda/vip.jpg",
      title: "COW 8GB",
      price: "12.00",
      features: [
        "Intel Xeon E5-3630v4",
        "8 GB RAM",
        "160 GB SSD",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 1,
      img: "/static/tienda/vip+.jpg",
      title: "ZOMBIE 15GB",
      price: "20.00",
      features: [
        "Intel Xeon E5-3630v4",
        "15 GB RAM",
        "320 GB SSD",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 2,
      img: "/static/tienda/500tokens.jpg",
      title: "WITCH 30GB",
      price: "38.00",
      features: [
        "Intel Xeon E5-3630v4",
        "30 GB RAM",
        "700 GB SSD",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
    {
      id: 3,
      img: "/static/tienda/1000tokens.jpg",
      title: "WITHER 60GB",
      price: "74.00",
      features: [
        "Intel Xeon E5-3630v4",
        "60 GB RAM",
        "1600 GB SSD",
        "Panel Pterodactyl",
        "Java - Bedrock",
        "Anti DDoS",
        "Soporte técnico"
      ]
    },
  ];

  const tokens = [
    {
      id: 0,
      img: "/static/tienda/3000tokens.jpg",
      title: "Dominio Personalizado",
      price: "2.00",
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
      price: "3.00",
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
      price: "2.00",
      features: [
        "Responde de forma automática hasta a 5 mensajes configurables sin necesidad de escribir un comando.",
        "Solicita una prueba por discord"
      ]
    },
    {
      id: 3,
      img: "/static/tienda/5000tokens.jpg",
      title: "Configuración del server",
      price: " -",
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
        <h2>Hostings de Alto Rendimiento</h2>
      </div>
      <div className="services promo">
        {altoRendimiento.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section">
        <h2>Hostings de Mediano Rendimiento</h2>
      </div>
      <div className="services">
        {medioRendimiento.map(r => 
          <Producto key={r.id} r={r}/>
        )}
      </div>

      <div className="title-section">
        <h2>Servicios complementarios</h2>
      </div>
      <div className="services">
        {tokens.map(r => 
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
