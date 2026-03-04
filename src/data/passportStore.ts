export interface PassportData {
  purchasedVolumes: number[];
  completedQuizzes: number[];
}

const STORAGE_KEY = 'young_globetrotters_passport';

const DEFAULT_PASSPORT: PassportData = {
  purchasedVolumes: [],
  completedQuizzes: [],
};

export function getPassport(): PassportData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_PASSPORT;
    return JSON.parse(stored) as PassportData;
  } catch (error) {
    console.error('Failed to parse passport data:', error);
    return DEFAULT_PASSPORT;
  }
}

export function savePassport(data: PassportData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function unlockVolume(volumeId: number): void {
  const passport = getPassport();
  if (!passport.purchasedVolumes.includes(volumeId)) {
    passport.purchasedVolumes.push(volumeId);
    savePassport(passport);
    // Dispatch event for reactive updates
    window.dispatchEvent(new Event('passport-updated'));
  }
}

export function completeQuiz(volumeId: number): void {
  const passport = getPassport();
  if (!passport.completedQuizzes.includes(volumeId)) {
    passport.completedQuizzes.push(volumeId);
    savePassport(passport);
    // Dispatch event for reactive updates
    window.dispatchEvent(new Event('passport-updated'));
  }
}
