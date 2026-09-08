import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/data/blogs'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-[var(--color-white)] shadow-sm">
      <div className="h-56 w-full relative">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-8">
        <p className="text-xs text-[var(--color-muted)] mb-4">{post.date}</p>
        <h3 className="mb-4 font-semibold">{post.title}</h3>
        <p className="text-sm text-[var(--color-muted)] mb-6">{post.excerpt}</p>
        <Link href={`/blogs/${post.slug}`} className="text-sm underline">
          Read More
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
