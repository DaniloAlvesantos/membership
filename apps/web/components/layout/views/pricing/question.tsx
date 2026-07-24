import { ButtonPrimary } from '@membership/ui';

export const PricingQuestionView = () => {
  return (
    <section
      id="pricing-question"
      className="bg-app-blue-500 p-4 flex flex-col items-center justify-center text-center py-24 px-4 md:px-8"
    >
      <div className="space-y-2 mb-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl">
          Still have question?
        </h2>
        <p className="text-[#666D84]">
          Our team is ready to help you find the perfect setup for your
          organization
        </p>
      </div>
      <div className="space-x-4">
        <ButtonPrimary className="py-6" title="Contact Sales" />
        <ButtonPrimary
          variant="outline"
          className="text-white hover:text-white hover:bg-white/10 py-6"
          title="Documentation"
        />
      </div>
    </section>
  );
};
