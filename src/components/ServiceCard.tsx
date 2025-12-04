import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
  isActive?: boolean;
  onClick?: () => void;
  serviceId?: string; // 👈 Add this
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  date,
  category,
  isActive = true,
  onClick,
  serviceId,
}) => {
  return (
    <div
      className={`service-card-item flex-shrink-0 transition-all duration-500 ${
        isActive
          ? "scale-100 opacity-100"
          : "scale-90 opacity-60 md:scale-100 md:opacity-100"
      }`}
    >
      <div className="relative h-[480px] bg-gray-primary overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-gold/50 hover:scale-95 w-[320px] md:w-[380px] flex flex-col">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-primary via-gray-primary/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 text-white flex flex-col flex-grow">
          {date && (
            <p className="text-sm font-body text-white/90 mb-2 uppercase tracking-wider">
              {date}
            </p>
          )}

          {category && (
            <p className="text-xs font-body text-gold mb-3 uppercase tracking-widest">
              {category}
            </p>
          )}

          <h3 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight line-clamp-2 group-hover:text-gold transition-colors">
            {title}
          </h3>

          <p className="text-white/90 font-body text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          {/* CTA Link - Navigate to Services page with service ID */}
          <Link
            to={serviceId ? `/services?service=${serviceId}` : "/services"}
            className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm group-hover:gap-4 transition-all border-b border-gold/30 pb-1 w-fit"
          >
            <ArrowRight size={16} />
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
