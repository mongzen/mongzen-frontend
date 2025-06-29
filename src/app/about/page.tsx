'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  LoadingSpinner,
} from '@/components/ui';
import { useAboutPage } from '@/hooks/useApi';
import { getImageUrl } from '@/utils';
import Image from 'next/image';

export default function AboutPage() {
  const { data: aboutData, loading, error } = useAboutPage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600">Loading about page content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading about page: {error}</p>
          <p className="text-gray-600">
            Make sure your Strapi backend is running on{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              http://localhost:1337
            </code>
          </p>
        </div>
      </div>
    );
  }

  // Fallback content when Strapi is not available
  const fallbackData = {
    title: 'About Digital Agency',
    description: 'We are a team of passionate developers and designers',
    content:
      'Founded in 2020, Digital Agency has been at the forefront of digital innovation. We specialize in creating beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed in the digital world.',
  };

  const displayData = aboutData?.attributes || fallbackData;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {displayData.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {displayData.description}
          </p>
          {aboutData?.attributes?.hero_image?.data &&
            !Array.isArray(aboutData.attributes.hero_image.data) && (
              <div className="relative max-w-4xl mx-auto">
                <Image
                  src={getImageUrl(
                    aboutData.attributes.hero_image.data.attributes.url
                  )}
                  alt={
                    aboutData.attributes.hero_image.data.attributes
                      .alternativeText || 'About Us'
                  }
                  width={800}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            )}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              {displayData.content}
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData?.attributes?.team_members?.data ? (
              aboutData.attributes.team_members.data.map((member) => (
                <Card key={member.id} className="text-center">
                  <CardHeader>
                    {member.attributes.avatar?.data &&
                      !Array.isArray(member.attributes.avatar.data) && (
                        <div className="w-24 h-24 mx-auto mb-4">
                          <Image
                            src={getImageUrl(
                              member.attributes.avatar.data.attributes.url
                            )}
                            alt={
                              member.attributes.avatar.data.attributes
                                .alternativeText || member.attributes.name
                            }
                            width={96}
                            height={96}
                            className="rounded-full object-cover"
                          />
                        </div>
                      )}
                    <CardTitle>{member.attributes.name}</CardTitle>
                    <p className="text-blue-600 font-medium">
                      {member.attributes.position}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.attributes.bio}</p>
                    {member.attributes.social_links && (
                      <div className="flex justify-center space-x-4 mt-4">
                        {member.attributes.social_links.linkedin && (
                          <a
                            href={member.attributes.social_links.linkedin}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            LinkedIn
                          </a>
                        )}
                        {member.attributes.social_links.twitter && (
                          <a
                            href={member.attributes.social_links.twitter}
                            className="text-blue-400 hover:text-blue-600"
                          >
                            Twitter
                          </a>
                        )}
                        {member.attributes.social_links.github && (
                          <a
                            href={member.attributes.social_links.github}
                            className="text-gray-700 hover:text-gray-900"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              // Fallback team members
              <>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl">👨‍💻</span>
                    </div>
                    <CardTitle>John Doe</CardTitle>
                    <p className="text-blue-600 font-medium">Lead Developer</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Passionate full-stack developer with 8+ years of
                      experience building scalable web applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl">👩‍🎨</span>
                    </div>
                    <CardTitle>Jane Smith</CardTitle>
                    <p className="text-blue-600 font-medium">UI/UX Designer</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Creative designer focused on user-centered design and
                      creating beautiful, intuitive interfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl">👨‍💼</span>
                    </div>
                    <CardTitle>Mike Johnson</CardTitle>
                    <p className="text-blue-600 font-medium">Project Manager</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Experienced project manager ensuring smooth delivery and
                      client satisfaction on every project.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of the curve by embracing new technologies and
                creative solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code
                to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work closely with our clients as partners to achieve their
                business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
