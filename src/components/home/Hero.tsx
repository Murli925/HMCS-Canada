import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-15 bg-[#d7d3ce] text-[var(--color-background)] mt-[-120px]">
      <div className="absolute inset-0">
        <Image
          src="/images/CGS_Canada_CN-3793_Photo-Credit.webp"
          alt="HMCS Canada at dockside"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale-[0.95] contrast-[1.05]"
        />
      </div>

      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.28)_70%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[var(--max-content-width)] px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="relative lg:min-h-[90vh] min-h-[70vh] text-left">
          <div className="absolute left-0 top-0 md:block">
            <div className="w-[150px] sm:w-[180px] lg:w-[210px]">
              <Image
                src="/images/117+HMCS-Canada-Seal-Modern.PNG.webp"
                alt="HMCS Canada expedition seal"
                width={210}
                height={210}
                className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 w-[150px] sm:w-[180px] lg:w-[250px]">
            <Image
              src="/images/BCEI.png"
              alt="HMCS Canada expedition seal"
              width={250}
              height={250}
              className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            />
          </div>

          <div className="absolute inset-x-0 bottom-6 max-w-[600px] px-2 top-auto bottom-0">
            <div className="mb-4 max-w-[760px] bg-black/40 py-7 px-5 text-left backdrop-blur-[1px]">
              <span className="banner-title text-left italic !text-[1.6rem] font-normal tracking-[0.02em] w-full text-white !sm:text-[2rem] !lg:text-[2.2rem]">Bringing to life Canada’s first purpose-built warship through deepwater exploration</span>
            </div>

            <h1 className="font-[var(--font-display)] text-white text-left text-[clamp(2.5rem,7vw,2.5rem)] leading-[0.85] tracking-[-0.04em] text-[#f3f0eb] text-shadow-[1px_1px_5px_rgba(0,0,0,.58)] italic sm:text-[clamp(2.5rem,7vw,2.5rem)] lg:text-[clamp(3.5rem,7vw,4rem)]">
              HMCS Canada Expedition 2025
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
