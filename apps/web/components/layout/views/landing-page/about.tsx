'use client';

import { BanknoteCheck, Box, ChartNoAxesCombined } from 'lucide-react';
import { motion } from 'motion/react';

const cardsData = [
  {
    backgroundColor: '#6CF8BB',
    icon: BanknoteCheck,
    iconColor: '#00714D',
    title: 'Automated Billing',
    description:
      'Stop chasing payments. Our secure engine handles recurring charges, failed payment recovery, and automated invoicing globally.',
  },
  {
    backgroundColor: '#D3E4FE',
    icon: ChartNoAxesCombined,
    iconColor: '#070809',
    title: 'Member Insights',
    description:
      'Understand your churn, lifetime value, and engagement with deep analytics that help you make smarter business decisions.',
  },
  {
    backgroundColor: '#DFEBEC',
    icon: Box,
    iconColor: '#42927A',
    title: 'Seamless Fulfillment',
    description:
      'From warehouse to doorstep. Track shipments, manage stock levels, and provide your members with real-time delivery updates.',
  },
];

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
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Powerful Tools for Serious Growth
        </h3>
        <p className="max-w-md mx-auto text-zinc-600">
          Focus on building your community while we handle the technical heavy
          lifting of your subscription business.
        </p>
      </motion.div>

      <div className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((data, i) => (
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
            <h4 className="font-bold text-xl md:text-2xl mb-2 text-black">
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
