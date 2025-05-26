type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio?: string;
};

const STORAGE_KEY = 'savedCandidates';

export const saveCandidate = (user: GitHubUser) => {
  const existing = getCandidates();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, user]));
};

export const getCandidates = (): GitHubUser[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const clearCandidates = () => {
  localStorage.removeItem(STORAGE_KEY);
};
