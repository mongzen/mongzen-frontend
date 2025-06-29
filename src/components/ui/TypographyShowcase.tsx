import React from 'react';
import { Icon } from './Icon';

const TypographyShowcase: React.FC = () => {
  return (
    <div className="space-y-12 p-6 bg-neutral-60 min-h-screen">
      <div className="text-center mb-8">
        <h1
          className="text-heading mb-4"
          style={{ color: 'var(--color-neutral-70)' }}
        >
          Typography & Icons Showcase
        </h1>
        <p
          className="text-paragraph"
          style={{ color: 'var(--color-neutral-40)' }}
        >
          Demonstrating Barlow font with custom typography scale and Heroicons
          integration
        </p>
      </div>

      {/* Typography Scale */}
      <section className="space-y-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Typography Scale
        </h2>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Heading Style (48px)
            </h3>
            <h1
              className="text-heading"
              style={{ color: 'var(--color-neutral-70)' }}
            >
              Transform Your Digital Presence
            </h1>
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              .text-heading (48px, font-weight: 700)
            </code>
          </div>

          <div className="space-y-3">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Paragraph Style (20px / 14px mobile)
            </h3>
            <p
              className="text-paragraph"
              style={{ color: 'var(--color-neutral-40)' }}
            >
              We create digital experiences that help businesses grow and
              connect with their audience in meaningful ways. Our team combines
              creativity with technical expertise to deliver solutions that make
              a real impact.
            </p>
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              .text-paragraph (20px desktop, 14px mobile, font-weight: 400)
            </code>
          </div>

          <div className="space-y-3">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Button Text Style (18px)
            </h3>
            <div
              className="text-button"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Get Started Today
            </div>
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              .text-button (18px, font-weight: 600)
            </code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Barlow Font Weights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Regular (400)</h4>
            <p
              className="text-xl font-regular"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Regular Weight Text
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Medium (500)</h4>
            <p
              className="text-xl font-medium"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Medium Weight Text
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">
              Semi Bold (600)
            </h4>
            <p
              className="text-xl font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Semi Bold Weight Text
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Bold (700)</h4>
            <p
              className="text-xl font-bold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Bold Weight Text
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">
              Extra Bold (800)
            </h4>
            <p
              className="text-xl font-extrabold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Extra Bold Weight Text
            </p>
          </div>
        </div>
      </section>

      {/* Heroicons Showcase */}
      <section className="space-y-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Heroicons Integration
        </h2>

        <div className="space-y-6">
          {/* Icon Sizes */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Icon Sizes
            </h3>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HomeIcon" size="sm" />
                <span className="text-sm text-gray-600">Small (16px)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HomeIcon" size="md" />
                <span className="text-sm text-gray-600">Medium (24px)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HomeIcon" size="lg" />
                <span className="text-sm text-gray-600">Large (32px)</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HomeIcon" size="xl" />
                <span className="text-sm text-gray-600">
                  Extra Large (48px)
                </span>
              </div>
            </div>
          </div>

          {/* Icon Variants */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Icon Variants
            </h3>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HeartIcon" variant="outline" size="lg" />
                <span className="text-sm text-gray-600">Outline</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="HeartIcon" variant="solid" size="lg" />
                <span className="text-sm text-gray-600">Solid</span>
              </div>
            </div>
          </div>

          {/* Common Icons Grid */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Common Icons
            </h3>
            <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6">
              {[
                'HomeIcon',
                'UserIcon',
                'EnvelopeIcon',
                'PhoneIcon',
                'MapPinIcon',
                'ArrowRightIcon',
                'ChevronDownIcon',
                'XMarkIcon',
                'Bars3Icon',
                'StarIcon',
                'HeartIcon',
                'ShareIcon',
                'MagnifyingGlassIcon',
                'ShoppingCartIcon',
                'ClockIcon',
                'CalendarIcon',
                'ComputerDesktopIcon',
                'DevicePhoneMobileIcon',
                'GlobeAltIcon',
                'CloudIcon',
                'CogIcon',
                'CodeBracketIcon',
                'RocketLaunchIcon',
                'LightBulbIcon',
              ].map((iconName) => (
                <div
                  key={iconName}
                  className="flex flex-col items-center space-y-2"
                >
                  <Icon
                    name={
                      iconName as keyof typeof import('@heroicons/react/24/outline')
                    }
                    size="lg"
                    className="text-gray-600 hover:text-primary-50 transition-colors cursor-pointer"
                  />
                  <span className="text-xs text-gray-500 text-center">
                    {iconName.replace('Icon', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Button Examples with Icons */}
      <section className="space-y-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Buttons with Typography & Icons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-neutral-70)',
            }}
          >
            <Icon name="RocketLaunchIcon" size="sm" />
            <span>Get Started</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-neutral-0)',
            }}
          >
            <Icon name="EnvelopeIcon" size="sm" />
            <span>Contact Us</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-neutral-0)',
            }}
          >
            <Icon name="PlayIcon" size="sm" />
            <span>Watch Demo</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-success)',
              color: 'var(--color-neutral-70)',
            }}
          >
            <Icon name="CheckIcon" size="sm" />
            <span>Complete</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-warning)',
              color: 'var(--color-neutral-70)',
            }}
          >
            <Icon name="ExclamationTriangleIcon" size="sm" />
            <span>Warning</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-button transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--color-danger)',
              color: 'var(--color-neutral-0)',
            }}
          >
            <Icon name="TrashIcon" size="sm" />
            <span>Delete</span>
          </button>
        </div>
      </section>

      {/* Mobile Responsive Demo */}
      <section className="space-y-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Mobile Responsive Typography
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-paragraph text-gray-600 mb-4">
            <strong>Note:</strong> The paragraph text automatically adjusts from
            20px on desktop to 14px on mobile devices. Resize your browser
            window or view on a mobile device to see the responsive behavior.
          </p>

          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h3
              className="text-heading mb-3"
              style={{ color: 'var(--color-neutral-70)' }}
            >
              Responsive Text Example
            </h3>
            <p
              className="text-paragraph"
              style={{ color: 'var(--color-neutral-40)' }}
            >
              This paragraph demonstrates the responsive typography. On desktop
              (768px+), this text is displayed at 20px. On mobile devices (below
              768px), it automatically scales down to 14px for better
              readability on smaller screens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypographyShowcase;
