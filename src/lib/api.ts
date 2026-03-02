const API_BASE = '/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'An error occurred' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

export const authApi = {
  login: (credentials: any) => apiFetch('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (data: any) => apiFetch('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  logout: () => apiFetch('/auth/logout', { method: 'POST' }),
  me: () => apiFetch('/auth/me'),
};

export const downloadApi = {
  getSignedUrl: (orderItemId: string) => apiFetch(`/downloads/${orderItemId}`),
  getActivityUrl: (activityId: string) => apiFetch(`/activities/${activityId}/download`),
};

export const activitiesApi = {
  getAll: (filters: any = {}) => {
    const params = new URLSearchParams(filters).toString();
    return apiFetch(`/activities?${params}`);
  },
};

export const quizApi = {
  getAll: (filters: any = {}) => {
    const params = new URLSearchParams(filters).toString();
    return apiFetch(`/quizzes?${params}`);
  },
  getById: (id: string) => apiFetch(`/quizzes/${id}`),
};

export const adminApi = {
  getStats: () => apiFetch('/admin/stats'),
  createActivity: (data: any) => apiFetch('/admin/activities', { method: 'POST', body: JSON.stringify(data) }),
  createQuiz: (data: any) => apiFetch('/admin/quizzes', { method: 'POST', body: JSON.stringify(data) }),
};

export const progressApi = {
  get: () => apiFetch('/progress'),
  completeQuiz: (city: string, score: number) => apiFetch('/progress/quiz-complete', { method: 'POST', body: JSON.stringify({ city, score }) }),
  completeFreeQuiz: (city: string, score: number) => apiFetch('/progress/free-quiz-complete', { method: 'POST', body: JSON.stringify({ city, score }) }),
  trackActivityDownload: (city: string) => apiFetch('/progress/activity-download', { method: 'POST', body: JSON.stringify({ city }) }),
};
