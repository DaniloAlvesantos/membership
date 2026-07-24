import { pricingData } from '@/constants/content';
import { BadgePrimary, ButtonPrimary } from '@membership/ui';
import { CheckCircle2 } from 'lucide-react';

export const PlansView = () => {
  return (
    <section id="plans" className="py-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <BadgePrimary title="Trasnparent Pricing" className="uppercase" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          Choose Your Growth Plan.
        </h2>
        <p className="text-gray-500 max-w-xl text-center">
          Scalable solutions designed for every stage of your club's journey.
          Manage subscribers, automate billing, and unlock insights.
        </p>
      </div>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-16">
        {pricingData.map((plan) => {
          return (
            <div
              key={plan.title}
              className={`relative flex flex-col justify-between gap-12 border-3 ${plan.isMostPopular ? 'border-app-green-500' : 'border-gray-500'} rounded-xl p-8`}
            >
              {plan.isMostPopular && (
                <span className="absolute -top-3 right-[50%] w-26 bg-app-green-500 rounded-full py-1 px-2 text-sm text-white">
                  Most Popular
                </span>
              )}
              <main className="flex flex-col gap-4 ">
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl">
                    {plan.title}
                  </h4>
                  <p>{plan.description}</p>
                </div>
                <span className="my-4">
                  <strong className="text-3xl md:text-4xl lg:text-5xl">
                    ${plan.amount}
                  </strong>
                  /mo
                </span>
                <ul className="space-y-2">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle2 className="text-app-green-500" /> {perk}
                    </li>
                  ))}
                </ul>
              </main>
              <ButtonPrimary
                title="Select Plan"
                className={'py-6'}
                variant={plan.isMostPopular ? 'default' : 'outline'}
              />
            </div>
          );
        })}
      </main>
    </section>
  );
};
