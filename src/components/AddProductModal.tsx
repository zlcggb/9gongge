import React, { useState } from 'react';
import { Product, ProductLevel, ProductType, ProductTag } from '../types';
import { X } from 'lucide-react';

interface AddProductModalProps {
  onClose: () => void;
  onAdd: (product: Omit<Product, 'id'>) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onAdd }) => {
  const [form, setForm] = useState<Omit<Product, 'id'>>({
    name: '',
    image: '',
    category: '',
    level: '1-PL',
    type: '户内',
    description: '',
    specifications: {},
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">添加新产品</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">产品名称</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">图片 URL</label>
            <input
              type="url"
              required
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">级别</label>
              <select
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value as ProductLevel })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="1-PL">1-PL</option>
                <option value="2-ML">2-ML</option>
                <option value="3-EL">3-EL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">类型</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as ProductType })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="户内">户内</option>
                <option value="模组">模组</option>
                <option value="无行业">无行业</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">定位</label>
            <select
              value={form.tag || ''}
              onChange={(e) => setForm({ ...form, tag: e.target.value as ProductTag })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">无</option>
              <option value="引领产品">引领产品</option>
              <option value="阻击产品">阻击产品</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">描述</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              添加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};