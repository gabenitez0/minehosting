import Head from "next/head";

//COMPONENTS
import Header from "../components/Header";
import Gracias from "../components/Tienda/Gracias";
import Footer from "../components/Footer";

export default function IndexPage() {

  const page = {
    title: "Nuestros Planes",
    desc: "Cuando realices tu pedido, te contactaremos por Discord para darte los datos de acceso a tu Panel.",
    button: "Discord",
    button2: "Entrar al Discord",
  }
  
  return (
    <>
      <Head>
        <title>Compra exitosa | MineHosting</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header page={page}/>
      <div className="sidebar container">
      <Gracias />
      </div>
      <Footer />

      <style jsx>{`
        :global(.nav){
          position: initial;
          padding: 20px 0;
          width: 100%
        }
        :global(.links a){
          color: var(--color-secondary);
        }
        :global(a h2){
          color: var(--color-secondary);
        }
        :global(section#header){
          height: 50vh;
          min-height: 350px;
        }
        .sidebar{
          display: flex;
        }
        @media (max-width: 991px) {
          .sidebar{
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
