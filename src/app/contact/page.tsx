import type { Metadata } from 'next'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the HMCS Canada expedition team and project organizers.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the project"
        description="Questions, partnership inquiries, and support conversations can be directed to the HMCS Canada expedition team."
        image="/images/placeholder-video-thumbnail.svg"
        imageAlt="Contact HMCS Canada expedition"
      />
      <main>
        <Container className="py-[var(--section-spacing)]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                The expedition team is available for project inquiries, media contact, and support-related conversations.
              </p>
              <div className="space-y-3 text-base leading-7 text-[var(--color-foreground)]">
                <p>
                  Email: <a href="mailto:hello@hmcscanadaexpedition.org" className="underline underline-offset-4">hello@hmcscanadaexpedition.org</a>
                </p>
                <p>Location: Canada</p>
              </div>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2
                className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)]"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                Project contact
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                Please use the email address above for formal project or research communications. Additional contact information will be added as partnerships and support channels are confirmed.
              </p>
              <div className="mt-6">
                <Button href="/support" variant="secondary">Support the expedition</Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
