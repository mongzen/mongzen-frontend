import { PortableTextBlock } from '@/types';
import PortableText from './PortableText';

// Example usage with your data structure
const exampleData: PortableTextBlock[] = [
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'WordPress, ConcreteCMS',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Next.js, React, TypeScript, Tailwind CSS',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Web3.js, MetaMask, WalletConnect',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'MongoDB, Prisma, Strapi (for Backend)',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'React Native (for Mobile Apps)',
            type: 'text',
          },
        ],
      },
    ],
  },
];

// Example with formatted text
const exampleWithFormatting: PortableTextBlock[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'This is a paragraph with ',
        type: 'text',
      },
      {
        text: 'bold text',
        type: 'text',
        bold: true,
      },
      {
        text: ' and ',
        type: 'text',
      },
      {
        text: 'italic text',
        type: 'text',
        italic: true,
      },
      {
        text: ' and even ',
        type: 'text',
      },
      {
        text: 'code snippets',
        type: 'text',
        code: true,
      },
      {
        text: '.',
        type: 'text',
      },
    ],
  },
];

export default function PortableTextTest() {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">List Example</h2>
      <PortableText value={exampleData} />

      <h2 className="text-xl font-bold">Formatted Text Example</h2>
      <PortableText value={exampleWithFormatting} />
    </div>
  );
}
