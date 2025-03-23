const CustomYAxisTick = ({ x, y, payload }) => {
    return (
        <text x={x} y={y} dx={-15} className="chart_axis_y">
            {payload.value}
        </text>
    );
};

export default CustomYAxisTick;
