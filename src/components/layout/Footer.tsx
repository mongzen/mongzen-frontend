import { StayConnectLinks } from '@/components/ui';
import { GlobalSettings } from '@/types';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  data: GlobalSettings | null;
}

export function Footer(props: FooterProps) {
  const globalData = props.data;
  // const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'UserIcon' },
    { name: 'Services', href: '/service', icon: 'CogIcon' },
    { name: 'Works', href: '/works', icon: 'RocketLaunchIcon' },
    { name: 'Process', href: '/process', icon: 'ArrowPathIcon' },
    { name: 'Contact', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  return (
    <footer
      className="bg-dark-10 min-h-[200px] sm:min-h-[250px] lg:min-h-[335px] py-6 sm:py-8 lg:py-12 max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col gap-6 sm:gap-8 lg:gap-[50px]"
      aria-labelledby="footer-heading"
    >
      {/* Top Section: Logo, Navigation, and Social Links */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0 min-h-[56px] lg:h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
          <Link href={'/'} className="block">
            <Image
              src="/logo.svg"
              alt="Mongzen Logo"
              width={200}
              height={56}
              className="w-[150px] h-[42px] sm:w-[180px] sm:h-[50px] lg:w-[200px] lg:h-[56px]"
              priority
            />
          </Link>
        </div>

        {/* Mobile/Tablet Navigation */}
        <nav className="flex lg:hidden flex-wrap items-center justify-center gap-4 sm:gap-6">
          {navigation.map((item) => {
            // const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg'
                  // isActive
                  //   ? 'text-white bg-primary/10'
                  //   : 'text-dark-90 hover:text-white hover:bg-dark-15'
                )}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[30px]">
          {navigation.map((item) => {
            // const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'flex items-center justify-center text-lg font-medium transition-all duration-300 group relative overflow-hidden px-4 py-2 rounded-lg'
                  // isActive
                  //   ? 'text-white bg-primary/10'
                  //   : 'text-dark-90 hover:text-white hover:bg-dark-15'
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center lg:justify-end">
          {/* Stay Connected */}
          {globalData?.stayConnect && (
            <StayConnectLinks data={globalData?.stayConnect} />
          )}
        </div>
      </div>

      <hr className="border-dark-15" />

      {/* Contact Info */}
      <div className="contact-info flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-[30px]">
        <div className="flex items-center gap-2 sm:gap-[10px] min-w-0">
          <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-contact text-sm sm:text-base truncate">
            mongzen.2025@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-[10px] min-w-0">
          <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-contact text-sm sm:text-base">
            +88(TH) 86772 5569
          </span>
        </div>
      </div>
    </footer>
  );
}
