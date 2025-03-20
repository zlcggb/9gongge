import React, { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { TableView } from './components/TableView';
import { ViewToggle } from './components/ViewToggle';
import { AddProductModal } from './components/AddProductModal';
import { products as initialProducts } from './data/products';
import { Product } from './types';
import { Grid, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: Math.random().toString(36).substr(2, 9),
    };
    setProducts([...products, product]);
    toast.success('产品添加成功');
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    toast.success('产品更新成功');
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('确定要删除这个产品吗？')) {
      setProducts(products.filter(p => p.id !== id));
      toast.success('产品删除成功');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Grid className="h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">产品九宫格</h1>
            </div>
            <div className="flex items-center gap-4">
              <ViewToggle view={view} onViewChange={setView} />
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus size={20} />
                添加产品
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {view === 'grid' ? (
          <ProductGrid
            products={products}
            onProductClick={(product) => setSelectedProduct(product)}
          />
        ) : (
          <TableView
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        )}
      </main>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {showAddModal && (
        <AddProductModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddProduct}
        />
      )}
    </div>
  );
}

export default App;