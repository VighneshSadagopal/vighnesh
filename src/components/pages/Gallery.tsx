import Image from "next/image"

interface GalleryItem {
  id: number
  title: string
  imageUrl: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Photo 1",
    imageUrl: "/gallery/photo1.jpg",
    alt: "Group Photo of DCP 24",
  },
  {
    id: 2,
    title: "Photo 1",
    imageUrl: "/images/postfirst.webp",
    alt: "Everyone at registratin desk of DCP25",
  },
  {
    id: 3,
    title: "Photo 2",
    imageUrl: "/gallery/photo4.jpg",
    alt: "ME at Lonavla with friends",
  },
  {
    id: 4,
    title: "Photo 2",
    imageUrl: "/images/eventspoken.webp",
    alt: "Session photo of me and my friend ruturaj",
  },
  {
    id: 5,
    title: "Photo 2",
    imageUrl: "/gallery/photo5.jpg",
    alt: "Goa Trip with friends",
  },
  {
    id: 6,
    title: "Photo 6",
    imageUrl: "/gallery/photo7.jpg",
    alt: "Me at my native place",
  },
  {
    id: 7,
    title: "Photo 7",
    imageUrl: "/gallery/photo6.jpg",
    alt: "QED42 Retreat",
  },
  {
    id: 8,
    title: "Photo 8",
    imageUrl: "/gallery/photo3.jpeg",
    alt: "QED42 DCP Meetup Pune",
  }
  
]

export default function Gallery() {
  return (
    <article className="portfolio active" data-page="gallery">
      <header>
        <h2 className="h2 article-title">Gallery</h2>
      </header>
    <div className="container px-4 py-8">

      <div className="grid gallery-grid ">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group bg-card gallery-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-[4/2] overflow-hidden">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
    </article>
  )
}
