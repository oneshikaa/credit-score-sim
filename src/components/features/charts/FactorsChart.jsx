import React from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FACTOR_WEIGHTS } from '../../../utils/constants';

const FactorsChart = () => {
  const factors = useSelector(state => state.simulator.factors);
  
  // Normalize factor values to 0-100 scale
  const normalizeValue = (factor, value) => {
    switch(factor) {
      case 'creditAge':
        return Math.min(value * 10, 100); // 10 years = 100%
      case 'totalAccounts':
        return Math.min(value * 20, 100); // 5 accounts = 100%
      case 'hardInquiries':
        return Math.max(0, 100 - value * 20); // 0 inquiries = 100%
      default:
        return value;
    }
  };

  const chartData = Object.entries(factors).map(([factor, value]) => ({
    factor: factor.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value: normalizeValue(factor, value),
    weight: FACTOR_WEIGHTS[factor]
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded shadow-lg border">
          <p className="font-medium">{data.factor}</p>
          <p className="text-sm text-gray-600">Value: {data.value}%</p>
          <p className="text-sm text-gray-600">Weight: {data.weight}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="w-full h-96"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis 
            dataKey="factor"
            tick={{ fill: '#4B5563', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]}
            tick={{ fill: '#4B5563' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Factors"
            dataKey="value"
            stroke="#4F46E5"
            fill="#4F46E5"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
