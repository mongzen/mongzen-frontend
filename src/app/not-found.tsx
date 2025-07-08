'use client';

import { WipeButton } from '@/components/ui';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-60 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl md:text-[200px] font-bold text-primary-50 opacity-20 leading-none">
            404
          </div>
        </div>

        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-danger-50/20 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-danger-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-0 mb-4 font-barlow">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-neutral-20 mb-8 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
          to another location.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <WipeButton
              variant="filled"
              color="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[160px]"
            >
              Go Home
            </WipeButton>
          </Link>

          <WipeButton
            variant="outline"
            color="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[160px]"
            onClick={() => window.history.back()}
          >
            Go Back
          </WipeButton>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-dark-15">
          <p className="text-neutral-30 mb-4">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-primary-50 hover:text-primary-40 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/service"
              className="text-primary-50 hover:text-primary-40 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/works"
              className="text-primary-50 hover:text-primary-40 transition-colors"
            >
              Our Works
            </Link>
            <Link
              href="/contact"
              className="text-primary-50 hover:text-primary-40 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: 'url(/images/squares.png) 0% 0% / 22px 22px repeat',
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
