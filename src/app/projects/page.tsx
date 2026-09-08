import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import Image from "next/image";
// removed unused imports
import FullWidthCarousel from "@/components/common/FullWidthCarousel";
import { ImageText } from "@/components/common/ImageText";
import { Accordion } from "@/components/common/accordian";
import { Gallery } from "@/components/common/Gallery";
import { expeditionGallery, starboardGallery } from "@/data/hmcs-gallery";
import { TwoColumnContent } from "@/components/common/TwoColumnContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "HMCS Canada expedition projects and research focus areas.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <PageHero
          title="Expedition Results"
          image="/images/projects-banenr.jpg"
          imageAlt="Projects Banner"
        />

        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2
              className="text-4xl font-medium text-center tracking-tight text-[var(--color-foreground)] sm:text-4xl"
              data-aos="slide-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
            >
              The HMCS Canada Expedition 2025 is committed to engaging the
              public and inspiring a deeper understanding of Canada’s naval
              heritage and the marine sciences of the Florida Keys National
              Marine Sanctuary. Key outreach initiatives include
            </h2>
          </div>
        </section>

        <section className="py-[var(--section-spacing)] pt-0">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <FullWidthCarousel
              items={[
                {
                  title: "Social Media and Video Content",
                  body: "<p>Regular updates, including videos and photographs, will be shared through social media platforms to reach a broad audience.</p>",
                },
                {
                  title: "Virtual 3D Models",
                  body: "<p>Detailed photogrammetry models will be made available online, allowing users to explore the wreck site virtually and learn about its historical and ecological significance.</p>",
                },
                {
                  title: "Educational Resources",
                  body: "<p>The expedition will collaborate with schools, universities, and community organizations to provide educational materials and presentations on marine archaeology, history, and science.</p>",
                },
                {
                  title: "Public Presentations",
                  body: "<p>Team members will deliver talks to academic and public audiences, sharing insights and findings from the expedition.</p>",
                },
              ]}
            />
            <div>
              <p className="text-center max-w-3xl mt-5 mx-auto text-lg text-gray-600">
                These efforts aim to make the expedition accessible and
                impactful for both local and international communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              reverse
              columns="48% 46%"
              images={[
                {
                  src: "/images/QON_DEK+109_credit_Doug+Kesling-cleaned.jpg",
                  alt: "Image one",
                },
                { src: "/images/13.+DSC05747.jpg", alt: "Image two" },
              ]}
              alt="HMCS Canada research and expedition imagery"
              title="Photogrammetry Model (Completed)."
              description={
                <>
                  <p>
                    The completed 3D photogrammetry model of
                    <strong>
                      HMCS <em>Canada</em>
                    </strong>
                    is the centerpiece of the HMCS <em>Canada</em>
                    Expedition&rsquo;s scientific, educational, and
                    public-engagement objectives. Produced through
                    high-resolution diver-based photogrammetry, the model
                    provides a detailed and immersive digital record of the
                    wreck site as it exists today.
                  </p>
                  <p>The model:</p>
                  <ul className="list-disc list-inside my-3">
                    <li>
                      Is hosted online as an interactive experience, allowing
                      viewers to explore the wreck site virtually from multiple
                      perspectives.
                    </li>
                    <li>
                      Includes detailed annotations identifying key structural
                      features of the vessel.
                    </li>
                    <li>
                      Documents the ship&rsquo;s distinctive ram bow, a defining
                      feature that helped confirm the wreck&rsquo;s identity as
                      <strong>
                        HMCS <em>Canada</em>
                      </strong>
                      &mdash;the only sea-going warship of its kind ever built.
                    </li>
                    <li>
                      Reveals the absence of the starboard-side propeller,
                      likely a contributing factor in the ship&rsquo;s sinking,
                      and allows direct comparison with the intact port-side
                      propeller and propeller shaft.
                    </li>
                    <li>
                      Serves as a permanent digital resource for researchers,
                      educators, heritage professionals, and the general public.
                    </li>
                  </ul>
                  <p className="mt-3">
                    Our expedition&rsquo;s 3D photogrammetry model represents
                    the first comprehensive three-dimensional documentation of
                    HMCS <em>Canada</em> and forms a lasting scientific and
                    commemorative record of Canada&rsquo;s first purpose-built
                    warship, the only ship of her kind ever built, and the only
                    surviving underwater hull of a Canadian First World War
                    commissioned warship. Commissioned in 1904 for the
                    Department of Marine and Fisheries as Canadian Government
                    Ship (CGS) <em>Canada</em>, she was armed with four Mark III
                    1&frac12;-pounder quick-firing guns mounted on the main
                    deck&mdash;two forward and two aft. With a complement of
                    approximately 75 officers and men, she served on fisheries
                    patrol duties and as a naval training vessel. In design and
                    capability, she closely resembled a Royal Navy armed
                    third-class cruiser. <em>Canada</em> underwent major
                    armament and seakeeping upgrades in 1912, when her
                    fo&rsquo;c&rsquo;sle was raised to improve performance in
                    heavy seas and she was up armed with four 3-pounder guns.
                    During the First World War she was transferred to the Royal
                    Canadian Navy in 1915 and became His Majesty&rsquo;s
                    Canadian Ship (HMCS) <em>Canada</em>. Between 1915 and 1916,
                    she received further naval artillery upgrades as part of her
                    transition into frontline service and was up armed with two
                    12-pounder guns forward and retained two 3-pounders aft.
                    During the war she served as both a training vessel and a
                    convoy escort, protecting merchant shipping against German
                    submarine threats. In 1917 she became the RCN&rsquo;s second
                    flagship and, in the same year, survived the Halifax
                    Explosion&mdash;the largest man-made, non-nuclear explosion
                    in history. HMCS <em>Canada</em> was paid off
                    (decommissioned) in November 1919.
                  </p>
                  <p className="mt-3">
                    In 1924, the ship was sold to American businessman Barron
                    Gift Collier and renamed SS<em> Canada</em>, later SS
                    <em> Queen of Nassau</em>, entering first-class passenger
                    service between Miami and Nassau. In 1926, she was sold to
                    Mexican commercial interests who planned to place her in
                    service between Tampico and New Orleans. In July 1926, she
                    pulled anchor in Miami and steamed toward Tampa for final
                    inspection prior to entering that service. Approximately 80
                    kilometres (50 miles) south of Miami, flooding was reported
                    in her lower compartments; after an hour and a half battling
                    the incoming water, the captain ordered the crew to abandon
                    ship. She sank off the Florida Keys on July 2, 1926
                  </p>
                </>
              }
            />
            <div className="sketchfab-embed-wrapper mt-4">
<iframe
  title="HMCS Canada (SS Queen of Nassau)"
  src="https://sketchfab.com/models/201457d4ee034ff9a3c25a34e560bf89/embed"
  width="100%"
  height="500"
  allow="autoplay; fullscreen; xr-spatial-tracking; execution-while-out-of-viewport; execution-while-not-rendered; web-share"
  allowFullScreen
  style={{ border: 0 }}
></iframe>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "normal",
                  margin: "5px",
                  color: "#4A4A4A",
                }}
              >
                <a
                  href="https://sketchfab.com/3d-models/hmcs-canada-ss-queen-of-nassau-201457d4ee034ff9a3c25a34e560bf89?utm_medium=embed&utm_campaign=share-popup&utm_content=201457d4ee034ff9a3c25a34e560bf89"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  HMCS Canada (SS Queen of Nassau)
                </a>
                by
                <a
                  href="https://sketchfab.com/rlacasse67?utm_medium=embed&utm_campaign=share-popup&utm_content=201457d4ee034ff9a3c25a34e560bf89"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  
                  Roger Lacasse
                </a>
                on
                <a
                  href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=201457d4ee034ff9a3c25a34e560bf89"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  Sketchfab
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              columns="48% 46%"
              images={[
                {
                  src: "/images/DSC05651.jpg",
                  alt: "Image one",
                },
              ]}
              alt="HMCS Canada research and expedition imagery"
              title="Expedition Video and Photographs (Completed)"
              description={
                <>
                  <p>
                    This section presents a curated gallery of high-quality
                    photographs and video recorded during the HMCS
                    <em>Canada</em> Expedition. Together, these visual records
                    document the expedition&rsquo;s scientific work, operational
                    challenges, and historical discoveries, and provide visual
                    context for the completed 3D photogrammetry model.
                  </p>
                  <p className="mt-3">
                    All images and videos are fully captioned and credited,
                    drawing from the expedition&rsquo;s official photo and video
                    documentation
                  </p>
                  <p className="mt-3 mb-4">The gallery includes:</p>

                  <Accordion
                    items={[
                      {
                        title: "Underwater Documentation",
                        content: (
                          <p>
                            High-resolution photographs and video footage of the
                            wreck of
                            <strong>
                              HMCS <em>Canada</em>
                            </strong>
                            , including the bow, stern, propulsion components,
                            debris field, and surrounding marine life, recorded
                            at depths exceeding 60 metres (200 feet).
                          </p>
                        ),
                      },

                      {
                        title: "Expedition Operations",
                        content: (
                          <p>
                            Behind-the-scenes imagery documenting technical
                            diving operations, equipment staging, vessel
                            operations, and diver deployment, illustrating the
                            complexity and risk inherent in deep-water wreck
                            documentation.
                          </p>
                        ),
                      },

                      {
                        title: "Photogrammetry in Practice",
                        content: (
                          <p>
                            Visual records showing the deployment of camera and
                            lighting sleds, diver-based data acquisition, and
                            the direct link between in-water documentation and
                            the completed 3D photogrammetry model.
                          </p>
                        ),
                      },

                      {
                        title: "Historical Context and Comparison",
                        content: (
                          <p>
                            Selected composite images and visual comparisons
                            integrating archival photographs of
                            <strong>
                              HMCS <em>Canada</em>
                            </strong>
                            with modern expedition imagery and photogrammetry
                            outputs, allowing viewers to compare the ship&apos;s
                            historical appearance with its present-day condition
                            on the seafloor.
                          </p>
                        ),
                      },
                    ]}
                  />
                  <p className="mt-4">
                    This photographic and video archive forms a permanent visual
                    record of the expedition and supports ongoing research,
                    education, public outreach, and heritage commemoration
                    related to Canada’s first purpose-built warship.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-normal text-[var(--color-foreground)] mb-7">
              Expedition Photographs
            </h2>
            <Gallery
              items={expeditionGallery}
              columns={3}
              aspectRatio="5 / 4"
            />
          </div>
        </section>

        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-center font-normal text-[var(--color-foreground)] mb-7">
              Expedition Videos
            </h2>
          </div>
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-center font-normal text-[var(--color-foreground)] mb-7">
              Video Captions
            </h2>

            <p className="mb-4">
              <strong>Top Row Left</strong> - 1. Photogrammetry specialist and
              expedition diver Roger Lacasse deploys a camera-and-lighting sled
              to document the bow and deck of HMCS <em>Canada</em>. Video
              credit: Ewan Anderson / HMCS <em>Canada</em> Expedition 2025
            </p>
            <p className="mb-4">
              <strong>Top Row Middle</strong> - 2. Likely the first motion
              footage ever recorded of HMCS <em>Canada</em> in its more than
              century-long history. The video documents key identifying
              features, including the distinctive curved bow, collapsed bridge,
              upper hull and stern remains, and deck areas once planked in wood
              and now lost to marine wood-boring organisms. Invasive lionfish
              are visible, illustrating how this historic First World
              War&ndash;era warship has become part of a modern marine
              ecosystem. Video credit: Ewan Anderson / HMCS <em>Canada</em>
              Expedition 2025
            </p>
            <p className="mb-4">
              <strong>Top Row Right</strong> - 3. The remaining port-side
              propeller and drive shaft of HMCS <em>Canada</em>. This propeller
              represents what the starboard propeller would have looked like
              prior to its complete loss, documented in the following video.
              Notably, two of the port propeller&rsquo;s four blades have been
              cleanly sheared off, suggesting a high-energy failure event. Video
              credit: Jason Cook / HMCS <em>Canada</em> Expedition 2025
            </p>
            <p className="mb-4">
              <strong>Middle Row Left</strong> - 4. Motion footage of the
              starboard side of HMCS <em>Canada</em> where the starboard
              propeller and drive shaft are entirely absent. When contrasted
              with the surviving port-side assembly documented in Video 39, the
              loss highlights a pronounced asymmetry in the wreck&rsquo;s
              propulsion remains. The cause and timing of this damage remain
              undetermined. Video credit: Jason Cook / HMCS <em>Canada</em>
              Expedition 2025
            </p>
            <p className="mb-4">
              <strong>Middle Row Middle</strong> - 5. Motion footage of two
              completely intact spare propellers resting within the debris field
              of HMCS <em>Canada</em>. These spare propellers likely slid off
              the deck as the ship sank and were not part of the installed
              propulsion system. Their pristine condition provides a clear
              reference for how the ship&rsquo;s port and starboard propellers
              would have appeared when originally fitted. Video credit: Jason
              Cook / HMCS <em>Canada</em> Expedition 2025
            </p>
            <p className="mb-4">
              <strong>Middle Row Right</strong> - 6. A 2&frac12;-minute sequence
              documenting expedition divers Guy Shockey and Rob DeProy preparing
              to enter the water with full technical diving equipment, including
              Diver Propulsion Vehicles (DPVs), a camera sled, and multiple
              breathing-gas cylinders. The footage follows the divers from final
              checks through water entry and submergence, illustrating the
              logistical complexity of deploying technical divers for deep wreck
              documentation. Video credit: Joseph Frey / HMCS <em>Canada</em>
              Expedition 2025
            </p>
            <p>
              <strong>Bottom Row Left</strong> - 7. This sequence documents the
              controlled deployment of our photogrammetry specialist Roger
              Lacasse from the stern of <em>Pisces</em> under pitching sea
              conditions encountered on three of the four operational days. The
              footage highlights the risks associated with launching a fully
              equipped technical diver&mdash;carrying approximately 136
              kilograms (300 pounds) of equipment&mdash;while the vessel is in
              motion. Effective crew coordination, timing, and physical support
              are critical to reducing the risk of knee and lower-limb injuries
              during entry. Video credit: Joseph Frey / HMCS <em>Canada</em>
              Expedition 2025
            </p>


          </div>
          <div className="mx-auto pt-6 max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
         <h2 className="text-4xl text-center font-normal text-[var(--color-foreground)] my-7">
              Development of the 3D Photogrammetry Model
            </h2>

            <Gallery
              items={starboardGallery}
              columns={3}
              aspectRatio="5 / 4"
            />

            </div>
        </section>
        <div className="relative mt-8 overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[#dfe5ea] shadow-[var(--shadow-soft)]">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              src="/videos/history_1080p.mp4"
              autoPlay
              muted
              loop
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              columns="48% 46%"
              reverse
              images={[
                {
                  src: "/images/USD-Commerce-letter.png",
                  alt: "United States Department of Commerce Letter",
                },
              ]}
              imageFit="contain"
              alt="HMCS Canada research and expedition imagery"
              title="Integrated Marine Archaeology and Marine Sciences Analysis (Completed)"
              description={
                <>
                  <p className="mb-4">
                    As part of the HMCS <em>Canada</em> Expedition&rsquo;s
                    interdisciplinary mandate, a comprehensive integrated
                    analysis of the wreck site is currently being conducted by
                    the
                    <strong>
                      National Oceanic and Atmospheric Administration (NOAA)
                    </strong>
                    . This work combines marine archaeological assessment with
                    marine sciences analysis, drawing on more than
                    <strong>
                      10,600 high-resolution underwater photographs
                    </strong>
                    collected during the expedition and provided to NOAA for
                    post-expedition study.
                  </p>
                  <p className="mb-4">
                    The forthcoming analysis will address both the cultural and
                    ecological dimensions of the site, including:
                  </p>

                  <Accordion
                    items={[
                      {
                        title: "Structural Condition and Integrity",
                        content: (
                          <p>
                            Assessment of the ship’s surviving structure, damage
                            patterns, and long-term stability, including the
                            effects of currents, sediment movement, and
                            biological activity.
                          </p>
                        ),
                      },

                      {
                        title: "Historical and Archaeological Insights",
                        content: (
                          <p>
                            New findings related to the vessel’s construction
                            and modifications across its service life, from its
                            <strong>1904 construction</strong>,
                            <strong>1912 naval upgrading</strong>,
                            <strong>wartime up-arming between 1915–1916</strong>
                            , and
                            <strong>
                              1924 conversion to a luxury passenger liner
                            </strong>
                            , through to its final voyage and sinking.
                          </p>
                        ),
                      },

                      {
                        title: "Marine Ecology and Biodiversity",
                        content: (
                          <p>
                            Documentation of species distribution, abundance,
                            and habitat use across the wreck, examining the role
                            of
                            <strong>
                              HMCS <em>Canada</em>
                            </strong>
                            as an artificial reef within the surrounding marine
                            environment.
                          </p>
                        ),
                      },

                      {
                        title: "Human and Environmental Impacts",
                        content: (
                          <p>
                            Analysis of the effects of fishing activity,
                            anchoring, and other human interactions, alongside
                            natural environmental processes shaping the wreck
                            site over time.
                          </p>
                        ),
                      },

                      {
                        title: "Preservation and Conservation Considerations",
                        content: (
                          <p>
                            Evidence-based recommendations to support the
                            long-term protection, documentation, and management
                            of the wreck as both a historic site and a
                            functioning marine habitat.
                          </p>
                        ),
                      },
                    ]}
                  />
                </>
              }
            />
            <TwoColumnContent
              className="pb-6 !px-0"
              left={
                <>
                  
                  <p className="mt-4">
                    Upon receipt, NOAA’s completed scientific report and
                    associated findings will be presented in this section.
                    Together, these results will complement the expedition’s
                    historical research, archaeological documentation, and
                    completed 3D photogrammetry model, reinforcing the project’s
                    integrated approach to maritime heritage, marine science,
                    and public education.
                  </p>
                </>
              }
              right={
                <>
                  <div className="d-flex flex-row items-start justify-start">
                    <a
                      href="/files/HMCS+Canada+Expedition_Archaeological+and+Structural+Assessment_Draft+2_12_2026-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit underline items-center gap-4 rounded-sm text-left transition-opacity hover:opacity-90"
                    >
                      <Image
                        src="/images/PDF_file_icon.png"
                        alt="PDF Icon"
                        width={50}
                        height={50}
                      />
                      HMCS Canada Expedition Archaeological and Structural
                      Assessment
                    </a>
                    <a
                      href="/files/HMCS+Canada+Expedition_Invasives+and+Ecological+Impacts_Draft+2_17_2026+(1)-2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit underline items-center gap-4 rounded-sm text-left transition-opacity hover:opacity-90"
                    >
                      <Image
                        src="/images/PDF_file_icon.png"
                        alt="PDF Icon"
                        width={50}
                        height={50}
                      />
                      HMCS Canada Expedition Invasives and Ecological Impacts
                    </a>
                  </div>
                </>
              }
            />
          </div>
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <TwoColumnContent
              columns="40% 54%"
              className="pb-6 !px-0"
              left={
                <>
                  <Image
                    src="/images/NOAA-Nautical-Chart-Alligator-to-Sombrero-1250-6-1921.jpg"
                    alt="Info Icon"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <a
                    href="/files/HMCS+Canada+From+Warship+to+Reef,+Alert+Diver+Q2+2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 mb-4 inline-flex w-fit underline items-center gap-4 rounded-sm text-left transition-opacity hover:opacity-90"
                  >
                    <Image
                      src="/images/PDF_file_icon.png"
                      alt="PDF Icon"
                      width={50}
                      height={50}
                    />
                    HMCS Canada From Warship to Reef Alert Diver Q2 2026
                  </a>
                  <div className="my-6 d-flex relative">
                   <a
                    href="/files/RCMI+Article+Sep_Oct+2025-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-6 d-flex relative underline items-center rounded-sm text-left transition-opacity hover:opacity-90">
                    <b>“Honouring The Royal Canadian Navy’s Legacy At 70 Metres.”</b> Member’s News (Royal Canadian Military Institute), September–October 2025.
                  </a>
</div>
                   <a
                    href="/files/MHN+Frey+Sept+16.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6  d-flex relative">
                    <Image
                      src="/images/MHN+Frey+Sept+16_page-0001.jpg"
                      alt="PDF Icon"
                      width={500}
                      height={700}
                    />
                  
                  </a>
                </>
              }
              right={
                <>
                  <div className="d-flex flex-row items-start justify-start">
                    <h2 className="text-3xl font-normal text-[var(--color-foreground)] mb-7">
                      Media Coverage and Speaking Engagements
                    </h2>
                    <p className="mb-4">
                      This section brings together published commentary,
                      authored features, and forthcoming media coverage related
                      to the HMCS <em>Canada</em> Expedition. As a historically
                      focused, research-driven project, public engagement has
                      emphasized authoritative interpretation and long-form
                      storytelling rather than real-time media updates.
                    </p>
                    <p className="mb-4">
                      <strong>Media coverage</strong>:
                    </p>
                    <ul className="list-disc list-inside my-3">
                      <li className="mb-3">
                        &ldquo;
                        <strong>
                          Honouring the Royal Canadian Navy&rsquo;s Legacy at 70
                          Metres.&rdquo;
                        </strong>
                        <br />
                        <em>Member&rsquo;s News</em>,
                        <strong>Royal Canadian Military Institute</strong>,
                        September&ndash;October 2025.
                        <br />
                        An interpretive feature authored by expedition lead
                        Joseph Frey, situating the expedition within the Royal
                        Canadian Navy&rsquo;s early history and commemorative
                        traditions.
                      </li>
                      <li className="mb-3">
                        <strong>HMCS Canada From Warship to Reef</strong>,
                        feature article in <strong>Alert Diver </strong>(June
                        2026), documenting the expedition&rsquo;s technical
                        diving operations, photogrammetry methodology, and
                        historical significance by Joseph Frey.
                        <a href="https://dan.org/alert-diver/article/from-warship-to-reef/">
                          https://dan.org/alert-diver/article/from-warship-to-reef/
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>CBC News Network</strong> (July 2, 2026) CBC
                        News Network senior reporter
                        <strong>Brett Ruskin</strong> interviewed expedition
                        leader <strong>Joseph Frey</strong> for a
                        <strong>
                          3&frac12;-minute nationally broadcast feature
                        </strong>
                        marking the
                        <strong>
                          100th anniversary of the sinking of HMCS
                          <em>Canada</em>
                        </strong>
                        . The segment explored the remarkable history of
                        Canada&rsquo;s first purpose-built armed government vessel,
                        from her service as the Royal Canadian Navy&rsquo;s second
                        flagship and survival of the Halifax Explosion to her
                        final voyage and sinking in the Florida Keys on 2 July
                        1926. The feature also highlighted the achievements of
                        the
                        <strong>
                          HMCS <em>Canada</em> Expedition 2025
                        </strong>
                        , including the first comprehensive 3D photogrammetric
                        survey of the wreck undertaken in partnership with the
                        <strong>Florida Keys National Marine Sanctuary</strong>.
                        The interview was broadcast nationally on CBC News
                        Network&rsquo;s morning programming and helped introduce the
                        expedition and its scientific, archaeological,
                        ecological, and historical significance to a Canada-wide
                        audience.
                        <a href="https://www.youtube.com/watch?v=Jhy2xn8LrW8">
                          https://www.youtube.com/watch?v=Jhy2xn8LrW8
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>Explore: A Canadian Geographic Podcast</strong>
                        (July 14, 2026) Expedition lead
                        <strong>Joseph Frey</strong> was interviewed by
                        journalist, broadcaster, and explorer
                        <strong>David McGuffin</strong> for
                        <em>Explore: A Canadian Geographic Podcast</em>. The
                        discussion examined the history of
                        <strong>
                          HMCS <em>Canada</em>
                        </strong>
                        , Canada&rsquo;s first purpose-built armed government vessel,
                        and the results of the HMCS Canada Expedition 2025,
                        which completed the first comprehensive 3D
                        photogrammetric survey of the wreck in the Florida Keys
                        National Marine Sanctuary (FKNMS).Hosted by David
                        McGuffin, Fellow of The Royal Canadian Geographical
                        Society and host of
                        <strong>
                          <em>Explore: A Canadian Geographic Podcast</em>
                        </strong>
                        .
                        <a href="https://canadiangeographic.ca/podcasts/hmcs-canada-the-forgotten-ship-that-built-a-navy-with-joseph-frey/">
                          https://canadiangeographic.ca/podcasts/hmcs-canada-the-forgotten-ship-that-built-a-navy-with-joseph-frey/
                        </a>
                        &zwj; &zwj;<strong>Instagram</strong>
                        <a href="https://www.instagram.com/p/Dayd4ygpO8u/">
                          https://www.instagram.com/p/Dayd4ygpO8u/
                        </a>
                      </li>
                      <li className="mb-3">
                        The interview explored the vessel&rsquo;s evolution from
                        government patrol ship to the Royal Canadian
                        Navy&rsquo;s second flagship and survivor of the Halifax
                        Explosion, as well as the challenges of documenting a
                        historic wreck site at a depth of 70 metres (235 feet).
                        Topics included underwater photogrammetry, expedition
                        planning and execution, and the role of exploration in
                        preserving and interpreting Canada&rsquo;s maritime heritage
                        for future generations, along with the
                        expedition&rsquo;s contribution to the marine
                        archaeology and ecology of the FKNMS.
                      </li>
                      <li className="mb-3">
                        <strong>Shearwater Research</strong> (August 6, 2026) an
                        article by <strong>Guy Shockey</strong>, Dive Lead of
                        the HMCS<em> Canada</em> Expedition 2025
                        <a href="https://shearwater.com/en-ca/blogs/community/hmcs-canada">
                          https://shearwater.com/en-ca/blogs/community/hmcs-canada
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>
                          Legion: Canada&rsquo;s Military History Magazine
                        </strong>
                        (August 25, 2026)
                        <strong>
                          <em>The Briefing</em>
                        </strong>
                        with <strong>Alex Bowers,</strong> staff writer with
                        Legion and expedition lead <strong>Joseph Frey</strong>
                        on the importance of HMCS <em>Canada</em> to
                        Canada&rsquo;s naval history and the December 2025 HMCS
                        <em>Canada</em> Expedition.
                      </li>
                      <li className="mb-3">
                        <strong>Canadian Geographic</strong> (Autumn 2026) a
                        feature article examining the HMCS <em>Canada</em>
                        Expedition within the broader story of Royal Canadian
                        Navy history, Canada-US-Bahamas maritime heritage,
                        modern expedition operations, underwater archaeology,
                        and the archaeological and marine ecological findings
                        documented at the wreck site.
                      </li>
                    </ul>
                    <p>
                      <strong>Speaking engagements:</strong>
                    </p>
                    <ul className="list-disc list-inside my-3">
                      <li className="mb-3">
                        <strong>
                          Underwater Archaeological Society of British Columbia
                        </strong>
                        , Victoria, March 28, 2026, Guy Shockey
                      </li>
                      <li>
                        <strong>University of Toronto</strong>, Hart House,
                        September 14, 2026, Joseph Frey
                      </li>
                      <li>
                        <strong>Royal Canadian Military Institute,</strong>
                        Toronto, September 16, 2026, Joseph Frey
                      </li>
                    </ul>
                    <p>
                      As additional articles, interviews, and interpretive
                      pieces are published, they will be added to this section
                      to provide a consolidated public record of how the HMCS
                      <em>Canada</em> Expedition has been received, interpreted,
                      and contextualized by professional, academic, and public
                      audiences.
                    </p>
                  </div>
                </>
              }
            />
          </div>
        </section>

        <section className="py-[var(--section-spacing)] !pb-4">
          <div className="mx-auto max-w-[var(--max-content-width)]">
            <h2 className="text-4xl text-center font-normal text-[var(--color-foreground)] mb-7 px-6">
              Our Next Expedition: Bell Island 2027, Newfoundland, Canada 
            </h2>

            <TwoColumnContent
                          className="pt-6 !gap-6"
              columns="47% 47%"
              left={<>
                <Image
                  src="/images/Trilingual+-+Crest+for+the+2026+Battle+of+the+Atlantic+Crest+-+Updated+-+May+11.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
                <Image
                  src="/images/U-518-at-sea.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
                <Image
                  src="/images/Bell-Island-map2.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
              <Image
                  src="/images/Bell-Island-guns-Rees-620x407.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
              <Image
                  src="/images/ExpWarAttackOnBellIsland768.gif"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
<Image
                  src="/images/Cross-section-Bell-Island-iron-mines-e011176028.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />

                <Image
                  src="/images/Shovel-loading-iron-ore-NFB-1949-e011175780-1024x793.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />

                <Image
                  src="/images/Mine+Tunnel+Bell+Island.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />



                <Image
                  src="/images/Lance+Cove+Seaman's+Cemetery.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />

                                <Image
                  src="/images/Jill-ghost-bow-8747.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />


                                <Image
                  src="/images/Jill-Strathcona-6893-1024x683.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
                                <Image
                  src="/images/Freighter_SS_Rose_Castle_in_convoy.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />

                                              <Image
                  src="/images/SS-SAGANAGA.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />
                                                              <Image
                  src="/images/MSS-4-wrecks-named-multibeam.jpg"
                  alt="Bell Island Expedition 2027"
                  width={600}
                  height={400}
                  className="w-full my-4 h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
              data-aos="slide-up"
              data-aos-duration="700"
                />







              </>}
              right={<>

              <h3 className="text-3xl font-normal text-[var(--color-foreground)] mb-6">Bell Island Battle of the Atlantic Virtual Memorial Expedition</h3>
<p className="mb-3"><a href="https://battleoftheatlanticmemorial.org/" className="underline">https://battleoftheatlanticmemorial.org/</a></p>
<p className="mb-3"><strong>Overview</strong></p>
<p className="mb-3">The <strong>Bell Island Battle of the Atlantic Virtual Memorial Expedition</strong> is a multidisciplinary field project designed to document, interpret, and commemorate Canada&rsquo;s most intact and historically significant Second World War naval battlefield. The expedition responds to a fundamental challenge in naval history and commemoration: the absence of traditional battlefields and large cemeteries for the tens of thousands of naval and merchant sailors from all nations who died at sea during the Battle of the Atlantic, the longest campaign of the Second World War.</p>
<p className="mb-3">Unlike land warfare, naval combat leaves few visible traces. Ships sink, crews are lost offshore, and families are often left without graves to visit or landscapes that convey the scale and human cost of the conflict. As a result, much of the Battle of the Atlantic remains physically invisible despite its central importance to Canada&rsquo;s wartime history and national identity.</p>
<p className="mb-3">Bell Island, Newfoundland and Labrador, is one of the rare locations where the naval battlefield, the industrial target, coastal defences, and commemorative landscapes remain geographically and historically linked. In 1942, four loaded iron ore carriers were torpedoed while at anchor off Bell Island during two separate German submarine attacks. These were deliberate penetrations of a sheltered anchorage adjacent to a defended harbour and a critical wartime industrial target, rather than open-ocean interceptions. The wrecks and surviving shore features together form one of the most concentrated and interpretable Battle of the Atlantic landscapes on the Atlantic coasts of Canada and the United States.</p>
<p className="mb-3">In addition to its commemorative purpose, the expedition advances a broad range of scientific, educational, and community-focused objectives. High-resolution underwater archaeology will document the wrecks and associated industrial infrastructure as a connected cultural landscape, while marine biology and marine ecology research will establish baseline data on the wrecks as artificial reef systems within Conception Bay. The project is designed to support public education through digital visualization, academic research, and curriculum-aligned resources, while also contributing to sustainable heritage tourism by making an otherwise inaccessible naval battlefield understandable and meaningful to visitors. Together, these integrated approaches ensure that the Bell Island expedition functions not only as a memorial, but also as a living platform for science, education, and regional cultural and economic engagement.</p>
<p className="mb-3"><strong>Bell Island Attacks: Dates, Ships, and Operational Context</strong></p>
<p className="mb-3">The Bell Island attacks occurred in two phases during the autumn of 1942 and were conducted by German submarines operating independently in western North Atlantic waters.</p>
<p className="mb-3"><strong>First attack &ndash; 5 September 1942</strong></p>
<p className="mb-3">Submarine <em>U-513</em> (Type IXC) entered Conception Bay and torpedoed two iron ore carriers lying at anchor:</p>
<ul className="list-disc list-inside my-3">
<li><em>S.S. Saganaga</em> (British)</li>
<li><em>S.S. Lord Strathcona</em> (Canadian)
</li>
</ul>
<p className="mb-3"><strong>Second attack &ndash; 2 November 1942</strong></p>
<p className="mb-3">Submarine <em>U-518</em> (Type IXC) returned to the Bell Island anchorage and torpedoed two additional iron ore carriers:</p>
<ul className="list-disc list-inside my-3">
<li><em>S.S. Rose Castle</em> (Canadian)</li>
<li><em>S.S. PLM-27</em> (British-registered; operating under Free French control)</li>
</ul>
<p className="mb-3">The second attack was also associated with damage in the Scotia Pier area.</p>
<p className="mb-3">While many vessels were sunk near shore during the intense submarine campaign of 1942, Bell Island is distinguished by the successful penetration of a sheltered anchorage and the sinking of multiple vessels in close proximity to an active industrial facility and defended harbour.</p>
<p className="mb-3"><strong>A Unique Wartime Landscape</strong></p>
<p className="mb-3">Bell Island preserves an unusual concentration of Battle of the Atlantic features within a single geographic setting:</p>
<ul className="list-disc list-inside my-3">
<li>Four merchant shipwrecks resting offshore in Conception Bay</li>
<li>The remains of Scotia Pier, directly linked to wartime industrial activity and the 1942 attacks</li>
<li>A preserved coastal artillery battery, constructed prior to and operational during 1942
</li>
<li>Two cemeteries associated with the events, including the Seamen&rsquo;s Cemetery at Lance Cove
</li>
<li>Flooded iron ore mine workings that formed the industrial heart of the wartime target
</li>
</ul>
<p className="mb-3">Together, these elements allow the Battle of the Atlantic to be understood not as isolated ship losses, but as a connected system linking naval operations, industrial production, coastal defence, and commemoration.</p>
<p className="mb-3"><strong>Bell Island within the North Atlantic Theatre</strong></p>
<p className="mb-3">Within the Allied system of global theatres of war, the <strong>Battle of the Atlantic</strong> formed a distinct and continuous theatre of operations. The Canadian Northwest Atlantic Theatre was the only Allied theatre of war commanded by a Canadian, it was under the leadership of Rear Admiral&mdash;later Vice-Admiral&mdash;Leonard W. Murray, Commander-in-Chief, Canadian Northwest Atlantic.</p>
<p className="mb-3">Bell Island must also be understood within a wider North Atlantic geographic framework that included Newfoundland (then a separate dominion under British administration), Greenland and Iceland, the Faroe Islands, Jan Mayen, and the Azores&mdash;locations central to convoy routing, air coverage, weather reporting, and anti-submarine operations. Nearby Saint-Pierre and Miquelon, while not a naval base, held strategic significance due to intelligence, communications, and political-control concerns within the western North Atlantic. Svalbard, while geographically Arctic, was closely linked to the Battle of the Atlantic through the Arctic Convoys supplying the Soviet Union.</p>
<p className="mb-3">Canadian forces were deployed well beyond domestic waters, including army contingents to Iceland and a joint British-Canadian military raid into Svalbard, reflecting Canada&rsquo;s expanding operational role within the Atlantic theatre. At the western edge of this interconnected system, Bell Island supplied iron ore essential to steel production in Sydney, Nova Scotia, Britain, and beyond, placing it firmly within the strategic geography of the North Atlantic war.</p>
<p className="mb-3"><strong>Purpose: A Virtual Battle of the Atlantic Memorial</strong></p>
<p className="mb-3">Because the Battle of the Atlantic left few conventional memorial landscapes, the Bell Island expedition advances a complementary approach: the creation of a high-resolution, three-dimensional Digital Terrain Model (DTM) that functions as a Virtual Battle of the Atlantic Memorial.</p>
<p className="mb-3">Rather than treating wrecks and shore features as isolated heritage sites, the project documents Bell Island as a connected wartime landscape. This approach allows users to visualize how naval operations, industrial infrastructure, coastal defence, and human loss intersected in space and time, giving form and context to a conflict that remains largely invisible beneath the sea.</p>
<p className="mb-3"><strong>Expedition Collaboration and Expertise</strong></p>
<p className="mb-3">The expedition is a multidisciplinary collaboration between the Marine Institute of Memorial University of Newfoundland (MI&ndash;MUN), the Shipwreck Preservation Society of Newfoundland and Labrador (SPSNL), VOYIS, the Royal Canadian Geographical Society (RCGS), and a team of highly experienced technical divers drawn from the HMCS <em>Canada</em> Expedition.</p>
<p className="mb-3">&bull; <strong>The Marine Institute of Memorial University of Newfoundland (MI&ndash;MUN)</strong> serves as the expedition&rsquo;s principal academic and operational partner, providing research vessels and crew, ROV operations and positioning systems, expedition hardware, integrated research leadership, graduate student participation, and comprehensive institutional safety and environmental governance, including drone-based aerial documentation.</p>
<p className="mb-3">&bull; <strong>The Shipwreck Preservation Society of Newfoundland and Labrador (SPSNL)</strong>, a registered Canadian charity and member of the Museum Association of Newfoundland and Labrador, contributes volunteer expertise, regional maritime heritage knowledge, and liaison support related to provincial and federal funding and regulatory processes, ensuring alignment with Newfoundland and Labrador&rsquo;s heritage stewardship frameworks.</p>
<p className="mb-3">&bull; <strong>VOYIS</strong>, a Canadian marine technology company specializing in underwater imaging and autonomous systems, provides onsite engineering support and high-resolution three-dimensional survey capability across all four wrecks, forming a core technical component of the expedition&rsquo;s integrated Digital Terrain Model framework.</p>
<p className="mb-3">&bull; <strong>The Royal Canadian Geographical Society (RCGS)</strong> supports professional cartographic integration through its cartographic program and advances national storytelling and curriculum-linked educational outreach through <em>Canadian Geographic</em> and Canadian Geographic Education.</p>
<p className="mb-3">&bull; <strong>The technical dive team</strong> brings decades of deep- and cold-water operational experience, conducting diver-based photogrammetry on S.S. <em>PLM-27</em> and within the submerged sections of the iron ore mine as part of the expedition&rsquo;s comparative documentation approach.</p>
<p className="mb-3">MI&ndash;MUN, SPSNL, and VOYIS are contributing significant in-kind support through vessels, equipment access, engineering services, volunteer time, and institutional expertise, substantially reducing overall expedition cash requirements. Dive team members volunteer their time and cover their own travel expenses.</p>
<p className="mb-3"><strong>Governance and Institutional Recognition</strong></p>
<p className="mb-3">The Grants Committee of the Royal Canadian Geographical Society has awarded the Bell Island Battle of the Atlantic Virtual Memorial Expedition a Major Grant. This designation enables charitable receipting for foundations, corporate sponsors, and individual donors supporting the project and authorizes the expedition to fly the official RCGS Expedition Flag.</p>
<p className="mb-3"><strong>Technical Approach and Comparative Methodology</strong></p>
<p className="mb-3">The expedition integrates multiple documentation techniques into a single, unified three-dimensional digital landscape:</p>
<ul className="list-disc list-inside my-3">
<li>AUV-based and ROV-supported photogrammetry on all four wrecks</li>
<li>Diver-based photogrammetry on selected targets</li>
<li>Terrestrial laser scanning of shore features</li>
<li>Drone-based aerial photography for overhead context</li>
<li>Professional cartographic integration supported by RCGS expertise</li>
</ul>
<p className="mb-3"><em>S.S. PLM-27</em> will be documented using both diver-based and AUV-based photogrammetry. To current knowledge, this project represents the first deliberate, coordinated application in Canada of both methods to the same shipwreck, undertaken as a comparative methodology and integrated into a single archaeological and cartographic product.</p>
<p className="mb-3">The wrecks lie at depths generally ranging from approximately 25 to 45 metres, allowing systematic documentation while supporting repeat surveys and long-term monitoring.</p>
<p className="mb-3"><strong>Scientific Objectives</strong></p>
<p className="mb-3">The expedition integrates three complementary streams of research and documentation.</p>
<p className="mb-3"><strong>Underwater archaeology</strong><br /> High-resolution three-dimensional models will document wreck condition, spatial relationships, and archaeological context.</p>
<p className="mb-3"><strong>Industrial and subsurface heritage</strong><br /> Mine-diving photogrammetry will document flooded sections of the iron ore mine, capturing the industrial dimension of the wartime target.</p>
<p className="mb-3"><strong>Marine biology and ecology</strong><br /> The wrecks function as artificial reefs. Baseline ecological data will support longer-term monitoring of environmental change in Conception Bay.</p>
<p className="mb-3"><strong>Education, Outreach, and Legacy</strong></p>
<p className="mb-3">The Virtual Memorial will support:</p>
<ul className="list-disc list-inside my-3">
<li>Marine Institute student orientation and field-science education</li>
<li>RCGS-developed educational resources for schools and post-secondary institutions</li>
<li>On-site visitor engagement through QR-code-enabled visualization</li>
<li>Heritage tourism development for Bell Island and Conception Bay</li>
</ul>
<p className="mb-3">By transforming an otherwise inaccessible naval battlefield into an integrated digital landscape, the Bell Island Battle of the Atlantic Virtual Memorial Expedition provides a durable form of commemoration while advancing research, education, and public understanding. It preserves a nationally significant site and situates Bell Island within the wider Atlantic theatre that shaped the outcome of the Second World War.</p>
              
              </>}
            />


          </div>
        </section>

<section className="mx-auto mb-6 w-full max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-10 lg:items-start">

    {/* Column 1 — 4 columns */}
    <div className="lg:col-span-4 h-full">
      <Image
        src="/images/ExpHisPreservingAlliedLifelineSaguenay.jpg"
        alt="RCGS Expedition Flag"
        width={800}
        height={600}
        className="w-full h-full object-cover"
        sizes="(max-width: 1024px) 100vw, 40vw"
        data-aos="slide-up"
        data-aos-duration="700"
      />
    </div>

    {/* Column 2 — 2 columns */}
    <div className="lg:col-span-2 h-full">
      <Image
        src="/images/Food-Convoy-poster.jpg"
        alt="Food Convoy poster"
        width={200}
        height={300}
        className="w-full h-full object-cover"
        sizes="(max-width: 1024px) 100vw, 20vw"
        data-aos="slide-up"
        data-aos-duration="700"
      />
    </div>

    {/* Column 3 — 4 columns */}
    <div className="lg:col-span-4 h-full">
      <Image
        src="/images/HMCS+Penetanuishene.JPG"
        alt="HMCS Penetanguishene"
        width={800}
        height={600}
        className="w-full h-full object-cover"
        sizes="(max-width: 1024px) 100vw, 40vw"
        data-aos="slide-up"
        data-aos-duration="700"
      />
    </div>

  </div>
</section>
<section className="mx-auto mb-6 w-full max-w-[var(--max-content-width)]">
<div className="mx-auto max-w-[var(--max-content-width)]">
<TwoColumnContent
              className="py-6"
              columns="47% 47%"
              left={<>
              <p className="mb-3">In 2016, I participated in NOAA&rsquo;s Battle of the Atlantic Expedition documenting the German submarine <em>U-576</em> and the merchant vessel <em>Bluefields</em> off North Carolina. That work contributed to the expansion of the Monitor National Marine Sanctuary, which now formally honours United States Navy and Merchant Marine personnel lost during the Battle of the Atlantic. The expedition combined advanced 3D photogrammetry, archival research, and survivor testimony to transform a seabed battlefield into a place of public memory and education.</p>
<p className="mb-3"><strong>Bell Island</strong> represents Canada&rsquo;s most intact Second World War naval battlefield &mdash; a site where the naval engagement, the industrial target, and the commemorative landscape remain geographically connected. In 1942, four iron ore carriers were torpedoed at anchor adjacent to a defended harbour supplying steel production essential to the Allied war effort. The wrecks, coastal artillery battery, pier remains, mine infrastructure, and cemeteries together <strong>form the most concentrated and interpretable Battle of the Atlantic landscape in North America.</strong></p>

<p className="mb-3">The Bell Island Battle of the Atlantic Virtual Memorial Expedition will integrate high-resolution underwater photogrammetry of the four wrecked merchant vessels with georeferenced terrestrial documentation of the Cemetery Hill battery, Scotia Pier remains, Lance Cove Seamen&rsquo;s Cemetery, and Bell Island mine structures. These datasets will be spatially integrated within a unified GIS framework to produce a <strong>comprehensivethree-dimensional Digital Terrain Model</strong> of the 1942 submarine attack landscape &mdash; <strong>above</strong> and <strong>below</strong> the waterline.</p>
<p className="mb-3">Building on proven methodologies employed during NOAA&rsquo;s 2016 expedition and subsequent Canadian-led HMCS <em>Canada</em> Expedition documentation project, the Bell Island initiative expands the scope to encompass an entire connected wartime industrial and naval system within Canadian waters.</p>

<p className="mb-3">The project will <strong>establish baseline archaeological documentation</strong> of the wrecks and a <strong>marine ecological baseline</strong> for Conception Bay. Together, this integrated dataset will support <strong>long-term heritage stewardship</strong>, <strong>academic research</strong>, <strong>graduate student training</strong>, <strong>curriculum-linked education</strong>, and the development of a <strong>nationally connected</strong> Battle of the Atlantic <strong>tourism</strong> framework linking Newfoundland to related sites across the province and mainland Canada &mdash; while providing a durable and dignified form of <strong>commemoration</strong> for those who served during the Second World War&rsquo;s longest continuous battle.</p>
<p className="mb-3">Joseph Frey</p>

</>}
              right={<>
                    <Image
        src="/videos/protecting-nation-poster.jpg"
        alt="Food Convoy poster"
        width={200}
        height={300}
        className="w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 20vw"
        data-aos="slide-up"
        data-aos-duration="700"
      />
      <p className="!text-bold text-center mt-6">Selected International Coverage of the 2016 NOAA Battle of the Atlantic Expedition</p>
                
      <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
  <div className="col-span-1 h-[200px]">
    <a
      href="/files/DIVER_47_DIVER_V41_I8.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col"
    >
      <div className="flex-1 overflow-hidden">
        <Image
          src="/images/DIVER_47_DIVER_V41_I8-1.jpg"
          alt="Video 1"
          width={200}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    </a>
  </div>

  <div className="col-span-1 h-[200px]">
    <a
      href="/files/Dive+NZAtlantic+story+D160+HR.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col"
    >
      <div className="flex-1 overflow-hidden">
        <Image
          src="/images/Dive-NZAtlantic-story-D160-HR-1.jpg"
          alt="Video 2"
          width={200}
          height={300}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </a>
  </div>

  <div className="col-span-1 h-[200px]">
    <a
      href="/files/DiveMaster+35-38-DM-U576-3DScan-Frey.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col"
    >
      <div className="flex-1 overflow-hidden">
        <Image
          src="/images/DiveMaster-35-38-DM-U576-3DScan-Frey-1.jpg"
          alt="Video 3"
          width={200}
          height={300}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </a>
  </div>

  <div className="col-span-1 h-[200px]">
    <a
      href="/files/UNTERWASSER+097_REP_Wracks+im+Atlantik_RG_1117.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col"
    >
      <div className="flex-1 overflow-hidden">
        <Image
          src="/images/UNTERWASSER-097_REP_Wracks-im-Atlantik_RG_1117-1.jpg"
          alt="Video 4"
          width={200}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    </a>
  </div>
</div>

      <p className="text-center">Authored by Joseph Frey and published in Canada, New Zealand, and Germany, these four articles document the 2016 NOAA Battle of the Atlantic Expedition and the 3D recording of <em>U-576</em>. The work reflects international recognition of the expedition&rsquo;s archaeological significance and established a technological precedent for the digital battlefield mapping now proposed for Bell Island.</p>


              </>}

            />
            </div>
            </section>
      </main>
    </>
  );
}
