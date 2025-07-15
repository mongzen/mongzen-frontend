import { PageHeader, WipeButton, WorkCard } from '@/components/ui';
import { DEFAULTS } from '@/constants';
import { getGlobalSettings, getWorkPage } from '@/services/apiServer';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Link from 'next/link';

export default async function Works() {
  const resGlobalData = await getGlobalSettings();
  const globalData = resGlobalData?.data;
  const resWorkData = await getWorkPage();
  const workData = resWorkData?.data;
  const error = !globalData && !workData;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading works: {error}</p>
          <p className="text-neutral-20 mb-4">
            Make sure your backend is running on{' '}
            <code className="bg-neutral-50/20 px-2 py-1 rounded text-primary-50">
              {process.env.NEXT_PUBLIC_API_URL || DEFAULTS.API_URL}
            </code>
          </p>
          <Link href="/works">
            <WipeButton variant="filled" color="danger">
              Try Again
            </WipeButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Section Banner */}
      <section className="border-0 sm:border-x border-dark-15">
        <PageHeader
          title={workData?.SectionBanner.title || 'Our Works'}
          subtitle={
            workData?.SectionBanner.subtitle ||
            'Showcase of our creative projects and achievements'
          }
          backgroundImage={formatImageUrl(
            workData?.SectionBanner.background?.url
          )}
          icon={formatImageUrl(workData?.SectionBanner.icon?.url)}
        />
      </section>

      {/* Our Works Section */}
      {workData?.OurWorks && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            {/* Section Header */}
            <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 space-y-3.5 border-b border-dark-15">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-0 mb-4 sm:mb-6">
                {workData.OurWorks.title}
              </h2>
              {workData.OurWorks.description && (
                <p className="text-base sm:text-lg text-dark-90 leading-relaxed">
                  {workData.OurWorks.description}
                </p>
              )}
              <div className="flex items-center">
                <span className="rounded-lg bg-dark-15 flex py-3 px-3.5 justify-center items-center">
                  {workData.OurWorks.intro_cta}
                </span>
              </div>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-dark-15">
              {workData.workList.map((work, workIndex: number) => (
                <WorkCard
                  key={work.id}
                  title={work.title}
                  name={work.name}
                  image={work.image}
                  link={work.link}
                  description={work.description}
                  className={clsx(
                    'border-dark-15',
                    // Mobile: all cards have bottom border except last
                    workIndex < workData.workList.length - 1 &&
                      'border-b md:border-b-0',
                    // Tablet: right card has left border
                    workIndex % 2 === 1 && 'md:border-l'
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {globalData?.ProjectCTA && (
        <section className="border-x-0 sm:border-x border-b border-dark-15">
          <div className="mx-auto">
            <PageHeader
              title={
                globalData?.ProjectCTA.title || 'Ready to Start Your Project?'
              }
              subtitle={
                globalData?.ProjectCTA.subtitle ||
                'Let us help you bring your vision to life'
              }
              backgroundImage={formatImageUrl(
                globalData?.ProjectCTA.background?.url
              )}
              icon={formatImageUrl(globalData?.ProjectCTA.icon?.url)}
              className="lg:py-[120px] lg:space-y-10 space-y-4 py-10 !border-b-0 md:px-16 xl:px-[350px] px-10"
            >
              <Link href={globalData?.ProjectCTA.button_link || '#'}>
                <WipeButton
                  variant="filled"
                  color="primary"
                  size="lg"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-w-[160px]"
                >
                  {globalData?.ProjectCTA.button_text || 'Get Started'}
                </WipeButton>
              </Link>
            </PageHeader>
          </div>
        </section>
      )}
    </div>
  );
}
