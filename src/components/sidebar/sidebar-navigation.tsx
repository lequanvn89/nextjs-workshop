'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Navigation } from '@stn-ui/navigation';
import { useSidebarContext } from '@stn-ui/provider';

import { SIDEBAR_NAVIGATION } from '@/lib/constants';

const SidebarNavigation: FC = () => {
  const pathname = usePathname();
  const { isExpanded } = useSidebarContext();

  return <Navigation items={SIDEBAR_NAVIGATION} pathname={pathname} isExpanded={isExpanded} />;
};

export default SidebarNavigation;
