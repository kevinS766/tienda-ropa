import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-slate-100 dark:bg-slate-900 h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col py-8 px-4 z-50 border-none">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">The Inventory</h1>
        <p className="text-xs text-slate-500 font-medium tracking-widest mt-1">Editorial Mode</p>
      </div>
      <nav className="flex-1 space-y-2">
        <a className="flex items-center gap-3 py-3 text-slate-900 dark:text-white font-bold border-l-4 border-slate-900 dark:border-slate-50 pl-4 transition-colors" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-inter tracking-tight font-bold text-sm">Panel de Control</span>
        </a>
        <a className="flex items-center gap-3 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pl-4 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
          <span className="material-symbols-outlined">apparel</span>
          <span className="font-inter tracking-tight font-bold text-sm">Catálogo</span>
        </a>
        <a className="flex items-center gap-3 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pl-4 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
          <span className="material-symbols-outlined">swap_horiz</span>
          <span className="font-inter tracking-tight font-bold text-sm">Stock</span>
        </a>
        <a className="flex items-center gap-3 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pl-4 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-inter tracking-tight font-bold text-sm">Reportes</span>
        </a>
        <a className="flex items-center gap-3 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pl-4 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-inter tracking-tight font-bold text-sm">Ajustes</span>
        </a>
      </nav>
      <div className="mt-auto pt-8 border-t border-slate-200/50">
        <button className="w-full bg-primary text-white py-3 rounded-lg mb-6 flex items-center justify-center gap-2 scale-98 transition-transform duration-200">
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
            <p className="text-sm font-bold text-slate-900">Admin User</p>
            <p className="text-xs text-slate-500">Editorial Lead</p>
          </div>
        </div>
        <a className="flex items-center gap-3 py-3 mt-4 text-slate-500 hover:text-slate-900 pl-4 transition-colors" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="text-sm font-medium">Soporte</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
