"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
////////////////TODO FIX
export default function ProfilePicture() {
    // const x = useMotionValue(0)
    // const y = useMotionValue(0)
    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);

    // const rotateX = useTransform(y, [0, height], [50, -50])
    // const rotateY = useTransform(x, [0, width], [30, -30])

    // function handleMouse(event: any) {
    //     const rect = event.currentTarget.getBoundingClientRect();
    //     x.set(event.clientX - rect.left);
    //     y.set(event.clientY - rect.top);
    // }

    // useEffect(()=> {
    //     document.body.addEventListener('mousemove', handleMouse)
    //     return ()=> {
    //         document.removeEventListener('mousemove', handleMouse)
    //     }
    // }, [])

    return (
        <div>
            <motion.div
                style={{
                    
                }}
                >
                <Image className='rounded-full animate-[fade-in-up_1s_ease-in-out_1]' alt='Profile picture' width={200} height={200} src='https://avatars.githubusercontent.com/u/61363314?v=4'/>
            </motion.div>
        </div>
    )
}