import type { Metadata } from 'next'
import { ImageText } from '@/components/common/ImageText'
import {Button} from '@/components/common/Button'
import { Star } from 'lucide-react'
import { FullWidthImageText } from '@/components/common/FullWidthImageText'
import FullWidthImageSlider from '@/components/common/FullWidthImageSlider'
import { CTASection } from '@/components/common/CTASection'

export const metadata: Metadata = {
  title: 'Donation | Make a Difference — HMCS Canada Expedition 2025 ',
  description: 'Support the HMCS Canada Expedition 2025 and help preserve naval heritage through donations that fund advanced underwater imaging and marine science research. ',
}

export default function DonationPage() {
  return (
    <>
      <main>
        <section className="py-[var(--section-spacing)] pb-0">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8 text-center">
            <Button className='rounded-full' href="https://donate.rcgs.org/hmcs-canada-expedition">
              <Star className='mr-3' /> Donate Now  <Star className='ml-3'/>
            </Button>

            <h1 className="d-inline-flex font-[var(--font-display)] my-12 text-[var(--color-foreground)] text-left text-[clamp(2.5rem,7vw,2.5rem)] leading-[0.85] tracking-[-0.04em] text-[#f3f0eb] text-shadow-[1px_1px_5px_rgba(0,0,0,.58)] sm:text-[clamp(2.5rem,7vw,2.5rem)] lg:text-[clamp(3.5rem,7vw,4rem)]">
            Support the HMCS <i> Canada </i> Expedition
          </h1>

          </div>
        </section>
        <section className="py-[var(--section-spacing)] pt-0">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              image="/images/QON_DEK+109_credit_Doug+Kesling-cleaned.jpg"
              alt="Donation"
              description={
              <>
              <p className='text-[var(--color-foreground)] font-bold mb-3'>Help Us Preserve Canada&rsquo;s Naval Heritage and Advance Marine Science</p><p>Your donation directly supports the HMCS <em>Canada</em> Expedition 2025 &mdash; a volunteer-led initiative to document <em>HMCS Canada</em>, the Royal Canadian Navy&rsquo;s first purpose-built warship, now resting in deep water within the Florida Keys National Marine Sanctuary.</p>
<p className='mt-3 mb-3'>With the expertise of Canadian technical divers and archaeologists from NOAA (National Oceanic and Atmospheric Administration), we will use advanced underwater imaging to create a high-resolution 3D photogrammetric model of the wreck. This non-invasive model will allow experts and the public alike to explore the ship&rsquo;s current condition, archaeological features, and structural integrity &mdash; all without disturbing the site.</p>
<p className='mb-3'>For the first time, Canadians and marine heritage enthusiasts worldwide will have virtual access to this historically significant and remarkably intact former warship.</p>
<p className='mb-3'>In partnership with NOAA scientists, the expedition also includes a marine science component, focused on studying the wreck&rsquo;s ecological role as an artificial reef. These findings will contribute to conservation strategies and expand our understanding of biodiversity and habitat formation around historic shipwrecks.</p>
<p className='mb-3'>Importantly, additional funds raised will help develop educational materials for students, the general public, and museum exhibits. The data collected will also support ongoing archaeological and environmental research in Canada, the United States, and internationally.</p><p>Your financial contribution helps bring history and marine science to the surface &mdash; one dive at a time. To donate and receive a tax receipt see below.</p>
              
              </>}
              reverse
              columns="50% 45%"
            />
          </div>
        </section>  

      <section className="">
                      <FullWidthImageText
                        image="/images/credit_Tane+Casserley.jpg"
                        alt="HMCS Canada underwater discovery imagery"
                        reverse
                        className="bg-[var(--color-alternate)] object-cover object-position-right"
                        columns="60% 40%"
                        title={
                          <>
                          Dive Into History And Marine Sciences By Supporting The Expedition
                          </>
                        }
                        description={
                          <>
                          <hr></hr>
                          <div className='bg-[var(--color-background-alternate)] p-10 text-[var(--color-foreground)]'>  

<p className='mb-3'><strong>$25</strong> Dive Tender</p>
<p className='mb-3'><strong>$50</strong> Support Diver</p>
<p className='mb-3'><strong>$100</strong> Technical Diver</p>
<p className='mb-3'><strong>$250</strong> Dive Coxswain</p>
<p className='mb-3'><strong>$500</strong> Dive Officer&nbsp;</p>
<p className='mb-3'><strong>$1,000</strong> Expedition Sponsor (with option to have name listed on website)</p>
<p className='mb-3'><strong>Other</strong></p>
<p className='mb-3'>The HMCS Canada Expedition has partnered with the Royal Canadian Geographical Society (RCGS). Donors who wish to receive a <strong>tax receipt</strong> for their support of the expedition should donate through the RCGS at the link below.</p>
<p className='mb-3'>All donations received by the RCGS through this link will be used to fund the expedition. Donors who wish to give through a cheque or bank transfer should contact <a title="mailto:info.hmcscanadaexpedition@gmail.com" href="mailto:info.hmcscanadaexpedition@gmail.com">info.hmcscanadaexpedition@gmail.com</a>.</p>
                          </div>

            <Button className='mx-auto d-flex border-2 border-[var(--color-white)] text-[var(--color-accent)] hover:bg-[var(--color-dark)] hover:text-[var(--color-white)]' href="https://donate.rcgs.org/hmcs-canada-expedition">Donate Now </Button>

                          </>
                        }
                      />
                    </section>
        <FullWidthImageSlider
          images={[
            { src: '/images/Banner-1.jpg', alt: 'Photogrammetry sled on surface' },
            { src: '/images/banner-2.jpg', alt: 'Diving photogrammetry' },
            { src: '/images/Banner-3.jpg', alt: 'HMCS Canada team photo' },
            { src: '/images/Banner-4.jpg', alt: 'HMCS Canada team photo' },
            { src: '/images/Banner-5.jpg', alt: 'HMCS Canada team photo' }
          ]}
        />
           <CTASection
        eyebrow="Support"
        title="Still have Questions?"
        description={
          "The HMCS Canada Expedition has partnered with the Royal Canadian Geographical Society (RCGS). Donate via the RCGS to receive a tax receipt and support marine heritage and research. For cheque or bank transfer inquiries, email info.hmcscanadaexpedition@gmail.com"
        }
        href="/contact"
        linkLabel="Contact Us"
      />  
      </main>
    </>
  )
}
