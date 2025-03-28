// hooks
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// recharts
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

// context
import { DataContext } from "../context/DataContext";

// custom chart features
import CustomTooltip from "./chart/CustomTooltip";
import CustomXAxisTick from "./chart/CustomXAxisTick";
import CustomYAxisTick from "./chart/CustomYAxisTick";

const SymbolChart = () => {
    const { symbol } = useParams();
    const { fetchStockBySymbol, selectedSymbol } = useContext(DataContext);

    useEffect(() => {
        fetchStockBySymbol(symbol);
    }, [symbol, fetchStockBySymbol]);

    const hasData =
        selectedSymbol && selectedSymbol.data && selectedSymbol.data.length > 0;

    return (
        <section className="flex_col mt-4">
            {hasData ? (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={selectedSymbol.data}
                        margin={{ top: 30, right: 30, left: 30, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis
                            dataKey="date"
                            tick={<CustomXAxisTick />}
                            tickSize={8}
                        />
                        <YAxis
                            tick={<CustomYAxisTick />}
                            tickSize={8}
                            domain={[0, 1000]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="top"
                            height={40}
                            iconType="diamond"
                            iconSize={18}
                        />
                        <Line
                            type="monotone"
                            dataKey="closePrice"
                            stroke="#d9b75d"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
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
