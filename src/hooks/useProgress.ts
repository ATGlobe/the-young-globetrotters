import { useState, useEffect, useCallback } from 'react';
import { CITIES } from '../data/cities';

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

  const updateProgress = (cityId: string, type: 'quiz' | 'games', activity: string, completed: boolean = true) => {
    setProgress((prev) => {
      const cityProgress = prev[cityId] || {
        quiz: { geography: false, culture: false, food: false },
        games: { crossword: false, rebus: false, scramble: false }
      };

      return {
        ...prev,
        [cityId]: {
          ...cityProgress,
          [type]: {
            ...cityProgress[type],
            [activity]: completed
          }
        }
      };
    });
  };

  const isCityCompleted = useCallback((cityId: string) => {
    const vol = progress[cityId];
    if (!vol) return false;

    const quizzesDone = Object.values(vol.quiz).filter(Boolean).length >= 3;
    const gamesDone = Object.values(vol.games).filter(Boolean).length >= 3;

    return quizzesDone && gamesDone;
  }, [progress]);

  const isCityInProgress = useCallback((cityId: string) => {
    const vol = progress[cityId];
    if (!vol) return false;
    if (isCityCompleted(cityId)) return false;

    const completedCount = 
      Object.values(vol.quiz).filter(Boolean).length + 
      Object.values(vol.games).filter(Boolean).length;

    return completedCount > 0;
  }, [progress, isCityCompleted]);

  const getCityBadge = useCallback((cityId: string) => {
    if (!isCityCompleted(cityId)) return null;
    
    const city = CITIES.find(c => c.id === cityId);
    return city?.level || 'bronze';
  }, [isCityCompleted]);

  const getCompletedCitiesCount = useCallback(() => {
    return Object.keys(progress).filter(id => isCityCompleted(id)).length;
  }, [progress, isCityCompleted]);

  const checkPassportLevel = (count: number) => {
    if (count >= 50) return "Master Globetrotter";
    if (count >= 30) return "Navigator";
    if (count >= 15) return "Adventurer";
    if (count >= 5) return "Junior Explorer";
    return "Beginner";
  };

  return { 
    progress, 
    updateProgress, 
    isCityCompleted, 
    isCityInProgress,
    getCityBadge,
    getCompletedCitiesCount,
    checkPassportLevel 
  };
};

