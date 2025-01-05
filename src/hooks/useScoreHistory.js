import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const useScoreHistory = () => {
  const history = useSelector(state => state.history.scoreHistory);

  const analytics = useMemo(() => {
    if (!history.length) return null;

    const scores = history.map(entry => entry.score);
    return {
      highestScore: Math.max(...scores),
      lowestScore: Math.min(...scores),
      averageScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      totalChanges: history.length - 1
    };
  }, [history]);

  return { history, analytics };
};
