// hooks
import { useParams } from "react-router-dom";
import { useContext } from "react";

// context
import { DataContext } from "../context/DataContext";

// components
import SymbolChart from "../components/SymbolChart";
import SyncButton from "../components/SyncButton";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";
import LoadingSpinner from "../components/LoadingSpinner";

const ChartPage = () => {
    const { symbol } = useParams();
    const { loading } = useContext(DataContext);

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
            {loading && <LoadingSpinner />}
            <section className="text-center chart_page">
                <h2 className="cursor_default">Evolución de {symbol}</h2>
                <article className="pt-2 flex_col">
                    <span className="pb-4 cursor_default">
                        Haz click para actualizar a la fecha de hoy
                        <br />
                        Ten en cuenta que la fecha puede demorar hasta 48 horas
                        en actualizarse
                    </span>
                    <SyncButton />
                </article>
                <SymbolChart />
            </section>
        </>
    );
};

export default ChartPage;
