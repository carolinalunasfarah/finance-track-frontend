//data
import { useNavigate } from "react-router-dom";
import { Symbols } from "../data/Symbols.jsx";

const SymbolCard = () => {
    const navigate = useNavigate();

    return (
        <section className="cards">
            {Symbols.map((symbol, index) => (
                <section key={index} className="symbol_card flex_col">
                    <img variant="top" src={symbol.icon} alt={symbol.name} />
                    <article className="flex_col">
                        <h3>{symbol.name}</h3>
                        <button
                            className="btn-primary"
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
