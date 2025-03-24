// hooks
import { useNavigate } from "react-router-dom";

//data
import { Symbols } from "../data/Symbols.jsx";

const SymbolCard = () => {
    const navigate = useNavigate();

    return (
        <section className="cards">
            {Symbols.map((symbol, index) => (
                <section key={index} className="symbol_card flex_col">
                    <img variant="top" src={symbol.icon} alt={symbol.name} />
                    <article className="flex_col">
                        <h2 className="cursor_default text-center flex_col">{symbol.name}</h2>
                        <button
                            className="btn_primary"
                            onClick={() =>
                                navigate(`/details/${symbol.symbol}`)
                            }>
                            <span>Ver detalles</span>
                        </button>
                    </article>
                </section>
            ))}
        </section>
    );
};

export default SymbolCard;
