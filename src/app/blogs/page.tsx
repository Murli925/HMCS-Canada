import type { Metadata } from 'next'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import BlogCard from '@/components/common/BlogCard'
import { posts } from '@/data/blogs'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Latest updates and expedition stories from HMCS Canada.',
}

export default function BlogsPage() {
  return (
    <>
      <main>
                <PageHero
                  title="Our Blogs"
                  image="/images/CGS-Canada.jpg"
                  imageAlt="Contact Us Banner"
                />
        <section className="py-[var(--section-spacing)] bg-[var(--color-background-alternate)]" >
          <div className="mx-auto max-w-[var(--max-content-width)] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          </div>
        </section>
      </main>
    </>
  )
}
