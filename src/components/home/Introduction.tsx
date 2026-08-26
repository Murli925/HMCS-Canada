import { Button } from '@/components/common/Button'
import { ImageText } from '@/components/common/ImageText'

export function Introduction() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-4 sm:px-6 lg:px-8">
        <ImageText
          image="/images/placeholder-introduction.svg"
          alt="HMCS Canada research and expedition imagery"
          eyebrow="Honoring the Legacy of HMCS Canada"
          title="An Archaeological and Marine Sciences Expedition"
          description="In commemoration of the 115th anniversary of the Royal Canadian Navy (RCN), the HMCS Canada Expedition seeks to highlight Canada’s first purpose-built warship, His Majesty’s Canadian Ship (HMCS) Canada, through advanced marine archaeological and scientific research. The project aims to preserve Canada’s naval legacy while contributing to marine science and conservation efforts."
          actions={<Button href="/about" variant="secondary">Learn More</Button>}
        />
      </div>
    </section>
  )
}
