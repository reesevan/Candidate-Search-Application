// src/pages/SavedCandidates.tsx
import { useEffect, useState } from 'react';
import { Candidate } from '../types/Candidate';
import CandidateCard from '../components/CandidateCard';

function SavedCandidates() {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSaved(savedData);
  }, []);

  if (saved.length === 0) {
    return <p>No candidates saved yet.</p>;
  }

  return (
    <div>
      <h1>Saved Candidates</h1>
      <div className="card-grid">
        {saved.map(candidate => (
          <CandidateCard key={candidate.login} user={candidate} />
        ))}
      </div>
    </div>
  );
}

export default SavedCandidates;
