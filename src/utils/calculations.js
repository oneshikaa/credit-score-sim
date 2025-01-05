export const calculateCreditScore = (factors) => {
    // Payment History (35% impact)
    const paymentScore = Math.min(100, factors.paymentHistory) * 3.5;
    
    // Credit Utilization (30% impact)
    const utilizationScore = (100 - Math.min(100, factors.creditUtilization)) * 3;
    
    // Length of Credit History (15% impact)
    const ageScore = Math.min(factors.creditAge * 10, 100) * 1.5;
    
    // Credit Mix (10% impact)
    const mixScore = Math.min(factors.totalAccounts * 20, 100);
    
    // New Credit (10% impact)
    const inquiryScore = Math.max(0, 100 - factors.hardInquiries * 20);
    
    // Calculate total score (300-850 range)
    const totalScore = Math.round(
      300 + ((paymentScore + utilizationScore + ageScore + mixScore + inquiryScore) / 100) * 550
    );
    
    return Math.min(850, Math.max(300, totalScore));
  };
  
  export const generateRecommendations = (factors) => {
    const recommendations = [];
  
    if (factors.paymentHistory < 100) {
      recommendations.push({
        factor: 'paymentHistory',
        message: 'Make all payments on time to improve your payment history',
        impact: 'high'
      });
    }
  
    if (factors.creditUtilization > 30) {
      recommendations.push({
        factor: 'creditUtilization',
        message: 'Try to keep your credit utilization below 30%',
        impact: 'high'
      });
    }
    return recommendations;
};
