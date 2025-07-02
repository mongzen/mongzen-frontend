import { PortableTextBlock } from '../../types';

const PortableText = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div>
      {value.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h3 key={index} className={`text-${block.level}`}>
              {block.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </h3>
          );
        } else if (block.type === 'paragraph') {
          return (
            <p key={index}>
              {block.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PortableText;
