import { Button } from '@/components/common/Button'
import { ImageText } from '@/components/common/ImageText'



export function Introduction() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
        <ImageText
          image="/images/Tane_Casserley.webp"
          alt="HMCS Canada research and expedition imagery"
          eyebrow=""
          title={<>Honoring the Legacy of HMCS <em>Canada</em>: An Archaeological and Marine Sciences Expedition</>}
          description={<><p className="mb-3 text-lg">In commemoration of the 115th anniversary of the Royal Canadian Navy (RCN), the HMCS Canada Expedition seeks to highlight Canada’s first purpose-built warship, His Majesty’s Canadian Ship (HMCS) Canada, through advanced marine archaeological and scientific research. The project aims to preserve Canada’s naval legacy while contributing to marine science and conservation efforts.</p><p className="text-lg">Launched in 1904 as Canadian Government Ship (CGS) Canada, it successfully enforced Canada’s fisheries laws and trained Canadian naval personnel for over a decade. As the First World War threatened, it was transferred to the RCN to become its second flagship. The RCN paid off HMCS Canada after the war and sold it into commercial service. An American steamship line bought it to connect Florida and the Bahamas, renaming it SS Queen of Nassau. Ultimately, the steamer sank off the Florida Keys in 1926.</p></>}
          reverse
          actions={
            <>
              <Button href="/about" variant="secondary">Learn More</Button>
              <Button href="/support" variant="primary">Support the Expedition</Button>
            </>
          }
        />
      </div>
    </section>
  )
}
