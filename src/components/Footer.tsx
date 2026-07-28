'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <div>
                <h3 className="text-white font-bold">{companyInfo.name}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t(
                'Professional peptide manufacturer and supplier. High-purity research peptides for global clients.',
                '专业肽制造商和供应商。为全球客户提供高纯度研究肽。'
              )}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Quick Links', '快速链接')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">{t('Home', '首页')}</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">{t('About Us', '关于我们')}</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">{t('Products', '产品中心')}</Link></li>
              <li><Link href="/qualifications" className="hover:text-primary-400 transition-colors">{t('Qualifications', '资质证书')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">{t('Contact', '联系我们')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Product Categories', '产品分类')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=glp-1" className="hover:text-primary-400 transition-colors">GLP-1 Peptides</Link></li>
              <li><Link href="/products?category=cosmetic" className="hover:text-primary-400 transition-colors">Cosmetic Peptides</Link></li>
              <li><Link href="/products?category=repair" className="hover:text-primary-400 transition-colors">Repair & Recovery Peptides</Link></li>
              <li><Link href="/products?category=metabolic" className="hover:text-primary-400 transition-colors">Metabolic Peptides</Link></li>
              <li><Link href="/products?category=other" className="hover:text-primary-400 transition-colors">Custom Synthesis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Contact Us', '联系我们')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-primary-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="mt-1 text-primary-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaWhatsapp className="mt-1 text-primary-400 shrink-0" />
                <span>{companyInfo.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-primary-400 shrink-0" />
                <span>Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. {t('All rights reserved.', '版权所有。')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
