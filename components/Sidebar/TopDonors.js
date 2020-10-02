export default function ToPDonors(){
    return (<>
        <div className="topdonors">
            <h3>Agradecimientos especiales:</h3>
            <p>Estos son los jugadores que más contribuyeron económicamente al servidor:</p>
            <b><ul>
                <li>Carlosmax2273: $63.50 USD</li>
                <li>Maxiquevedo: $10.00 USD</li>
                <li>IamCris: $7.50 USD</li>
                <li>Masterke28: $5.00 USD</li>
                <li>Fali: $5.00 USD</li>
            </ul></b>
        </div>
        <style jsx>{`
            .topdonors{
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