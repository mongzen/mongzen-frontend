import React from 'react';

const ColorShowcase: React.FC = () => {
  const colorCategories = [
    {
      name: 'Primary (Electric Green)',
      colors: [
        {
          name: 'primary-50',
          value: 'var(--color-primary-50)',
          hex: '#9EFF00',
        },
        {
          name: 'primary-60',
          value: 'var(--color-primary-60)',
          hex: '#B1FF33',
        },
        {
          name: 'primary-70',
          value: 'var(--color-primary-70)',
          hex: '#C5FF66',
        },
        {
          name: 'primary-80',
          value: 'var(--color-primary-80)',
          hex: '#D8FF99',
        },
        {
          name: 'primary-90',
          value: 'var(--color-primary-90)',
          hex: '#ECFFCC',
        },
        {
          name: 'primary-95',
          value: 'var(--color-primary-95)',
          hex: '#F5FFE5',
        },
      ],
    },
    {
      name: 'Secondary (Electric Blue)',
      colors: [
        {
          name: 'secondary-50',
          value: 'var(--color-secondary-50)',
          hex: '#00D4FF',
        },
        {
          name: 'secondary-60',
          value: 'var(--color-secondary-60)',
          hex: '#33DDFF',
        },
        {
          name: 'secondary-70',
          value: 'var(--color-secondary-70)',
          hex: '#66E6FF',
        },
        {
          name: 'secondary-80',
          value: 'var(--color-secondary-80)',
          hex: '#99EFFF',
        },
        {
          name: 'secondary-90',
          value: 'var(--color-secondary-90)',
          hex: '#CCF7FF',
        },
        {
          name: 'secondary-95',
          value: 'var(--color-secondary-95)',
          hex: '#E5FBFF',
        },
      ],
    },
    {
      name: 'Accent (Electric Purple)',
      colors: [
        { name: 'accent-50', value: 'var(--color-accent-50)', hex: '#9D00FF' },
        { name: 'accent-60', value: 'var(--color-accent-60)', hex: '#B133FF' },
        { name: 'accent-70', value: 'var(--color-accent-70)', hex: '#C566FF' },
        { name: 'accent-80', value: 'var(--color-accent-80)', hex: '#D999FF' },
        { name: 'accent-90', value: 'var(--color-accent-90)', hex: '#ECCCFF' },
        { name: 'accent-95', value: 'var(--color-accent-95)', hex: '#F5E5FF' },
      ],
    },
    {
      name: 'Warning (Electric Yellow)',
      colors: [
        {
          name: 'warning-50',
          value: 'var(--color-warning-50)',
          hex: '#FFE500',
        },
        {
          name: 'warning-60',
          value: 'var(--color-warning-60)',
          hex: '#FFEA33',
        },
        {
          name: 'warning-70',
          value: 'var(--color-warning-70)',
          hex: '#FFEF66',
        },
        {
          name: 'warning-80',
          value: 'var(--color-warning-80)',
          hex: '#FFF499',
        },
        {
          name: 'warning-90',
          value: 'var(--color-warning-90)',
          hex: '#FFF9CC',
        },
        {
          name: 'warning-95',
          value: 'var(--color-warning-95)',
          hex: '#FFFCE5',
        },
      ],
    },
    {
      name: 'Danger (Electric Red)',
      colors: [
        { name: 'danger-50', value: 'var(--color-danger-50)', hex: '#FF3D00' },
        { name: 'danger-60', value: 'var(--color-danger-60)', hex: '#FF6433' },
        { name: 'danger-70', value: 'var(--color-danger-70)', hex: '#FF8A66' },
        { name: 'danger-80', value: 'var(--color-danger-80)', hex: '#FFB199' },
        { name: 'danger-90', value: 'var(--color-danger-90)', hex: '#FFD7CC' },
        { name: 'danger-95', value: 'var(--color-danger-95)', hex: '#FFEBE5' },
      ],
    },
    {
      name: 'Success (Electric Green Variant)',
      colors: [
        {
          name: 'success-50',
          value: 'var(--color-success-50)',
          hex: '#00FF7A',
        },
        {
          name: 'success-60',
          value: 'var(--color-success-60)',
          hex: '#33FF95',
        },
        {
          name: 'success-70',
          value: 'var(--color-success-70)',
          hex: '#66FFAF',
        },
        {
          name: 'success-80',
          value: 'var(--color-success-80)',
          hex: '#99FFCA',
        },
        {
          name: 'success-90',
          value: 'var(--color-success-90)',
          hex: '#CCFFE4',
        },
        {
          name: 'success-95',
          value: 'var(--color-success-95)',
          hex: '#E5FFF2',
        },
      ],
    },
    {
      name: 'Info (Electric Cyan)',
      colors: [
        { name: 'info-50', value: 'var(--color-info-50)', hex: '#00FFFF' },
        { name: 'info-60', value: 'var(--color-info-60)', hex: '#33FFFF' },
        { name: 'info-70', value: 'var(--color-info-70)', hex: '#66FFFF' },
        { name: 'info-80', value: 'var(--color-info-80)', hex: '#99FFFF' },
        { name: 'info-90', value: 'var(--color-info-90)', hex: '#CCFFFF' },
        { name: 'info-95', value: 'var(--color-info-95)', hex: '#E5FFFF' },
      ],
    },
    {
      name: 'Neutral Colors',
      colors: [
        { name: 'neutral-0', value: 'var(--color-neutral-0)', hex: '#FFFFFF' },
        {
          name: 'neutral-10',
          value: 'var(--color-neutral-10)',
          hex: '#F2F2F2',
        },
        {
          name: 'neutral-20',
          value: 'var(--color-neutral-20)',
          hex: '#CCCCCC',
        },
        {
          name: 'neutral-30',
          value: 'var(--color-neutral-30)',
          hex: '#999999',
        },
        {
          name: 'neutral-40',
          value: 'var(--color-neutral-40)',
          hex: '#666666',
        },
        {
          name: 'neutral-50',
          value: 'var(--color-neutral-50)',
          hex: '#333333',
        },
        {
          name: 'neutral-60',
          value: 'var(--color-neutral-60)',
          hex: '#1A1A1A',
        },
        {
          name: 'neutral-70',
          value: 'var(--color-neutral-70)',
          hex: '#000000',
        },
      ],
    },
  ];

  return (
    <div className="space-y-8 p-6 bg-white min-h-screen">
      <div className="text-center mb-8">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--color-neutral-70)' }}
        >
          Digital Agency Color Palette
        </h2>
        <p className="text-lg" style={{ color: 'var(--color-neutral-40)' }}>
          Electric, vibrant colors for modern digital experiences
        </p>
      </div>

      {colorCategories.map((category) => (
        <div key={category.name} className="space-y-4">
          <h3
            className="text-2xl font-semibold"
            style={{ color: 'var(--color-neutral-50)' }}
          >
            {category.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.colors.map((color) => (
              <div key={color.name} className="space-y-3">
                <div
                  className="w-full h-24 rounded-xl border-2 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: color.value,
                    borderColor: 'var(--color-neutral-20)',
                  }}
                />
                <div className="text-sm space-y-1">
                  <div
                    className="font-semibold"
                    style={{ color: 'var(--color-neutral-50)' }}
                  >
                    {color.name}
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{ color: 'var(--color-neutral-40)' }}
                  >
                    {color.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage Examples */}
      <div className="space-y-8 mt-16">
        <h3
          className="text-2xl font-semibold"
          style={{ color: 'var(--color-neutral-50)' }}
        >
          Usage Examples
        </h3>

        {/* Button Examples */}
        <div className="space-y-4">
          <h4
            className="text-lg font-medium"
            style={{ color: 'var(--color-neutral-50)' }}
          >
            Buttons
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-neutral-70)',
              }}
            >
              Primary Action
            </button>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-neutral-0)',
              }}
            >
              Secondary Action
            </button>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-neutral-0)',
              }}
            >
              Accent Action
            </button>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-warning)',
                color: 'var(--color-neutral-70)',
              }}
            >
              Warning Action
            </button>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-danger)',
                color: 'var(--color-neutral-0)',
              }}
            >
              Delete Action
            </button>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-success)',
                color: 'var(--color-neutral-70)',
              }}
            >
              Success Action
            </button>
          </div>
        </div>

        {/* Alert Examples */}
        <div className="space-y-4">
          <h4
            className="text-lg font-medium"
            style={{ color: 'var(--color-neutral-50)' }}
          >
            Alerts & Notifications
          </h4>
          <div className="space-y-4">
            <div
              className="p-4 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-info-95)',
                borderLeftColor: 'var(--color-info)',
                color: 'var(--color-neutral-60)',
              }}
            >
              <div className="font-semibold">Information</div>
              <div className="text-sm mt-1">
                This is an informational message using the info color palette.
              </div>
            </div>

            <div
              className="p-4 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-success-95)',
                borderLeftColor: 'var(--color-success)',
                color: 'var(--color-neutral-60)',
              }}
            >
              <div className="font-semibold">Success</div>
              <div className="text-sm mt-1">
                Operation completed successfully! Your changes have been saved.
              </div>
            </div>

            <div
              className="p-4 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-warning-95)',
                borderLeftColor: 'var(--color-warning)',
                color: 'var(--color-neutral-60)',
              }}
            >
              <div className="font-semibold">Warning</div>
              <div className="text-sm mt-1">
                Please review your input before proceeding with this action.
              </div>
            </div>

            <div
              className="p-4 rounded-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-danger-95)',
                borderLeftColor: 'var(--color-danger)',
                color: 'var(--color-neutral-60)',
              }}
            >
              <div className="font-semibold">Error</div>
              <div className="text-sm mt-1">
                Something went wrong. Please try again or contact support.
              </div>
            </div>
          </div>
        </div>

        {/* Card Examples */}
        <div className="space-y-4">
          <h4
            className="text-lg font-medium"
            style={{ color: 'var(--color-neutral-50)' }}
          >
            Cards & Components
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: 'var(--color-primary-95)',
                borderColor: 'var(--color-primary-70)',
                borderWidth: '2px',
              }}
            >
              <h5
                className="font-bold text-lg mb-2"
                style={{ color: 'var(--color-neutral-70)' }}
              >
                Primary Card
              </h5>
              <p
                className="text-sm"
                style={{ color: 'var(--color-neutral-50)' }}
              >
                This card uses the primary color scheme for highlighting
                important content.
              </p>
            </div>

            <div
              className="p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: 'var(--color-secondary-95)',
                borderColor: 'var(--color-secondary-70)',
                borderWidth: '2px',
              }}
            >
              <h5
                className="font-bold text-lg mb-2"
                style={{ color: 'var(--color-neutral-70)' }}
              >
                Secondary Card
              </h5>
              <p
                className="text-sm"
                style={{ color: 'var(--color-neutral-50)' }}
              >
                This card uses the secondary color scheme for supporting
                content.
              </p>
            </div>

            <div
              className="p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: 'var(--color-accent-95)',
                borderColor: 'var(--color-accent-70)',
                borderWidth: '2px',
              }}
            >
              <h5
                className="font-bold text-lg mb-2"
                style={{ color: 'var(--color-neutral-70)' }}
              >
                Accent Card
              </h5>
              <p
                className="text-sm"
                style={{ color: 'var(--color-neutral-50)' }}
              >
                This card uses the accent color scheme for special features.
              </p>
            </div>
          </div>
        </div>

        {/* Typography Examples */}
        <div className="space-y-4">
          <h4
            className="text-lg font-medium"
            style={{ color: 'var(--color-neutral-50)' }}
          >
            Typography Hierarchy
          </h4>
          <div className="space-y-3">
            <h1
              className="text-4xl font-bold"
              style={{ color: 'var(--color-neutral-70)' }}
            >
              Heading 1 - Primary Text
            </h1>
            <h2
              className="text-3xl font-bold"
              style={{ color: 'var(--color-neutral-60)' }}
            >
              Heading 2 - Secondary Text
            </h2>
            <h3
              className="text-2xl font-semibold"
              style={{ color: 'var(--color-neutral-50)' }}
            >
              Heading 3 - Tertiary Text
            </h3>
            <p className="text-lg" style={{ color: 'var(--color-neutral-40)' }}>
              Body text - Regular paragraph content that&apos;s easy to read and
              provides good contrast.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-neutral-30)' }}>
              Small text - Captions, labels, and secondary information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase;
