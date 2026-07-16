import { Header } from '@/components/header';
import {
  AvatarGroupPrimary,
  BadgePrimary,
  ButtonPrimary,
} from '@membership/ui';
import { CirclePlay } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="px-4 py-8 text-zinc-700">
        <div className="w-xl space-y-4">
          <BadgePrimary title="The all-in-one" />
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Scale Your Subscription
            <i className="text-app-green-500"> Club with Ease</i>
          </h2>
          <p>
            Effortlessly manage your members, automate recurring billing, and
            streamline global fulfillment—all within a single, intuitive
            dashboard designed for growth.
          </p>
          <div className="flex items-center gap-2">
            <ButtonPrimary
              title="Get Stared Free"
              className="p-7 shadow-xl shadow-app-green-500/20"
            />
            <ButtonPrimary variant="outline" className="p-7">
              <CirclePlay /> Watch Demo
            </ButtonPrimary>
          </div>
          <div className="flex items-center gap-2">
            <AvatarGroupPrimary
              size="lg"
              avatars={[
                {
                  url: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
                },
                {
                  url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
                },
                {
                  url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
                },
              ]}
            />
            <span>
              Trusted by <strong className="text-black">2,500+</strong> club
              owners worldwide
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
