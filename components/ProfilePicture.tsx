"use client"
import React from 'react'
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
////////////////TODO FIX
export default function ProfilePicture() {
    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const rotateX = useTransform(y, [0, 400], [45, -45])
    const rotateY = useTransform(x, [0, 400], [-45, 45])

    function handleMouse(event: any) {
        x.set(event.pageX)
        y.set(event.pageY)
    }

    return (
        <div style={{perspective: 2000}} onMouseMove={e => handleMouse(e)}>
            <motion.div
                style={{
                    rotateX,
                    rotateY
                }}
                >
                <Image className='rounded-full animate-[fade-in-up_1s_ease-in-out_1]' alt='Profile picture' width={200} height={200} src='https://avatars.githubusercontent.com/u/61363314?v=4'/>
            </motion.div>
        </div>
    )
}