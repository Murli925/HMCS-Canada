import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import Image from "next/image";
// removed unused imports
import FullWidthCarousel from "@/components/common/FullWidthCarousel";
import { ImageText } from "@/components/common/ImageText";
import { Accordion } from "@/components/common/accordian";
import { Gallery } from "@/components/common/Gallery";
import { expeditionGallery } from "@/data/hmcs-gallery";
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
                    The completed 3D photogrammetry model of{" "}
                    <strong>
                      HMCS <em>Canada</em>
                    </strong>{" "}
                    is the centerpiece of the HMCS <em>Canada</em>{" "}
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
                      feature that helped confirm the wreck&rsquo;s identity as{" "}
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
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/201457d4ee034ff9a3c25a34e560bf89/embed"
                width="100%"
                height="500"
              >
                {" "}
              </iframe>{" "}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "normal",
                  margin: "5px",
                  color: "#4A4A4A",
                }}
              >
                {" "}
                <a
                  href="https://sketchfab.com/3d-models/hmcs-canada-ss-queen-of-nassau-201457d4ee034ff9a3c25a34e560bf89?utm_medium=embed&utm_campaign=share-popup&utm_content=201457d4ee034ff9a3c25a34e560bf89"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  HMCS Canada (SS Queen of Nassau){" "}
                </a>{" "}
                by{" "}
                <a
                  href="https://sketchfab.com/rlacasse67?utm_medium=embed&utm_campaign=share-popup&utm_content=201457d4ee034ff9a3c25a34e560bf89"
                  target="_blank"
                  rel="nofollow"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  Roger Lacasse{" "}
                </a>{" "}
                on{" "}
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
                    photographs and video recorded during the HMCS{" "}
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
                            wreck of{" "}
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
                            integrating archival photographs of{" "}
                            <strong>
                              HMCS <em>Canada</em>
                            </strong>{" "}
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
              columns={4}
              aspectRatio="5 / 4"
            />
          </div>
        </section>

        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-normal text-[var(--color-foreground)] mb-7">
              Expedition Videos
            </h2>
          </div>
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-normal text-[var(--color-foreground)] mb-7">
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
              ecosystem. Video credit: Ewan Anderson / HMCS <em>Canada</em>{" "}
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
              undetermined. Video credit: Jason Cook / HMCS <em>Canada</em>{" "}
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
              documentation. Video credit: Joseph Frey / HMCS <em>Canada</em>{" "}
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
              during entry. Video credit: Joseph Frey / HMCS <em>Canada</em>{" "}
              Expedition 2025
            </p>
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
                    the{" "}
                    <strong>
                      National Oceanic and Atmospheric Administration (NOAA)
                    </strong>
                    . This work combines marine archaeological assessment with
                    marine sciences analysis, drawing on more than{" "}
                    <strong>
                      10,600 high-resolution underwater photographs
                    </strong>{" "}
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
                            and modifications across its service life, from its{" "}
                            <strong>1904 construction</strong>,{" "}
                            <strong>1912 naval upgrading</strong>,{" "}
                            <strong>wartime up-arming between 1915–1916</strong>
                            , and{" "}
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
                            of{" "}
                            <strong>
                              HMCS <em>Canada</em>
                            </strong>{" "}
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
                  {" "}
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
                    HMCS Canada From Warship to Reef Alert Diver Q2 2026
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
                    <ul data-rte-list="default" className="list-disc list-inside my-3">
                      <li className="mb-3">
                        &ldquo;
                        <strong>
                          Honouring the Royal Canadian Navy&rsquo;s Legacy at 70
                          Metres.&rdquo;
                        </strong>
                        <br />
                        <em>Member&rsquo;s News</em>,{" "}
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
                        historical significance by Joseph Frey.{" "}
                        <a href="https://dan.org/alert-diver/article/from-warship-to-reef/">
                          https://dan.org/alert-diver/article/from-warship-to-reef/
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>CBC News Network</strong> (July 2, 2026) CBC
                        News Network senior reporter{" "}
                        <strong>Brett Ruskin</strong> interviewed expedition
                        leader <strong>Joseph Frey</strong> for a{" "}
                        <strong>
                          3&frac12;-minute nationally broadcast feature
                        </strong>{" "}
                        marking the{" "}
                        <strong>
                          100th anniversary of the sinking of HMCS{" "}
                          <em>Canada</em>
                        </strong>
                        . The segment explored the remarkable history of
                        Canada&rsquo;s first purpose-built armed government vessel,
                        from her service as the Royal Canadian Navy&rsquo;s second
                        flagship and survival of the Halifax Explosion to her
                        final voyage and sinking in the Florida Keys on 2 July
                        1926. The feature also highlighted the achievements of
                        the{" "}
                        <strong>
                          HMCS <em>Canada</em> Expedition 2025
                        </strong>
                        , including the first comprehensive 3D photogrammetric
                        survey of the wreck undertaken in partnership with the{" "}
                        <strong>Florida Keys National Marine Sanctuary</strong>.
                        The interview was broadcast nationally on CBC News
                        Network&rsquo;s morning programming and helped introduce the
                        expedition and its scientific, archaeological,
                        ecological, and historical significance to a Canada-wide
                        audience.{" "}
                        <a href="https://www.youtube.com/watch?v=Jhy2xn8LrW8">
                          https://www.youtube.com/watch?v=Jhy2xn8LrW8
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>Explore: A Canadian Geographic Podcast</strong>{" "}
                        (July 14, 2026) Expedition lead{" "}
                        <strong>Joseph Frey</strong> was interviewed by
                        journalist, broadcaster, and explorer{" "}
                        <strong>David McGuffin</strong> for{" "}
                        <em>Explore: A Canadian Geographic Podcast</em>. The
                        discussion examined the history of{" "}
                        <strong>
                          HMCS <em>Canada</em>
                        </strong>
                        , Canada&rsquo;s first purpose-built armed government vessel,
                        and the results of the HMCS Canada Expedition 2025,
                        which completed the first comprehensive 3D
                        photogrammetric survey of the wreck in the Florida Keys
                        National Marine Sanctuary (FKNMS).Hosted by David
                        McGuffin, Fellow of The Royal Canadian Geographical
                        Society and host of{" "}
                        <strong>
                          <em>Explore: A Canadian Geographic Podcast</em>
                        </strong>
                        .{" "}
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
                        the HMCS<em> Canada</em> Expedition 2025{" "}
                        <a href="https://shearwater.com/en-ca/blogs/community/hmcs-canada">
                          https://shearwater.com/en-ca/blogs/community/hmcs-canada
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>
                          Legion: Canada&rsquo;s Military History Magazine
                        </strong>{" "}
                        (August 25, 2026){" "}
                        <strong>
                          <em>The Briefing</em>
                        </strong>{" "}
                        with <strong>Alex Bowers,</strong> staff writer with
                        Legion and expedition lead <strong>Joseph Frey</strong>{" "}
                        on the importance of HMCS <em>Canada</em> to
                        Canada&rsquo;s naval history and the December 2025 HMCS{" "}
                        <em>Canada</em> Expedition.
                      </li>
                      <li className="mb-3">
                        <strong>Canadian Geographic</strong> (Autumn 2026) a
                        feature article examining the HMCS <em>Canada</em>{" "}
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
                    <ul>
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
                        <strong>Royal Canadian Military Institute,</strong>{" "}
                        Toronto, September 16, 2026, Joseph Frey
                      </li>
                    </ul>
                    <p>
                      As additional articles, interviews, and interpretive
                      pieces are published, they will be added to this section
                      to provide a consolidated public record of how the HMCS{" "}
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
      </main>
    </>
  );
}
