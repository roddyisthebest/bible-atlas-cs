"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Star, Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation, translations } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import {
  regionTypeKeys,
  bibleBookKeys,
  getRegionTypeName,
  getBibleBookName,
} from "@/lib/regionTypes";

export default function GuidePage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-8 flex justify-between items-center">
        <Link
          href="/support"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <Home className="h-4 w-4" />
          {t("backToSupport")}
        </Link>
        <LanguageToggle currentLang={language} onLanguageChange={setLanguage} />
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-light mb-16 text-center text-gray-900">
          {t("guideTitle")}
        </h1>

        <Tabs defaultValue="search" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger
              value="search"
              className="data-[state=active]:bg-white"
            >
              {t("searchRegions")}
            </TabsTrigger>
            <TabsTrigger
              value="location"
              className="data-[state=active]:bg-white"
            >
              {t("locationInfo")}
            </TabsTrigger>
            <TabsTrigger value="tips" className="data-[state=active]:bg-white">
              {t("usageTips")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-medium text-gray-900">
                  {t("basicSearch")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("basicSearchDesc")}
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm text-gray-700">
                {t("searchExample")}
              </div>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("regionTypeSearch")}
              </h3>
              <p className="text-gray-600 mb-4">{t("regionTypeSearchDesc")}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs max-h-48 overflow-y-auto">
                {regionTypeKeys.map((key) => (
                  <span key={key} className="bg-gray-100 px-2 py-1 rounded">
                    {getRegionTypeName(key, language)}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("bibleBookSearch")}
              </h3>
              <p className="text-gray-600 mb-4">{t("bibleBookSearchDesc")}</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs max-h-48 overflow-y-auto">
                {bibleBookKeys.map((key) => (
                  <span key={key} className="bg-gray-100 px-2 py-1 rounded">
                    {getBibleBookName(key, language)}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-medium text-gray-900">
                  {t("dataSource")}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-medium mb-2">OpenBible.info</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t("openBibleDesc")}
                  </p>
                  <a
                    href="https://www.openbible.info/"
                    target="_blank"
                    className="text-sm text-gray-900 underline"
                  >
                    {t("dataSourceCheck")}
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-medium mb-2">
                    Gemini AI {language === "ko" ? "설명" : "Description"}
                  </h3>
                  <p className="text-sm text-gray-600">{t("geminiAiDesc")}</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("ancientModern")}
              </h3>
              <p className="text-gray-600 mb-4">{t("ancientModernDesc")}</p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                {t("ancientModernExample")}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("multipleCandidates")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("multipleCandidatesDesc")}
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded text-sm">
                <strong>{t("aiContentNotice")}</strong> {t("aiContentDesc")}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-medium text-gray-900">
                  {t("bibleStudy")}
                </h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                {(translations[language].bibleStudyTips as string[]).map(
                  (tip, index) => (
                    <li key={index}>• {tip}</li>
                  )
                )}
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("educationalUse")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(translations[language].educationalTips as string[]).map(
                  (tip, index) => (
                    <li key={index}>• {tip}</li>
                  )
                )}
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("personalResearch")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(translations[language].personalResearchTips as string[]).map(
                  (tip, index) => (
                    <li key={index}>• {tip}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t("advancedFeatures")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(translations[language].advancedTips as string[]).map(
                  (tip, index) => (
                    <li key={index}>• {tip}</li>
                  )
                )}
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">{t("needMoreHelp")}</p>
          <a
            href="/support/faq"
            className="text-gray-900 hover:text-gray-700 underline mr-6"
          >
            {t("viewFaq")}
          </a>
          <a
            href="/support/contact"
            className="text-gray-900 hover:text-gray-700 underline"
          >
            {t("contact")}
          </a>
        </div>
      </div>
    </div>
  );
}
