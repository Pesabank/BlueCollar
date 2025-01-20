import React, { useEffect, useRef } from 'react';
import { ArrowRight, Building2, CreditCard, Clock, Shield, Users, CheckCircle2, HelpCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Pricing from './components/Pricing';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showTerms, setShowTerms] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showPricing, setShowPricing] = React.useState(false);
  const [showProducts, setShowProducts] = React.useState(false);
  const [showHowItWorks, setShowHowItWorks] = React.useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = React.useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldAutoScroll) {
      const scrollSequence = async () => {
        // Reset scroll position
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Wait for initial scroll
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Scroll to Features
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Scroll to Why Choose
        whyChooseRef.current?.scrollIntoView({ behavior: 'smooth' });
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Scroll to FAQ
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Finally scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset auto-scroll flag
        setShouldAutoScroll(false);
      };

      scrollSequence();
    }
  }, [shouldAutoScroll]);

  const handleTermsClick = () => {
    setShowTerms(true);
    setShowPrivacy(false);
    setShowPricing(false);
    setShowProducts(false);
    setShowHowItWorks(false);
    window.scrollTo(0, 0);
  };

  const handlePrivacyClick = () => {
    setShowPrivacy(true);
    setShowTerms(false);
    setShowPricing(false);
    setShowProducts(false);
    setShowHowItWorks(false);
    window.scrollTo(0, 0);
  };

  const handlePricingClick = () => {
    setShowPricing(true);
    setShowTerms(false);
    setShowPrivacy(false);
    setShowProducts(false);
    setShowHowItWorks(false);
    window.scrollTo(0, 0);
  };

  const handleProductsClick = () => {
    setShowProducts(true);
    setShowTerms(false);
    setShowPrivacy(false);
    setShowPricing(false);
    setShowHowItWorks(false);
    window.scrollTo(0, 0);
  };

  const handleHowItWorksClick = () => {
    setShowHowItWorks(true);
    setShowTerms(false);
    setShowPrivacy(false);
    setShowPricing(false);
    setShowProducts(false);
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    const wasOnHowItWorks = showHowItWorks;
    setShowTerms(false);
    setShowPrivacy(false);
    setShowPricing(false);
    setShowProducts(false);
    setShowHowItWorks(false);
    
    // Only trigger auto-scroll if coming from How It Works page
    if (wasOnHowItWorks) {
      setShouldAutoScroll(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar
        onTermsClick={handleTermsClick}
        onPrivacyClick={handlePrivacyClick}
        onPricingClick={handlePricingClick}
        onProductsClick={handleProductsClick}
        onHowItWorksClick={handleHowItWorksClick}
        onHomeClick={handleHomeClick}
      />
      {showTerms ? (
        <Terms />
      ) : showPrivacy ? (
        <Privacy />
      ) : showPricing ? (
        <Pricing />
      ) : showProducts ? (
        <Products />
      ) : showHowItWorks ? (
        <HowItWorks />
      ) : (
        <>
          <Hero onHowItWorksClick={handleHowItWorksClick} />
          <div ref={featuresRef}>
            <Features />
          </div>
          <div ref={whyChooseRef}>
            <WhyChoose />
          </div>
          <div ref={faqRef}>
            <FAQ />
          </div>
        </>
      )}
      <Footer 
        onTermsClick={handleTermsClick}
        onPrivacyClick={handlePrivacyClick}
        onPricingClick={handlePricingClick}
        onProductsClick={handleProductsClick}
        onHowItWorksClick={handleHowItWorksClick}
      />
    </div>
  );
}

export default App;