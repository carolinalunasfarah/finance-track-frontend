import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const SyncButton = () => {
    const { syncStocks, loading } = useContext(DataContext);

    const handleSync = async () => {
        try {
            await syncStocks();
            alert("Datos actualizados con éxito 🚀");
        } catch (error) {
            alert("Hubo un error al sincronizar ❌");
        }
    };

    return (
        <button
            className="btn_secondary"
            onClick={handleSync}
            disabled={loading}>
            {loading ? (
                <span>Actualizando...</span>
            ) : (
                <span>Actualizar</span>
            )}
        </button>
    );
};

export default SyncButton;
