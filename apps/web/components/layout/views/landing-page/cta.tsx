'use client';

import { ButtonPrimary } from '@membership/ui';
import { motion } from 'motion/react';

export const CTAView = () => {
  return (
    <section id="cta" className="py-28 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-[80rem] bg-app-green-500 mx-auto rounded-[3rem] p-12 md:p-24 text-center relative z-10 overflow-hidden shadow-2xl will-change-transform"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
          Ready to Build Your <br className="hidden md:block" />
          Subscription Empire?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12">
          Join thousands of entrepreneurs who have scaled their clubs using our
          powerful automation and fulfillment tools. No credit card required to
          start.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <ButtonPrimary
            title="Get Started for Free"
            className="rounded-2xl py-8 px-10 bg-white text-app-green-500 hover:bg-app-green-300 shadow-lg"
          />
          <ButtonPrimary
            variant="outline"
            className="text-white hover:bg-white/10 hover:text-white rounded-2xl py-8 px-10"
            title="Schedule a Strategy Call"
          />
        </div>
      </motion.div>
    </section>
  );
};
