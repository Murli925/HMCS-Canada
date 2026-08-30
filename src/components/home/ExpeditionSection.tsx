import Image from 'next/image'
import { Button } from '@/components/common/Button'

export function ExpeditionSection() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <h2
              className="mb-4 text-4xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-4xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
            >
              Bringing HMCS <em>Canada</em> Back to Life in 2025
            </h2>
<p className='mb-2'>Today, the wreck of HMCS <em>Canada</em>&mdash;later known as SS <em>Queen of Nassau</em>&mdash;rests 11 kilometres (7 miles) south of Lower Matecumbe Key, Florida, at a depth of 70 metres (235 feet). It lies protected within the U.S. National Oceanic and Atmospheric Administration&rsquo;s (NOAA) Florida Keys National Marine Sanctuary.</p>
<p className='mb-2'>During December 1-4, 2025, a team of Canadian technical divers documented the site for the first time using cutting-edge 3D photogrammetry. Their work generated an ultra-detailed digital model of the shipwreck, revealing how <em>Canada</em> appears nearly a century after sinking.</p>
<p className='mb-2'>The model is shared through this website, allowing Canadians and the world to virtually explore this long-overlooked warship. It will enrich public understanding of her historical, archaeological, and ecological significance&mdash;<em>bringing </em>HMCS<em> Canada </em>to life in a way never before possible.</p>
<p className='mb-2'>All results will be made freely available to museums, scientific institutions, universities, schools, media, and the public&mdash;honouring the service and sacrifice of those who have served in the Royal Canadian Navy.</p>
<p className='mb-2'>This important expedition has been officially recognized as a <strong>Royal Canadian Geographical Society Flag Expedition</strong>, and an <strong>Explorers Club Flag Expedition</strong>&mdash;one of the highest honours of both organizations.</p>
            <div className="mt-8">
              <Button href="/about" variant="primary">Learn More</Button>
            </div>
          </div>

          <div className="order-1 relative h-full min-h-[420px] items-center justify-end lg:order-2 lg:min-h-[520px]">
            <div className="absolute inset-y-0 right-0 w-[72%] overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/images/Queen+of+Nassau_Casserley__19.jpg_2.webp"
                  alt="Expedition storytelling and research imagery for HMCS Canada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute left-0 top-1/2 z-10 h-[80%] w-[68%] -translate-y-1/2 overflow-hidden rounded-[var(--radius)]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/CN-3793.webp"
                  alt="Expedition research imagery for HMCS Canada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
