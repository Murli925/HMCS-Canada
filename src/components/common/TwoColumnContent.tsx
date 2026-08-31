import type { ReactNode } from 'react'

type TwoColumnContentProps = {
  left: ReactNode
  right: ReactNode
  reverse?: boolean
  className?: string
  leftClassName?: string
  rightClassName?: string
}

export function TwoColumnContent({
  left,
  right,
  reverse = false,
  className = '',
  leftClassName = '',
  rightClassName = '',
}: TwoColumnContentProps) {
  return (
    <section className={`mx-auto w-full max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className={`${reverse ? 'order-2 lg:order-1' : 'order-1 lg:order-1'} ${leftClassName}`}>{left}</div>
        <div className={`${reverse ? 'order-1 lg:order-2' : 'order-2 lg:order-2'} ${rightClassName}`}>{right}</div>
      </div>
    </section>
  )
}
