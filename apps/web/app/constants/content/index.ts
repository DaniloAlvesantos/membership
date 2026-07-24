import {
  BanknoteCheck,
  Box,
  ChartNoAxesCombined,
  LucideIcon,
} from 'lucide-react';

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

type AboutCardDataType = {
  backgroundColor: string;
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
};

export const aboutCardsData: AboutCardDataType[] = [
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

export const reviewsData = [
  {
    rate: 5,
    description:
      'Switching to SubClub reduced our churn rate by 15% in just three months. The automated billing recovery is a lifesaver.',
    name: 'Sarah Jenkins',
    profilePic:
      'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    rate: 5,
    description:
      'The fulfillment integration is seamless. We went from manual spreadsheets to a fully automated warehouse flow in weeks.',
    name: 'Mark Thompson',
    profilePic:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    rate: 4,
    description:
      'Finally, a platform that understands subscription metrics. The insights dashboard helps me see exactly where we need to focus.',
    name: 'Elena Rodriguez',
    profilePic:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
  },
];
