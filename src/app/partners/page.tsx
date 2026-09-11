import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { TwoColumnContent } from "@/components/common/TwoColumnContent";
import { ImageText } from "@/components/common/ImageText";

export const metadata: Metadata = {
  title: "Partners | Join Our Mission — HMCS Canada Expedition 2025 ",
  description: "Explore partnership opportunities with HMCS Canada Expedition 2025. Collaborate to highlight Canada's naval heritage and marine ecology. ",
};

export default function PartnersPage() {
  return (
    <>
      <main>
        <PageHero
          title="Partners"
          image="/images/Partners-banner.jpg"
          imageAlt="Partners Banner"
        />
        <section className="py-[var(--section-spacing)]">
          <TwoColumnContent
            left={
              <div className="space-y-8 text-[var(--color-foreground)]">
                <h2
                  className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-4xl"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                >
                  Our Sponsors and Partners
                </h2>
                <ul className="space-y-4 text-lg leading-relaxed disc list-inside list-disc text-[var(--color-foreground)]">
                  <li>
                    <span className="font-semibold">Lead Sponsor:</span>{" "}
                    Kensington
                  </li>
                  <li>
                    <span className="font-semibold">
                      Institutional Sponsors:
                    </span>{" "}
                    Royal Canadian Geographical Society, Jackman Foundation
                  </li>
                  <li>
                    <span className="font-semibold">
                      Private Donors – Expedition Sponsors ($1,000 and above):
                    </span>{" "}
                    Names listed with permission: Peter &amp; Carmen Griffin,
                    John Geiger, Kurt Rosentreter, Suzanne Ivey-Cook, Joseph
                    &amp; Diane Frey. Dive Coxswain: Christian Stenner.
                    Technical Diver: Guy Turpin. Support Diver: Tyler Newman.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Silent Auction Donors:
                    </span>{" "}
                    Sharewater Research, White&apos;s Drywear
                  </li>
                  <li>
                    <span className="font-semibold">Donors-in-Kind:</span>{" "}
                    3Dflow (Photogrammetry Software), Arcthetype Undersea (Diver
                    Propulsion Vehicles), Bonterra Digital (Video), The
                    Boulevard Club (Video)
                  </li>
                  <li>
                    <span className="font-semibold">Flag Expeditions:</span>{" "}
                    Royal Canadian Geographical Society, The Explorers Club
                  </li>
                  <li>
                    <span className="font-semibold">Media Partners:</span>{" "}
                    Canadian Geographic magazine, Alert Diver magazine
                  </li>
                  <li>
                    <span className="font-semibold">Expedition Advisors:</span>{" "}
                    Jill Heinert (Technical Diving); Dr. James Delgado and Dr.
                    Fritz Hanselmann (Marine Archaeology)
                  </li>
                  <li>
                    <span className="font-semibold">Collaboration:</span>{" "}
                    National Oceanographic and Atmospheric Administration,
                    Florida Keys National Marine Sanctuary, Key Largo for their
                    invaluable support throughout all stages of the HMCS Canada
                    Expedition, specifically Brenda Altmeier, Matthew Lawrence
                    and Tane Casserley.
                  </li>
                  <li>
                    <span className="font-semibold">
                      1904–1918 Historic Photography:
                    </span>{" "}
                    Royal Canadian Navy (National Defence/Canadian Armed
                    Forces), Ottawa, and the Maritime Museum of the Atlantic,
                    Halifax, Nova Scotia.
                  </li>
                  <li>
                    <span className="font-semibold">
                      2001–2003 Underwater Photography:
                    </span>{" "}
                    Underwater imagery of HMCS Canada provided by the National
                    Oceanographic and Atmospheric Administration, Florida Keys
                    National Marine Sanctuary, Key Largo.
                  </li>
                </ul>

                <div className="pt-6">
                  <h2 className="mb-4 text-4xl font-medium tracking-tight text-[var(--color-foreground)]">
                    Volunteers
                  </h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-foreground)]">
                    The HMCS Canada Expedition Team: This expedition would not
                    have been possible without our unpaid volunteers who also
                    contributed financially and their time to this
                    groundbreaking expedition: Joseph Frey, Guy Shockey, Roger
                    Lacasse, Rob DeProy, Ewan Anderson, Jason Cook and Kelvin
                    Davidson.
                  </p>
                </div>
              </div>
            }
            right={
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-4xl font-light tracking-[0.1em] text-[var(--color-foreground)] sm:text-5xl xl:text-6xl">
                  <Image
                    src="/images/Logo_+Horizontal_Purple.png"
                    alt="Kensington logo"
                    className="object-contain p-2"
                    width={500}
                    height={100}
                  />
                </div>

                <p className="text-lg italic leading-relaxed text-[var(--color-foreground)]">
                  Kensington delivers the world&apos;s most personal travel
                  experiences. We bring to life each client&apos;s desire to
                  travel in a way that&apos;s tailored specifically for them, in
                  the company of local private guides who ensure that they enjoy
                  the authentic best of their destination. The result is a
                  unique journey rich in memories that last a lifetime. Through
                  our social impact initiative Kensington Cares, we support
                  meaningful initiatives around the world in the realms of
                  education, environment, and exploration.
                </p>

                <p className="text-lg italic leading-relaxed text-[var(--color-foreground)]">
                  We achieve this because of our extraordinary people, experts
                  with deep knowledge of their destinations. For over 120
                  countries worldwide, and across each of our brands — Tours,
                  Cruises, Villas, Yachts, Jets, and Air.
                </p>

                <div className="overflow-hidden text-center">
                  <div
                    className="relative"
                    style={{ marginBottom: "-80px", zIndex: 10 }}
                  >
                    <Image
                      className="mx-auto"
                      src="/images/3D+Flow.jpg.webp"
                      alt="3D Flow logo over ship image"
                      width={200}
                      height={400}
                    />
                  </div>
                  <div className="relative aspect-[1.05] w-full">
                    <Image
                      src="/images/CN-379.jpg"
                      alt="3D Flow logo over ship image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            }
          />
        </section>

        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              columns="48% 46%"
              image="/images/1742409057303.png"
              alt="HMCS Canada research and expedition imagery"
              title={<>Support and Contributions</>}
              description={
                <>
                  <p className="mb-3">
                    The HMCS Canada Expedition 2025 welcomes support from
                    individuals, organizations, and sponsors. This section will
                    include:
                  </p>
                  <ul className="disc list-inside list-dis mb-3">
                    <li>
                      <strong>Sponsorship Opportunities</strong>: Information on
                      how to partner with the expedition to support its
                      objectives.
                    </li>
                    <li>
                      <strong>Acknowledgments</strong>: Recognition of
                      contributors and their roles in the project&rsquo;s
                      success.
                    </li>
                    <li>
                      <strong>Future Initiatives</strong>: See the following{" "}
                      <strong>Projects</strong> page for details on the{" "}
                      <strong>
                        2026 Bell Island Battle of the Atlantic Expedition
                      </strong>
                      .
                    </li>
                  </ul>
                  <p className="lg:mb-4">
                    More details will be provided as partnerships and
                    opportunities develop.&nbsp;
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section className="h-[600px] w-full overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              src="/images/Naval-file-copy.png"
              alt="Naval file"
              width={1920}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
