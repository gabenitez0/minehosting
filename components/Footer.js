import Link from 'next/link'

export default function Footer() {
  const footer = [
    {
      title: "Servicios",
      links: [
        {
          name: "Desarrollo de Páginas Web",
          url: "/#services",
        },
        {
          name: "Desarrollo de Tiendas Online",
          url: "/#services",
        },
        {
          name: "Diseño Gráfico/UX/UI",
          url: "/#services",
        },
        {
          name: "Marketing y Publicidad",
          url: "/#services",
        },
      ],
    },
    {
      title: "Automatización",
      links: [
        {
          name: "Automatización de Ventas",
          url: "/#features",
        },
        {
          name: "Automatización de Leads",
          url: "/#features",
        },
        {
          name: "Automatización de Bases de Datos",
          url: "/#features",
        },
      ],
    },
    {
      title: "Nosotros",
      links: [
        {
          name: "Sobre nosotros",
          url: "/nosotros",
        },
        {
          name: "Términos y condiciones",
          url: "/terminos-y-condiciones",
        },
        {
          name: "Políticas de privacidad",
          url: "/privacidad",
        },
      ],
    },
  ];

  return (
    <section id="footer">
      <div className="footer container">
          <h2>MineHosting</h2>
          <p>Servicios de Hosting y Soporte de Alta Calidad</p>
          <a href="http://Discord.MineHosting.fun/" target="_blank">
            Entrar al Discord
          </a>
          <p className="derechos">Todos los derechos reservados</p>
      </div>

      <style jsx>{`
        section {
          border-top: 1px solid rgb(239, 239, 239);
          margin-top: 40px;
          position: relative;
        }
        .footer {
          padding: 80px 45px 100px;
          background-image: url("/static/footer.png");
          background-repeat: no-repeat;
          background-position: center 50px;
          text-align: center;
        }
        .derechos{
          color: gray;
          position: absolute;
          bottom: 10px;
          left: calc(50% - 111px);
        }
        .logo {
          height: 38px;
          margin-bottom: 10px;
        }
        a {
          line-height: 2.1;
          text-decoration: underline;
          color: var(--color-primary)
        }
        i {
          font-size: 15px;
          color: rgb(15 33 55 / 75%);
        }
        i:hover {
          color: var(--color-secondary);
        }
        .social {
          padding-top: 5px;
          border-top: 1px solid var(--color-tertiary);
          width: 50%;
          max-width: 160px;
          text-align: center;
          margin: 10px auto;
        }
        p {
          color: var(--color-secondary);
          margin-bottom: ;
        }
        h2{
          color: var(--color-primary);
        }
        h3 {
          box-sizing: border-box;
          margin-top: 0px;
          margin-bottom: 1rem;
          font-size: 16px;
          color: var(--color-secondary);
          font-weight: 700;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        ul :global(a) {
          color: var(--color-tertiary);
          font-size: 14px;
          line-height: 36px;
          transition: all 0.2s ease 0s;
          text-decoration: none;
        }
        ul :global(a:hover) {
          text-decoration: underline;
        }
        .logoCol {
          box-sizing: border-box;
          margin-top: 0px;
          margin-bottom: 30px;
          padding-left: 15px;
          padding-right: 15px;
          width: 100%;
          text-align: center;
        }
        .footerCols {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .col {
          box-sizing: border-box;
          margin-bottom: 30px;
          padding-left: 15px;
          padding-right: 15px;
          width: 100%;
        }
        @media screen and (min-width: 480px) {
          .logoCol {
            margin-bottom: 50px;
            text-align: left;
          }
          .col {
            width: 50%;
          }
          .social {
            margin: 10px 0;
            text-align: left;
          }
        }
        @media screen and (min-width: 768px) {
          .logoCol {
            margin-top: 13px;
            margin-bottom: 0;
            width: 35%;
            padding-right: 0px;
            padding-left: 0px;
          }
          .footerCols {
            width: 65%;
          }
          .col {
            width: 50%;
          }
        }
        @media screen and (min-width: 990px) {
          .logoCol {
            width: 23%;
          }
          .footerCols {
            width: 77%;
          }
          .col {
            width: 33%;
          }
        }
      `}</style>
    </section>
  );
}
