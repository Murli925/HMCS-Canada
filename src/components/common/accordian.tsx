'use client'

import { useState, type ReactNode } from 'react'

type AccordionItem = {
  title: ReactNode
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
  defaultOpenIndex?: number
}

export function Accordion({
  items,
  className = '',
  defaultOpenIndex = 0,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={`${typeof item.title === 'string' ? item.title : index}-accordion-item`} className="border-t border-black last:border-b">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-[clamp(2rem,3vw,3rem)] font-normal leading-tight tracking-[-0.04em] text-[var(--color-foreground)]"
            >
              <span className="flex-1">{item.title}</span>
              <span className="flex h-8 w-8 items-center justify-center text-4xl leading-none text-[var(--color-foreground)]">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            <div
              id={`accordion-panel-${index}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-base leading-7 text-[var(--color-text)]">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
