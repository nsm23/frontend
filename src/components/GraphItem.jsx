import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
  } from "recharts"


const GraphItem = ({orders}) => {
    return (
        <ResponsiveContainer width="80%" height={400}>
            <AreaChart data={orders}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0"y2="1" >
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}/>
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}/>
                    </linearGradient>
                </defs>


                <Area dataKey="cost_rub" stoke="#2451B7" fill="url(#color)" />

                <XAxis dataKey="delivery_date"/>

                <YAxis dataKey="cost_rub"  axisLine={false} tickLine={false} />

                <CartesianGrid vertical={false} opacity={0.4} />
                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default GraphItem;
