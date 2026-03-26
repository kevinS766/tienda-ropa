import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <Header />
      <Dashboard />
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined">qr_code_scanner</span>
      </button>
    </div>
  );
}

export default App;
