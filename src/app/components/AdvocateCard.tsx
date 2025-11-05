import { Advocate } from "@/db/types";
import { formatUsPhoneNumber } from "../utils/phoneNumber";

export const AdvocateCard = ({
  advocate,
  index,
}: {
  advocate: Advocate;
  index: number;
}) => {
  const { firstName, lastName, specialties, yearsOfExperience, phoneNumber } =
    advocate;

  const formattedPhoneNumber = formatUsPhoneNumber(phoneNumber);
  return (
    <article
      key={`${firstName}-${lastName}-${index}`}
      className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center border border-gray-100 pb-20 min-h-96"
      aria-labelledby={`advocate-${index}-name`}
    >
      {yearsOfExperience > 8 && (
        <span className="absolute right-4 top-4 bg-solace-gold text-white text-xs font-semibold px-2 py-1 rounded-full">
          Expert Advocate
        </span>
      )}

      {/* Name */}
      <h2
        id={`advocate-${index}-name`}
        className="font-serif text-2xl font-medium text-gray-900 mt-6 mb-1"
      >
        {firstName} {lastName[0]}.
      </h2>

      {/* Specialties */}
      <div className="mt-2 w-full">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          Specialties:
        </h3>
        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
          {specialties.map((s: string) => (
            <span
              key={s}
              className="bg-solace-cream text-solace-teal-dark px-3 py-1 rounded-full text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-4 w-full">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          Experience:
        </h3>
        <p className="text-gray-700 text-sm">
          {`${firstName} has ${yearsOfExperience} years of experience.`}
        </p>
      </div>

      {/* Call button */}
      {phoneNumber ? (
        <a
          href={`tel:${phoneNumber}`}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-solace-teal text-white rounded-full shadow hover:bg-solace-teal-dark focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          aria-label={`Call ${firstName} ${lastName[0]}. at ${phoneNumber}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span>{formattedPhoneNumber}</span>
        </a>
      ) : (
        <div className="w-full h-6" />
      )}
    </article>
  );
};
