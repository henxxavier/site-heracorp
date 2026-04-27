interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  highlights,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-sm hover:shadow-md hover:border-[#0292b7]/30 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-[#0292b7]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#1c4c86] mb-3">{title}</h3>
      <p className="text-[#545454] text-sm leading-relaxed mb-4">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="space-y-1.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#545454]">
              <svg
                className="w-4 h-4 text-[#0292b7] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
