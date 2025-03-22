import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./views/Home";
import { Route, Routes } from "react-router-dom";
import SymbolChart from "./components/SymbolChart";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:symbol" element={<SymbolChart />} />
            </Routes>
        </>
    );
}

export default App;
