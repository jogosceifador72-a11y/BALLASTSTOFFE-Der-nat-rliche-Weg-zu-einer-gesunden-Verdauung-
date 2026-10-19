/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutProduct } from './components/AboutProduct';
import { ProblemSolution } from './components/ProblemSolution';
import { FiberCalculator } from './components/FiberCalculator';
import { BookContents } from './components/BookContents';
import { TargetAudience } from './components/TargetAudience';
import { GuaranteeAndSecurity } from './components/GuaranteeAndSecurity';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PurchaseNotifications } from './components/PurchaseNotifications';
import { MobileStickyCta } from './components/MobileStickyCta';
import { PreviewModal } from './components/PreviewModal';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-stone-800 font-sans selection:bg-[#1A3826]/20 selection:text-[#14261B] relative overflow-x-hidden">
      {/* Global subtle ambient warm lighting glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#2E583A]/10 via-[#C28A4A]/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-[#254D33]/8 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Top Bar */}
      <Header />

      {/* Main Sales Funnel Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 1. Was ist das? */}
        <AboutProduct />

        {/* 2. Was löst es? */}
        <ProblemSolution />

        {/* Interactive 30g Fiber Assessment & Swap Tool */}
        <FiberCalculator />

        {/* Contents & Chapters */}
        <BookContents />

        {/* 3. Für wen ist es? / Für wen ist es nicht? */}
        <TargetAudience />

        {/* Security & 14-Day Guarantee */}
        <GuaranteeAndSecurity />

        {/* FAQ Section */}
        <Faq />

        {/* Final Conversion CTA */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Real-time verified purchase notifications in bottom-left */}
      <PurchaseNotifications />

      {/* Mobile sticky purchase bar */}
      <MobileStickyCta />

      {/* Interactive PDF Sample Page Preview Modal */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
