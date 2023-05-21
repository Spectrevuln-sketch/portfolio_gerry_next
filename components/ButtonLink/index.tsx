import Link, { LinkProps } from 'next/link';
import React from 'react';

export default function ButtonLink(props: LinkProps) {
  return (
    <Link {...props} />
  );
}
