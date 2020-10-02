import Objetivos from './Sidebar/Objetivos';
import TopDonors from './Sidebar/TopDonors';

export default function Sidebar(){
    return (<>
        <section id="sidebar">
            <Objetivos/>
            <TopDonors/>
        </section>
        
        <style jsx>{`
            section{
                padding-top: 20px;
                background: #eff3f7;
                min-width: 320px;
            }
            :global(#sidebar div){
                padding: 20px 30px;
            }
            @media screen and (max-width: 991px) {
                section{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }
            }
        `}</style>
    </>)
}