'use client';

import { useLanguage } from '@/lib/language';
import { products } from '@/data/products';
import Link from 'next/link';
import { FaFlask, FaArrowLeft, FaCheckCircle, FaEnvelope, FaFileAlt, FaVial, FaWeight } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function ProductDetailPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('Product Not Found', '产品未找到')}
        </h1>
        <Link href="/products" className="btn-primary inline-flex">
          <FaArrowLeft />
          {t('Back to Products', '返回产品中心')}
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">{t('Home', '首页')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary-600">{t('Products', '产品中心')}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center aspect-square relative overflow-hidden">
              <FaFlask className="text-9xl text-primary-300" />
              {product.featured && (
                <span className="absolute top-6 left-6 bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {t('Featured Product', '精选产品')}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                {language === 'zh' ? product.descriptionZh : product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaFileAlt className="text-sm" />
                    <span className="text-xs font-semibold uppercase">{t('CAS Number', 'CAS编号')}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-900">{product.cas}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaVial className="text-sm" />
                    <span className="text-xs font-semibold uppercase">{t('Purity', '纯度')}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-900">{product.purity}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaWeight className="text-sm" />
                    <span className="text-xs font-semibold uppercase">{t('Molecular Weight', '分子量')}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-900">{product.molecularWeight}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaFlask className="text-sm" />
                    <span className="text-xs font-semibold uppercase">{t('Formula', '分子式')}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-900">{product.molecularFormula}</p>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">{t('Applications', '应用领域')}</h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'zh' ? product.applicationsZh : product.applications).map((app, i) => (
                    <span key={i} className="bg-primary-50 text-primary-700 text-sm px-3 py-1.5 rounded-full border border-primary-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href={`/contact?product=${product.name}`} className="btn-primary">
                  <FaEnvelope />
                  {t('Inquire About This Product', '咨询该产品')}
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t('Related Products', '相关产品')}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/products/${rp.id}`}
                    className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all"
                  >
                    <FaFlask className="text-4xl text-primary-300 mb-4 group-hover:text-primary-500 transition-colors" />
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t('Purity', '纯度')}: {rp.purity} | CAS: {rp.cas}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
