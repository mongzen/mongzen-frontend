'use client';

import { Button, Icon } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'UserIcon' },
    { name: 'Services', href: '/services', icon: 'CogIcon' },
    { name: 'Projects', href: '/projects', icon: 'RocketLaunchIcon' },
    { name: 'Contact', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  return (
    <header className="bg-neutral-60/95 backdrop-blur-xl border-b border-neutral-50/20 sticky top-0 z-50 shadow-lg shadow-neutral-60/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-neutral-15 hover:text-primary-50 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-neutral-50/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50/10 to-secondary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <Icon
                  name={item.icon as any}
                  size="sm"
                  className="opacity-70 group-hover:opacity-100 transition-all duration-300 relative z-10"
                />
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-neutral-30 text-neutral-15 hover:border-primary-50 hover:text-primary-50 hover:bg-primary-50/5 transition-all duration-300"
            >
              <Icon name="PhoneIcon" size="sm" className="mr-2" />
              Let&apos;s Talk
            </Button>
            <Button
              variant="primary"
              className="bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-60 hover:to-secondary-60 text-neutral-60 font-semibold shadow-xl shadow-primary-50/30 hover:shadow-2xl hover:shadow-primary-50/40 transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="RocketLaunchIcon" size="sm" className="mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-15 hover:text-primary-50 p-2 rounded-xl hover:bg-neutral-50/10 transition-all duration-300 relative overflow-hidden group"
              aria-label="Toggle mobile menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/10 to-secondary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size="md"
                className="relative z-10"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-50/20 pt-4 pb-6 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-neutral-15 hover:text-primary-50 px-4 py-3 text-base font-medium rounded-xl hover:bg-neutral-50/10 transition-all duration-300 group relative overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50/10 to-secondary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <Icon
                    name={item.icon as any}
                    size="sm"
                    className="opacity-70 group-hover:opacity-100 transition-all duration-300 relative z-10"
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-neutral-30 text-neutral-15 hover:border-primary-50 hover:text-primary-50 hover:bg-primary-50/5 transition-all duration-300"
                >
                  <Icon name="PhoneIcon" size="sm" className="mr-2" />
                  Let&apos;s Talk
                </Button>
                <Button
                  variant="primary"
                  className="w-full bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-60 hover:to-secondary-60 text-neutral-60 font-semibold shadow-xl shadow-primary-50/30 transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="RocketLaunchIcon" size="sm" className="mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
