import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';
import { SCORE_RANGES } from '../../../utils/constants';

const ScoreDistributionChart = () => {
  // Example distribution data (you can replace with real data)
  const distributionData = [
    { range: '300-579', count: 16, label: 'Poor' },
    { range: '580-669', count: 18, label: 'Fair' },
    { range: '670-739', count: 21, label: 'Good' },
    { range: '740-799', count: 25, label: 'Very Good' },
    { range: '800-850', count: 20, label: 'Excellent' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow-lg border">
          <p className="font-medium">{label} ({payload[0].payload.label})</p>
          <p className="text-sm text-gray-600">
            Population: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="w-full h-64"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer>
        <BarChart
          data={distributionData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis 
            dataKey="range" 
            stroke="#6B7280"
          />
          <YAxis 
            stroke="#6B7280"
            label={{ 
              value: 'Population %', 
              angle: -90, 
              position: 'insideLeft' 
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="count" 
            fill="#4F46E5"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export { ScoreChart, FactorsChart, ScoreDistributionChart };