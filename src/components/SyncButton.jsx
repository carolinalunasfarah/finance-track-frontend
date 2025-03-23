import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const SyncButton = () => {
    const { loading, syncStocks } = useContext(DataContext);

    const handleSync = async () => {
        try {
            const result = await syncStocks();

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
