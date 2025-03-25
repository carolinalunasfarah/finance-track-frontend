import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="flex_col not_found">
            <section className="flex_col my-4">
                <h2 className="cursor_default">¡Ups!</h2>
                <span className="cursor_default mt-2 text-center">
                    Vaya vaya. <br />
                    La página solicitada no existe.
                </span>

                <Link to="/">
                    <button
                        className="btn btn_secondary cursor-pointer mt-4"
                        aria-label="Redirección al Home">
                        <span>Volvamos al Home</span>
                    </button>
                </Link>
            </section>
        </section>
    );
};

export default NotFound;
