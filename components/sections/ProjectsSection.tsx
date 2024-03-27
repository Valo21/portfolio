import React from 'react'
import Section from '../Section'
import MotionCard from '../MotionCard'
import Image from 'next/image'
import Link from 'next/link'


export default function EducationSection() : JSX.Element {
  return (
    <Section title='My projects' id='section_projects'>
      <MotionCard >
        <div className='mb-4 font-semibold'>Portfolio</div>
        <Link className='transition-transform hover:scale-95 duration-300' href='https://portfolio-one-brown-28.vercel.app/'>
          <Image className='rounded-lg' alt='Porfolio web page' src={`/projects/PORTFOLIO_CAPTURE.png`} width={550} height={100}/>
        </Link>
      </MotionCard>
      <MotionCard>
        <div className='mb-4 font-semibold'>Auth panel</div>
        <Link className='transition-transform hover:scale-95 duration-300' href='https://auth-panel.vercel.app/'>
          <Image className='rounded-lg' alt='Auth panel web page' src={`/projects/PANEL_CAPTURE.png`} width={550} height={100}/>
        </Link>
      </MotionCard>
      <MotionCard>
        <div className='mb-4 font-semibold'>Tetris Game</div>
        <Link className='transition-transform hover:scale-95 duration-300' href='https://ng-tetris-latest.onrender.com/'>
          <Image className='rounded-lg' alt='Tetris game' src={`/projects/TETRIS_CAPTURE.png`} width={550} height={100}/>
        </Link>
      </MotionCard>
      
      <MotionCard>
        <div className='mb-4 font-semibold'>AWS Albums</div>
        <Link className='transition-transform hover:scale-95 duration-300' href='http://aws-app-bucker.s3-website.us-east-2.amazonaws.com/'>
          <Image className='rounded-lg' alt='AWS Albums' src={`/projects/AWS_CAPTURE.png`} width={550} height={100}/>
        </Link>
      </MotionCard>
    </Section>
  )
}