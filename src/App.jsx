
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CreditScoreDisplay from './components/features/simulator/CreditScoreDisplay';
import FactorSlider from './components/features/simulator/FactorSlider';
import ScoreHistory from './components/features/simulator/ScoreHistory';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { useScoreCalculator } from './hooks/useScoreCalculator';
import { motion } from 'framer-motion';

const SimulatorContent = () => {
  const { factors, updateScore } = useScoreCalculator();
  
  return (
    <div className="space-y-6">
      <CreditScoreDisplay />
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Credit Factors</h2>
        <div className="space-y-6">
          <FactorSlider
            factor="paymentHistory"
            value={factors.paymentHistory}
            max={100}
            onChange={(value) => updateScore('paymentHistory', value)}
          />
          <FactorSlider
            factor="creditUtilization"
            value={factors.creditUtilization}
            max={100}
            onChange={(value) => updateScore('creditUtilization', value)}
          />
          <FactorSlider
            factor="creditAge"
            value={factors.creditAge}
            max={30}
            onChange={(value) => updateScore('creditAge', value)}
          />
          <FactorSlider
            factor="totalAccounts"
            value={factors.totalAccounts}
            max={15}
            onChange={(value) => updateScore('totalAccounts', value)}
          />
          <FactorSlider
            factor="hardInquiries"
            value={factors.hardInquiries}
            max={10}
            onChange={(value) => updateScore('hardInquiries', value)}
          />
        </div>
      </Card>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Score History</h2>
        <ScoreHistory />
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 py-8">
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SimulatorContent />
          </motion.div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

