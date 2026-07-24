import { AboutView } from '@/components/layout/views/landing-page/about';
import { CTAView } from '@/components/layout/views/landing-page/cta';
import { FeaturesView } from '@/components/layout/views/landing-page/features';
import { HeroView } from '@/components/layout/views/landing-page/hero';
import { ReviewsView } from '@/components/layout/views/landing-page/reviews';

export default function Home() {
  return (
    <>
      <HeroView />
      <AboutView />
      <FeaturesView />
      <ReviewsView />
      <CTAView />
    </>
  );
}
