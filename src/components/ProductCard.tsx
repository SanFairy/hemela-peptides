'use client';

import { useLanguage } from '@/lib/language';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const ProductCard = ({ product: p }: { product: typeof products[0] }) => {
  const { t, language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/products/${p.id}`}
      className="group bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col"
    >
      <div className="h-64 bg-white flex items-center justify-center relative overflow-hidden p-2">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        {imgError ? (
          <span className="text-6xl opacity-30">🧬</span>
        ) : (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImgError(true)}
          />
        )}
        {p.featured && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
            {t('Featured', '精选')}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
          {p.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          CAS: {p.cas} | {t('Purity', '纯度')}: {p.purity}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
          {language === 'zh' ? p.descriptionZh : p.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700">
          {t('View Details', '查看详情')}
          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
