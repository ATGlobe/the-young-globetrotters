import { useState, useEffect } from 'react';
import { getPassport, PassportData } from '../data/passportStore';

export function usePassport() {
  const [passport, setPassport] = useState<PassportData>(getPassport());

  useEffect(() => {
    const handleUpdate = () => {
      setPassport(getPassport());
    };

    window.addEventListener('passport-updated', handleUpdate);
    // Also listen to storage events from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'young_globetrotters_passport') {
        handleUpdate();
      }
    });

    return () => {
      window.removeEventListener('passport-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const isUnlocked = (volumeId: number) => passport.purchasedVolumes.includes(volumeId);
  const isQuizCompleted = (volumeId: number) => passport.completedQuizzes.includes(volumeId);

  const getRank = () => {
    const count = passport.purchasedVolumes.length;
    if (count >= 50) return 'Master Globetrotter';
    if (count >= 30) return 'Global Explorer';
    if (count >= 15) return 'World Traveler';
    if (count >= 5) return 'City Adventurer';
    return 'Junior Explorer';
  };

  const getNextRankThreshold = () => {
    const count = passport.purchasedVolumes.length;
    if (count < 5) return 5;
    if (count < 15) return 15;
    if (count < 30) return 30;
    if (count < 50) return 50;
    return 50;
  };

  return {
    passport,
    isUnlocked,
    isQuizCompleted,
    getRank,
    getNextRankThreshold,
    totalVolumes: 50
  };
}
