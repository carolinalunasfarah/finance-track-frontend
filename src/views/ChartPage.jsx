import { useParams } from "react-router-dom";
import SymbolChart from "../components/SymbolChart";
import SyncButton from "../components/SyncButton";

const ChartPage = () => {
    const { symbol } = useParams();
    return (
        <section className="text-center chart_page">
            <h2>Evolución de {symbol}</h2>
            <article className="pt-2 flex_col">
                <span className="pb-4">Haz click para actualizar a la fecha de hoy</span>
                <SyncButton />
            </article>
            <SymbolChart />
        </section>
    );
};

export default ChartPage;
