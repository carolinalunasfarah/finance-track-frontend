const CustomXAxisTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text className="chart_axis_x" dy={16}>
                {payload.value}
            </text>
        </g>
    );
};

export default CustomXAxisTick;
