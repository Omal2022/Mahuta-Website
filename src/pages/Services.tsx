// import React, { useState, useEffect } from "react";
// import { CheckCircle2, ArrowRight } from "lucide-react";
// import { Link, useSearchParams } from "react-router-dom";
// import Section from "../components/Section";
// import Button from "../components/Button";
// import ServicesCarousel from "../components/ServicesCarousel";
// import { SERVICES } from "../data/constants";
// import { motion } from "framer-motion";

// const Services: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const [selectedService, setSelectedService] = useState(SERVICES[0]);

//   // Read service ID from URL and set selected service
//   useEffect(() => {
//     const serviceId = searchParams.get("service");
//     if (serviceId) {
//       const service = SERVICES.find((s) => s.id === serviceId);
//       if (service) {
//         setSelectedService(service);
//         // Scroll to featured section after a brief delay
//         setTimeout(() => {
//           document.getElementById("featured-service")?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }, 500);
//       }
//     }
//   }, [searchParams]);

//   const handleServiceClick = (serviceId: string) => {
//     const service = SERVICES.find((s) => s.id === serviceId);
//     if (service) {
//       setSelectedService(service);
//       setTimeout(() => {
//         document.getElementById("featured-service")?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 100);
//     }
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[100vh] flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/services.jpg"
//             alt="About Mahuta"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-slate-900/80"></div>
//         </div>
//         <div className="relative z-10 container mx-auto px-4 lg:px-8 text-left lg;top-40 top-32">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             =
//             <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
//               Our <span className="text-gold">Services</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl">
//               Comprehensive downstream oil and gas solutions tailored to your
//               needs
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Carousel */}
//       <ServicesCarousel
//         items={SERVICES.map((service) => ({
//           id: service.id,
//           title: service.title,
//           description: service.description,
//           image: service.image,
//           category: "OUR SERVICES",
//         }))}
//         onServiceClick={handleServiceClick}
//         showHeader={true}
//       />

//       {/* Featured Service Detail */}
//       <Section dark id="featured-service">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div key={selectedService.id}>
//             <div className="aspect-video overflow-hidden mb-6">
//               <img
//                 src={selectedService.image}
//                 alt={selectedService.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div key={`${selectedService.id}-content`}>
//             <h2 className="text-4xl font-display font-bold text-white mb-6">
//               {selectedService.title}
//             </h2>
//             <p className="text-gray-300 leading-relaxed text-lg mb-8">
//               {selectedService.description}
//             </p>
//             <h3 className="text-xl font-heading font-semibold text-gold mb-4">
//               Key Features:
//             </h3>
//             <ul className="space-y-4">
//               {selectedService.features.map((feature, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <CheckCircle2
//                     className="text-gold flex-shrink-0 mt-1"
//                     size={20}
//                   />
//                   <span className="text-gray-300">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </Section>

//       {/* Process Section */}
//       <Section title="Our Process" subtitle="How We Work">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               step: "01",
//               title: "Consultation",
//               description:
//                 "Understanding your specific requirements and objectives",
//             },
//             {
//               step: "02",
//               title: "Planning",
//               description: "Developing comprehensive strategies and solutions",
//             },
//             {
//               step: "03",
//               title: "Execution",
//               description:
//                 "Implementing projects with precision and excellence",
//             },
//             {
//               step: "04",
//               title: "Support",
//               description: "Ongoing maintenance and optimization services",
//             },
//           ].map((item, index) => (
//             <div key={index} className="text-center">
//               <div className="text-6xl font-display font-bold text-gold/20 mb-4">
//                 {item.step}
//               </div>
//               <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* CTA Section */}
//       <section className="relative py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
//         <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
//           <div>
//             <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
//               Need a Custom Solution?
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
//               Our team of experts is ready to discuss your specific requirements
//               and deliver tailored solutions.
//             </p>
//             <Link to="/contact">
//               <Button size="lg" variant="primary">
//                 Request a Consultation <ArrowRight className="ml-2" size={20} />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;



import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import Button from '../components/Button';
import ServicesCarousel from '../components/ServicesCarousel';
import { SERVICES } from '../data/constants';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const processRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Animate vertical process flow line
  useEffect(() => {
    if (processRef.current && lineRef.current) {
      const ctx = gsap.context(() => {
        // Animate the vertical connecting line
        gsap.fromTo(
          lineRef.current,
          { height: '0%' },
          {
            height: '100%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1,
            },
          }
        );

        // Animate each step - alternating from left/right on desktop
        gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, index) => {
          const isLeft = index % 2 === 0;
          gsap.from(step, {
            opacity: 0,
            x: window.innerWidth >= 768 ? (isLeft ? -100 : 100) : -50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }, processRef);

      return () => ctx.revert();
    }
  }, []);

  // Read service ID from URL
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        setTimeout(() => {
          document.getElementById('featured-service')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      }
    }
  }, [searchParams]);

  const handleServiceClick = (serviceId: string) => {
    const service = SERVICES.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      setTimeout(() => {
        document.getElementById('featured-service')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/services.jpg"
            alt="About Mahuta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-left">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive downstream oil and gas solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel
        items={SERVICES.map(service => ({
          id: service.id,
          title: service.title,
          description: service.description,
          image: service.image,
          category: "OUR SERVICES"
        }))}
        onServiceClick={handleServiceClick}
        showHeader={true}
      />

      {/* Featured Service Detail */}
      <Section dark id="featured-service">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div key={selectedService.id}>
            <div className="aspect-video overflow-hidden mb-6">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div key={`${selectedService.id}-content`}>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              {selectedService.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              {selectedService.description}
            </p>
            <h3 className="text-xl font-heading font-semibold text-gold mb-4">
              Key Features:
            </h3>
            <ul className="space-y-4">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process Section - Responsive Timeline */}
      <Section title="Our Process" subtitle="How We Work">
        <div ref={processRef} className="relative max-w-6xl mx-auto">
          {/* Vertical animated line - Left on mobile, Center on desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200">
            <div 
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gold"
              style={{ height: '0%' }}
            />
          </div>

          {/* Process steps */}
          <div className="space-y-12 md:space-y-24">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your specific requirements and objectives",
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing comprehensive strategies and solutions",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing projects with precision and excellence",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and optimization services",
              },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="process-step relative">
                  {/* Circle dot on line */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 md:w-10 md:h-10 bg-gold border-4 border-white rounded-full z-10 shadow-lg" />
                  
                  {/* Mobile Layout: Always content on right */}
                  <div className="md:hidden pl-16">
                    <div className="text-4xl font-display font-bold text-gold/20 mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Desktop Layout: Zigzag pattern */}
                  <div className={`hidden md:grid grid-cols-2 gap-8 items-start ${
                    isLeft ? 'pr-12' : 'pl-12'
                  }`}>
                    {/* Left side */}
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8">
                          <div className="text-5xl lg:text-6xl font-display font-bold text-gold/20 mb-2">
                            {item.step}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                            {item.description}
                          </p>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="pl-8">
                          <div className="text-5xl lg:text-6xl font-display font-bold text-gold/20 mb-2">
                            {item.step}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Our team of experts is ready to discuss your specific requirements and deliver tailored solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="primary">
                Request a Consultation <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
