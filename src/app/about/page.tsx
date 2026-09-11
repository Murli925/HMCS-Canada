import type { Metadata } from 'next'
import Image from 'next/image'
import { ImageText } from '@/components/common/ImageText'
import { PageHero } from '@/components/common/PageHero'
import { FullWidthImageText } from '@/components/common/FullWidthImageText'
import { FullWidthContent } from '@/components/common/FullWidthContent'
import { Gallery } from '@/components/common/Gallery'

export const metadata: Metadata = {
  title: 'Expedition Objectives | Discover Undersea Heritage — HMCS Canada Expedition 2025 ',
  description: 'Explore HMCS Canada Expedition 2025, focusing on marine archaeology and sciences. Discover ecological insights and preserve naval history through advanced research techniques. ',
}

export default function AboutPage() {
  return (
    <>

            <main>
            <PageHero
              title="Expedition Objectives"
              image="/images/CGS_Canada_CN-3793_Photo-Credit.webp"
              imageAlt="HMCS Canada history"
            />
              <section className="py-[var(--section-spacing)]">
                <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
                  <ImageText
                    image="/images/QON_Bow_credit_Tane+Casserley_Photo+Credit-cleaned.jpg"
                    alt="HMCS Canada research and expedition imagery"
                    eyebrow=""
                    title={<>Marine Archaeology Objectives</>}
                    description={
                      <>
                        <p className="mb-3 text-lg">
                          The marine archaeology component of the HMCS Canada Expedition 2025 focuses on documenting the wreck of HMCS Canada. Leveraging advanced technical diving and underwater imaging techniques, the team aims to create a detailed 3D model of the wreck using structure-from-motion photogrammetry. The resulting scaled model will allow for thorough examination of its archaeological characteristics and  structural integrity without disturbing the site. Our specific objectives are:
                        </p>
                        <ul>
<li><strong>Non-Invasive Documentation:</strong> High-resolution underwater imaging using photogrammetric acquisition methodologies will capture every detail of the wreck. Imagery will be processed with photogrammetric software to ensuring a comprehensive, accurate, and publicly available digital record.
</li>
<li><strong>Structural Analysis:</strong> Study the ship&rsquo;s construction and modifications, including changes made during its conversion to the passenger vessel SS <em>Queen of Nassau</em>. The analysis will also yield information on site stability and site impacts, such as fishing and anchoring, that may necessitate management intervention</li>
<li><strong>Archaeological Insights:</strong> Investigate artifacts and structural elements to uncover new information about the ship&rsquo;s naval service, its role as a flagship, and its transition to civilian use.</li>
</ul>
                      </>
                    }
                    reverse
                  />
                </div>
              </section>
      
              <section className="">
                <FullWidthImageText
                  image="/images/QONmast_light.webp"
                  alt="HMCS Canada underwater discovery imagery"
                  reverse
                  columns="60% 40%"
                  title={
                    <>
                     Marine Sciences Objective
                    </>
                  }
                  description={
                    <>
                      <p>
The marine sciences component of the HMCS Canada Expedition 2025 focuses on studying the ecological and environmental aspects of the wreck site in collaboration with NOAA. This research will enhance understanding of the shipwreck’s role within the marine environment and support conservation efforts. Our specific marine science objectives are:
                      </p>
<ul>
<li><strong>Ecological Assessment:</strong> Document the species diversity and abundance on and around the wreck to evaluate its role as an artificial reef. Establishes a baseline for long-term monitoring of the wreck&rsquo;s ecological health and its interactions with the marine environment.</li>

<li><strong>Invasive Species Monitoring:</strong> Identify and assess the presence of invasive species that may impact the local marine ecosystem.</li>
<li><strong>Conservation Data Collection:</strong> Provide NOAA with critical data to inform management strategies for this significant shipwreck. The integration of cultural and natural resource studies meets the overall conservation mandates of Florida Keys National Marine Sanctuary.</li>
</ul>
                    </>
                  }
                />
              </section>

              
      
             
      <section className="py-[var(--section-spacing)] px-6 sm:px-6 lg:px-8">
      <FullWidthContent
                title=""
                description={
                  <>
      <Image className='mx-auto' src={"/images/Letter+of+Appreciation+Redacted.jpg"} alt="Letter of Appreciation" width={800} height={400} />
                  
                  </>
                }
      
      
      
              />
             
            </section>


<div className="relative py-[var(--section-spacing)] pt-0  px-6 sm:px-6 lg:px-8">
  <div className="relative aspect-video max-w-[800px] mx-auto">
    <video
      src="/videos/new_video_1080p_with_audio.mp4"
      controls
      poster="/videos/video-banner-2.jpg"
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>


             
            </main>
    </>
  )
}
