import React, { FC } from 'react';
import { Sidebar as SidebarComponent } from '@stn-ui/sidebar';

import SidebarNavigation from './sidebar-navigation';

const Sidebar: FC = () => (
  <SidebarComponent>
    <SidebarNavigation />
  </SidebarComponent>
);

export default Sidebar;
