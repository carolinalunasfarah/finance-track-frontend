import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SymbolChart from "./components/SymbolChart";

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
