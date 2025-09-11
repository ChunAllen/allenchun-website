import { socials } from "@/data/socials";

import { 
  SiGithub, 
  SiLinkedin, 
  SiBehance, 
  SiMedium, 
  SiMinutemailer
} from "react-icons/si";

const iconMap: Record<string, (props: { className?: string }) => JSX.Element> = {
  github:   ({ className }) => <SiGithub className={className} />,
  linkedin: ({ className }) => <SiLinkedin className={className} />,
  behance:  ({ className }) => <SiBehance className={className} />,
  medium:   ({ className }) => <SiMedium className={className} />,
  email:    ({ className }) => <SiMinutemailer className={className} />,
};

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      {socials.links.map((s) => {
        const Icon = iconMap[s.icon];
        if (!Icon) return null;

        const external = !s.link.startsWith("mailto:");
        return (
          <a
            key={s.name}
            href={s.link}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={s.name}
            className="group"
          >
            <Icon className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
          </a>
        );
      })}
    </div>
  );
}