"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Separator from './Separator';

export default function Section(props : SectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
    
  return (
    <div id={props.id}>
      <motion.div
        ref={ref}
        className='text-center text-lg font-semibold mb-2'
        style={{
          opacity: scrollYProgress,
          scale: scrollYProgress
        }}
      >
        <h1>
        {props.title}
        </h1>
        <Separator/>
      </motion.div>
        {props.children}
    </div>
  )
}
