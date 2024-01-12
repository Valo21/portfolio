"use client"
import { store } from '@/store'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider(props: PropsWithChildren) {
  return (
    <Provider store={store}>
        {props.children}
    </Provider>
  )
}
