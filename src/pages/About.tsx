import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Section from "../components/Section";
import {
  ABOUT_CONTENT,
  CORE_VALUES,
  COMPETITIVE_ADVANTAGES,
} from "../data/constants";

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about.jpg"
            alt="About Mahuta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-left lg;top-40 top-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              About <span className="text-gold">Mahuta</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl ">
              Building the future of Nigeria's energy sector through excellence,
              innovation, and integrity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 border-l-4 border-gold"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mr-4">
                <Target className="text-gold" size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {ABOUT_CONTENT.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 border-l-4 border-gold"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mr-4">
                <Eye className="text-gold" size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {ABOUT_CONTENT.vision}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Our Story */}
      <Section title="Our Story" subtitle="The Mahuta Journey" dark>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-10 border border-gold/20"
          >
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {ABOUT_CONTENT.story}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-gold/20">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  15+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  250+
                </div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section title="Our Core Values" subtitle="What Drives Us">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border-2 border-gray-200 hover:border-gold transition-all group"
            >
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <Award className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Competitive Advantages */}
      <Section title="What Sets Us Apart" subtitle="Our Competitive Edge" dark>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPETITIVE_ADVANTAGES.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-slate-800 p-6 border border-gold/20"
              >
                <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-gold"></div>
                </div>
                <p className="text-gray-300 leading-relaxed">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Leadership Team" subtitle="Meet Our Experts">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Adewale Thompson",
              role: "Chief Executive Officer",
              image: "/man1.jpg",
            },
            {
              name: "Engr. Chioma Okafor",
              role: "Chief Operations Officer",
              image: "/wo1.jpg",
            },
            {
              name: "Mr. Ibrahim Yusuf",
              role: "Chief Financial Officer",
              image: "/man2.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full scale-150 object-top object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gold font-heading text-sm tracking-wide">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
