import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const SymbolChart = () => {
    const { symbol } = useParams();
    const { fetchStockBySymbol, selectedSymbol } = useContext(DataContext);

    useEffect(() => {
        if (!selectedSymbol || selectedSymbol.symbol !== symbol) {
            fetchStockBySymbol(symbol);
        }
    }, [symbol, fetchStockBySymbol, selectedSymbol]);

    const hasData =
        selectedSymbol && selectedSymbol.data && selectedSymbol.data.length > 0;

    return (
        <section className="chart flex_col mt-4">
            <h2>Evolución de {symbol}</h2>
            {hasData ? (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={selectedSymbol.data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="closePrice"
                            stroke="#FFFFFF"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </section>
    );
};

export default SymbolChart;
