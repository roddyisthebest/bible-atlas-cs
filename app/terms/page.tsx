"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

import LanguageProvider from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const router = useRouter();

  const handleLanguageChange = (newLang: 'ko' | 'en') => {
    setLanguage(newLang);
    router.push(`/terms?lang=${newLang}`);
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
          {t("termsTitle")}
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-8">
            {t("termsIntro")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">1. {t("serviceOverview")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("serviceOverviewDesc")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">2. {t("dataSourcesLicenses")}</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-900">2.1 {t("openBibleData")}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t("openBibleDataDesc")}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-900">2.2 {t("osmData")}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t("osmDataDesc")}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-900">2.3 {t("esvText")}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t("esvTextDesc")}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">3. {t("permittedUse")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("permittedUseDesc")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">4. {t("prohibitedActs")}</h2>
            <p className="text-gray-600 leading-relaxed mb-3">{t("prohibitedActsDesc")}</p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
              {t("prohibitedList").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">5. {t("disclaimer")}</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              {t("disclaimerList").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">6. {t("serviceChanges")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("serviceChangesDesc")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">7. {t("privacyProcessing")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyProcessingDesc")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4 text-gray-900">8. {t("termsChanges")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("termsChangesDesc")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}