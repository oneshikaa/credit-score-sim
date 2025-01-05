import { useMemo } from 'react';
import { FACTOR_WEIGHTS } from '../utils/constants';

export const useFactorImpact = (factors) => {
  return useMemo(() => {
    const impacts = {};
    
    for (const [factor, value] of Object.entries(factors)) {
      const weight = FACTOR_WEIGHTS[factor];
      let impact;
      
      switch (factor) {
        case 'paymentHistory':
          impact = value < 100 ? 'negative' : 'positive';
          break;
        case 'creditUtilization':
          impact = value > 30 ? 'negative' : 'positive';
          break;
        case 'creditAge':
          impact = value < 5 ? 'negative' : 'positive';
          break;
        case 'totalAccounts':
          impact = value < 3 ? 'negative' : value > 10 ? 'neutral' : 'positive';
          break;
        case 'hardInquiries':
          impact = value > 2 ? 'negative' : 'positive';
          break;
        default:
          impact = 'neutral';
      }
      
      impacts[factor] = { impact, weight };
    }
    
    return impacts;
  }, [factors]);
};