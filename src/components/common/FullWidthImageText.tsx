import Image from 'next/image'
import type { ReactNode } from 'react'

type FullWidthImageTextProps = {
  image: string
  alt: string
  title: ReactNode
  description: ReactNode
  pdfLabel?: string
  pdfHref?: string
  reverse?: boolean
  columns?: string
  className?: string
}

export function FullWidthImageText({
  image,
  alt,
  title,
  description,
  reverse = false,
  columns = '40% 60%',
  className = '',
}: FullWidthImageTextProps) {
  return (
    <section className={`w-full ${className}`}>
      <div
        className="grid grid-cols-1 overflow-hidden lg:items-stretch lg:[grid-template-columns:var(--full-width-columns)]"
        style={{ ['--full-width-columns' as string]: columns }}
      >
        <div
          className={`relative min-h-[420px] bg-[#dfe5ea] md:min-h-[560px] ${
            reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div
          className={`flex flex-col justify-center bg-[var(--color-blue)] p-6 text-white lg:p-16 ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <h2
            className="text-4xl font-medium tracking-tight text-white sm:text-4xl"
            data-aos="slide-up"
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            {title}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-white/95 sm:text-lg">
            {description}
          </div>
        </div>
      </div>
    </section>
  )
}
