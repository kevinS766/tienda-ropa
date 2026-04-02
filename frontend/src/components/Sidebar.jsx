import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Panel de Control', icon: 'dashboard' },
    { id: 'products', label: 'Catálogo', icon: 'apparel' },
    { id: 'stock', label: 'Stock', icon: 'swap_horiz' },
    { id: 'reports', label: 'Reportes', icon: 'analytics' },
    { id: 'settings', label: 'Ajustes', icon: 'settings' },
  ];

  return (
    <aside className="bg-slate-100 dark:bg-slate-900 h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col py-8 px-4 z-50 border-none">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">The Inventory</h1>
        <p className="text-xs text-slate-500 font-medium tracking-widest mt-1">Editorial Mode</p>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 py-3 pl-4 transition-colors ${
              currentPage === item.id
                ? 'text-slate-900 dark:text-white font-bold border-l-4 border-slate-900 dark:border-slate-50'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-inter tracking-tight font-bold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-8 border-t border-slate-200/50">
        <button 
          onClick={() => setCurrentPage('products')}
          className="w-full bg-primary text-white py-3 rounded-lg mb-6 flex items-center justify-center gap-2 scale-98 transition-transform duration-200"
        >
          <span className="material-symbols-outlined">add</span>
          <span className="text-sm font-bold">Nuevo Ingreso</span>
        </button>
        <div className="flex items-center gap-3 px-4">
          <img 
            alt="Usuario de Tienda" 
            className="w-10 h-10 rounded-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEtl9T79jJIltJxG_Hpu4B2mQyfYkYv7Nu1F-sLK8CdGZgOeczffEXqpY98retk4aiUI02bYAI8hyvPl8D1PQXM6ut-RYDtPcndT3ymTEtyBMiGIrwwklG8oyWBJA4OLSWt7J-jN0Ir1XF9HrCRjeXstYKvXMxucichWKaYQ1kaIok7yAH0d5CEpvSr0X5Htlqy5pIMZL1-xqSOwxMbvQaTVb4dQDEw9Zx4HHXRaHLMJIttml2MnB9M7HyYSHhs3cL9qNoJgpnXuk"
          />
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Admin User</p>
            <p className="text-xs text-slate-500">Editorial Lead</p>
          </div>
        </div>
        <button className="flex items-center gap-3 py-3 mt-4 text-slate-500 hover:text-slate-900 dark:hover:text-white pl-4 transition-colors w-full text-left">
          <span className="material-symbols-outlined">help</span>
          <span className="text-sm font-medium">Soporte</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
