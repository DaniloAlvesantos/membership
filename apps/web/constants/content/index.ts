import { AccordionProps } from '@membership/ui';

type PricingDataType = {
  title: string;
  description: string;
  amount: number;
  perks: string[];
  isMostPopular?: boolean;
};

export const pricingData: PricingDataType[] = [
  {
    title: 'Starter',
    description: 'Perfect for new clubs starting their digital journey.',
    amount: 29,
    perks: [
      'Up to 100 members',
      'Basic analytics dashboard',
      'Automated email billing',
      'Standard club templates',
    ],
  },
  {
    title: 'Growth',
    description: 'For established clubs ready to scale and build brand equity.',
    amount: 79,
    perks: [
      'Up to 1,000 members',
      'Advanced insights & heatmaps',
      'Custom white-label branding',
      'Multi-admin access',
      'CRM Integration',
    ],
    isMostPopular: true,
  },
  {
    title: 'Pro',
    description: 'Elite infrastructure for enterprise-level club operations.',
    amount: 199,
    perks: [
      'Unlimited members',
      'Priority 24/7 VIP support',
      'Full API access & webhooks',
      'Dedicated account manager',
    ],
  },
];

export const featuresData = [
  {
    title: 'Connect Your Store',
    description:
      'Import your existing products and member lists with a single click. We integrate with all major e-commerce platforms.',
  },
  {
    title: 'Design Your Tiers',
    description:
      'Configure flexible subscription models, from monthly boxes to digital-only access levels with tiered pricing.',
  },
  {
    title: 'Go Live & Scale',
    description:
      'Launch your portal and watch your community grow. Use our automated tools to keep members happy and retained.',
  },
];

export const pricingAccodionItems: AccordionProps[] = [
  {
    title: 'Can I change my plan later?',
    content:
      'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the new rate will be prorated for the remainder of your billing cycle.',
    value: 'change',
  },
  {
    title: 'Is there a free trial available?',
    content:
      'Yes, we offer a 14-day full-featured trial of the Growth plan so you can explore all our advanced tools before committing. No credit card required.',
    value: 'free',
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'We support all major credit cards, PayPal, and Apple Pay. For Pro plans, we also offer annual invoicing options.',
    value: 'methods',
  },
  {
    title: 'Do you charge transaction fees?',
    content:
      'SubClub does not take a percentage of your revenue. Standard payment processor fees (like Stripe or PayPal) still apply.',
    value: 'fees',
  },
];
