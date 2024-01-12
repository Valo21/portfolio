import React from 'react'
import Section from './Section'
import Image from 'next/image';
import MotionCard from './MotionCard';


export default function EducationSection({items}: EducationSectionProps) : JSX.Element {
  return (
    <Section title='My education' id='section_education'>
      {
        items.map((item, index) => 
            <MotionCard key={index}>
                <div>
                    <h1>{item.name} - {item.intituion}</h1>
                    <h2>{item.startYear} - {item.endYear}</h2>
                    <Image alt='Codo a codo' src={`/education/${item.imageURL}`} width={550} height={100}/>
                </div>
            </MotionCard>
        )
      }
    </Section>
  )
}