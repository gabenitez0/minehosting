export default function Services() {
  const services = [
    {
      id: 0,
      icon: "/static/icons/discordia.png",
      title: "Canal de Discord",
      url: "http://discord.capitalmc.wtf",
      target: "_blank",
      desc:
        "Nuestro principal medio de comunicación directa es a través de Discord",
      bg:
        "linear-gradient(-60deg,rgba(50, 207, 167, 0.75),rgba(150, 201, 61, 0.75))",
    },
    {
      id: 1,
      icon: "/static/icons/minecraft.png",
      title: "IP: CapitalMC.wtf",
      url: null,
      target: null,
      desc: "La IP del servidor es: capitalmc.wtf, debes agregarla a tu lista de servidores",
      bg:
        "linear-gradient(-60deg, rgba(47, 128, 237, 0.75), rgba(86, 204, 242, 0.75))",
    },
    {
      id: 2,
      icon: "/static/icons/facebook.png",
      title: "Página de Facebook",
      url: "http://fb.capitalmc.wtf",
      target: "_blank",
      desc:
        "Encontrá contenido, noticias y actualizaciones de Capital Minecraft",
      bg:
        "linear-gradient(-60deg, rgba(236, 0, 140, 0.75), rgba(255, 103, 103, 0.75))",
    },
  ];

  return (
    <section id="services">
      <main className="container">
        <div className="title-section">
          <span>Encontranos</span>
          <h2>¿Dónde estamos?</h2>
        </div>
        <div className="services">
          {services.map((s) => (
            <a href={s.url} className="service" key={s.id} target={s.target} rel="noopener noreferrer">
              <div>
                <img src={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </a>
          ))}
        </div>
      </main>

      <style jsx>{`
        section {
          padding: 80px 0px;
        }
        .services {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        i {
          font-size: 40px;
        }
        .service div {
          margin: 0px auto 30px;
        }

        .service {
          width: 100%;
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid rgb(241, 244, 246);
          border-left: 1px solid rgb(241, 244, 246);
          transition: all .2s ease;
          text-decoration: none;
        }
        .service:hover{
            box-shadow: rgba(39, 79, 117, 0.2) 0px 40px 90px -30px;
        }
        .service:nth-child(-n + 3) {
          border-top: 1px solid rgb(241, 244, 246);
        }
        .service:nth-child(3n + 3) {
          border-right: 1px solid rgb(241, 244, 246);
        }
        @media screen and (min-width: 480px) {
          .service {
            width: calc((100% / 2) - 42px);
            padding: 20px;
          }
        }
        @media screen and (min-width: 990px) {
          .service {
            width: calc((100% / 3) - 82px);
            padding: 40px;
          }
        }
        @media screen and (max-width: 480px) {
          .service:nth-child(n + 1) {
            border-right: 1px solid rgb(241, 244, 246);
          }
        }
        @media only screen and (max-width: 991px) {
          .service:nth-child(-n + 3) {
            border-top: 0;
          }
          .service:nth-child(-n + 2) {
            border-top: 1px solid rgb(241, 244, 246);
          }
          .service:nth-child(3n + 3) {
            border-right: 1px solid rgb(241, 244, 246);
          }
          .service:nth-child(2n + 2) {
            border-right: 1px solid rgb(241, 244, 246);
          }
        }
      `}</style>
    </section>
  );
}
