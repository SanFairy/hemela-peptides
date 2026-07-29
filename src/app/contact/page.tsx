'use client';

import { useLanguage } from '@/lib/language';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Contact Us', '联系我们')}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            {t(
              'The website only displays a selection of products and certificates. For the full price list, please contact us.',
              '官网仅展示一部分产品和证书，如需查看完整价格列表，请联系我们。'
            )}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
