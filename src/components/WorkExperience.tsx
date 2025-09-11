import Image from "next/image";
import { experience, type Role } from "@/data/experience";

const formatRange = (start: string, end?: string) => {
  return `${start} — ${end ?? "Present"}`;
}

export default function ExperienceTimeline({
  items = experience,
}: {
  items?: Role[];
}) {

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-8" aria-hidden />

       <ul className="space-y-8">
        {items.map((item, idx) => {
          const Wrapper = item.link ? "a" : "div";

          return (
            <li key={`${item.company}-${idx}`} className="relative flex gap-4 md:gap-6">
              <Wrapper
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className={`flex gap-4 md:gap-6 w-full rounded-lg p-4 transition 
                  ${item.link ? "hover:bg-gray-50 hover:shadow-md" : ""}`}
              >
                {/* Logo */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full ring-2 ring-white shadow border bg-white overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                    <Image
                      src={`/${item.logo}`}
                      alt={`${item.company} logo`}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {item.company}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">{item.title}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    {formatRange(item.start, item.end)}
                  </p>
                </div>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}