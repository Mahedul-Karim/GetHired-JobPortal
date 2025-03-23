import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";



const CustomToolTip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const payloadObject1 = payload[0];
    const payloadObject2 = payload[1];
    const payloadObject3 = payload[2];

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
        <div className="my-4 flex items-center gap-2">
          <div
            className={`size-3 rounded-sm`}
            style={{ backgroundColor: `${payloadObject2.color}` }}
          />
          <p
            className="text-sm font-medium"
            style={{ color: payloadObject2.color }}
          >
            {payloadObject2.value}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`size-3 rounded-sm`}
            style={{ backgroundColor: `${payloadObject3.color}` }}
          />
          <p
            className="text-sm font-medium"
            style={{ color: payloadObject3.color }}
          >
            {payloadObject3.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

interface Props {
  chartData: {
    month: number;
    applied: number;
    rejected: number;
    responded: number;
  }[];
}

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const ActivityChart: React.FC<Props> = ({ chartData }) => {

  const data = chartData.map(chart=>{
    return {
      month:months[chart.month - 1],
      applied:chart.applied,
      rejected:chart.rejected,
      responded:chart.responded
    }
  })

  return (
    <div className="mt-6">
      <ResponsiveContainer width="100%" height="100%" className="min-h-[300px]">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={({ label, active, payload }) => (
              //@ts-ignore
              <CustomToolTip label={label} active={active} payload={payload} />
            )}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="applied"
            stroke="#5049e1"
            activeDot={{ r: 8 }}
            strokeWidth={2.5}
          />
          <Line
            type="monotone"
            dataKey="responded"
            stroke="#008000"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="rejected"
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
            stroke="#ff8667"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
