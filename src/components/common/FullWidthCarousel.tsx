"use client"

import React, { useState, useRef, useEffect } from 'react'
import styles from './FullWidthCarousel.module.css'

type Item = {
  title: string
  body: string
  underslidertext?: string
}

export function FullWidthCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  // visible count and clones
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 640) return 1
    if (window.innerWidth <= 1024) return 2
    return 3
  }

  const [visibleCountState, setVisibleCountState] = useState(getVisibleCount)
  const clonesCount = Math.min(visibleCountState, items.length)

  // build slides with clones for infinite loop
  const slides = React.useMemo(() => {
    const left = items.slice(-clonesCount)
    const right = items.slice(0, clonesCount)
    return [...left, ...items, ...right]
  }, [items, clonesCount])

  const [index, setIndex] = useState(() => clonesCount)
  const skipTransitionRef = useRef(false)

  // Determine number of visible cards based on window width via CSS breakpoints.
  // Use 3 on large screens so there's room to slide when there are 4 items.
  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount()
      setVisibleCountState(vc)
      // adjust clones and index when resize changes visible count
      const newClones = Math.min(vc, items.length)
      setIndex((i) => Math.min(i, Math.max(newClones, items.length + newClones - vc)))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [items.length])

  const prev = () => setIndex((i) => i - 1)
  const next = () => setIndex((i) => i + 1)

  useEffect(() => {
    if (items.length <= 1) return

    const timer = window.setInterval(() => {
      setIndex((i) => i + 1)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [items.length])

  // Compute transform based on index and first card width
  // apply transform and handle snapping when looping
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const first = track.querySelector<HTMLDivElement>(`.${styles.card}`)
    if (!first) return
    const gapStr = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '24px'
    const gap = parseFloat(gapStr as string) || 24
    const cardWidth = first.getBoundingClientRect().width + gap

    // if skipTransitionRef is set, disable transition for this transform
    if (skipTransitionRef.current) {
      track.style.transition = 'none'
    } else {
      track.style.transition = ''
    }

    const offset = -(cardWidth * index)
    track.style.transform = `translateX(${offset}px)`
  }, [index, visibleCountState, slides.length])

  // transitionend handler to snap when on clones
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handleTransitionEnd = () => {
      const total = items.length
      const leftBoundary = clonesCount
      const rightBoundary = clonesCount + total - 1
      if (index > rightBoundary) {
        // moved to appended clone of first -> snap to first real
        skipTransitionRef.current = true
        setIndex(clonesCount)
        requestAnimationFrame(() => {
          // force reflow then re-enable transition
          const t = track
          void t.offsetHeight
          skipTransitionRef.current = false
          t.style.transition = ''
        })
      } else if (index < leftBoundary) {
        // moved to prepended clone -> snap to last real
        skipTransitionRef.current = true
        setIndex(clonesCount + total - 1)
        requestAnimationFrame(() => {
          const t = track
          void t.offsetHeight
          skipTransitionRef.current = false
          t.style.transition = ''
        })
      }
    }

    track.addEventListener('transitionend', handleTransitionEnd)
    return () => track.removeEventListener('transitionend', handleTransitionEnd)
  }, [index, clonesCount, items.length])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselViewport}>
        <div className={styles.track} ref={trackRef}>
          {slides.map((it, i) => (
            <div className={styles.card} key={i}>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <div className={styles.cardBody} dangerouslySetInnerHTML={{ __html: it.body }} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={prev} aria-label="Previous">
          ←
        </button>
        <button className={styles.controlBtn} onClick={next} aria-label="Next">
          →
        </button>
      </div>

    </div>
  )
}

export default FullWidthCarousel
