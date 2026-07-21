import { Header } from '@/components/header';
import { AboutView } from '@/components/layout/views/landing-page/about';
import { CTAView } from '@/components/layout/views/landing-page/cta';
import { FeaturesView } from '@/components/layout/views/landing-page/features';
import { HeroView } from '@/components/layout/views/landing-page/hero';
import { ReviewsView } from '@/components/layout/views/landing-page/reviews';
import { ButtonPrimary } from '@membership/ui';

export default function Home() {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <FeaturesView />
      <ReviewsView />
      <CTAView />
    </>
  );
}
