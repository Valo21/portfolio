"use client"
import React, { useState } from 'react'
import Section from '../Section'
import MotionCard from '../MotionCard'
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
  
  const ProgressDict: {
    [key: number]: string,
   } = {
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
                  labels: skills.map(skill => skill.name)
                }}
                options={{
                  responsive: true,
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          let label = context.dataset.label || '';
  
                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed.y !== null) {
                              label += ProgressDict[context.parsed.x];
                          }
                          return label;
                        }
                      }
                    }
                  },
                  scales: {
                    x: {
                      ticks: {
                          callback: (value) => ProgressDict[Number(value)],
                          autoSkipPadding: 20,
                          color: colors.white
                      },
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      ticks: {
                        color: colors.white,
                        autoSkip: false,
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
