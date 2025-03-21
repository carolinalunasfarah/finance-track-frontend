//data
import { Symbols } from "../data/Symbols.jsx";

const SymbolCard = () => {
    return (
        <>
            {Symbols.map((symbol, index) => (
                <section key={index} className="symbol_card flex_col">
                    <img variant="top" src={symbol.symbol} alt={symbol.name} />
                    <article className="flex_col">
                        <h3>{symbol.name}</h3>
                        <button className="btn-primary">
                            <span>Ver detalles</span>
                        </button>
                    </article>
                </section>
            ))}
        </>
    );
};

export default SymbolCard;
