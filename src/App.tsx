import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { Guide } from '@/pages/Guide';
import { Map } from '@/pages/Map';
import { Profile } from '@/pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/guide/:id" element={<Guide />} />
        <Route path="/guides" element={<Dashboard />} /> {/* Alias for now */}
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
