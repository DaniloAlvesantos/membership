'use client';

import { aboutCardsData } from '@/app/constants/content';
import { motion } from 'motion/react';

export const AboutView = () => {
  return (
    <section id="about" className="py-24 bg-[#EFF4FF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-12 space-y-2 px-4"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl">
          Powerful Tools for Serious Growth
        </h3>
        <p className="max-w-md mx-auto text-zinc-600">
          Focus on building your community while we handle the technical heavy
          lifting of your subscription business.
        </p>
      </motion.div>

      <div className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutCardsData.map((data, i) => (
          <motion.div
            key={data.title}
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 14,
              delay: i * 0.15,
            }}
            whileHover={{
              y: -6,
              boxShadow:
                '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 cursor-pointer transition-colors duration-200 hover:border-zinc-300"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: data.backgroundColor }}
            >
              <data.icon color={data.iconColor} size={22} />
            </div>
            <h4 className="text-xl md:text-2xl mb-2 text-black">
              {data.title}
            </h4>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
