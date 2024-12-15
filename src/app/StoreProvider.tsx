'use client';
import { store } from '@/store/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  useEffect(() => {
    const unsubscribe = setupListeners(store.dispatch);
    return unsubscribe;
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
