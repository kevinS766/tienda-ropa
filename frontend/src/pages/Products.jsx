import React, { useState, useEffect } from 'react';
import * as productService from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getProductos();
      setProducts(data || []);
      setError(null);
    } catch (err) {
      setError('No se pudieron cargar los productos. Asegúrate de que el backend esté corriendo.');
      // Mock data for demonstration if backend fails
      setProducts([
        { id: 1, nombre: 'Camiseta Básica', descripcion: 'Algodón 100%', precio: 15.99, stock: 50 },
        { id: 2, nombre: 'Pantalón Vaquero', descripcion: 'Slim fit azul', precio: 39.99, stock: 30 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es obligatorio';
    if (!formData.precio || formData.precio <= 0) errors.precio = 'El precio debe ser mayor a 0';
    if (formData.stock === '' || formData.stock < 0) errors.stock = 'El stock no puede ser negativo';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setCurrentProduct(product);
      setFormData({
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio: product.precio,
        stock: product.stock
      });
    } else {
      setCurrentProduct(null);
      setFormData({ nombre: '', descripcion: '', precio: '', stock: '' });
    }
    setFormErrors({});
    setIsModalOpen(true);
  };

  const handleOpenDeleteModal = (product) => {
    setCurrentProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (currentProduct) {
        await productService.updateProducto(currentProduct.id, formData);
        showFeedback('Producto actualizado con éxito', 'success');
      } else {
        await productService.createProducto(formData);
        showFeedback('Producto creado con éxito', 'success');
      }
      setIsModalOpen(false);
      fetchProducts();
    } catch (err) {
      showFeedback('Error al procesar la solicitud', 'error');
    }
  };

  const handleDelete = async () => {
    try {
      await productService.deleteProducto(currentProduct.id);
      showFeedback('Producto eliminado con éxito', 'success');
      setIsDeleteModalOpen(false);
      fetchProducts();
    } catch (err) {
      showFeedback('Error al eliminar el producto', 'error');
    }
  };

  const showFeedback = (message, type) => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: '', type: '' }), 3000);
  };

  return (
    <main className="ml-64 pt-16 min-h-screen bg-surface">
      <div className="px-8 pb-12 max-w-[1400px] mx-auto">
        <div className="mt-16 mb-8 flex justify-between items-end">
          <div>
            <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mb-2">Administración</p>
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tighter">Catálogo de Productos</h2>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Nuevo Producto
          </button>
        </div>

        {feedback.message && (
          <div className={`mb-6 p-4 rounded-md flex items-center gap-3 ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <span className="material-symbols-outlined">
              {feedback.type === 'success' ? 'check_circle' : 'error'}
            </span>
            {feedback.message}
          </div>
        )}

        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high/50 text-on-surface-variant">
                <tr>
                  <th className="px-8 py-4 text-[10px] font-label uppercase tracking-widest border-b border-outline-variant/10">Nombre</th>
                  <th className="px-8 py-4 text-[10px] font-label uppercase tracking-widest border-b border-outline-variant/10">Descripción</th>
                  <th className="px-8 py-4 text-[10px] font-label uppercase tracking-widest border-b border-outline-variant/10 text-right">Precio</th>
                  <th className="px-8 py-4 text-[10px] font-label uppercase tracking-widest border-b border-outline-variant/10 text-center">Stock</th>
                  <th className="px-8 py-4 text-[10px] font-label uppercase tracking-widest border-b border-outline-variant/10 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {loading ? (
                  <tr><td colSpan="5" className="px-8 py-10 text-center text-on-surface-variant">Cargando productos...</td></tr>
                ) : products.length === 0 ? (
                  <tr><td colSpan="5" className="px-8 py-10 text-center text-on-surface-variant">No hay productos registrados.</td></tr>
                ) : products.map((product) => (
                  <tr key={product.id} className="bg-surface hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-8 py-4 font-bold text-sm">{product.nombre}</td>
                    <td className="px-8 py-4 text-sm text-on-surface-variant max-w-xs truncate">{product.descripcion}</td>
                    <td className="px-8 py-4 text-sm font-mono font-bold text-right">${Number(product.precio).toFixed(2)}</td>
                    <td className="px-8 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${product.stock < 10 ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button 
                          onClick={() => handleOpenModal(product)}
                          className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                          title="Editar"
                        >
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button 
                          onClick={() => handleOpenDeleteModal(product)}
                          className="p-2 text-on-surface-variant hover:text-error transition-colors"
                          title="Eliminar"
                        >
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Crear/Editar */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-surface w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/20">
            <div className="px-8 py-6 bg-surface-container-high border-b border-outline-variant/10">
              <h3 className="text-xl font-bold">{currentProduct ? 'Editar Producto' : 'Nuevo Producto'}</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Nombre</label>
                <input 
                  type="text"
                  className={`w-full bg-surface-container rounded-md px-4 py-2 text-sm border ${formErrors.nombre ? 'border-error' : 'border-outline-variant/20'} focus:ring-1 focus:ring-primary outline-none`}
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  placeholder="Ej. Camiseta Oversize"
                />
                {formErrors.nombre && <p className="text-[10px] text-error mt-1 font-bold">{formErrors.nombre}</p>}
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Descripción</label>
                <textarea 
                  className="w-full bg-surface-container rounded-md px-4 py-2 text-sm border border-outline-variant/20 focus:ring-1 focus:ring-primary outline-none"
                  rows="3"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  placeholder="Detalles del producto..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Precio ($)</label>
                  <input 
                    type="number"
                    step="0.01"
                    className={`w-full bg-surface-container rounded-md px-4 py-2 text-sm border ${formErrors.precio ? 'border-error' : 'border-outline-variant/20'} focus:ring-1 focus:ring-primary outline-none`}
                    value={formData.precio}
                    onChange={(e) => setFormData({...formData, precio: e.target.value})}
                  />
                  {formErrors.precio && <p className="text-[10px] text-error mt-1 font-bold">{formErrors.precio}</p>}
                </div>
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Stock</label>
                  <input 
                    type="number"
                    className={`w-full bg-surface-container rounded-md px-4 py-2 text-sm border ${formErrors.stock ? 'border-error' : 'border-outline-variant/20'} focus:ring-1 focus:ring-primary outline-none`}
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  />
                  {formErrors.stock && <p className="text-[10px] text-error mt-1 font-bold">{formErrors.stock}</p>}
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2 text-sm font-bold border border-outline-variant/20 rounded-md hover:bg-surface-container transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2 text-sm font-bold bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-all"
                >
                  {currentProduct ? 'Guardar Cambios' : 'Crear Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Confirmar Eliminar */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-surface w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/20">
            <div className="p-8 text-center">
              <span className="material-symbols-outlined text-error text-5xl mb-4">warning</span>
              <h3 className="text-xl font-bold mb-2">¿Eliminar producto?</h3>
              <p className="text-sm text-on-surface-variant">
                Estás a punto de eliminar <strong>{currentProduct?.nombre}</strong>. Esta acción no se puede deshacer.
              </p>
            </div>
            <div className="px-8 pb-8 flex gap-3">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-2 text-sm font-bold border border-outline-variant/20 rounded-md hover:bg-surface-container transition-colors"
              >
                No, mantener
              </button>
              <button 
                onClick={handleDelete}
                className="flex-1 py-2 text-sm font-bold bg-error text-white rounded-md shadow-lg hover:bg-error/90 transition-all"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
