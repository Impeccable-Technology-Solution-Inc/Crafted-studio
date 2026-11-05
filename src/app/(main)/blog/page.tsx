import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import PageHero from "@/components/sections/PageHero";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hair care, grooming habits and barber tips from the Crafted Studio chair.",
  alternates: { canonical: "/blog" },
};

/** Port of blog.html. */
export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Latest" title="Blog" image="/images/background/9.webp" />

      <section aria-label="Blog posts">
        <div className="container">
          <div className="row g-4">
            {/* No pagination: there are four posts and one page of them. The
                template's 1-2-3 control was a design placeholder with every
                link inert, which on a four-post blog reads as two missing
                pages. Bring one back when the list actually outgrows a page. */}
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
