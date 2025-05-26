const GITHUB_API_BASE = "https://api.github.com";

export const fetchGitHubUser = async (username: string) => {
  const res = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub user");
  }

  return res.json();
};
