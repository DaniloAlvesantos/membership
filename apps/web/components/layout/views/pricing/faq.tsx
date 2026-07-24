import { pricingAccodionItems } from '@/constants/content';
import { AccordionPrimary } from '@membership/ui';

export const PricingFaqView = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#EFF4FF]" id="pricing-faq">
      <div className="text-center mx-auto my-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500">
          Everything you need to know about SubClub memberships and pricing.
        </p>
      </div>
      <AccordionPrimary
        items={pricingAccodionItems}
        className="w-full max-w-2xl mx-auto space-y-4"
        itemClassName="w-full rounded-xl bg-white border-2 border-gray-300 p-4"
        triggerClassName="flex w-full items-center justify-between font-medium text-left hover:no-underline cursor-pointer font-bold"
        contentClassName="text-gray-500"
      />
    </section>
  );
};
