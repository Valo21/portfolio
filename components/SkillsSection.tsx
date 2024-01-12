"use client"
import React, { useState } from 'react'
import Section from './Section'
import MotionCard from './MotionCard'
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import colors from 'tailwindcss/colors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
  )
  
  const ProgressDict = {
    30: 'Basic',
    50: 'Medium',
    100: 'Advanced'
  }

export default function SkillsSection({skills}: SkillsSectionProps) {

  return (
    <Section title='Skills' id='section_skills'>
          <MotionCard>
              <Bar 
                data={{
                  datasets: [{
                    borderRadius: 6,
                    data: skills.map((skill)=> skill.progress),
                  }],
                  labels: skills.map(skill => skill.name),
                }}
                options={{
                  responsive: true,
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  scales: {
                    x: {
                      // ticks: {
                        //   callback: (value) => ProgressDict[value]
                        // }
                        grid: {
                          display: false
                        }
                      },
                      y: {
                        ticks: {
                          color: colors.white,
                          stepSize: 10
                        },
                        grid: {
                        display: false
                      }
                    }
                  },
                  backgroundColor: colors.sky[600],
                }}
                />
          </MotionCard>
    </Section>
  )
}
