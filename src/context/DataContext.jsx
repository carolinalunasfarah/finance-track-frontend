import { createContext, useState, useEffect } from "react";
import URLBASE from "../utils/config.js";
import axios from "axios";
import { formatClosePrice, formatDate } from "../utils/formatters.js";

const DataProvider = ({ children }) => {
    const url_sync = `${URLBASE}/sync`;
    const url_stocks = `${URLBASE}/stocks`;

    const [stocks, setStocks] = useState([]);
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchStocks = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url_stocks);
            setStocks(response.data);
        } catch (error) {
            console.error("Error fetching stocks: ", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStockBySymbol = async (symbol) => {
        if (!selectedSymbol || selectedSymbol.symbol !== symbol) {
            setLoading(true);

            try {
                const response = await axios.get(`${url_stocks}/${symbol}`);
                const transformedData = response.data.map((item) => ({
                    date: formatDate(item.date),
                    closePrice: formatClosePrice(item.close_price),
                }));

                setSelectedSymbol({ symbol, data: transformedData });
            } catch (error) {
                console.error("Error fetching stock details: ", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const syncStocks = async () => {
        setLoading(true);
        try {
            const response = await axios.post(url_sync);
            await fetchStocks();

            if (selectedSymbol) {
                await fetchStockBySymbol(selectedSymbol.symbol);
            }
            return response.data;
        } catch (error) {
            console.error("Error syncing data: ", error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const syncStockBySymbol = async (symbol) => {
        setLoading(true);
        try {
            const response = await axios.post(`${url_sync}/${symbol}`);
            await fetchStockBySymbol(symbol);
            return response.data;
        } catch (error) {
            console.error(`Error syncing data for ${symbol}: `, error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStocks();
    }, []);

    return (
        <DataContext.Provider
            value={{
                stocks,
                syncStocks,
                fetchStockBySymbol,
                selectedSymbol,
                syncStockBySymbol,
                loading,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export const DataContext = createContext();
export default DataProvider;
