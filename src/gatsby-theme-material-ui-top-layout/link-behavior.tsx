import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';

import { setRef } from '../utils';

export interface LinkBehaviorProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'to' | 'ref'> {
  href: string;
}

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  LinkBehaviorProps
>((props, ref) => {
  const { href, ...rest } = props;

  return (
    <GatsbyLink
      {...rest}
      ref={(node: unknown) => ref && setRef(ref, node as HTMLAnchorElement)}
      to={href}
    />
  );
});
