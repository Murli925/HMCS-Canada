"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './FullWidthImageSlider.module.css'

type Slide = {
  src: string
  alt?: string
  caption?: React.ReactNode
}

export function FullWidthImageSlider({ images }: { images: Slide[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000)
    return () => clearInterval(id)
  }, [images])

  if (!images || images.length === 0) return null

  return (
    <div className={styles.slider}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          aria-hidden={i !== index}
        >
          <Image src={img.src} alt={img.alt || ''} fill className={styles.image} sizes="100vw" priority={i === 0} />
          {img.caption && <div className={styles.caption}>{img.caption}</div>}
        </div>
      ))}

      <div className={styles.controls}>
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)} aria-label="Previous">
          ‹
        </button>
        <button onClick={() => setIndex((index + 1) % images.length)} aria-label="Next">
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FullWidthImageSlider
