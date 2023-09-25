import React, { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="Features" subtitle="Handful Features">
    {children}
  </StaticLayout>
);

export default Layout;
