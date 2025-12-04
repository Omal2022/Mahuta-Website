import { Service, CoreValue, Statistic, ContactInfo, NavLink } from "../types";

export const COMPANY_NAME = "Mahuta Oil & Gas Ltd";
export const COMPANY_TAGLINE = "Powering Nigeria's Energy Future";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "exploration",
    title: "Exploration & Production",
    description:
      "Advanced exploration services utilizing cutting-edge technology to identify and evaluate hydrocarbon reserves across Nigeria's oil-rich basins.",
    icon: "compass",
    image: "146.jpg",
    features: [
      "Seismic Data Acquisition & Analysis",
      "Reservoir Characterization",
      "Well Planning & Drilling Operations",
      "Production Optimization",
    ],
  },
  {
    id: "refining",
    title: "Refining Operations",
    description:
      "State-of-the-art refining solutions that transform crude oil into premium petroleum products with maximum efficiency and minimal environmental impact.",
    icon: "factory",
    image: "9896.jpg",
    features: [
      "Crude Oil Processing",
      "Product Quality Control",
      "Process Optimization",
      "Environmental Compliance",
    ],
  },
  {
    id: "distribution",
    title: "Distribution & Logistics",
    description:
      "Comprehensive distribution network ensuring timely and efficient delivery of petroleum products across Nigeria and the West African region.",
    icon: "truck",
    image: "2151989572.jpg",
    features: [
      "Pipeline Infrastructure",
      "Storage Facilities",
      "Transportation Fleet",
      "Supply Chain Management",
    ],
  },
  {
    id: "petrochemicals",
    title: "Petrochemical Solutions",
    description:
      "Innovative petrochemical production serving diverse industries with high-quality chemical products derived from petroleum feedstocks.",
    icon: "beaker",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    features: [
      "Chemical Manufacturing",
      "Industrial Polymers",
      "Specialty Chemicals",
      "Technical Support",
    ],
  },
  {
    id: "engineering",
    title: "Engineering Services",
    description:
      "Comprehensive engineering solutions from concept to commissioning, delivering world-class oil and gas infrastructure projects.",
    icon: "wrench",
    image: "874.jpg",
    features: [
      "Project Design & Engineering",
      "Construction Management",
      "Facility Maintenance",
      "Technical Consulting",
    ],
  },
  {
    id: "hse",
    title: "HSE Management",
    description:
      "Industry-leading health, safety, and environmental management systems ensuring sustainable operations and workforce protection.",
    icon: "shield",
    image: "2150901864.jpg",
    features: [
      "Safety Training & Compliance",
      "Environmental Impact Assessment",
      "Emergency Response Planning",
      "Occupational Health Services",
    ],
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "reliability",
    title: "Reliability",
    description:
      "Consistent delivery of exceptional services that our partners can depend on, every single time.",
    icon: "check-circle",
  },
  {
    id: "capability",
    title: "Capability",
    description:
      "Advanced technical expertise and resources to handle the most complex oil and gas operations.",
    icon: "zap",
  },
  {
    id: "trustworthiness",
    title: "Trust-Worthy",
    description:
      "Building lasting partnerships through transparency, integrity, and ethical business practices.",
    icon: "handshake",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Committed to environmentally responsible operations that protect our planet for future generations.",
    icon: "leaf",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "Pursuing the highest standards in service delivery and operational performance.",
    icon: "award",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Supporting the communities where we operate through local content development and social investment.",
    icon: "users",
  },
];

export const STATISTICS: Statistic[] = [
  {
    id: "years",
    value: "15",
    label: "Years of Excellence",
    suffix: "+",
  },
  {
    id: "projects",
    value: "250",
    label: "Completed Projects",
    suffix: "+",
  },
  {
    id: "clients",
    value: "150",
    label: "Satisfied Clients",
    suffix: "+",
  },
  {
    id: "barrels",
    value: "2.5M",
    label: "Barrels Daily Capacity",
    suffix: "",
  },
];

export const CONTACT_INFO: ContactInfo = {
  address:
    "Plot 123, Constitution Avenue, Central Business District, Abuja, Nigeria",
  phone: "+234 (0) 9 123 4567",
  email: "info@mahutaoilgas.com",
  workingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
};

export const ABOUT_CONTENT = {
  mission:
    "To deliver excellent and effective services in the downstream oil and gas sector, powering Nigeria's energy needs while maintaining the highest standards of safety, sustainability, and operational excellence.",
  vision:
    "To become West Africa's most trusted and innovative downstream oil and gas service provider, recognized for our technical excellence, commitment to sustainability, and contribution to energy security.",
  story:
    "Founded with a vision to transform Nigeria's downstream oil and gas sector, Mahuta Oil & Gas Ltd has grown from a ambitious startup to a respected industry player. Our journey has been marked by strategic partnerships, technological innovation, and an unwavering commitment to excellence. Today, we leverage our broad spectrum of industry networks and technical capabilities to serve contractors, sub-contractors, and investors across Nigeria and beyond.",
};

export const COMPETITIVE_ADVANTAGES = [
  "Extensive industry network spanning the entire oil and gas value chain",
  "Strategic partnerships with leading international operators",
  "State-of-the-art facilities and equipment",
  "Highly skilled and certified workforce",
  "Proven track record in complex project execution",
  "Strong commitment to local content development",
];
