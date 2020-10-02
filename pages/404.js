import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Error() {
  return (
    <>
      <Head>
        <title>Página no encontrada | Host</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section id="error">
        <div className="container error">
          <h1>Error 404 | Página no encontrada</h1>
          <p>La página que estás buscando no existe o fue eliminada.
          </p>
          <Link href="/"><div className="button-primary">Ir al Inicio</div></Link>
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
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .error {
            padding: 120px 30px 60px;
            min-height: calc(100vh - 563px);
          }
          .button-primary{
            margin-top: 30px;
          }
          h1 {
            font-size: 42px;
          }
          h3 {
            margin-top: 40px;
          }
        `}</style>
      </section>
    </>
  );
}
