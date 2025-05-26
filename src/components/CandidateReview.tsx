import { useEffect, useState } from 'react';
import { Candidate } from '../types/Candidate';

const usernames = [
  'torvalds', 'gaearon', 'yyx990803', 'sindresorhus', 'getify',
  'kentcdodds', 'tj', 'sebmarkbage', 'andrew', 'octocat'
];

function CandidateReview() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomCandidate = async () => {
    setLoading(true);
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    const res = await fetch(`https://api.github.com/users/${randomUsername}`);
    const data = await res.json();
    setCandidate(data);
    setLoading(false);
  };

  const saveCandidate = () => {
    if (!candidate) return;

    const existing = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

    // Avoid saving duplicates
    const isAlreadySaved = existing.some((c: Candidate) => c.login === candidate.login);
    if (!isAlreadySaved) {
      const updated = [...existing, candidate];
      localStorage.setItem('savedCandidates', JSON.stringify(updated));
      alert(`${candidate.name} saved!`);
    } else {
      alert(`${candidate.name} is already saved.`);
    }
  };

  useEffect(() => {
    fetchRandomCandidate();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!candidate) return <p>No candidate found.</p>;

  return (
    <div className="candidate-card">
      <h2>{candidate.name}</h2>
      <p><strong>Bio:</strong> {candidate.bio || 'N/A'}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>

      <button onClick={saveCandidate}>Save</button>
      <button onClick={fetchRandomCandidate}>Next</button>
    </div>
  );
}

export default CandidateReview;
