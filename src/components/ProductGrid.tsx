import React, { useState } from 'react';
import { Product, Category } from '../types';
import { Eye, Star, Edit2, Save, X, Plus } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  const [showAllInfo, setShowAllInfo] = useState(true); // 默认始终显示信息
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});
  const [showInfoToggle, setShowInfoToggle] = useState(true); // 控制信息显示模式的状态
  
  const [topCategories, setTopCategories] = useState<Category[]>([
    { id: '1', name: '高端系列', type: 'top' },
    { id: '2', name: '专业系列', type: 'top' },
    { id: '3', name: '入门系列', type: 'top' }
  ]);
  
  const [sideCategories, setSideCategories] = useState<Category[]>([
    { id: '1', name: '商用显示', type: 'side' },
    { id: '2', name: '教育显示', type: 'side' },
    { id: '3', name: '创意显示', type: 'side' }
  ]);

  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleEdit = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setEditingId(product.id);
    setEditForm(product);
  };

  const handleSave = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setEditingId(null);
    setEditForm({});
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(null);
    setEditForm({});
  };

  const handleCategoryEdit = (category: Category) => {
    setEditingCategory(category.id);
    setNewCategoryName(category.name);
  };

  const handleCategorySave = (category: Category) => {
    if (category.type === 'top') {
      setTopCategories(topCategories.map(c => 
        c.id === category.id ? { ...c, name: newCategoryName } : c
      ));
    } else {
      setSideCategories(sideCategories.map(c => 
        c.id === category.id ? { ...c, name: newCategoryName } : c
      ));
    }
    setEditingCategory(null);
    setNewCategoryName('');
  };

  // 切换信息显示模式
  const toggleInfoDisplay = () => {
    setShowInfoToggle(!showInfoToggle);
    setShowAllInfo(!showInfoToggle);
  };

  // 使用视口高度计算九宫格的大小，确保是正方形
  const calculateGridSize = () => {
    // 计算可用高度（减去上方栏目和间距）
    const availableHeight = 'calc(100vh - 200px)';
    // 返回一个正方形的尺寸，使用宽高比1:1
    return availableHeight;
  };
  
  // 计算每个产品的尺寸，确保是正方形
  const gridSize = calculateGridSize();
  
  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleInfoDisplay}
          className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center gap-1.5"
        >
          <Eye size={16} />
          {showInfoToggle ? '悬停显示' : '始终显示'}
        </button>
      </div>
      
      <div className="grid grid-cols-[auto_1fr] gap-4">
        {/* 左侧栏目 */}
        <div className="flex flex-col">
          {/* 左上角空白区域 */}
          <div className="h-16 mb-4"></div>
          
          {/* 左侧栏目 - 竖向排列 */}
          <div className="flex flex-col gap-4">
            {sideCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between border-l-4 border-red-500"
                style={{ height: `calc(${gridSize} / 3 - 16px)`, minHeight: '120px' }}
              >
                <div className="flex flex-col h-full justify-center w-full">
                  {editingCategory === category.id ? (
                    <div className="flex gap-1 w-full">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border rounded"
                      />
                      <button
                        onClick={() => handleCategorySave(category)}
                        className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        <Save size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-medium truncate">{category.name}</span>
                      <button
                        onClick={() => handleCategoryEdit(category)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Edit2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* 上方栏目 - 与图片宽度一致 */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {topCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between border-t-4 border-blue-500 h-16"
              >
                {editingCategory === category.id ? (
                  <div className="flex gap-1 w-full">
                    <input
                      type="text"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="flex-1 px-2 py-1 text-sm border rounded"
                    />
                    <button
                      onClick={() => handleCategorySave(category)}
                      className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      <Save size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-medium truncate">{category.name}</span>
                    <button
                      onClick={() => handleCategoryEdit(category)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 产品九宫格 - 确保是正方形 */}
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group aspect-square"
                onClick={() => onProductClick(product)}
                style={{ width: `calc(${gridSize} / 3 - 16px)` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent ${showAllInfo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold truncate">{product.name}</h3>
                      
                      <div className="flex gap-2">
                        {editingId === product.id ? (
                          <>
                            <button
                              onClick={(e) => handleSave(e, product)}
                              className="p-1.5 rounded-full bg-green-500 hover:bg-green-600"
                            >
                              <Save size={16} className="text-white" />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="p-1.5 rounded-full bg-red-500 hover:bg-red-600"
                            >
                              <X size={16} className="text-white" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={(e) => handleEdit(e, product)}
                            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30"
                          >
                            <Edit2 size={16} className="text-white" />
                          </button>
                        )}
                      </div>
                    </div>

                    {editingId === product.id ? (
                      <div className="mb-2">
                        <input
                          type="text"
                          value={editForm.image || ''}
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                          className="w-full px-2 py-1 text-black rounded text-sm"
                          onClick={(e) => e.stopPropagation()}
                          placeholder="输入图片URL"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-xs bg-white/20">
                            {product.level}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs bg-white/20">
                            {product.type}
                          </span>
                          {product.tag && (
                            <span className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${
                              product.tag === '引领产品' ? 'bg-yellow-500/80' : 'bg-green-500/80'
                            }`}>
                              <Star size={12} />
                              {product.tag}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-200 line-clamp-2">
                          {product.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};