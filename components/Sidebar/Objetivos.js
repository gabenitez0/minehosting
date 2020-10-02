export default function Objetivos(){
    return (<>
        <div className="objetivos">
            <h3>¿Te gusta el servidor?</h3>
            <p>El costo de mantenimiento mensual del servidor es de $40 USD. Con tu compra estas ayudando a que el server permanezca online.</p>
        </div>
        <style jsx>{`
            .objetivos{
                max-width: 270px;
            }
            h3{
                font-weight: 600
            }
            img{
                max-width: 100%;
                max-height: 200px;
                margin: 20px 0;
                text-align: center;
            }
        `}</style>
    </>)
}