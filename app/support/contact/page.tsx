"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function ContactPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-center">
          <Link href="/support" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Home className="h-4 w-4" />
            {t("backToSupport")}
          </Link>
          <LanguageToggle currentLang={language} onLanguageChange={setLanguage} />
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-light mb-16 text-center text-gray-900">
          {t("contactTitle")}
        </h1>
        
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-light mb-4 text-gray-900">{t("contactComingSoonTitle")}</h2>
          <p className="text-gray-500 mb-8">{t("contactComingSoonDesc")}</p>
          <p className="text-sm text-gray-400">{t("urgentContact")}</p>
        </div>
      </div>
    </div>
  );
}