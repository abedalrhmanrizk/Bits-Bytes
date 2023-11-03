'use client'

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Play, Pause, RotateCcw } from 'react-feather'

import Card from '@/components/Card'
import VisuallyHidden from '@/components/VisuallyHidden'

import styles from './CircularColorsDemo.module.css'

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
]

function CircularColorsDemo() {
  const [state, setState] = React.useState('idle')
  const [timeElapsed, setTimeElapsed] = React.useState(0)

  React.useEffect(() => {
    if (state !== 'playing') return

    const intervalId = window.setInterval(() => {
      setTimeElapsed((currentValue) => currentValue + 1)
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [state])

  const selectedColor = COLORS[timeElapsed % COLORS.length]

  return (
    <Card as='section' className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  className={styles.selectedColorOutline}
                  layoutId='selected-color-outline'
                />
              )}
              <div
                className={clsx(styles.colorBox, isSelected && styles.selectedColorBox)}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          )
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button
            onClick={() => {
              if (state === 'playing') {
                setState('idle')
              } else {
                setState('playing')
                setTimeElapsed(timeElapsed + 1)
              }
            }}
          >
            {state === 'playing' ? <Pause /> : <Play />}
            <VisuallyHidden>{state === 'playing' ? 'Pause' : 'Play'}</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setTimeElapsed(0)
              setState('idle')
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  )
}

export default CircularColorsDemo
