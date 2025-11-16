"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Book, Search, Users, Globe, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="min-h-screen bg-white">
      {/* Language Toggle */}
      <div className="container mx-auto px-4 pt-8 flex justify-end">
        <LanguageToggle currentLang={language} onLanguageChange={setLanguage} />
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-12">
          <Image
            src="/icon.png"
            alt={t('appTitle')}
            width={80}
            height={80}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-6xl font-light mb-6 text-gray-900">
          {t('appTitle')}
        </h1>
        <p className="text-lg text-gray-500 mb-16 max-w-xl mx-auto leading-relaxed">
          {t('appDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <Button 
            disabled 
            className="w-full sm:w-auto px-8 py-3 text-base font-medium bg-gray-400 cursor-not-allowed"
          >
            {t('downloadAppComingSoon')}
          </Button>
          <Link href="/support" className="w-full sm:w-auto">
            <Button className="w-full px-8 py-3 text-base font-medium bg-gray-900 hover:bg-gray-800">
              {t('support')}
            </Button>
          </Link>
          <Link href="/terms" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full px-8 py-3 text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-50">
              {t('viewTerms')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">{t('accurateLocation')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('accurateLocationDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Book className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">{t('bibleVerses')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('bibleVersesDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">{t('currentLocation')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('currentLocationDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-light text-gray-900 mb-2">2,845</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">{t('biblicalRegions')}</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-2">3,000+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">{t('relatedVerses')}</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-2">98%</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">{t('averageAccuracy')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
