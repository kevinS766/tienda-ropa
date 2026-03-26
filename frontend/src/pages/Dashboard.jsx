import React from 'react';

const Dashboard = () => {
  return (
    <main className="ml-64 pt-16 min-h-screen bg-surface">
      <div className="px-8 pb-12 max-w-[1400px] mx-auto">
        <div className="mt-16 mb-12 flex justify-between items-end">
          <div>
            <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mb-2">Visión General</p>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tighter">Panel de Control</h2>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium border border-outline-variant/20 rounded-md hover:bg-surface-container transition-colors">Descargar Reporte</button>
            <button className="px-6 py-2 text-sm font-bold bg-gradient-to-br from-primary to-primary-container text-white rounded-md shadow-lg shadow-primary/10">Hoy: 24 Oct</button>
          </div>
        </div>

        {/* Metrics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-fixed-dim"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-on-surface-variant">payments</span>
              </span>
              <span className="text-xs font-bold text-on-tertiary-container flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +12.5%
              </span>
            </div>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Valor Total Inventario</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">$248,390.00</h3>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-error-container rounded-lg">
                <span className="material-symbols-outlined text-on-error-container">warning</span>
              </span>
              <span className="text-xs font-bold text-error flex items-center gap-1">Requiere Acción</span>
            </div>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Stock Bajo</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">14 Items</h3>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-secondary-container rounded-lg">
                <span className="material-symbols-outlined text-on-secondary-container">shopping_bag</span>
              </span>
              <span className="text-xs font-bold text-on-surface-variant">Meta: 150</span>
            </div>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Unidades Vendidas Hoy</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">82 Unidades</h3>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl">
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-lg font-bold tracking-tight">Ventas Recientes (7 días)</h4>
              <select className="bg-surface-container border-none text-xs font-bold rounded-md px-3 py-1.5 focus:ring-0">
                <option>Esta Semana</option>
                <option>Mes Pasado</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-4 px-2">
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[45%]"></div>
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[60%]"></div>
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[55%]"></div>
              <div className="flex-1 bg-primary rounded-t-lg h-[85%] relative group">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded">2.4k</div>
              </div>
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[40%]"></div>
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[65%]"></div>
              <div className="flex-1 bg-surface-container-highest rounded-t-lg h-[50%]"></div>
            </div>
            <div className="flex justify-between mt-4 px-2 text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
              <span>Lun</span><span>Mar</span><span>Mie</span><span className="text-primary font-bold">Jue</span><span>Vie</span><span>Sab</span><span>Dom</span>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="bg-tertiary-fixed text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Best Seller</span>
              <h4 className="text-2xl font-bold mt-4 leading-tight">Colección Otoño: Abrigos Minimal</h4>
            </div>
            <div className="relative z-10">
              <p className="text-4xl font-headline font-bold">85%</p>
              <p className="text-xs opacity-70 tracking-tight">Stock vendido en 14 días</p>
              <button className="mt-6 w-full py-2 bg-white text-primary text-sm font-bold rounded-md hover:bg-slate-100 transition-colors">Ver Detalles</button>
            </div>
          </div>
        </div>

        {/* Recent Movements Table */}
        <div className="bg-surface-container-low rounded-xl overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center bg-surface-container-high">
            <h4 className="text-sm font-label uppercase tracking-[0.15em] font-bold">Últimos movimientos</h4>
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1">
              Ver historial completo <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-high/50 text-on-surface-variant">
                <tr>
                  <th className="px-8 py-3 text-[10px] font-label uppercase tracking-widest">Producto</th>
                  <th className="px-8 py-3 text-[10px] font-label uppercase tracking-widest">Tipo</th>
                  <th className="px-8 py-3 text-[10px] font-label uppercase tracking-widest">Cantidad</th>
                  <th className="px-8 py-3 text-[10px] font-label uppercase tracking-widest">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                <tr className="bg-surface hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-8 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container-highest rounded"></div>
                    <div>
                      <p className="text-sm font-bold">Parka de Lino 'Aries'</p>
                      <p className="text-[10px] text-on-surface-variant font-mono">SKU-29384-BL</p>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm font-medium">Venta Online</td>
                  <td className="px-8 py-4 text-sm font-bold text-error">-1</td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-full uppercase tracking-tighter">Completado</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
