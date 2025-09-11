import { about } from "@/data/about"
import SocialLinks from "@/components/Socials"
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-start md:gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold">Hi 👋</h1>
          <p className="text-gray-700 mt-4 text-2xl font-medium leading-relaxed max-w-2xl">
            {about.tagline}
          </p>
          <div className="mt-6">
             <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 text-white font-medium 
                         hover:bg-blue-700 transition-colors">
              <IoPersonCircleOutline className="w-5 h-5" />
              More about me
            </Link>
          </div>
          <div className="flex justify-center md:justify-start mt-6">
            <SocialLinks />
          </div>
        </div>

  
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/images/profile.jpg"
            alt={about.name}
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg border"
            priority
          />
        </div>
      </div>
    </div>
  );
}