export type Candidate = {
  login: string;
  name: string;
  bio: string;
  location: string;
  email: string;
  company: string;
  avatar_url: string; // ✅ new field
};


const usernames = [
  'torvalds', 'gaearon', 'yyx990803', 'sindresorhus', 'getify',
  'kentcdodds', 'tj', 'sebmarkbage', 'andrew', 'octocat'
];