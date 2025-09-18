import BlogItem from "../molecules/BlogItem";

const blogs = [
    {
      href: "https://www.qed42.com/insights/from-cms-to-ai-middleware-how-i-connected-drupals-content-to-a-custom-mcp-server",
      image: "/images/DrupalMCPBlog.png",
      alt: "Drupal and AI",
      category: "Drupal AI",
      date: "Apr 15, 2025",
      dateTime: "2025-04-15",
      title: "Bridging Drupal with AI: Building a Custom MCP Middleware",
      description:
        "Learn how I connected Drupal content to a custom MCP server to enable AI-powered, context-aware workflows. A practical approach to make Drupal content work smarter with AI.",
    },
    {
        href: "https://impossible-polyester-dfd.notion.site/Default-Content-a1cb301b123b4ac6947133a9d95396f8",
        image: "/images/DefaultContent.png",
        alt: "Drupal Default content",
        category: "Drupal Basics",
        date: "Apr 27, 2022",
        dateTime: "2022-04-27",
        title: "Seamless Content Migration in Drupal with Default Content Module",
        description:
          "Learn how to easily export and import nodes, media, files, and more using the Default Content module. Simplify site migrations and keep your Drupal projects consistent across environments.",
      },
];

const posts = [
    {
      href: "https://lnkd.in/p/dZQRHAFX",
      image: "/images/postfirst.webp",
      alt: "Drupal Camp Pune",
      category: "Open Source",
      date: "Sep 15, 2025",
      dateTime: "2025-09-15",
      title: "DrupalCamp Pune 2025: A Journey of Learning, Community & Firsts",
      description:
        "DrupalCamp Pune 2025 was a vibrant mix of knowledge-sharing, collaboration, and celebration. From organizing to speaking, it was a milestone-filled experience of growth and community spirit.",
    },
];

const events = [
    {
      href: "#",
      image: "/images/eventspoken.webp",
      alt: "Drupal Camp Pune speaker",
      category: "Community Event",
      date: "Sep 13, 2025",
      dateTime: "2025-09-13",
      title: "Everything AI in Drupal: Past, Present & Future",
      description:
        "At DrupalCamp 2025, I shared insights on Drupal + AI’s evolution—exploring its timeline, breakthroughs, and how AI empowers different personas to solve real-world challenges in the Drupal ecosystem.",
    },
];

export default function Blogs() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
        {blogs.map((blog, idx) => (
        <BlogItem key={idx} {...blog} />
      ))}
        </ul>
      </section>
      <br />
      <header>
        <h2 className="h2 article-title">Posts</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
        {posts.map((blog, idx) => (
        <BlogItem key={idx} {...blog} />
      ))}
        </ul>
      </section>
      <br />
      <header>
        <h2 className="h2 article-title">Events Spoken at:</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
        {events.map((blog, idx) => (
        <BlogItem key={idx} {...blog} />
      ))}
        </ul>
      </section>
    </article>
  );
}
