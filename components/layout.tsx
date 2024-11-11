"use client";
import { persiststor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import TrolleyLoader from './TrolleyLoader';

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        <PersistGate loading={<TrolleyLoader/>} persistor={persiststor}>
          {children}
        </PersistGate>
    </Provider>
  )
}

export default Layout