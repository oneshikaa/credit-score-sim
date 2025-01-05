export const FACTOR_WEIGHTS = {
    paymentHistory: 35,
    creditUtilization: 30,
    creditAge: 15,
    totalAccounts: 10,
    hardInquiries: 10
  };
  
  export const SCORE_RANGES = {
    excellent: { min: 750, max: 850, label: 'Excellent' },
    good: { min: 670, max: 749, label: 'Good' },
    fair: { min: 580, max: 669, label: 'Fair' },
    poor: { min: 300, max: 579, label: 'Poor' }
  };
  
  export const FACTOR_DESCRIPTIONS = {
    paymentHistory: 'Your track record of paying bills on time',
    creditUtilization: 'The percentage of your available credit that you\'re using',
    creditAge: 'The average age of your credit accounts',
    totalAccounts: 'The mix of credit types you have',
    hardInquiries: 'Recent applications for new credit'
  };
  