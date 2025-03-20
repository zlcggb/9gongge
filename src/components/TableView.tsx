import React, { useState } from 'react';
import { Product, ProductLevel, ProductType, ProductTag } from '../types';
import { Pencil, Trash2, Save, X } from 'lucide-react';

interface TableViewProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const TableView: React.FC<TableViewProps> = ({ products, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm(product);
  };

  const handleSave = () => {
    if (editForm.id) {
      onEdit(editForm as Product);
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              产品名称
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              产品图片
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              定位
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              高中低
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              行业
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === product.id ? (
                  <input
                    type="text"
                    value={editForm.name || ''}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  product.name
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === product.id ? (
                  <select
                    value={editForm.tag || ''}
                    onChange={(e) => setEditForm({ ...editForm, tag: e.target.value as ProductTag })}
                    className="border rounded px-2 py-1"
                  >
                    <option value="">无</option>
                    <option value="引领产品">引领产品</option>
                    <option value="阻击产品">阻击产品</option>
                  </select>
                ) : (
                  <span className={`px-2 py-1 rounded text-sm ${
                    product.tag === '引领产品' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {product.tag || '无'}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === product.id ? (
                  <select
                    value={editForm.level || ''}
                    onChange={(e) => setEditForm({ ...editForm, level: e.target.value as ProductLevel })}
                    className="border rounded px-2 py-1"
                  >
                    <option value="1-PL">1-PL</option>
                    <option value="2-ML">2-ML</option>
                    <option value="3-EL">3-EL</option>
                  </select>
                ) : (
                  product.level
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === product.id ? (
                  <select
                    value={editForm.type || ''}
                    onChange={(e) => setEditForm({ ...editForm, type: e.target.value as ProductType })}
                    className="border rounded px-2 py-1"
                  >
                    <option value="户内">户内</option>
                    <option value="模组">模组</option>
                    <option value="无行业">无行业</option>
                  </select>
                ) : (
                  product.type
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === product.id ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Save size={20} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};