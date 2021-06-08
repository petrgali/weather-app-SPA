import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { reduceData } from "../../services/reduceToChart";

export default function Chart({ rawData }) {
  const data = reduceData(rawData.forecast);
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="t" fill="#82ca9d" />
    </BarChart>
  );
}
