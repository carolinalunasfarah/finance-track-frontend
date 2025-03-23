import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const SyncButton = () => {
    const { symbol } = useParams();
    const { loading, syncStockBySymbol } = useContext(DataContext);

    const handleSync = async () => {
        try {
            const result = await syncStockBySymbol(symbol);

            if (result) {
                console.log("Resultado de la sincronización:", result);
                alert("Datos actualizados con éxito 🚀");
            } else {
                alert("Hubo un error al sincronizar ❌");
            }
        } catch (error) {
            alert("Hubo un error al sincronizar ❌");
        }
    };

    return (
        <button
            className="btn_secondary"
            onClick={handleSync}
            disabled={loading}>
            {loading ? <span>Actualizando...</span> : <span>Actualizar</span>}
        </button>
    );
};

export default SyncButton;
