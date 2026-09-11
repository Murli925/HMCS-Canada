import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { ImageText } from "@/components/common/ImageText";
import { Button } from "@/components/common/Button";
import { FullWidthImageText } from "@/components/common/FullWidthImageText";
import { FullWidthContent } from "@/components/common/FullWidthContent";
import { Gallery } from "@/components/common/Gallery";

export const metadata: Metadata = {
  title: "HMCS Canada | Explore Naval Heritage — HMCS Canada Expedition 2025",
  description: "Discover the historical journey of HMCS Canada, Canada's first purpose-built warship, its transformation, and upcoming expedition to its wreck site in the Florida Keys. ",
};

export default function HistoryOfTheHmcsCanadaPage() {
  return (
    <>

      <main>
              <PageHero
        title="HMCS Canada"
        image="/images/banner-2.jpg.webp"
        imageAlt="HMCS Canada history"
      />
        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              image="/images/V2.jpg"
              alt="HMCS Canada research and expedition imagery"
              eyebrow=""
              title={<>A Ship’s Story</>}
              subtitle={<>Canada’s First Purpose-Built Warship</>}
              description={
                <>
                  <p className="mb-3 text-lg">
                    Launched in 1904, HMCS <em>Canada</em> was Canada&rsquo;s
                    first purpose-built warship. Originally commissioned as
                    Canadian Government Ship (CGS) <em>Canada</em> and assigned
                    to the Department of Marine and Fisheries, she was armed
                    with four Mark III 1&frac12;-pounder quick-firing guns
                    mounted on the main deck&mdash;two forward and two
                    aft&mdash;and carried a complement of approximately 75
                    officers and men. In her early service she operated as both
                    a fisheries patrol vessel and a naval training ship. Its
                    design was inspired by Britain&rsquo;s Royal Navy torpedo
                    gunboats, featuring a distinctive ram bow that reflected the
                    transitional naval architecture of the time. The ship was
                    the only ocean-going version of its kind ever built,
                    demonstrating advanced capabilities for its era.
                  </p>
                  <p className="mb-3 text-lg">
                    In 1910, the Royal Canadian Navy (RCN) was officially
                    founded, and CGS <em>Canada</em> played a crucial role in
                    training sailors even before the navy&rsquo;s formal
                    establishment. To enhance its naval capabilities the
                    ship&rsquo;s fo&rsquo;csle was raised in 1912 which improved her
                    seakeeping qualities, and its armament was strengthened to
                    four 3-pounder naval guns.
                  </p>
                  <p className="mb-3 text-lg">
                    The ship was transferred to the RCN in 1915, becoming His
                    Majesty&rsquo;s Canadian Ship (HMCS) <em>Canada</em> marking
                    a pivotal point in its career. By 1917, it had become the
                    RCN&rsquo;s second flagship replacing HMCS <em>Niobe</em>.
                    During this period, it served as a training vessel and
                    performed convoy escort duties, protecting merchant ships
                    from the dangers posed by German submarines. Remarkably,
                    HMCS <em>Canada</em> survived the catastrophic Halifax
                    Explosion of 1917, the largest ever manmade non-nuclear
                    explosion. By the end of the First World War, records show
                    that <em>Canada</em> was armed with two 12-pounders forward
                    and two 3-pounders aft. The RCN paid off (decommissioned)
                    HMCS <em>Canada</em> in November 1919 ending its pivotal
                    role in Canada&rsquo;s naval history.
                  </p>
                  <p>
                    After the war, Florida advertising mogul Barron Gift Collier
                    acquired HMCS <em>Canada</em> in 1924 for a luxury cruise
                    ship connecting Miami and the Bahamas. Under his ownership,
                    the vessel was converted into a first-class passenger liner
                    and initially renamed SS <em>Canada</em>, before later being
                    rebranded as SS <em>Queen of Nassau</em>. Despite Collier&rsquo;s
                    ambitions, the ship&rsquo;s career as a luxury passenger
                    liner was short-lived. In 1926 Mexican interests announced
                    plans to buy the aging vessel to run between Tampico and New
                    Orleans. While enroute to Tampa for final inspection the{" "}
                    <em>Queen of Nassau</em> sank during the evening hours of
                    July 2, 1926.
                  </p>
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
            title={
              <>
                HMCS <i>Canada&apos;s</i> Discovery
              </>
            }
            description={
              <>
                <p>
                  Originally discovered by technical divers, the wreck of HMCS
                  Canada was later scientifically documented and positively
                  identified by Tane Casserley, a marine archaeologist with the
                  National Oceanic and Atmospheric Administration (NOAA). As
                  part of NOAA’s mandate to research and protect submerged
                  cultural resources, Casserley conducted an extensive
                  archaeological investigation of the site between 2001 and
                  2003. Utilizing advanced underwater survey techniques, site
                  mapping, and historical analysis, his research helped
                  establish the shipwreck’s identity and historical
                  significance. Tane’s research has hypothesized that Canada’s
                  starboard propeller shaft snapped, causing the propeller to
                  fall off and opening a breach that allowed seawater to rush in
                  and sink the ship.
                </p>
                <p>
                  Casserley’s findings were published in 2005 in his master’s
                  thesis, CGS CANADA: A CANADIAN WARSHIP IN THE FLORIDA KEYS, at
                  East Carolina University, contributing to NOAA’s broader
                  mission of preserving maritime heritage.{" "}
                </p>

                <a
                  href="/files/Queen+of+Nassau_Casserley+thesis.pdf"
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
                  CGS Canada Casserley Thesis
                </a>
              </>
            }
          />
        </section>
        <section className="py-[var(--section-spacing)]">
          <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
            <ImageText
              image="/images/Queen+of+Nassau_Casserley__12.jpg"
              alt="HMCS Canada research and expedition imagery"
              eyebrow=""
              title={<>HMCS <em>Canada</em> Expedition December 2025</>}
              description={
                <>
                  <p className="mb-3 text-lg">HMCS <em>Canada</em> lies at a depth of approximately 70 meters (235 feet), placing it outside the range of recreational diving. This depth, combined with potential Gulf Stream currents, low visibility, and occasional fishing nets, has historically deterred divers from exploring the site. The Gulf Stream conditions may require advanced techniques such as drift decompression or alternate anchoring strategies. These challenges underscore why the site remains largely untouched, preserving its archaeological integrity. However, such conditions, while demanding, are well within the capabilities of our highly experienced Canadian technical dive team.</p>
<p className="mb-3 text-lg">Our team comprises divers trained and experienced in conducting operations at depths of 90 meters (295 feet) and beyond. Utilizing closed circuit rebreathers (CCR) with gas mixes optimized for these depths, the team conducts dives in this range nearly every week to maintain peak skill levels. Diver propulsion vehicles (DPVs) will enhance efficiency and productivity on-site, reducing physical strain and maximizing exploration time.</p>
<p>&nbsp;By leveraging advanced technologies, rigorous training, and a methodical approach, our expedition is fully equipped to manage the challenges of the HMCS <em>Canada</em> site safely and effectively, enabling the collection of invaluable data while preserving the well-being of the team.</p>
                </>
              }
              reverse
            />
          </div>
        </section>

       <section className="">
          <FullWidthImageText
            image="/images/QONmast+light+right+side1.JPG"
            alt="HMCS Canada underwater discovery imagery"            title={
              <>
                Florida Keys National Marine Sanctuary
              </>
            }
            description={
              <>
                <p>Now resting within the Florida Keys National Marine Sanctuary, the wreck of the SS <em>Queen of Nassau</em> (HMCS <em>Canada</em>) serves as a vital cultural and historical touchstone, connecting the maritime heritage of Canada, the United States, the Bahamas, and Mexico. Protected under the Florida Keys National Marine Sanctuary and Protection Act (H.R. 5909, 1990), this international relic continues to inspire research, education, and preservation efforts, ensuring that future generations can explore the deep historical ties that link nations through the sea.</p>
                
              </>
            }
          />
        </section> 
<section className="py-[var(--section-spacing)]">
<FullWidthContent
          title="What is Technical Diving and Photogrammetry?"
          description={
            <>
<p className="mb-3 text-lg"><strong>Technical diving</strong> is a form of scuba diving that enables exploration beyond the limits of traditional recreational diving limits. It requires specialized equipment, and advanced training. While recreational divers typically remain above 40 metres (130 feet) and use a single tank of air; technical divers descend deeper, stay longer to explore underwater caves or shipwrecks. They use specialized gas mixtures (such as nitrox with increase oxygen content and trimix that contains helium) and redundant equipment such as multiple tanks and closed-circuit rebreathers (CCRs).</p>
<p className="mb-3 text-lg">Technical diving requires careful planning, and strict adherence to safety protocols. Divers must consider risks related to gas management, decompression procedures, emergency response, and operating in environments where direct ascent to the surface is not immediately possible. The margin for error is significantly narrower than in recreational diving, making teamwork and proficiency essential.</p>
<p className="mb-3 text-lg">The wreck of <em>HMCS Canada</em> (later SS <em>Queen of Nassau</em>) rests upright at a depth of 70 metres (235 feet) well beyond recreational diving limits. Diving to this depth requires the use of CCR technology, trimix gas blends to reduce nitrogen narcosis and oxygen toxicity, and careful decompression planning for safe ascent.</p>
<p className="mb-3 text-lg">Our team of highly experienced Canadian technical divers is specially trained to operate in this demanding environment and collect high-resolution imagery for 3D photogrammetry. The resulting 3D models will enable the non-invasive study of the wreck&rsquo;s archaeological features and surrounding marine ecosystem.</p>
<p className="mb-3 text-lg"><strong>Photogrammetry</strong> is a technique that uses a large number of overlapping photographs to extract precise measurements and generate detailed 3D models of objects or environments. While traditionally used in aerial surveying, architecture, and engineering, advances in high-resolution digital photography, powerful personal computers, and accessible software have made photogrammetry an invaluable tool in archaeology &mdash; particularly for documenting underwater sites.</p>
<p className="mb-3 text-lg">In the context of marine archaeology, photogrammetry enables the <strong>non-invasive documentation of submerged cultural heritage</strong>, such as shipwrecks or ancient structures. By creating accurate digital replicas of these sites, archaeologists can analyze fine details, plan future work, monitor changes over time, and share findings with the public &mdash; all without physically disturbing fragile underwater environments.</p>
<p className="mb-3 text-lg">Underwater photogrammetry is conducted using waterproof cameras and powerful lighting systems. Divers capture hundreds of overlapping images from multiple angles. These images are then processed using specialized software that identifies common points, matches contrast features, and uses lens geometry to reconstruct the object or site in 3D space. The result is a <strong>high-resolution 3D model</strong> of the shipwreck, coral reef, or archaeological structure.</p>
<p className="mb-3 text-lg">These 3D models are particularly valuable because they allow archaeologists, students, and the public to <strong>explore and study underwater heritage sites virtually</strong>, without the time limits and physical challenges of scuba diving. Models can be rotated, zoomed, and viewed in detail on-screen; they can also be rendered as <strong>3D-printed scale models</strong> or explored using <strong>immersive virtual reality headsets</strong>, making them powerful tools for education and outreach.</p>
<p>On the <strong>HMCS Canada Expedition</strong>, 3D photogrammetry will serve both archaeological and ecological purposes. In addition to documenting the wreck of <em>HMCS Canada</em> in unprecedented detail, the expedition will support NOAA&rsquo;s ecological assessments &mdash; including <strong>invasive species monitoring, habitat mapping, and conservation planning</strong> &mdash; within the Florida Keys National Marine Sanctuary. This work contributes to the preservation of <strong>Canadian naval heritage</strong>, shared <strong>Canada&ndash;U.S. maritime history</strong>, and <strong>marine science and environmental stewardship</strong>.</p>
            
            
             <Gallery
          columns={2}
          aspectRatio="4/2.5"
          items={[
            {
              src: "/images/106-HMCS-Canada_Starboard_Bow_w_Background(1).jpg",
              alt: "HMCS Canada underwater wreck scene",
            },
            {
              src: "/images/110-HMCS-Canada_Top_View_w_Logo(1).jpg",
              alt: "Historical wreck documentation image",
            },

          ]}
        />
            
            </>
          }



        />
       
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
       <section className="">
          <FullWidthImageText
            image="/images/image-2-vertical.jpg"
            alt="HMCS Canada underwater discovery imagery"
            reverse
            columns="50% 50%"
            title={
              <>
               Technology Developed For The Expedition: Photogrammetry Dive Sled
              </>
            }
            description={
              <>
                <p className="mb-3 text-lg">The HMCS <em>Canada</em> wreck site depth and dimension require a means to perform photogrammetry scans over large areas and under strict time constraints. The team has developed a stable and maneuverable DPV (Diver Propulsion Vehicle)-mounted platform for holding underwater video lights and cameras, as these are not commercially available. Our first photogrammetry sled prototype was tested in August 2025. It consists of an extruded aluminum channels frame with two ABS piping floats to achieve neutral buoyancy and trim. Four powerful lights and two GoPro action cameras in underwater housings are attached on the perimeter. The sled is strapped to the DPV using scuba diving tank bands. And, importantly, it is air travel compatible as it disassembles like a Meccano set.</p>
<p>The sled performed above expectations during our test runs. It proved to be solid and required minimal manipulation to initiate the scan. The sled is manageable on the surface and at depth. The dual camera overlap and picture clarity increase the likelihood of the photogrammetry software reliably reconstructing 3D models. We successfully generated models from cruising speed scans (three times finning speed). Testing and refinement continue on progressively deeper and darker sites as well as in strong currents in preparation for the expedition.</p>
              </>
            }
          />
        </section>
      </main>
    </>
  );
}
