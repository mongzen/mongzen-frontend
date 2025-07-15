import React from 'react';

export default function BaseProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return <>{props.children}</>;
}
