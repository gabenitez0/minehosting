import Head from "next/head";

//COMPONENTS
import Header from "../components/Header";
import Productos from "../components/Tienda/Productos";
import Footer from "../components/Footer";

export default function IndexPage() {


  const page = {
    title: "Servidores Dedicados",
    desc: "Alto rendimiento dedicado a cualquier servidor de minecraft y gameserver. Soporte y consultas por Discord.",
    button: "Discord",
    button2: "Entrar al Discord",
  }
  
  return (
    <>
      <Head>
      <title>Servidores Dedicados de Alto Rendimiento | MineHosting</title>
        <meta
          name="description"
          content="Servidores dedicados para minecraft. Tu servidor de minecraft sin lag garantizado."
        />
        <meta
          name="keywords"
          content="minecraft, servidor dedicado, hosting, vps, server, servidor, capitalmc, server minecraft, spigot, bukkit, paper, towny, survival, vanilla"
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
          padding-top: 50px;
          padding-bottom: 30px;
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