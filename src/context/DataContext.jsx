import { createContext, useState, useEffect } from "react";
import URLBASE from "../utils/config.js";
import axios from "axios";
import { formatClosePrice, formatDate } from "../utils/formatters.js";

const DataProvider = ({ children }) => {
    const url_sync = `${URLBASE}/sync`;
    const url_stocks = `${URLBASE}/stocks`;

    const [stocks, setStocks] = useState([]);
    const [selectedSymbol, setSelectedSymbol] = useState(null);

    const fetchStocks = async () => {
        try {
            const response = await axios.get(url_stocks);
            setStocks(response.data);
        } catch (error) {
            console.error("Error fetching stocks: ", error);
        }
    };

    const fetchStockBySymbol = async (symbol) => {
        if (selectedSymbol?.symbol === symbol) {
            return;
        }

        try {
            const response = await axios.get(`${url_stocks}/${symbol}`);

            const transformedData = response.data.map((item) => ({
                date: formatDate(item.date),
                closePrice: formatClosePrice(item.close_price),
            }));

            setSelectedSymbol({ symbol, data: transformedData });
        } catch (error) {
            console.error("Error fetching stock details: ", error);
        }
    };

    const syncStocks = async () => {
        try {
            await axios.post(url_sync);
            fetchStocks();
        } catch (error) {
            console.error("Error syncing data: ", error);
        }
    };

    useEffect(() => {
        fetchStocks();
    }, []);

    return (
        <DataContext.Provider
            value={{ stocks, syncStocks, fetchStockBySymbol, selectedSymbol }}>
            {children}
        </DataContext.Provider>
    );
};

export const DataContext = createContext();
export default DataProvider;
