import ServiceItem from "../molecules/ServiceItem";

const serviceData = [
  {
    iconSrc: "/images/icon-dev.svg",
    iconAlt: "Web development icon",
    title: "Web development",
    description: "Expert in Drupal frontend and backend, with strong focus on SEO, analytics, and SOLR search for powerful, high-performing websites.",
    width: 40,
    height: 40
  },

  {
    iconSrc: "/Robot.svg",
    iconAlt: "Ai capabilities",
    title: "AI Capabilities",
    description: "Exploring RAG, MCP, and AI tools to make Drupal sites and apps smarter, faster, and more efficient",
    width: 40,
    height: 40
  },
  {
    iconSrc: "/shopping.svg",
    iconAlt: "Ecom icon",
    title: "E-Commerce",
    description: "Building enterprise eCommerce platforms with Drupal Commerce and Magento, backed by user analytics for better decisions.",
    width: 40,
    height: 40
  },
  {
    iconSrc: "/opensource.svg",
    iconAlt: "Opensource icon",
    title: "Open Source",
    description: "Helping the community with code and non-code contributions, giving back to the ecosystem that powers innovation.",
    width: 40,
    height: 40
  }
];

const hobbyData = [
  {
    iconSrc: "/music.svg",
    iconAlt: "Music Icon",
    title: "Music",
    description: "",
    width: 40,
    height: 40
  },
  {
    iconSrc: "/movie.svg",
    iconAlt: "movies icon",
    title: "Movies",
    description: "",
    width: 40,
    height: 40
  },
  {
    iconSrc: "/food.svg",
    iconAlt: "Food icon",
    title: "Foodie",
    description: "",
    width: 40,
    height: 40
  },
  {
    iconSrc: "/gaming.svg",
    iconAlt: "Gaming icon",
    title: "Gaming",
    description: "",
    width: 40,
    height: 40
  },
];

const clientData = [
  {
    iconSrc: "/pill.svg",
    iconAlt: "Pharmaceutical icon",
    title: "Pharmaceuticals",
    description: "Developed education portals with live webinar integration, e-commerce platforms for product sales, and advanced analytics for user engagement.",
    width: 40,
    height: 40
  },

  {
    iconSrc: "/NGO.svg",
    iconAlt: "Non-Profit",
    title: "Non-Profit Organizations",
    description: "Built donation platforms with multi-currency support, created engaging campaign pages, and implemented SEO strategies to boost visibility.",
    width: 40,
    height: 40
  },
];

export default function Service() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>

      <ul className="service-list">
        {serviceData.map((service, index) => (
          <ServiceItem
            key={index}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
            title={service.title}
            description={service.description}
            width={service.width}
            height={service.height}
          />
        ))}
      </ul>

      <div className="separator"></div>

      <h3 className="h3 service-title">Industries I’ve Worked With</h3>
      <ul className="service-list">
        {clientData.map((service, index) => (
          <ServiceItem
            key={index}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
            title={service.title}
            description={service.description}
            width={service.width}
            height={service.height}
          />
        ))}
      </ul>

      <div className="separator"></div>

      <h3 className="h3 service-title">Hobbies</h3>
      <ul className="service-list hobbies-list">
        {hobbyData.map((service, index) => (
          <ServiceItem
            key={index}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
            title={service.title}
            description={service.description}
            width={service.width}
            height={service.height}
          />
        ))}
      </ul>

    </section>
  );
}