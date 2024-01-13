import React from 'react'
import Section from '../Section'
import Image from 'next/image';
import MotionCard from '../MotionCard';
import { IoMdTime } from 'react-icons/io';


export default function EducationSection({items}: EducationSectionProps) : JSX.Element {
  return (
    <Section title='My education' id='section_education'>
      {
        items.map((item, index) => 
            <MotionCard key={index}>
                <div className='flex flex-col gap-2'>
                    <h1>{item.name} - {item.institution}</h1>
                    <div className='flex items-center gap-2'><IoMdTime  size={20}/> {item.startYear} - {item.endYear}</div>
                    <Image priority className='rounded-lg' alt='Codo a codo' src={`/education/${item.imageURL}`} width={550} height={100}/>
                </div>
            </MotionCard>
        )
      }
    </Section>
  )
}