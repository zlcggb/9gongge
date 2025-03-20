import React from 'react';
import { Product } from '../types';
import { X, Monitor, Zap, Maximize2 } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="relative h-64 sm:h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          {product.tag && (
            <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white ${
              product.tag === '引领产品' ? 'bg-yellow-500' : 'bg-green-500'
            }`}>
              {product.tag}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                product.level === '1-PL' ? 'bg-blue-100 text-blue-800' :
                product.level === '2-ML' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {product.level}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                product.type === '户内' ? 'bg-red-100 text-red-800' :
                product.type === '模组' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {product.type}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                  {key === '显示尺寸' ? <Maximize2 size={20} /> :
                   key === '亮度' ? <Zap size={20} /> :
                   <Monitor size={20} />}
                  {key}
                </div>
                <div className="text-lg font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};