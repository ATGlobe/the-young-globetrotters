import { useState, useEffect } from 'react';

export interface VolumeProgress {
  quiz: {
    geography: boolean;
    culture: boolean;
    food: boolean;
  };
  games: {
    crossword: boolean;
    rebus: boolean;
    scramble: boolean;
  };
}

export type ProgressMap = Record<string, VolumeProgress>;

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressMap>(() => {
    const saved = localStorage.getItem('young-globetrotters-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('young-globetrotters-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (volumeId: string, type: 'quiz' | 'games', activity: string, completed: boolean = true) => {
    setProgress((prev) => {
      const volumeProgress = prev[volumeId] || {
        quiz: { geography: false, culture: false, food: false },
        games: { crossword: false, rebus: false, scramble: false }
      };

      return {
        ...prev,
        [volumeId]: {
          ...volumeProgress,
          [type]: {
            ...volumeProgress[type],
            [activity]: completed
          }
        }
      };
    });
  };

  const calculateBadge = (volumeId: string): 'Bronze' | 'Silver' | 'Gold' | null => {
    const vol = progress[volumeId];
    if (!vol) return null;

    const totalActivities = 6;
    const completedCount = 
      Object.values(vol.quiz).filter(Boolean).length + 
      Object.values(vol.games).filter(Boolean).length;

    if (completedCount === totalActivities) return 'Gold';
    if (completedCount >= 3) return 'Silver';
    if (completedCount >= 1) return 'Bronze';
    return null;
  };

  const isCityCompleted = (volumeId: string) => {
    return calculateBadge(volumeId) === 'Gold';
  };

  return { progress, updateProgress, calculateBadge, isCityCompleted };
};
