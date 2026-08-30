import Image from 'next/image'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import type { ResearchPage } from '@/data/research'

export function ResearchPageTemplate({ page }: { page: ResearchPage }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.heroImage}
        imageAlt={`${page.title} research imagery`}
        actions={<Button href="/support" variant="primary">Support this work</Button>}
      />

      <main>
        <Container className="py-[var(--section-spacing)]">
          <div className="space-y-16">
            {page.sections.map((section, index) => (
              <section key={`${page.slug}-${section.title}`} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                {section.imagePosition === 'left' || !section.imagePosition ? (
                  <>
                    {section.image ? (
                      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea]">
                        <div className="relative aspect-[4/3] w-full">
                          <Image src={section.image} alt={section.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                      </div>
                    ) : null}
                    <div>
                      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        0{index + 1}
                      </p>
                      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
                        {section.title}
                      </h2>
                      <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{section.text}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        0{index + 1}
                      </p>
                      <h2
                        className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="true"
                      >
                        {section.title}
                      </h2>
                      <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{section.text}</p>
                    </div>
                    {section.image ? (
                      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea]">
                        <div className="relative aspect-[4/3] w-full">
                          <Image src={section.image} alt={section.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </section>
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
