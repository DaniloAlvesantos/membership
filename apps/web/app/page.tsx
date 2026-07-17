import { Header } from '@/components/header';
import { AboutView } from '@/components/layout/views/landing-page/about';
import { HeroView } from '@/components/layout/views/landing-page/hero';

export default function Home() {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
    </>
  );
}
