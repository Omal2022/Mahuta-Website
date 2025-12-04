import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
}

interface ServicesCarouselProps {
  items: CarouselItem[];
  onServiceClick?: (serviceId: string) => void;
  showHeader?: boolean;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  items,
  showHeader = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth = 340;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();

      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-12">
            <div className="max-w-3xl mb-6 md:mb-0">
              <span className="text-gold font-body text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-gray-primary mb-4 md:mb-6 leading-tight">
                What We Offer
              </h2>
              <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
                Click any service to view detailed information
              </p>
            </div>

            <div className="hidden md:flex justify-end items-center gap-4">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "border-gold text-gold hover:bg-gold hover:text-black"
                    : "border-gray-300 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "border-gold text-gold hover:bg-gold hover:text-black"
                    : "border-gray-300 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}

        <div className="relative -mx-4 md:mx-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-0 pb-8"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                style={{
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
                }}
              >
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  category={item.category}
                  isActive={index === currentIndex}
                  serviceId={item.id}
                />
              </div>
            ))}
          </div>

          {canScrollLeft && (
            <div className="hidden md:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          )}
        </div>

        <div className="flex justify-center items-center gap-6 mt-6">
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gold"
                    : "w-2 bg-gray-300 hover:bg-gold/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;