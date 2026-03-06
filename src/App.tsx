import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { Guide } from '@/pages/Guide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/guide/:id" element={<Guide />} />
        <Route path="/guides" element={<Dashboard />} /> {/* Alias for now */}
      </Routes>
    </BrowserRouter>
  );
}
