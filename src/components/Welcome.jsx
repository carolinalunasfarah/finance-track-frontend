import SyncButton from "./SyncButton";

const Welcome = () => {
    return (
        <section className="flex_col p-4 welcome">
            <h2>¡Te damos la bienvenida!</h2>
            <span className="pb-4 text-center">
                En Finance Track podrás encontrar la evolución anual de{" "}
                <br></br>
                acciones de Amazon, Apple, Google, Microsoft y Roku.
                <br></br>
                Actualiza los datos y luego consulta el detalle.
            </span>
            <SyncButton />
        </section>
    );
};

export default Welcome;
