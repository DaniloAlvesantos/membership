import { Header } from '@/components/header';
import { HeroView } from '@/components/layout/views/landing-page/hero';
import { BanknoteCheck, Box, ChartNoAxesCombined } from 'lucide-react';

const cardsData = [
  {
    backgroundColor: '#6CF8BB',
    icon: BanknoteCheck,
    iconColor: '#00714D',
    title: 'Automated Biling',
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

export default function Home() {
  return (
    <>
      <Header />
      <HeroView />
      <section id="about" className="py-24 bg-[#EFF4FF] ">
        <div className="text-center mb-4 space-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Powerful Tools for Serious Growth
          </h3>
          <p className="w-md mx-auto">
            Focus on building your community while we handle the technical heavy
            lifting of your subscription business.
          </p>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 gap-2 md:gap-4">
          {cardsData.map((data, i) => (
            <div
              key={data.backgroundColor + i}
              className="bg-white hover:shadow-md border-2 border-zinc-300 rounded-3xl p-8 transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: data.backgroundColor }}
              >
                <data.icon color={data.iconColor} />
              </div>
              <h4 className="font-bold text-xl md:text-2xl mb-2">{data.title}</h4>
              <p className="text-sm md:text-base">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
