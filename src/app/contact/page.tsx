import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/common/PageHero'
import { ImageText } from '@/components/common/ImageText'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the HMCS Canada expedition team and project organizers.',
}

export default function ContactPage() {
  return (
    <>

      <main>
        <PageHero
                  title="Contact Us"
                  image="/images/Contact-Us-banner.jpg"
                  imageAlt="Contact Us Banner"
                />
                
        
                <section className="py-[var(--section-spacing)]">
                  <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
                    <ImageText
                      columns="48% 46%"
                      image="/images/HMCS+Canada+12+pounder+port.jpg"
                      alt="HMCS Canada research and expedition imagery"
                      title={<>Contact Us</>}
                      description={
                        <>
                          <p className="mb-3">
                            Learn more about the HMCS Canada Expedition 2025, or to enquire about sponsorship and partner opportunities, please contact us via email.
                          </p>
                          <p className="lg:mb-4">
                            <strong>Email:</strong>
                            <a href="mailto:info.hmcscanadaexpedition@gmail.com" className="text-blue-500 hover:underline">
                              info.hmcscanadaexpedition@gmail.com
                            </a>
                          </p>
                        </>
                      }
                      reverse
                    />
                  </div>
                </section>
        
                <section className="h-[300px] lg:h-[400px] w-full overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <Image
                      src="/images/screenshot-1742408378784.png"
                      alt="Naval file"
                      width={1920}
                      height={400}
                      className="h-full w-full object-cover object-bottom"
                    />
                  </div>
                </section>
      </main>
    </>
  )
}
