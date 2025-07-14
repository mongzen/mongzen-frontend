/* eslint-disable  @typescript-eslint/no-explicit-any */
import { PortableTextBlock } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

const PortableText = ({ value }: { value: PortableTextBlock[] }) => {
  // Safety check for empty or invalid value
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }
  const renderText = (child: any, childIndex: number) => {
    if (!child || typeof child !== 'object') {
      return child;
    }

    let text = child.text || '';

    // Handle different text elements
    if (child.type === 'text') {
      // Handle text formatting
      if (child.bold) {
        text = (
          <strong key={childIndex} className="font-bold">
            {text}
          </strong>
        );
      }
      if (child.italic) {
        text = (
          <em key={childIndex} className="italic">
            {text}
          </em>
        );
      }
      if (child.underline) {
        text = (
          <u key={childIndex} className="underline">
            {text}
          </u>
        );
      }
      if (child.strikethrough) {
        text = (
          <s key={childIndex} className="line-through">
            {text}
          </s>
        );
      }
      if (child.code) {
        text = (
          <code
            key={childIndex}
            className="bg-dark-20 text-primary-80 px-2 py-1 rounded text-sm font-mono"
          >
            {text}
          </code>
        );
      }

      // Handle links
      if (child.link) {
        text = (
          <a
            key={childIndex}
            href={child.link.href}
            target={child.link.blank ? '_blank' : '_self'}
            rel={child.link.blank ? 'noopener noreferrer' : undefined}
            className="text-primary-80 hover:text-primary-60 underline transition-colors duration-200"
          >
            {text}
          </a>
        );
      }

      // Handle highlight/mark
      if (child.highlight) {
        text = (
          <mark
            key={childIndex}
            className="bg-yellow-200 text-dark-100 px-1 rounded"
          >
            {text}
          </mark>
        );
      }

      // Handle superscript and subscript
      if (child.superscript) {
        text = (
          <sup key={childIndex} className="text-xs">
            {text}
          </sup>
        );
      }
      if (child.subscript) {
        text = (
          <sub key={childIndex} className="text-xs">
            {text}
          </sub>
        );
      }

      // Handle color and style
      if (child.color) {
        text = (
          <span key={childIndex} style={{ color: child.color }}>
            {text}
          </span>
        );
      }

      // Handle custom classes
      if (child.className) {
        text = (
          <span key={childIndex} className={child.className}>
            {text}
          </span>
        );
      }
    }

    return text;
  };

  const renderListItem = (item: any, itemIndex: number) => {
    return (
      <li key={itemIndex} className="mb-1">
        {item.children.map((child: any, childIndex: number) =>
          renderText(child, childIndex)
        )}
      </li>
    );
  };

  const renderModernListItem = (item: any, itemIndex: number) => {
    return (
      <li key={itemIndex} className="mb-2 leading-relaxed">
        <span className="text-neutral-10">
          {item.children.map((child: any, childIndex: number) =>
            renderText(child, childIndex)
          )}
        </span>
      </li>
    );
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {value.map((block, index) => {
        switch (block.type) {
          case 'heading':
            const headingClasses = {
              1: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
              2: 'text-xl sm:text-2xl lg:text-3xl font-bold',
              3: 'text-lg sm:text-xl lg:text-2xl font-semibold',
              4: 'text-base sm:text-lg lg:text-xl font-semibold',
              5: 'text-sm sm:text-base lg:text-lg font-medium',
              6: 'text-xs sm:text-sm lg:text-base font-medium',
            };

            const headingContent = (
              <span
                className={clsx(
                  'text-primary-80 leading-[150%] mb-2',
                  headingClasses[block.level] || headingClasses[3]
                )}
              >
                {block.children.map((child: any, childIndex: number) =>
                  renderText(child, childIndex)
                )}
              </span>
            );

            switch (block.level) {
              case 1:
                return <h1 key={index}>{headingContent}</h1>;
              case 2:
                return <h2 key={index}>{headingContent}</h2>;
              case 3:
                return <h3 key={index}>{headingContent}</h3>;
              case 4:
                return <h4 key={index}>{headingContent}</h4>;
              case 5:
                return <h5 key={index}>{headingContent}</h5>;
              case 6:
                return <h6 key={index}>{headingContent}</h6>;
              default:
                return <h3 key={index}>{headingContent}</h3>;
            }

          case 'paragraph':
            return (
              <p key={index} className="text-neutral-10 leading-relaxed">
                {block.children.map((child: any, childIndex: number) =>
                  renderText(child, childIndex)
                )}
              </p>
            );

          case 'bulletList':
            return (
              <ul
                key={index}
                className="list-disc list-inside space-y-1 text-neutral-10 ml-4"
              >
                {block.children.map((item: any, itemIndex: number) =>
                  renderListItem(item, itemIndex)
                )}
              </ul>
            );

          case 'numberedList':
            return (
              <ol
                key={index}
                className="list-decimal list-inside space-y-1 text-neutral-10 ml-4"
              >
                {block.children.map((item: any, itemIndex: number) =>
                  renderListItem(item, itemIndex)
                )}
              </ol>
            );

          case 'list':
            // Handle modern list structure
            if (block.format === 'unordered') {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside space-y-2 text-neutral-10 ml-4 my-4"
                >
                  {block.children.map((item: any, itemIndex: number) =>
                    renderModernListItem(item, itemIndex)
                  )}
                </ul>
              );
            } else if (block.format === 'ordered') {
              return (
                <ol
                  key={index}
                  className="list-decimal list-inside space-y-2 text-neutral-10 ml-4 my-4"
                >
                  {block.children.map((item: any, itemIndex: number) =>
                    renderModernListItem(item, itemIndex)
                  )}
                </ol>
              );
            }
            return null;

          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-primary-80 pl-4 italic text-neutral-10 bg-dark-20 py-3 rounded-r"
              >
                {block.children.map((child: any, childIndex: number) => (
                  <p key={childIndex} className="mb-2 last:mb-0">
                    {renderText(child, childIndex)}
                  </p>
                ))}
              </blockquote>
            );

          case 'codeBlock':
            return (
              <pre
                key={index}
                className="bg-dark-25 text-primary-80 p-4 rounded-lg overflow-x-auto"
              >
                <code className="font-mono text-sm">
                  {block.children.map((child: any) => child.text).join('')}
                </code>
              </pre>
            );

          case 'horizontalRule':
            return <hr key={index} className="border-dark-15 my-4 w-full" />;

          case 'table':
            return (
              <div key={index} className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-dark-15">
                  <tbody>
                    {block.rows?.map((row: any, rowIndex: number) => (
                      <tr key={rowIndex} className="border-b border-dark-15">
                        {row.cells?.map((cell: any, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className="border border-dark-15 px-4 py-2 text-neutral-10"
                          >
                            {cell.children?.map(
                              (child: any, childIndex: number) =>
                                renderText(child, childIndex)
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'image':
            return (
              <div key={index} className="my-4">
                <Image
                  src={block.src}
                  alt={block.alt || ''}
                  className="max-w-full h-auto rounded-lg"
                  width={600}
                  height={400}
                />
                {block.caption && (
                  <p className="text-sm text-neutral-20 mt-2 text-center italic">
                    {block.caption}
                  </p>
                )}
              </div>
            );

          default:
            // Handle any other block types that might have children
            const unknownBlock = block as any;
            if (unknownBlock && typeof unknownBlock === 'object') {
              // Check if it's a list block with different naming
              if (unknownBlock.type === 'list' && unknownBlock.children) {
                const listType = unknownBlock.format || 'unordered';
                const ListComponent = listType === 'ordered' ? 'ol' : 'ul';
                const listClass =
                  listType === 'ordered'
                    ? 'list-decimal list-inside space-y-2 text-neutral-10 ml-4'
                    : 'list-disc list-inside space-y-2 text-neutral-10 ml-4';

                return (
                  <ListComponent key={index} className={listClass}>
                    {unknownBlock.children.map((item: any, itemIndex: number) =>
                      renderModernListItem(item, itemIndex)
                    )}
                  </ListComponent>
                );
              }

              // Handle blocks with children
              if (
                'children' in unknownBlock &&
                Array.isArray(unknownBlock.children)
              ) {
                return (
                  <div key={index} className="text-neutral-10 leading-relaxed">
                    {unknownBlock.children.map(
                      (child: any, childIndex: number) =>
                        renderText(child, childIndex)
                    )}
                  </div>
                );
              }

              // Handle simple text blocks
              if (unknownBlock.text) {
                return (
                  <p key={index} className="text-neutral-10 leading-relaxed">
                    {renderText(unknownBlock, index)}
                  </p>
                );
              }
            }

            // Fallback
            return null;
        }
      })}
    </div>
  );
};

export default PortableText;
