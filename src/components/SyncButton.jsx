// hooks
import { useContext } from "react";
import { useParams } from "react-router-dom";

// context
import { DataContext } from "../context/DataContext";

// notifications
import Swal from "sweetalert2";

const SyncButton = () => {
    const { symbol } = useParams();
    const { loading, syncStockBySymbol, fetchStockBySymbol } =
        useContext(DataContext);

    const handleSync = async () => {
        try {
            const result = await syncStockBySymbol(symbol);

            if (result) {
                await fetchStockBySymbol(symbol);
                Swal.fire({
                    title: "¡Yey!",
                    html: `<p>Los datos se actualizaron con éxito</p>`,
                    confirmButtonText: "Entendido",
                    customClass: {
                        popup: "swal_popup",
                        title: "swal_title",
                        confirmButton: "success_swal_confirm",
                    },
                    padding: "1.8rem",
                });
                return;
            } else {
                Swal.fire({
                    title: "¡Ups!",
                    html: `<p>Hubo un error al actualizar los datos</p>`,
                    confirmButtonText: "Entendido",
                    customClass: {
                        popup: "swal_popup",
                        title: "swal_title",
                        confirmButton: "error_swal_confirm",
                    },
                    padding: "1.8rem",
                });
                return;
            }
        } catch (error) {
            Swal.fire({
                title: "¡Ups!",
                html: `<p>No se pudieron actualizar los datos</p>`,
                confirmButtonText: "Entendido",
                customClass: {
                    popup: "swal_popup",
                    title: "swal_title",
                    confirmButton: "error_swal_confirm",
                },
                padding: "1.8rem",
            });
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
