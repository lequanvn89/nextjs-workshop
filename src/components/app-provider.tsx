'use client';

import React, { FC, PropsWithChildren } from 'react';
import { UIProvider } from '@stn-ui/provider';
import { ToastProvider } from '@stn-ui/toasts';

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <UIProvider>
      <ToastProvider>{children}</ToastProvider>
    </UIProvider>
  </div>
);

export default AppProvider;
