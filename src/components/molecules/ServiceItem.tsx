import Image from "next/image";

interface ServiceItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export default function ServiceItem({ iconSrc, iconAlt, title, description , width , height }: ServiceItemProps) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={width}
          height={height}
        />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">
          {description}
        </p>
      </div>
    </li>
  );
}