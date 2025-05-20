import React from 'react';
import { Home } from 'lucide-react';

export default function App() {
  return (
    <div className="p-6 bg-blue-600 text-white flex items-center gap-3 rounded shadow">
      {/* Use color prop instead of stroke class */}
      <Home size={24} color="orange" />
      <span>Test...it works!!</span>
    </div>
  );
}
