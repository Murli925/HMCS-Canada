import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/common/PageHero'
import { findPostBySlug } from '@/data/blogs'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findPostBySlug(params.slug)
  if (!post) return { title: 'Blog' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = findPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <>
      <PageHero eyebrow="Blogs" title={post.title} image={post.image} imageAlt={post.title} description={post.excerpt} />
      <main>
        <div className="mx-auto max-w-[var(--max-content-width)] px-6 py-[var(--section-spacing)]">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </main>
    </>
  )
}
