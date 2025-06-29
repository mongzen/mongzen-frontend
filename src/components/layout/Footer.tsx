'use client';

import { Social } from '@/components/ui';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'UserIcon' },
    { name: 'Services', href: '/services', icon: 'CogIcon' },
    { name: 'Projects', href: '/projects', icon: 'RocketLaunchIcon' },
    { name: 'Contact', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  return (
    <footer
      className="bg-dark-10 min-h-[335px] py-12"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-[200px] h-[56px] rounded-xl flex items-center justify-center">
              <Link href={'/'}>
                <Image
                  src="/logo.svg"
                  alt="Digital Agency Logo"
                  width={200}
                  height={56}
                  className="w-[200px] h-[56px]"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" style={{ gap: '30px' }}>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'flex items-center justify-center text-lg font-medium transition-all duration-300 group relative overflow-hidden',
                    isActive ? 'text-white' : 'text-dark-90 hover:text-white'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="flex items-center">
            <Social size="md" showLabel={true} />
          </div>
        </div>
      </div>
    </footer>
  );
}
