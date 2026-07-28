'use client';

import { useLanguage } from '@/lib/language';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { FaFlask, FaSearch } from 'react-icons/fa';
import { useState, useMemo } from 'react';

export default function ProductsPage() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('category') || 'all';
    }
    return 'all';
  });

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = !search || 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.descriptionZh.includes(search) ||
        p.cas.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Products', '产品中心')}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            {t(
              'Browse our complete catalog of high-purity research peptides and cosmetic peptides. All products backed by full analytical documentation.',
              '浏览我们完整的高纯度研究肽和美容肽产品目录。所有产品均附带完整的分析文档。'
            )}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                }`}
              >
                {t('All Products', '全部产品')}
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                  }`}
                >
                  {language === 'zh' ? cat.nameZh : cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('Search products...', '搜索产品...')}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FaFlask className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500 mb-2">
                {t('No products found', '未找到产品')}
              </h3>
              <p className="text-gray-400">
                {t('Try adjusting your search or filter.', '请尝试调整搜索或筛选条件。')}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
