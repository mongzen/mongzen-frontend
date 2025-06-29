'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  LoadingSpinner,
  TypographyShowcase,
  WipeButton,
} from '@/components/ui';
import ColorShowcase from '@/components/ui/ColorShowcase';
import { useHomePage } from '@/hooks/useApi';

export default function Home() {
  const { loading, error } = useHomePage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">Loading homepage content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center max-w-[1100px] mx-auto">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading homepage: {error}</p>
          <p className="text-gray-600 mb-4">
            Make sure your backend is running on{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              http://localhost:1337
            </code>
          </p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-[1100px] mx-auto">
      <div className="py-24">
        <div className="max-w-[1596px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-0 mb-4">
              Wipe Button Components
            </h2>
            <p className="text-xl text-neutral-20 max-w-3xl mx-auto">
              Interactive buttons with smooth left-to-right wipe animations
              using Framer Motion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Outline Variant */}
            <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
              <CardHeader>
                <CardTitle className="text-neutral-0 mb-4">
                  Outline Variant
                </CardTitle>
                <p className="text-neutral-30 text-sm">
                  Transparent background, colored border and text
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <WipeButton variant="outline" color="primary" size="sm">
                  Primary
                </WipeButton>
                <WipeButton variant="outline" color="secondary" size="sm">
                  Secondary
                </WipeButton>
                <WipeButton variant="outline" color="danger" size="sm">
                  Danger
                </WipeButton>
                <WipeButton variant="outline" color="success" size="sm">
                  Success
                </WipeButton>
              </CardContent>
            </Card>

            {/* Ghost Variant */}
            <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
              <CardHeader>
                <CardTitle className="text-neutral-0 mb-4">
                  Ghost Variant
                </CardTitle>
                <p className="text-neutral-30 text-sm">
                  No border, transparent background, colored text
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <WipeButton variant="ghost" color="primary" size="sm">
                  Primary
                </WipeButton>
                <WipeButton variant="ghost" color="secondary" size="sm">
                  Secondary
                </WipeButton>
                <WipeButton variant="ghost" color="danger" size="sm">
                  Danger
                </WipeButton>
                <WipeButton variant="ghost" color="success" size="sm">
                  Success
                </WipeButton>
              </CardContent>
            </Card>

            {/* Filled Variant */}
            <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
              <CardHeader>
                <CardTitle className="text-neutral-0 mb-4">
                  Filled Variant
                </CardTitle>
                <p className="text-neutral-30 text-sm">
                  Filled background with contrast text
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <WipeButton variant="filled" color="primary" size="sm">
                  Primary
                </WipeButton>
                <WipeButton variant="filled" color="secondary" size="sm">
                  Secondary
                </WipeButton>
                <WipeButton variant="filled" color="danger" size="sm">
                  Danger
                </WipeButton>
                <WipeButton variant="filled" color="success" size="sm">
                  Success
                </WipeButton>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
              All Color Variations
            </h3>
            <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
              Complete color palette showcase with outline variant
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <WipeButton variant="outline" color="primary" size="sm">
                Primary
              </WipeButton>
              <WipeButton variant="outline" color="secondary" size="sm">
                Secondary
              </WipeButton>
              <WipeButton variant="outline" color="accent" size="sm">
                Accent
              </WipeButton>
              <WipeButton variant="outline" color="warning" size="sm">
                Warning
              </WipeButton>
              <WipeButton variant="outline" color="danger" size="sm">
                Danger
              </WipeButton>
              <WipeButton variant="outline" color="success" size="sm">
                Success
              </WipeButton>
              <WipeButton variant="outline" color="info" size="sm">
                Info
              </WipeButton>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
              Custom Examples
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <WipeButton
                variant="outline"
                onClick={() => alert('Inquire clicked!')}
              >
                Inquire
              </WipeButton>
              <WipeButton
                variant="filled"
                color="primary"
                onClick={() => alert('Get Quote clicked!')}
              >
                Get Quote
              </WipeButton>
              <WipeButton
                variant="filled"
                color="secondary"
                onClick={() => alert('Schedule Call clicked!')}
              >
                Schedule Call
              </WipeButton>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
              Character Animation Demo
            </h3>
            <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
              Each character animates individually with staggered timing. Hover
              over the buttons to see the character-by-character wipe effect.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <WipeButton variant="outline" size="sm">
                Hi
              </WipeButton>
              <WipeButton variant="outline" size="md">
                Hello
              </WipeButton>
              <WipeButton variant="outline" size="lg">
                Welcome
              </WipeButton>
              <WipeButton variant="filled" color="primary" size="md">
                Contact Us
              </WipeButton>
              <WipeButton variant="filled" color="secondary" size="md">
                Let&apos;s Talk
              </WipeButton>
              <WipeButton variant="outline" size="lg">
                Get Started Today
              </WipeButton>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
              Left-to-Right Reveal Effect
            </h3>
            <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
              Background wipes left-to-right, characters reveal with 100ms delay
              from bottom-to-top. Original text moves up while new text slides
              up from below.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <WipeButton variant="outline" size="md">
                INQUIRE
              </WipeButton>
              <WipeButton variant="filled" color="primary" size="md">
                DISCOVER
              </WipeButton>
              <WipeButton variant="filled" color="secondary" size="md">
                EXPLORE
              </WipeButton>
              <WipeButton variant="outline" size="lg">
                INNOVATION
              </WipeButton>
            </div>
          </div>
        </div>
      </div>
      <TypographyShowcase />
      <ColorShowcase />
    </div>
  );
}
