import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { BLOG_TITLE } from '@/constants'
import { loadBlogPost } from '@/helpers/file-helpers'

import BlogHero from '@/components/BlogHero'

import styles from './postSlug.module.css'
import COMPONENTS_MAP from '@/helpers/mdx-components'

export async function generateMetadata({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug)

  if (!blogPostData) {
    return null
  }

  const { frontmatter } = blogPostData
  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

async function BlogPost({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug)
  if (!blogPostData) {
    notFound()
  }

  const { frontmatter, content } = blogPostData
  return (
    <article className={styles.wrapper}>
      <BlogHero title={frontmatter.title} publishedOn={frontmatter.publishedOn} />

      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENTS_MAP} />
      </div>
    </article>
  )
}

export default BlogPost
