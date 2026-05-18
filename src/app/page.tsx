"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Work",
          id: "work",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Free Audit",
          id: "contact",
        },
      ]}
      brandName="RDD Web Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Modern Websites for Local Businesses That Want More Calls & Bookings"
      description="RDD Web Studio builds clean, mobile-friendly websites that help local businesses make a stronger first impression, build trust, and turn visitors into customers."
      buttons={[
        {
          text: "Get a Free Website Audit",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smartphone-laptop-with-blank-screens_273609-6762.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-hand-with-financial-charts-mobile-phone-laptop-table_1232-4862.jpg",
          alt: "Client A",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-hands-holding-tablet_23-2150162740.jpg",
          alt: "Client B",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-hand-with-financial-charts-mobile-phone-laptop-table_1232-4861.jpg",
          alt: "Client C",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-hand-with-financial-charts-mobile-phone-laptop-table_1232-4860.jpg",
          alt: "Client D",
        },
        {
          src: "http://img.b2bpic.net/free-photo/working-man_1098-18366.jpg",
          alt: "Client E",
        },
      ]}
      avatarText="Trusted by 50+ local businesses"
      marqueeItems={[
        {
          type: "text",
          text: "Mobile Responsive",
        },
        {
          type: "text",
          text: "SEO Optimized",
        },
        {
          type: "text",
          text: "High Conversion",
        },
        {
          type: "text",
          text: "Custom Design",
        },
        {
          type: "text",
          text: "Speed Focused",
        },
      ]}
    />
  </div>

  <div id="problems" data-section="problems">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Outdated Design",
          description: "Losing credibility with visitors.",
          imageSrc: "http://img.b2bpic.net/free-vector/data-analysis-icons-research-business-finance-science-information-vector-doodle-set-with-charts-diagrams-computer-screen-magnifying-glass-gear-document_107791-9684.jpg",
        },
        {
          title: "Poor Mobile Layout",
          description: "Hard to navigate on phones.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-illustration-ppc-management-services-icon_107791-17568.jpg",
        },
        {
          title: "Weak Call-to-Action",
          description: "No clear path to contact.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-with-internet-browser-search-bar-screen_169016-40049.jpg",
        },
        {
          title: "No Trust Builders",
          description: "Hard to verify reliability.",
          imageSrc: "http://img.b2bpic.net/free-photo/seo-optimization-3d-render-cartoon-illustration_107791-16996.jpg",
        },
      ]}
      title="Your Website Should Be Working For Your Business"
      description="Most local business websites lose customers because they look outdated or load poorly on mobile."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Website Design",
          description: "Clean, custom designs.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=yk4v8f",
        },
        {
          title: "Mobile-Friendly",
          description: "Optimized for all devices.",
          imageSrc: "http://img.b2bpic.net/free-vector/project-steps-designs-collection_1209-136.jpg",
        },
        {
          title: "Landing Pages",
          description: "High-converting ad pages.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-elements-about-seo_1045-246.jpg",
        },
        {
          title: "Website Redesigns",
          description: "Revitalize your online face.",
          imageSrc: "http://img.b2bpic.net/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg",
        },
        {
          title: "Booking Forms",
          description: "Simplified customer flow.",
          imageSrc: "http://img.b2bpic.net/free-vector/modern-email-marketing-concept_23-2147997239.jpg",
        },
        {
          title: "Local SEO",
          description: "Boost local visibility.",
          imageSrc: "http://img.b2bpic.net/free-vector/20-seo-web-flat-color-icon-pack-like-hosting-seo-video-internet-webpage_1142-24467.jpg",
        },
      ]}
      title="Website Services Built for Local Business Growth"
      description="We specialize in modern, high-converting digital presence."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Free Audit",
          description: "Deep dive review.",
          imageSrc: "http://img.b2bpic.net/free-vector/people-searching-some-information_53876-26653.jpg",
        },
        {
          title: "Strategy",
          description: "Plan structure & design.",
          imageSrc: "http://img.b2bpic.net/free-vector/tiny-hr-manager-looking-candidate-job-interview-magnifier-computer-screen-flat-landing-page-career-employment-concept-banner-website-design-landing-web-page_74855-16725.jpg",
        },
        {
          title: "Build",
          description: "Implementation & refinement.",
          imageSrc: "http://img.b2bpic.net/free-vector/magnifying-glass-with-profit-chart-line-flat-style_78370-10774.jpg",
        },
        {
          title: "Launch",
          description: "Go live & ongoing.",
          imageSrc: "http://img.b2bpic.net/free-vector/business-background-design_1223-126.jpg",
        },
      ]}
      title="A Simple Process From Idea to Launch"
      description="Streamlined steps for your success."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          title: "Starter",
          price: "$750",
          period: "one-time",
          features: [
            "1-page site",
            "Mobile-ready",
            "Contact form",
            "Basic SEO",
          ],
          button: {
            text: "Request Free Audit",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-tattoo-artist-working-client-tattoo_23-2149479239.jpg",
          imageAlt: "Experienced tattoo artist working on client tattoo",
        },
        {
          id: "p2",
          title: "Professional",
          price: "$1,500",
          period: "one-time",
          features: [
            "3-5 pages",
            "Full Mobile",
            "Booking Forms",
            "Local SEO",
          ],
          button: {
            text: "Request Free Audit",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-laptop-with-blank-screens_273609-6762.jpg",
          imageAlt: "Experienced tattoo artist working on client tattoo",
        },
        {
          id: "p3",
          title: "Premium",
          price: "Custom",
          period: "quote",
          features: [
            "Custom design",
            "Multiple pages",
            "Lead automation",
            "Ongoing support",
          ],
          button: {
            text: "Request Free Audit",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-tattoo-artist-indoors-side-view_23-2149445974.jpg",
          imageAlt: "Experienced tattoo artist working on client tattoo",
        },
      ]}
      title="Simple Website Packages"
      description="Transparent pricing for growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Client A",
          role: "Owner",
          testimonial: "RDD Web Studio made the process simple and clear. Great mobile design.",
          imageSrc: "http://img.b2bpic.net/free-vector/illustration-magnifying-glass-icon_53876-5869.jpg",
        },
        {
          id: "t2",
          name: "Client B",
          role: "Owner",
          testimonial: "Old site was confusing, now everything is organized and professional.",
          imageSrc: "http://img.b2bpic.net/free-vector/website-office-strategy-information-magnifying-glass_24877-53749.jpg",
        },
        {
          id: "t3",
          name: "Client C",
          role: "Owner",
          testimonial: "Customers can finally understand what we offer and book fast.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=msv5gy",
        },
        {
          id: "t4",
          name: "Client D",
          role: "Owner",
          testimonial: "Roman understood that local business websites need to drive action.",
          imageSrc: "http://img.b2bpic.net/free-photo/finance-tracking-concept-wallet-with-magnifying-glass_23-2152012414.jpg",
        },
        {
          id: "t5",
          name: "Client E",
          role: "Owner",
          testimonial: "Professional results that made our business credible online.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=goxv84",
        },
      ]}
      title="Sample Client Feedback"
      description="Hear how we help local business owners."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Meet Roman DeSiato",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/smiley-tattoo-artist-indoors-side-view_23-2149445974.jpg",
          alt: "Roman DeSiato",
        },
      ]}
      buttons={[
        {
          text: "Get Free Audit",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Want to Know If Your Website Is Costing You Customers? Get a free website audit from RDD Web Studio today."
      buttons={[
        {
          text: "Request My Free Audit",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="RDD Web Studio"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Free Audit",
              href: "#contact",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 RDD Web Studio LLC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
