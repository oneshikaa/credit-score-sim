import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const ScoreHistory = () => {
  const history = useSelector(state => state.history.scoreHistory);

  const chartData = history.map(entry => ({
    date: format(new Date(entry.timestamp), 'MMM dd, yyyy'),
    score: entry.score
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis domain={[300, 850]} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#4f46e5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};