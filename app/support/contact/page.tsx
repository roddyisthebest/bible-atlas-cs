"use client";

import { Home, Send } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";
import axios from "axios";

const REPORT_TYPES = {
  BUG_REPORT: 'BUG_REPORT',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  UI_UX_ISSUE: 'UI_UX_ISSUE',
  PERFORMANCE_ISSUE: 'PERFORMANCE_ISSUE',
  DATA_ERROR: 'DATA_ERROR',
  LOGIN_ISSUE: 'LOGIN_ISSUE',
  SEARCH_ISSUE: 'SEARCH_ISSUE',
  MAP_ISSUE: 'MAP_ISSUE',
  GENERAL_FEEDBACK: 'GENERAL_FEEDBACK',
  OTHER: 'OTHER',
};

export default function ContactPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const [type, setType] = useState(REPORT_TYPES.GENERAL_FEEDBACK);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('/api/report', 
        { type, comment },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );

      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
        setComment('');
      }
    } catch (error: any) {
      console.error('Failed to submit report:', error);
      
      if (error.code === 'ECONNABORTED') {
        setError(language === 'ko' 
          ? '요청 시간이 초과되었습니다. 다시 시도해주세요.' 
          : 'Request timeout. Please try again.'
        );
      } else if (error.response) {
        setError(`Server error: ${error.response.status} ${error.response.statusText}`);
      } else if (error.request) {
        setError(language === 'ko' 
          ? '서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.' 
          : 'Cannot connect to server. Please check your network connection.'
        );
      } else {
        setError(language === 'ko' 
          ? '예상치 못한 오류가 발생했습니다.' 
          : 'An unexpected error occurred.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
        <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-light mb-4 text-gray-900">
            {language === 'ko' ? '전송 완료' : 'Sent Successfully'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'ko' ? '문의사항이 성공적으로 전송되었습니다. 감사합니다!' : 'Your inquiry has been sent successfully. Thank you!'}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-gray-900 hover:text-gray-700 underline"
          >
            {language === 'ko' ? '다른 문의 보내기' : 'Send Another Inquiry'}
          </button>
        </div>
      </div>
    );
  }

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
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ko' ? '문의 유형' : 'Report Type'}
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value={REPORT_TYPES.GENERAL_FEEDBACK}>{language === 'ko' ? '일반 피드백' : 'General Feedback'}</option>
              <option value={REPORT_TYPES.BUG_REPORT}>{language === 'ko' ? '버그 신고' : 'Bug Report'}</option>
              <option value={REPORT_TYPES.FEATURE_REQUEST}>{language === 'ko' ? '기능 요청' : 'Feature Request'}</option>
              <option value={REPORT_TYPES.UI_UX_ISSUE}>{language === 'ko' ? 'UI/UX 문제' : 'UI/UX Issue'}</option>
              <option value={REPORT_TYPES.PERFORMANCE_ISSUE}>{language === 'ko' ? '성능 문제' : 'Performance Issue'}</option>
              <option value={REPORT_TYPES.DATA_ERROR}>{language === 'ko' ? '데이터 오류' : 'Data Error'}</option>
              <option value={REPORT_TYPES.SEARCH_ISSUE}>{language === 'ko' ? '검색 문제' : 'Search Issue'}</option>
              <option value={REPORT_TYPES.MAP_ISSUE}>{language === 'ko' ? '지도 문제' : 'Map Issue'}</option>
              <option value={REPORT_TYPES.OTHER}>{language === 'ko' ? '기타' : 'Other'}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ko' ? '상세 내용' : 'Details'}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={6}
              placeholder={language === 'ko' ? '문의 내용을 자세히 작성해주세요...' : 'Please describe your inquiry in detail...'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !comment.trim()}
            className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="h-4 w-4" />
            {isSubmitting 
              ? (language === 'ko' ? '전송 중...' : 'Sending...') 
              : (language === 'ko' ? '문의 보내기' : 'Send Inquiry')
            }
          </button>
        </form>
      </div>
    </div>
  );
}