"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function LanguageHandler() {
  const { setLanguage } = useLanguage();
  const searchParams = useSearchParams();

  useEffect(() => {
    const langParam = searchParams.get('lang') as 'ko' | 'en';
    if (langParam && (langParam === 'ko' || langParam === 'en')) {
      setLanguage(langParam);
    }
  }, [searchParams, setLanguage]);

  return null;
}

export default function LanguageProvider() {
  return (
    <Suspense fallback={null}>
      <LanguageHandler />
    </Suspense>
  );
}