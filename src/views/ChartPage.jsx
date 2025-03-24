import { useParams } from "react-router-dom";
import SymbolChart from "../components/SymbolChart";
import SyncButton from "../components/SyncButton";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const ChartPage = () => {
    const { symbol } = useParams();
    
    return (
        <>
            <section className="px-5 pt-4">
                <NavigationBreadcrumb
                    paths={[
                        {
                            text: "Inicio",
                            to: "/",
                        },
                        {
                            text: `Acciones de ${symbol}`,
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="text-center chart_page">
                <h2 className="cursor_default">Evolución de {symbol}</h2>
                <article className="pt-2 flex_col">
                    <span className="pb-4 cursor_default">
                        Haz click para actualizar a la fecha de hoy
                        <br />
                        Ten en cuenta que la fecha puede demorar hasta 48 horas en actualizarse
                    </span>
                    <SyncButton />
                </article>
                <SymbolChart />
            </section>
        </>
    );
};

export default ChartPage;
