import { PricingFaqView } from '@/components/layout/views/pricing/faq';
import { PlansView } from '@/components/layout/views/pricing/plans';
import { PricingQuestionView } from '@/components/layout/views/pricing/question';

export default function PricingPage() {
  return (
    <>
      <PlansView />
      <PricingFaqView />
      <PricingQuestionView />
    </>
  );
}
