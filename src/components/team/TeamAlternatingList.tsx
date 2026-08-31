import Image from 'next/image'
import { teamMembers } from '@/data/team'

function RichTextParagraphs({ html }: { html: string }) {
  return (
    <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-body)] sm:text-lg">
      {html.split('\n\n').filter(Boolean).map((paragraph, index) => (
        <p
          key={index}
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  )
}

export function TeamAlternatingList() {
  return (
    <section className="py-[var(--section-spacing)]">
      <div className="mx-auto max-w-[var(--max-content-width)] px-6 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-20">
          {teamMembers.map((member, index) => {
            const isAlternate = index % 2 === 1

            return (
              <article
                key={member.id}
                className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14"
              >

                <div
                  className={`order-2 flex w-full lg:w-[60%] ${isAlternate ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="w-full lg:my-2">
                    <h3 className="mt-2 text-2xl font-normal tracking-tight text-[var(--color-foreground)] sm:text-3xl" data-aos="slide-up">
                      {member.name} {member.credentials}
                    </h3>
                    <RichTextParagraphs html={member.bio} />
                  </div>
                </div>
                <div
                  className={`order-1 flex w-full lg:w-[40%] ${isAlternate ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="w-full overflow-hidden">
                    <div className="relative h-full min-h-[320px] w-full lg:min-h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        data-aos="slide-up"
                      />
                    </div>
                  </div>
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
