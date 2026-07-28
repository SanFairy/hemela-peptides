'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

const ContactForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 bg-green-50 rounded-2xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaPaperPlane className="text-green-600 text-3xl" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          {t('Thank You!', '感谢您！')}
        </h3>
        <p className="text-green-600">
          {t(
            'Your message has been sent. We will get back to you within 24 hours.',
            '您的消息已发送。我们将在24小时内回复您。'
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Info */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">{t('Get in Touch', '联系我们')}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-primary-300" />
              <div>
                <p className="text-sm font-semibold">{t('Email', '邮箱')}</p>
                <a href={`mailto:${companyInfo.email}`} className="text-primary-200 text-sm hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 text-primary-300" />
              <div>
                <p className="text-sm font-semibold">{t('Phone', '电话')}</p>
                <p className="text-primary-200 text-sm">{companyInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaWhatsapp className="mt-1 text-primary-300" />
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <p className="text-primary-200 text-sm">{companyInfo.whatsapp}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-primary-300" />
              <div>
                <p className="text-sm font-semibold">{t('Address', '地址')}</p>
                <p className="text-primary-200 text-sm">{t(companyInfo.address, companyInfo.addressZh)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="mt-1 text-primary-300" />
              <div>
                <p className="text-sm font-semibold">{t('Business Hours', '工作时间')}</p>
                <p className="text-primary-200 text-sm">{t('Mon-Fri: 9:00-18:00 (HKT)', '周一至周五：9:00-18:00（香港时间）')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {t('Send Us a Message', '发送消息')}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {t(
              'Fill out the form below and our team will respond promptly.',
              '填写以下表格，我们的团队将尽快回复。'
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('Full Name', '姓名')} *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm"
                placeholder={t('Your name', '您的姓名')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('Company / Institution', '公司/机构')}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm"
                placeholder={t('Company name', '公司名称')}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('Email', '邮箱')} *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('Phone / WhatsApp', '电话/WhatsApp')}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm"
                placeholder="+XX XXX XXX XXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('Subject', '主题')} *
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm bg-white"
            >
              <option value="">{t('Select a subject', '请选择主题')}</option>
              <option value="product">{t('Product Inquiry', '产品咨询')}</option>
              <option value="custom">{t('Custom Synthesis', '定制合成')}</option>
              <option value="quotation">{t('Request Quotation', '请求报价')}</option>
              <option value="partnership">{t('Partnership', '合作')}</option>
              <option value="other">{t('Other', '其他')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('Message', '消息')} *
            </label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm resize-none"
              placeholder={t('Please describe your inquiry in detail...', '请详细描述您的咨询...')}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary-500/25"
          >
            {t('Send Message', '发送消息')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
