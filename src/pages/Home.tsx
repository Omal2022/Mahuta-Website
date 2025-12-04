import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES, STATISTICS, CORE_VALUES } from "../data/constants";
import ServicesCarousel from "../components/ServicesCarousel";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.6,
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.9,
        stagger: 0.2,
      });

      // Stats reveal with counter animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Animate the numbers
      STATISTICS.forEach((stat, index) => {
        const element = document.querySelector(`#stat-${stat.id}`);
        if (element) {
          // Parse the value - handle both regular numbers and decimals like "2.5M"
          let targetValue: number;
          let isDecimal = false;

          if (stat.value.includes("M")) {
            targetValue = parseFloat(stat.value.replace("M", ""));
            isDecimal = true;
          } else {
            targetValue = parseInt(stat.value);
          }

          const counter = { value: 0 };

          gsap.to(counter, {
            value: targetValue,
            duration: 2,
            ease: "power2.out",
            delay: 0.5 + index * 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              once: true,
            },
            onUpdate: function () {
              if (isDecimal) {
                element.textContent = counter.value.toFixed(1) + "M";
              } else {
                element.textContent = Math.floor(counter.value).toString();
              }
            },
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Ultra Modern */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/3349.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-primary/70 to-black/60" />

          {/* Animated shapes */}
          <div className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 md:py-0">
          <div className="max-w-5xl">
            {/* Overline */}
            <div className="hero-subtitle mb-4 md:mb-6">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-xs md:text-sm font-body tracking-widest uppercase">
                Powering Nigeria's Future
              </span>
            </div>

            {/* Main Headline - Asymmetric */}
            <h1 className="hero-title font-display text-white mb-6 md:mb-8 text-4xl md:text-6xl lg:text-7xl leading-tight">
              Excellence in
              <span className="block text-gold">Downstream</span>
              <span className="block">Operations</span>
            </h1>

            {/* Description */}
            <p className="hero-subtitle text-base md:text-xl lg:text-2xl text-gray-200 font-body mb-8 md:mb-12 max-w-2xl leading-relaxed">
              Delivering reliable, capable, and trustworthy oil and gas services
              across Nigeria and West Africa with unmatched expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <Link to="/services" className="hero-cta group">
                <button className="modern-btn w-full sm:w-auto relative px-6 md:px-8 py-3 md:py-4 bg-gold text-black font-body font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/50">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Services
                    <ArrowRight
                      className="group-hover:translate-x-2 transition-transform"
                      size={20}
                    />
                  </span>
                </button>
              </Link>

              <Link to="/contact" className="hero-cta group">
                <button className="modern-btn w-full sm:w-auto relative px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-body font-semibold text-base md:text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                  <span className="flex items-center justify-center gap-3">
                    Get in Touch
                    <ArrowRight
                      className="group-hover:translate-x-2 transition-transform"
                      size={20}
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
            <span className="text-xs font-body tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* Statistics - Modern Asymmetric Layout */}
      <section
        ref={statsRef}
        className="relative py-16 md:py-32 bg-gradient-to-br from-gray-primary to-black"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {STATISTICS.map((stat, index) => (
              <div
                key={stat.id}
                className={`stat-item text-center ${
                  index % 2 === 0 ? "lg:mt-12" : ""
                }`}
              >
                <div className="mb-3 md:mb-4">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold leading-none">
                    <span id={`stat-${stat.id}`}>0</span>
                    {stat.suffix}
                  </div>
                </div>
                <div className="text-gray-300 font-body text-xs md:text-sm tracking-widest uppercase px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
      </section>

      {/* Services Carousel - Chevron Style */}
      <ServicesCarousel
        items={SERVICES.map((service) => ({
          id: service.id,
          title: service.title,
          description: service.description,
          image: service.image,
          category: "OUR SERVICES",
        }))}
      />

      {/* Values Section - Split Layout */}
      <section className="relative py-16 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="text-gold font-body text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-gray-primary mb-6 md:mb-8 leading-tight">
                Built on a Foundation of{" "}
                <span className="block text-gold">Excellence</span>
              </h2>

              <div className="space-y-5 md:space-y-6">
                {CORE_VALUES.slice(0, 3).map((value) => (
                  <div
                    key={value.id}
                    className="flex gap-3 md:gap-4 items-start"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-gray-primary mb-1 md:mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-8 md:mt-10">
                <button className="modern-btn px-6 md:px-8 py-3 md:py-4 bg-gray-primary text-white font-body font-semibold text-sm md:text-base hover:bg-black transition-all">
                  <span className="flex items-center gap-3">
                    Learn About Us
                    <ArrowRight size={18} />
                  </span>
                </button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden lg:block">
              <img
                src="/values.jpg"
                alt="Operations"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-32 h-32 md:w-64 md:h-64 bg-gold/20 -z-10" />
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-32 h-32 md:w-64 md:h-64 border-2 md:border-4 border-gold/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/partner.jpg"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Partner<span className="text-gold">?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 font-body mb-8 md:mb-10">
            Join our network of satisfied clients and experience excellence in
            oil and gas services.
          </p>
          <Link to="/contact">
            <button className="modern-btn w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gold text-black font-body font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-gold/50 transition-all">
              <span className="flex items-center justify-center gap-3">
                Start a Conversation
                <ArrowRight size={22} />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
