import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  LegendProps,
} from "recharts";

const data = [
  {
    month: "Jan",
    applied: 2400,
  },
  {
    month: "Feb",
    applied: 1398,
  },
  {
    month: "Mar",
    applied: 9800,
  },
  {
    month: "Apr",
    applied: 3908,
  },
  {
    month: "May",
    applied: 4800,
  },
  {
    month: "Jun",
    applied: 3800,
  },
];

const CustomToolTip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const payloadObject1 = payload[0];

    return (
      <div className="bg-primary-light-2 px-4 py-2 rounded-lg">
        <h3 className="text-lg">{label}</h3>
        <div className="mt-4 flex items-center gap-2">
          <div
            className={`size-3 rounded-sm`}
            style={{ backgroundColor: `${payloadObject1.color}` }}
          />
          <p
            className="text-sm font-medium"
            style={{ color: payloadObject1.color }}
          >
            {payloadObject1.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const RenderLegend: React.FC<LegendProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <ul className="flex items-center justify-center gap-4">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center gap-2 text-primary">
          <div
            className="size-3 rounded-sm"
            style={{ backgroundColor: `${entry.color}` }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const ApplicantChart = () => {
  return (
    <div className="mt-6">
      <ResponsiveContainer width="100%" height="100%" className="min-h-[300px]">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          {/* <YAxis /> */}
          <Tooltip
            cursor={false}
            content={({ label, active, payload }) => (
              //@ts-ignore
              <CustomToolTip label={label} active={active} payload={payload} />
            )}
          />
          <Legend content={<RenderLegend />} />
          <Bar dataKey="applied" fill="#5049e1" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicantChart;
