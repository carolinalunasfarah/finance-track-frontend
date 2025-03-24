// react-bootstrap
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
    return (
        <section>
            <article className="loading_overlay">
                <Spinner
                    animation="border"
                    role="status"
                    clasname="spinner"></Spinner>
            </article>
            <article className="loading_overlay loading_overlay_text">
                <p>Cargando...</p>
            </article>
        </section>
    );
};

export default LoadingSpinner;
