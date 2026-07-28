'use client';

import React from 'react';
import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import { FaFlask, FaHandshake, FaAward, FaUsers, FaGlobe, FaShippingFast } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = [
    { href: '/', label: t('Home', '首页') },
    { href: '/about', label: t('About Us', '关于我们') },
    { href: '/products', label: t('Products', '产品中心') },
    { href: '/qualifications', label: t('Qualifications', '资质证书') },
    { href: '/contact', label: t('Contact', '联系我们') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar */}
      <div className="bg-primary-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <FaFlask className="text-primary-300" />
              {t('Professional Peptide Manufacturer', '专业肽制造商')}
            </span>
            <span className="hidden md:flex items-center gap-1">
              <FaGlobe className="text-primary-300" />
              {t('Global Shipping', '全球配送')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-3 py-1 rounded-full border border-primary-400 text-primary-200 hover:bg-primary-800 transition-colors text-xs font-medium"
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              H
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">{companyInfo.name}</h1>
              <p className="text-[10px] text-gray-500 leading-tight">{companyInfo.nameFull}</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
