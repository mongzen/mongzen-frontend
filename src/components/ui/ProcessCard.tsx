import clsx from 'clsx';

interface ProcessCardProps {
  title: string;
  name: string;
  description: string;
  className?: string;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  name,
  description,
  className = '',
}) => {
  const CardContent = () => (
    <div
      className={clsx(
        'flex flex-col justify-between transition-colors duration-300 space-y-8 lg:space-y-16 lg:py-24 py-12',
        className
      )}
    >
      {/* Process Title with special styling */}
      <div className="flex items-end px-4 sm:px-6 lg:px-12">
        <h3 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-barlow font-semibold leading-none text-primary-80 mb-[-15px]">
          {title}
        </h3>
        <div className="flex items-center justify-between group pb-6 pl-2.5 flex-1 border-b border-dark-15">
          <div className="flex-1 space-y-6">
            {/* Process Name with special styling */}
            <h4
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-barlow font-medium leading-none"
              style={{
                color: 'var(--color-dark-60)',
              }}
            >
              {name}
            </h4>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 flex flex-col">
        {/* Content */}
        <div className="flex-1 space-y-6 pb-6">
          {/* Description with special styling */}
          <div
            className="text-[18px] leading-[150%] font-normal font-sans"
            style={{
              color: 'var(--color-dark-60)',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="block border-b border-dark-15">
      <CardContent />
    </div>
  );
};

export default ProcessCard;
