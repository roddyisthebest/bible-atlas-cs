"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Book,
  MapPin,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SupportPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const langParam = searchParams.get('lang') as 'ko' | 'en';
    if (langParam && (langParam === 'ko' || langParam === 'en')) {
      setLanguage(langParam);
    }
  }, [searchParams, setLanguage]);

  const handleLanguageChange = (newLang: 'ko' | 'en') => {
    setLanguage(newLang);
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`/support?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-8 flex justify-between items-center">
        <Link href={`/?lang=${language}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <Home className="h-4 w-4" />
          {t('backToHome')}
        </Link>
        <LanguageToggle currentLang={language} onLanguageChange={handleLanguageChange} />
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-light mb-6 text-gray-900">{t('supportCenter')}</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          {t('supportDescription')}
        </p>
      </section>

      {/* Support Options */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">
                {t('faq')}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {t('faqDescription')}
              </p>
              <Link href={`/support/faq?lang=${language}`}>
                <Button className="px-6 py-2 bg-gray-900 hover:bg-gray-800">
                  {t('viewFaq')}
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">
                {t('contact')}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {t('contactDescription')}
              </p>
              <Link href={`/support/contact?lang=${language}`}>
                <Button className="px-6 py-2 bg-gray-900 hover:bg-gray-800">
                  {t('contactWrite')}
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Book className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">
                {t('guide')}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {t('guideDescription')}
              </p>
              <Link href={`/support/guide?lang=${language}`}>
                <Button className="px-6 py-2 bg-gray-900 hover:bg-gray-800">
                  {t('viewGuide')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-12 text-gray-900">
              {t('contactInfo')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Mail className="h-6 w-6 mx-auto mb-3 text-gray-600" />
                <p className="text-gray-500 text-sm">jessebae0123@gmail.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-6 w-6 mx-auto mb-3 text-gray-600" />
                <p className="text-gray-500 text-sm">{t('businessHours')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
