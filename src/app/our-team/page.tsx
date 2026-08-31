import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/common/PageHero'
import { TeamAlternatingList } from '@/components/team/TeamAlternatingList'
import { ImageText } from '@/components/common/ImageText'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Our team and expedition collaborators.',
}

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        title="Our Team"
        image="/images/Our-Team.jpg.webp"
        imageAlt="HMCS Canada expedition team"
      />
      <TeamAlternatingList />
      <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
                      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
                        <ImageText
                          image="/images/Group+Photo.jpg"
                          alt="HMCS Canada Expedition Team Group Photo"
                          eyebrow=""
                          columns="42% 58%"
                          title={<>HMCS Canada Expedition Team and NOAA Staff</>}
                          description={
                            <>
                             <p className='mb-3'><strong>Front Row</strong> (left to right): <strong>Kelvin Davidson</strong> (RCGS Expedition Flag), <strong>Ewan Anderson</strong> (Explorers Club Expedition Flag #83).</p>
<p><strong>Back Row</strong> (left to right): Canadian Armed Forces Veterans - <strong>Rob DeProy</strong>, RCN; <strong>Guy Shockey</strong>, RCAF; <strong>Joseph Frey</strong>, RCN; <strong>Roger Lacasse</strong>, RCMS (together holding the RCN Ensign), <strong>Brenda Altmeier</strong> (NOAA), <strong>Matthew Lawrence</strong> (NOAA), <strong>Jason Cook</strong>.</p>
                            </>
                          }
                          
                        />
                      </div>
                    </section>
                    <section className="">
                      <Image src="/images/footer-team-photo.jpg" alt="Team Photo" width={1920} height={768} />
                    </section>
    </main>
  )
}
