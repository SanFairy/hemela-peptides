'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import Link from 'next/link';
import { FaFlask, FaHandshake, FaAward, FaUsers, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: FaAward,
      title: t('Quality First', '质量第一'),
      desc: t(
        'Every batch undergoes rigorous HPLC and MS analysis, ensuring purity levels exceeding 99%. We never compromise on quality.',
        '每批次都经过严格的HPLC和MS分析，确保纯度超过99%。我们从不妥协品质。'
      ),
    },
    {
      icon: FaHandshake,
      title: t('Customer Commitment', '客户至上'),
      desc: t(
        'We build long-term partnerships through responsive service, transparent communication, and consistent product quality.',
        '我们通过响应迅速的服务、透明的沟通和始终如一的产品质量建立长期合作关系。'
      ),
    },
    {
      icon: FaFlask,
      title: t('Scientific Excellence', '科学卓越'),
      desc: t(
        'Our team combines deep peptide chemistry expertise with state-of-the-art synthesis technology to deliver exceptional results.',
        '我们的团队将深厚的肽化学专业知识与先进的合成技术相结合，提供卓越的结果。'
      ),
    },
    {
      icon: FaGlobe,
      title: t('Global Reach', '全球覆盖'),
      desc: t(
        'Serving research institutions and companies across 50+ countries with reliable logistics and regulatory compliance.',
        '以可靠的物流和合规性为50多个国家的研究机构和公司提供服务。'
      ),
    },
  ];

  const timeline = [
    { year: '2019', title: t('Company Founded', '公司成立'), desc: t('Hemela Peptides established in Hong Kong with a vision to provide premium peptide products.', '赫美拉肽业在香港成立，致力于提供优质肽产品。') },
    { year: '2020', title: t('Production Expansion', '生产扩张'), desc: t('Expanded synthesis capacity and established full analytical capabilities.', '扩大合成产能并建立完整的分析能力。') },
    { year: '2021', title: t('ISO 9001 Certified', 'ISO 9001认证'), desc: t('Achieved ISO 9001:2015 certification for quality management systems.', '获得ISO 9001:2015质量管理体系认证。') },
    { year: '2022', title: t('Global Expansion', '全球拓展'), desc: t('Expanded distribution to 30+ countries with dedicated international support.', '业务扩展至30多个国家，提供专属国际支持。') },
    { year: '2023', title: t('GMP Upgrade', 'GMP升级'), desc: t('Enhanced manufacturing capabilities with GMP-compliant processes.', '通过GMP合规流程提升制造能力。') },
    { year: '2024', title: t('Innovation Hub', '创新中心'), desc: t('Launched advanced custom synthesis program for complex peptide sequences.', '推出针对复杂肽序列的高级定制合成项目。') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('About Hemela Peptides', '关于赫美拉肽业')}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            {t(
              'Professional peptide manufacturer with 6+ years of expertise in peptide synthesis, quality control, and global distribution.',
              '拥有6年以上肽合成、质量控制和全球分销经验的专业肽制造商。'
            )}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                {t('Our Story', '我们的故事')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    'Founded in Hong Kong, Hemela Peptides has grown from a specialized peptide synthesis laboratory into a globally recognized peptide manufacturer and supplier. Our journey has been driven by a singular mission: to provide researchers and companies worldwide with the highest quality peptide products.',
                    '赫美拉肽业创立于香港，从一家专业的肽合成实验室发展成为全球公认的肽制造商和供应商。我们的旅程始终由一个使命驱动：为全球研究人员和公司提供最高质量的肽产品。'
                  )}
                </p>
                <p>
                  {t(
                    'With state-of-the-art synthesis facilities and rigorous quality control systems, we produce peptides that meet the most demanding research requirements. Every product undergoes comprehensive analytical verification including HPLC purity analysis and mass spectrometry confirmation.',
                    '凭借先进的合成设施和严格的质量控制体系，我们生产满足最苛刻研究需求的肽类产品。每个产品都经过全面的分析验证，包括HPLC纯度分析和质谱确认。'
                  )}
                </p>
                <p>
                  {t(
                    'Today, Hemela Peptides serves clients across more than 50 countries, supporting breakthrough research in metabolic science, cosmetic development, and pharmaceutical innovation.',
                    '如今，赫美拉肽业为50多个国家的客户提供服务，支持代谢科学、化妆品开发和制药创新的突破性研究。'
                  )}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-12">
                  <FaFlask className="text-8xl text-primary-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{companyInfo.name}</h3>
                  <p className="text-primary-600">{t('Premium Peptide Solutions', '高端肽解决方案')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Our Values', '我们的价值观')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
                <v.icon className="text-4xl text-primary-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Our Journey', '我们的历程')}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-0`}>
                  <div className="md:w-1/2 md:pr-12 md:text-right flex-1">
                    <div className="md:hidden mb-2">
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                    <div className="hidden md:block">
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.year}</span>
                      <h3 className="font-bold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 border-4 border-white mt-1.5" />
                  <div className="md:w-1/2 md:pl-12 flex-1">
                    <div className="md:hidden">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Partner with Hemela Peptides', '与赫美拉肽业合作')}
          </h2>
          <p className="text-primary-100 mb-8">
            {t(
              'Join 500+ researchers and companies who trust us for their peptide needs.',
              '加入信任我们满足肽需求的500多位研究人员和公司。'
            )}
          </p>
          <Link href="/contact" className="btn-white text-lg">
            {t('Contact Us Today', '立即联系我们')}
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
