'use client';

import {
  defaultNativations,
  defaultNavigationCtas,
  Navigation,
  NavigationCta,
} from '@/types/navigation';
import { ButtonPrimary } from '@membership/ui';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  navigation?: Navigation[];
  cta?: NavigationCta[];
}

export const Header = ({
  cta = defaultNavigationCtas,
  navigation = defaultNativations,
}: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="flex items-center justify-between p-4 w-full">
      <Link className="font-bold text-lg" href="/">
        SubClub
      </Link>

      <div className="hidden md:flex md:w-full md:items-center md:justify-between md:ml-4 lg:ml-8">
        <nav id="navigation" className="flex items-center gap-3">
          {navigation.map((item, i) => (
            <NavigationItem
              key={item.label + i}
              {...item}
              isSelected={pathname === item.href}
            />
          ))}
        </nav>

        <nav id="cta" className="flex items-center gap-3">
          {cta.map((item, i) => (
            <NavigationItem key={item.label + i} {...item} />
          ))}
        </nav>
      </div>

      <button
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 z-50"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                  onClick={closeMenu}
                  aria-hidden="true"
                />

                <motion.aside
                  key="drawer"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="fixed top-0 left-0 w-3/4 max-w-sm h-screen bg-white z-50 flex flex-col items-center justify-center gap-6 shadow-xl"
                >
                  <nav
                    id="navigation-mobile"
                    className="flex flex-col items-center gap-4"
                  >
                    {navigation.map((item, i) => (
                      <NavigationItem
                        key={item.label + i}
                        {...item}
                        onClick={closeMenu}
                        isSelected={pathname === item.href}
                      />
                    ))}
                  </nav>
                  <nav
                    id="cta-mobile"
                    className="flex flex-col items-center gap-4"
                  >
                    {cta.map((item, i) => (
                      <NavigationItem
                        key={item.label + i}
                        {...item}
                        onClick={closeMenu}
                      />
                    ))}
                  </nav>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
};

type NavigationItemProps = {
  label: string;
  href: string;
  isButton?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
};

const NavigationItem = ({
  href,
  label,
  isButton,
  onClick,
  isSelected,
}: NavigationItemProps) => {
  if (isButton) {
    return (
      <ButtonPrimary onClick={onClick}>
        <Link href={href}>{label}</Link>
      </ButtonPrimary>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${isSelected ? 'text-app-green-500' : ''} hover:text-app-green-500 transition-colors duration-300 relative before:content-[''] before:absolute before:bottom-[2px] before:left-0 before:h-px before:transition-all before:duration-300 before:w-0 before:bg-app-green-500 hover:before:w-full`}
    >
      {label}
    </Link>
  );
};
