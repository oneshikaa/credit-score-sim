import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';
import { motion } from 'framer-motion';
import { useScoreHistory } from '../../../hooks/useScoreHistory';
import { SCORE_RANGES } from '../../../utils/constants';

const ScoreChart = () => {
  const { history, analytics } = useScoreHistory();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="text-sm text-gray-500">Date: {formatDate(data.timestamp)}</p>
          <p className="font-bold text-indigo-600">Score: {data.score}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="w-full h-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer>
        <LineChart
          data={history}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis 
            dataKey="timestamp" 
            tickFormatter={formatDate}
            stroke="#6B7280"
          />
          <YAxis 
            domain={[300, 850]} 
            stroke="#6B7280"
            ticks={[300, 580, 670, 740, 850]}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Reference lines for score ranges */}
          <ReferenceLine 
            y={SCORE_RANGES.excellent.min} 
            stroke="#10B981" 
            strokeDasharray="3 3" 
            label="Excellent"
          />
          <ReferenceLine 
            y={SCORE_RANGES.good.min} 
            stroke="#3B82F6" 
            strokeDasharray="3 3" 
            label="Good"
          />
          <ReferenceLine 
            y={SCORE_RANGES.fair.min} 
            stroke="#F59E0B" 
            strokeDasharray="3 3" 
            label="Fair"
          />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ stroke: '#4F46E5', strokeWidth: 2, r: 4, fill: 'white' }}
            activeDot={{ r: 6, fill: '#4F46E5' }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
