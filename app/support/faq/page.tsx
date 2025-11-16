"use client";

import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

const faqs = {
  ko: [
    {
      question: "Bible Atlas는 무엇인가요?",
      answer: "성경에 등장하는 지역과 장소를 지도로 확인할 수 있는 앱입니다.",
    },
    {
      question: "지도는 어떻게 사용하나요?",
      answer:
        "검색창에 지명을 입력하거나 지도를 직접 탐색하여 성경 속 장소를 찾을 수 있습니다.",
    },
    {
      question: "오프라인에서도 사용할 수 있나요?",
      answer:
        "인터넷 연결이 필요합니다. 지도 데이터와 성경 정보를 실시간으로 불러오기 때문입니다.",
    },
    {
      question: "어떤 성경 번역본을 지원하나요?",
      answer: "개역개정, 새번역, NIV 등 주요 번역본을 지원합니다.",
    },
    {
      question: "계정 없이도 사용할 수 있나요?",
      answer:
        "기본 기능은 계정 없이 사용 가능하며, 북마크 등 개인화 기능은 계정이 필요합니다.",
    },
    {
      question: "지역1, 지역2로 표시되는 이유는 무엇인가요?",
      answer:
        "같은 지명이지만 학자들 간에 위치 추정이 다른 경우입니다. 고고학적 발견이나 연구에 따라 여러 후보지가 있을 때 구분하여 표시합니다.",
    },
    {
      question: "고대와 현대 표시는 무엇을 의미하나요?",
      answer:
        "고대는 성경에 기록된 당시의 추정 위치이고, 현대는 현재 그 지역으로 추정되는 현대 지명입니다. 시대에 따른 지명 변화를 구분하여 보여줍니다.",
    },
  ],
  en: [
    {
      question: "What is Bible Atlas?",
      answer:
        "It's an app that allows you to view biblical locations and places on a map.",
    },
    {
      question: "How do I use the map?",
      answer:
        "You can search for biblical places by entering place names in the search bar or by directly exploring the map.",
    },
    {
      question: "Can I use it offline?",
      answer:
        "An internet connection is required. Map data and biblical information are loaded in real-time.",
    },
    {
      question: "Which Bible translations are supported?",
      answer:
        "We support major translations including Korean Revised Version, New Translation, NIV, and others.",
    },
    {
      question: "Can I use it without an account?",
      answer:
        "Basic features are available without an account, but personalized features like bookmarks require an account.",
    },
    {
      question: "Why are locations displayed as Region1, Region2?",
      answer:
        "When scholars have different location estimates for the same place name, we distinguish and display all candidate sites based on archaeological discoveries and research.",
    },
    {
      question: "What do Ancient and Modern designations mean?",
      answer:
        "Ancient refers to the estimated location as recorded in biblical times, while Modern refers to the current place name estimated for that region. We distinguish place name changes over time.",
    },
  ],
};

export default function FAQPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const currentFaqs = faqs[language] || faqs.ko;

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
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-light mb-16 text-center text-gray-900">
          {t("faqTitle")}
        </h1>

        <div className="space-y-6">
          {currentFaqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-100 pb-6"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">{t("needMoreHelp")}</p>
          <Link
            href="/support/contact"
            className="text-gray-900 hover:text-gray-700 underline"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}
