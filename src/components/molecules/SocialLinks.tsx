import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Globe, Mail, Instagram } from "lucide-react"

interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

interface SocialLinksProps {
  links?: SocialLink[]
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "minimal" | "filled"
}

const defaultLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    label: "View my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    label: "Connect with me on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
    label: "Follow me on Twitter",
  },
  {
    name: "Portfolio",
    url: "https://yourwebsite.com",
    icon: Globe,
    label: "Visit my portfolio website",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    label: "Send me an email",
  },
]

export function SocialLinks({
  links = defaultLinks,
  className = "",
  size = "md",
  variant = "default",
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "minimal":
        return "bg-transparent hover:bg-muted border-0 text-muted-foreground hover:text-foreground"
      case "filled":
        return "bg-primary text-primary-foreground hover:bg-primary/90"
      default:
        return "bg-background hover:bg-muted border border-border text-foreground hover:text-primary"
    }
  }

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            className={`
              ${sizeClasses[size]} 
              ${getVariantClasses()}
              rounded-full 
              transition-all 
              duration-200 
              hover:scale-110 
              focus:scale-110 
              focus:outline-none 
              focus:ring-2 
              focus:ring-ring 
              focus:ring-offset-2
            `}
            asChild
          >
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              title={link.label}
            >
              <IconComponent className={iconSizes[size]} />
            </a>
          </Button>
        )
      })}
    </div>
  )
}

// Export individual social link for custom implementations
export function SocialLink({
  name,
  url,
  icon: IconComponent,
  label,
  size = "md",
  variant = "default",
}: SocialLink & { size?: "sm" | "md" | "lg"; variant?: "default" | "minimal" | "filled" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "minimal":
        return "bg-transparent hover:bg-muted border-0 text-muted-foreground hover:text-foreground"
      case "filled":
        return "bg-primary text-primary-foreground hover:bg-primary/90"
      default:
        return "bg-background hover:bg-muted border border-border text-foreground hover:text-primary"
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`
        ${sizeClasses[size]} 
        ${getVariantClasses()}
        rounded-full 
        transition-all 
        duration-200 
        hover:scale-110 
        focus:scale-110 
        focus:outline-none 
        focus:ring-2 
        focus:ring-ring 
        focus:ring-offset-2
      `}
      asChild
    >
      <a
        href={url}
        target={url.startsWith("mailto:") ? "_self" : "_blank"}
        rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        aria-label={label}
        title={label}
      >
        <IconComponent className={iconSizes[size]} />
      </a>
    </Button>
  )
}

// Predefined icon components for easy access
export const socialIcons = {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Instagram,
}
