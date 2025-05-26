import React from 'react';
import { Candidate } from '../types/Candidate';

interface CandidateCardProps {
  user: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ user }) => (
  <div className="candidate-card">
    <img
      src={user.avatar_url}
      alt={`${user.name || user.login}'s avatar`}
      className="avatar"
      width={100}
    />
    <h2>{user.name || user.login}</h2>
    <p><strong>Bio:</strong> {user.bio || 'N/A'}</p>
    <p><strong>Location:</strong> {user.location || 'N/A'}</p>
    <p><strong>Email:</strong> {user.email || 'N/A'}</p>
    <p><strong>Company:</strong> {user.company || 'N/A'}</p>
    <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
      View GitHub
    </a>
  </div>
);

export default CandidateCard;
