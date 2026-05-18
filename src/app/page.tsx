"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';

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
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Process", id: "process" },
        { name: "Audit", id: "audit" },
        { name: "Testimonials", id: "testimonials" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="RDD Web Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="Modern Websites for Local Businesses That Want More Calls & Bookings"
      description="RDD Web Studio builds clean, mobile-friendly websites that help local businesses make a stronger first impression, build trust, and turn visitors into customers."
      buttons={[{ text: "Get a Free Website Audit", href: "#audit" }, { text: "View Services", href: "#services" }]}
      imageSrc="http://img.b2bpic.net/free-photo/smartphone-laptop-with-blank-screens_273609-6762.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      avatarText="Trusted by local brands"
      avatars={[{ src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779144356748-9i6umpqn.png", alt: "Company Logo" }]}
    />
  </div>

  <div id="audit" data-section="audit">
    <FeatureCardNineteen
        title="Professional Website Audit"
        description="We analyze your current presence to identify conversion gaps and opportunities for growth."
        textboxLayout="split"
        useInvertedBackground={false}
        features={[
            {
                tag: "Performance",                
                title: "Core Web Vitals",                
                subtitle: "Speed optimization",                
                description: "Ensuring your site loads instantly for every visitor.",                
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779143505596-3sra8hw5.png?_wi=1"
            }
        ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        { title: "Website Design", description: "Clean, custom designs. RDD Web Studio quality.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779143505596-3sra8hw5.png?_wi=2" },
        { title: "Mobile-Friendly", description: "Optimized for all devices.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779143505596-3sra8hw5.png?_wi=3" },
        { title: "Landing Pages", description: "High-converting ad pages.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779143505596-3sra8hw5.png?_wi=4" },
      ]}
      title="Services by RDD Web Studio"
      description="We specialize in modern, high-converting digital presence."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Meet Roman DeSiato" },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DurchDlhPUCoUbfjLwOB6GrIhH/uploaded-1779143505596-3sra8hw5.png", alt: "Roman DeSiato" },
      ]}
      buttons={[{ text: "Get Free Audit", href: "#audit" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="RDD Web Studio"
      columns={[
        { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Services", href: "#services" }, { label: "About", href: "#about" }] },
        { title: "Resources", items: [{ label: "Free Audit", href: "#audit" }] }
      ]}
      copyrightText="© 2024 RDD Web Studio LLC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}