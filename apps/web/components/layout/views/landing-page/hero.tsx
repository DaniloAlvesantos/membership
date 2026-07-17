'use client';

import {
  BadgePrimary,
  ButtonPrimary,
  AvatarGroupPrimary,
} from '@membership/ui';
import { CirclePlay } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export const HeroView = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-4 md:px-8 lg:px-16 py-8 text-zinc-700"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-xl space-y-4"
      >
        <motion.div variants={itemVariants}>
          <BadgePrimary title="The all-in-one" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Scale Your Subscription
          <i className="text-app-green-500"> Club with Ease</i>
        </motion.h2>

        <motion.p variants={itemVariants}>
          Effortlessly manage your members, automate recurring billing, and
          streamline global fulfillment—all within a single, intuitive dashboard
          designed for growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <ButtonPrimary
            title="Get Started Free"
            className="p-7 shadow-xl shadow-app-green-500/20"
          />
          <ButtonPrimary variant="outline" className="p-7">
            <CirclePlay /> Watch Demo
          </ButtonPrimary>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <AvatarGroupPrimary
            size="lg"
            avatars={[
              {
                url: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60',
              },
              {
                url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60',
              },
              {
                url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60',
              },
            ]}
          />
          <span>
            Trusted by <strong className="text-black">2,500+</strong> club
            owners worldwide
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 14,
          delay: 0.2,
        }}
        whileHover={{ scale: 1.02, y: -4 }} 
        className="mx-auto max-w-lg bg-white rounded-3xl shadow-2xl p-4 overflow-hidden"
      >
        <img
          className="m-auto"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy5hO0yuoUZRfI1r197G4qxBFZpHyVGgnR-U3cfMTpx-4dxghL45_AjRpHWOaHXJB4y85wCr07QQmnUw7O-gmdK_DQ0TFXMubJTxPJ9RgkyBUKNf2O0YkXASg-tH74wi3VAOe2a9fzxatvpXfY1MjbPsLquLlDK4l7duEDm4zr1uzplYtj1lMkEtM-KTncpFhuRKSY9OkxgMLwCwrzTKzDWBUBDlGEtW2LRAIowagtChtakQrnau-j4tbMsjGrTAMMrpQnMIn_hdQ"
          alt="Dashboard Preview"
        />
      </motion.div>
    </section>
  );
};
