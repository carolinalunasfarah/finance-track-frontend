const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <section className="chart_tooltip">
                <p className="tooltip_text">{`Fecha: ${payload[0].payload.date}`}</p>
                <p className="tooltip_text">{`Precio: $${payload[0].value} USD`}</p>
            </section>
        );
    }
    return null;
};

export default CustomTooltip;
