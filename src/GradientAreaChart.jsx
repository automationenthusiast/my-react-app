import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data
const data = [
  { name: "Mon", uv: 400, pv: 240, amt: 240 },
  { name: "Tue", uv: 300, pv: 456, amt: 240 },
  { name: "Wed", uv: 300, pv: 139, amt: 240 },
  { name: "Thu", uv: 200, pv: 980, amt: 240 },
  { name: "Fri", uv: 278, pv: 390, amt: 240 },
  { name: "Sat", uv: 189, pv: 480, amt: 240 },
  { name: "Sun", uv: 239, pv: 380, amt: 240 },
];

const GradientAreaChart = () => {
  return (
    <div style={{ width: "100%", margin: "0 auto", paddingTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Gradient Stacked Area Chart
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} stackOffset="expand">
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradientAreaChart;
