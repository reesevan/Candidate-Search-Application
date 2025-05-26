// src/App.tsx
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/savedcandidates">Saved</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
