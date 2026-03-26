import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-800/20 flex justify-between items-center h-16 px-8 transition-opacity opacity-90 hover:opacity-100 duration-300">
      <div className="flex items-center gap-8">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input 
            className="pl-10 pr-4 py-1.5 bg-surface-container-highest border-none rounded-md text-sm focus:ring-1 focus:ring-primary w-64 transition-all" 
            placeholder="Buscar productos, SKUs..." 
            type="text" 
          />
        </div>
        <nav className="flex items-center gap-6">
          <a className="text-slate-900 dark:text-white font-bold text-sm tracking-tight font-inter" href="#">Filtros</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 text-sm tracking-tight font-inter" href="#">Tallas</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 text-sm tracking-tight font-inter" href="#">Colores</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-slate-900">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-slate-500 hover:text-slate-900">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
