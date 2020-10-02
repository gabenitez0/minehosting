import Head from "next/head";

//COMPONENTS
import Header from "../components/Header";
import Productos from "../components/Tienda/Productos";
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
      <title>Minecraft Hosting y Soporte de Alta Calidad | MineHosting</title>
        <meta
          name="description"
          content="Consigue el hosting de minecraft que estás buscando, hostings y servicios de alta calidad, garantizamos que funcione sin lag."
        />
        <meta
          name="keywords"
          content="minecraft, hosting, vps, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla"
        />
      </Head>

      <Header page={page}/>
      <div className="sidebar container">
        <Productos />
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
          color: var(--color-primary);
        }
        :global(section#header){
          height: 50vh;
          min-height: 250px;
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