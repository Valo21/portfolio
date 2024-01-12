import React, { PropsWithChildren } from 'react'

export default function Card({children}: PropsWithChildren) {
  return (
    <div className='p-6 rounded-lg w-full sm:max-w-md md:max-w-xl bg-sky-800/30 backdrop-blur-lg animate-[fade-in-up_1s_ease-in-out_1]'>
        {children}
    </div>
  )
}
