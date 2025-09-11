import { about } from "@/data/about"
import SocialLinks from "@/components/Socials"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-start md:gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold">Hi 👋</h1>
          <p className="text-gray-700 mt-4 text-lg font-medium leading-relaxed max-w-2xl">
            {about.tagline}
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <SocialLinks />
          </div>
        </div>

  
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/images/profile.jpg"
            alt={about.name}
            width={220}
            height={220}
            className="rounded-full object-cover shadow-lg border"
            priority
          />
        </div>
      </div>
    </div>
  );
}