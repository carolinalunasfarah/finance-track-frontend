// router
import { Route, Routes } from "react-router-dom";

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// views
import { Home } from "./views/Home";
import ChartPage from "./views/ChartPage";
import NotFound from "./views/NotFound";

// components
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:symbol" element={<ChartPage />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
