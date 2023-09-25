import React, { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="Blog" subtitle="Blog posts">
    {children}
  </StaticLayout>
);

export default Layout;
