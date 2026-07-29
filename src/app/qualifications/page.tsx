'use client';

import { useLanguage } from '@/lib/language';
import { certificates } from '@/data/products';
import Image from 'next/image';
import { FaAward, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

export default function QualificationsPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Qualifications & Certificates', '资质与证书')}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            {t(
              'Our commitment to quality is backed by rigorous certifications and comprehensive analytical documentation.',
              '我们对品质的承诺得到了严格的认证和全面的分析文档支持。'
            )}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Quality Standards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-primary-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">
                {t(
                  'Certified quality management system ensuring consistent product quality and continuous improvement.',
                  '认证的质量管理体系，确保产品质量的一致性和持续改进。'
                )}
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-2xl border border-secondary-100 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-3xl text-secondary-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t('GMP Compliant', 'GMP合规')}</h3>
              <p className="text-gray-600 text-sm">
                {t(
                  'Manufacturing processes following Good Manufacturing Practice guidelines for research-grade peptides.',
                  '生产过程遵循研究级肽类的优良制造规范指南。'
                )}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaFileAlt className="text-3xl text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{t('Full Documentation', '完整文档')}</h3>
              <p className="text-gray-600 text-sm">
                {t(
                  'Every product ships with Certificate of Analysis (COA), HPLC chromatogram, and MS spectrum.',
                  '每个产品均附带分析证书（COA）、HPLC色谱图和MS图谱。'
                )}
              </p>
            </div>
          </div>

          {/* Certificates Grid */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('Our Certificates', '我们的证书')}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {cert.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Process */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('Our Quality Control Process', '我们的质量控制流程')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: t('Raw Material', '原料检验'),
                  desc: t('All raw materials are sourced from certified suppliers and verified before synthesis.', '所有原料均来自认证供应商，合成前进行验证。'),
                },
                {
                  step: '02',
                  title: t('Synthesis', '合成纯化'),
                  desc: t('Advanced solid-phase peptide synthesis with multi-step purification process.', '采用先进固相肽合成和多步纯化工艺。'),
                },
                {
                  step: '03',
                  title: t('HPLC Analysis', 'HPLC分析'),
                  desc: t('High-performance liquid chromatography for purity verification exceeding 99%.', '高效液相色谱分析，纯度验证超过99%。'),
                },
                {
                  step: '04',
                  title: t('MS Confirmation', 'MS确认'),
                  desc: t('Mass spectrometry confirmation of molecular weight and structural integrity.', '质谱确认分子量和结构完整性。'),
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all">
                    <span className="text-3xl font-bold text-primary-200">{item.step}</span>
                    <h3 className="font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
