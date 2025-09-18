import Image from "next/image";
import Link from "next/link";

type BlogItemProps = {
  href: string;
  image: string;
  alt: string;
  category: string;
  date: string;
  dateTime: string;
  title: string;
  description: string;
};

export default function BlogItem({
  href,
  image,
  alt,
  category,
  date,
  dateTime,
  title,
  description,
}: BlogItemProps) {
  return (
    <li className="blog-post-item">
      <Link href={href}>
        <figure className="blog-banner-box">
          <Image
            src={image}
            alt={alt}
            width={400}
            height={250}
            loading="lazy"
            className="object-cover"
          />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={dateTime}>{date}</time>
          </div>

          <h3 className="h3 blog-item-title">{title}</h3>

          <p className="blog-text">{description}</p>
        </div>
      </Link>
    </li>
  );
}
