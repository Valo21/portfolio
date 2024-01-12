"use client"
import { cubicBezier, easeIn, motion, useScroll, useTransform } from 'framer-motion';
import React, { PropsWithChildren, useRef } from 'react'

export default function MotionCard(props: PropsWithChildren) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', 'end']
    });
    const xPosAnim = useTransform(scrollYProgress, [0, 0.7], [-250, 0])
    return (
        <motion.div
            ref={ref}
            className='flex flex-col p-6 rounded-lg sm:max-w-md md:max-w-xl backdrop-blur-lg animate-[fade-in-up_1s_ease-in-out_1]'
            style={{
                translateX: xPosAnim,
                opacity: scrollYProgress
            }}
        >
            {props.children}
        </motion.div>
  )
}
