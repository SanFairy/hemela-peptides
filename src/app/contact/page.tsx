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
              'Have questions about our products or need a custom quote? Our team is here to help.',
              '对我们的产品有疑问或需要定制报价？我们的团队随时为您服务。'
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
