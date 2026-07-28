'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo, products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import { FaFlask, FaAward, FaShippingFast, FaUsers, FaChevronRight, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  const { t, language } = useLanguage();
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const stats = [
    { icon: FaFlask, value: '6+', label: t('Years Experience', '年经验'), labelZh: '年经验' },
    { icon: FaShippingFast, value: '50+', label: t('Countries Served', '服务国家'), labelZh: '服务国家' },
    { icon: FaAward, value: '99%', label: t('Purity Standard', '纯度标准'), labelZh: '纯度标准' },
    { icon: FaUsers, value: '500+', label: t('Happy Clients', '满意客户'), labelZh: '满意客户' },
  ];

  const advantages = [
    {
      title: t('Professional Manufacturing', '专业制造'),
      desc: t(
        'State-of-the-art peptide synthesis facilities with rigorous quality control and HPLC/MS verification for every batch.',
        '先进的肽合成设施，每批次都经过严格的质量控制和HPLC/MS验证。'
      ),
    },
    {
      title: t('Global Logistics', '全球物流'),
      desc: t(
        'Reliable worldwide shipping with proper packaging and cold chain logistics to ensure product integrity.',
        '可靠的全球配送，专业的包装和冷链物流确保产品完整性。'
      ),
    },
    {
      title: t('Technical Support', '技术支持'),
      desc: t(
        'Expert technical team providing comprehensive product documentation, COA, and research support.',
        '专业技术团队提供完整的产品文档、COA和研究支持。'
      ),
    },
    {
      title: t('Custom Synthesis', '定制合成'),
      desc: t(
        'Flexible custom peptide synthesis services tailored to your specific research requirements and specifications.',
        '灵活的定制肽合成服务，根据您的特定研究需求定制。'
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
                <FaFlask className="text-primary-300" />
                {t('Professional Peptide Manufacturer', '专业肽制造商')}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t(
                  'Premium Peptide Solutions for Research & Development',
                  '高端肽类研发解决方案'
                )}
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
                {t(
                  'Hemela Peptides delivers high-purity research peptides, cosmetic peptides, and custom synthesis services to clients worldwide. Quality you can trust, results you can count on.',
                  '赫美拉肽业为全球客户提供高纯度研究肽、美容肽和定制合成服务。值得信赖的品质，值得依赖的结果。'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-white">
                  {t('Explore Products', '探索产品')}
                  <FaArrowRight />
                </Link>
                <Link href="/contact" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  {t('Contact Us', '联系我们')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden animate-float">
                <Image
                  src="/images/company-hero.jpg"
                  alt="Hemela Peptides Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow">
                <stat.icon className="text-3xl text-primary-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
              <Image
                src="/images/company-about.jpg"
                alt="Hemela Peptides Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mb-4">
                <FaFlask />
                {t('About Hemela Peptides', '关于赫美拉肽业')}
              </div>
              <h2 className="section-title">
                {t(
                  'Your Trusted Partner in Peptide Research',
                  '您值得信赖的肽研究合作伙伴'
                )}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(companyInfo.description, companyInfo.descriptionZh)}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  t('ISO 9001 certified quality management', 'ISO 9001认证质量管理'),
                  t('Full analytical support (HPLC, MS, COA)', '完整分析支持（HPLC、MS、COA）'),
                  t('Competitive pricing with no compromise on quality', '有竞争力的价格，不妥协的品质'),
                  t('Dedicated customer support team', '专属客户支持团队'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                {t('Learn More', '了解更多')}
                <FaArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <div key={i} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                    <FaCheckCircle className="text-primary-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{adv.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('Featured Products', '精选产品')}
            </h2>
            <p className="section-subtitle mx-auto">
              {t(
                'Discover our high-purity peptide products trusted by researchers worldwide.',
                '探索我们备受全球研究人员信赖的高纯度肽产品。'
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              {t('View All Products', '查看全部产品')}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('Product Categories', '产品分类')}
            </h2>
            <p className="section-subtitle mx-auto">
              {t(
                'Comprehensive range of peptide products for diverse research applications.',
                '全面的肽类产品系列，满足多样化的研究应用需求。'
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaFlask className="text-2xl text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {language === 'zh' ? cat.nameZh : cat.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {language === 'zh' ? cat.descriptionZh : cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('Ready to Start Your Research?', '准备开始您的研究？')}
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              'Contact us today to discuss your peptide requirements. We offer competitive pricing, fast shipping, and dedicated technical support.',
              '立即联系我们讨论您的肽需求。我们提供有竞争力的价格、快速的配送和专属技术支持。'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white text-lg">
              {t('Get a Quote', '获取报价')}
            </Link>
            <Link href="mailto:Jenny@hkhemela.com" className="border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-lg">
              {t('Email Us', '发送邮件')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
