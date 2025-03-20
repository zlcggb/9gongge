export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  level: string;
  type: string;
  tag?: string;
  description: string;
  specifications: {
    [key: string]: string;
  };
}

export type ProductLevel = '1-PL' | '2-ML' | '3-EL';
export type ProductType = '户内' | '模组' | '无行业';
export type ProductTag = '引领产品' | '阻击产品' | null;

export interface Category {
  id: string;
  name: string;
  type: 'top' | 'side';
}