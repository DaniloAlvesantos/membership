import {
  defaultNativations,
  defaultNavigationCtas,
  Navigation,
  NavigationCta,
} from '@/types/navigation';
import { ButtonPrimary } from '@membership/ui';
import Link from 'next/link';

interface HeaderProps {
  navigation?: Navigation[];
  cta?: NavigationCta[];
}

export const Header = ({
  cta = defaultNavigationCtas,
  navigation = defaultNativations,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4">
      <span className='font-bold text-lg'>SubClub</span>
      <nav id="navigation" className="hidden md:flex items-center gap-3">
        {navigation.map((item, i) => (
          <NavigationItem key={item.label + i} {...item} />
        ))}
      </nav>

      <nav id="cta" className="hidden md:flex items-center gap-3">
        {cta.map((item, i) => (
          <NavigationItem key={item.label + i} {...item} />
        ))}
      </nav>
    </header>
  );
};

type NavigationItemProps = {
  label: string;
  href: string;
  isButton?: boolean;
};

const NavigationItem = ({ href, label, isButton }: NavigationItemProps) => {
  if (isButton) {
    return (
      <ButtonPrimary>
        <Link href={href}>{label}</Link>
      </ButtonPrimary>
    );
  }

  return (
    <Link href={href} className="hover:text-app-green-500 transition-colors duration-300 relative before:content-[''] before:absolute before:bottom-[2px] before:left-0 before:h-px before:transition-all before:duration-300 before:w-0 before:bg-app-green-500 hover:before:w-full">
      {label}
    </Link>
  );
};
