"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import LanguageProvider from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const router = useRouter();

  const handleLanguageChange = (newLang: 'ko' | 'en') => {
    setLanguage(newLang);
    router.push(`/privacy?lang=${newLang}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <LanguageProvider />
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-center">
          <Link href={`/?lang=${language}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Home className="h-4 w-4" />
            {t("backToHome")}
          </Link>
          <LanguageToggle currentLang={language} onLanguageChange={handleLanguageChange} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-light mb-16 text-center text-gray-900">
          {t("privacyTitle")}
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-8">
            {t("privacyLastUpdated")}
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {t("privacyIntro")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">1. {t("privacyInfoCollect")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("privacyInfoCollectDesc")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
              <li>{t("privacyName")}</li>
              <li>{t("privacyEmail")}</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("privacyInfoUse")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyNoSensitive")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">2. {t("privacyHowUse")}</h2>
            <p className="text-gray-600 leading-relaxed mb-3">{t("privacyHowUseDesc")}</p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
              <li>{t("privacyIdentify")}</li>
              <li>{t("privacyFavorites")}</li>
              <li>{t("privacyNotes")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">3. {t("privacyDataSharing")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("privacyNoSharing")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPayments")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">4. {t("privacyDataRetention")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("privacyRetentionDesc")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyDeletion")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">5. {t("privacyContact")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("privacyContactDesc")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Email:</strong> jessebae0123@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}