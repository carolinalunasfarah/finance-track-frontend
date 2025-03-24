// components
import { useContext } from "react";
import SymbolCard from "../components/SymbolCard";
import Welcome from "../components/Welcome";
import { DataContext } from "../context/DataContext";
import LoadingSpinner from "../components/LoadingSpinner";

export const Home = () => {
    const { loading } = useContext(DataContext);

    return (
        <main>
            {loading && <LoadingSpinner />}
            <Welcome />

            <SymbolCard />
        </main>
    );
};
