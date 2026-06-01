import { getTranslations } from "next-intl/server";
import Globe from "@geist-ui/icons/globe";
import Mail from "@geist-ui/icons/mail";
import Phone from "@geist-ui/icons/phone";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";
import Send from "@geist-ui/icons/send";
import { ContactType, type Profile, ProfileStatus } from "../../data/types";
import { cn } from "../../../lib/utils";

function statusColor(status: ProfileStatus): { dot: string; ping: string } {
  switch (status) {
    case ProfileStatus.OpenToWork:
      return { dot: "bg-green-500", ping: "bg-green-400" };
    case ProfileStatus.Hiring:
      return { dot: "bg-blue-500", ping: "bg-blue-400" };
    case ProfileStatus.Unavailable:
      return { dot: "bg-gray-500", ping: "bg-gray-400" };
  }
}

const iconButton =
  "inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ebebeb] dark:border-[#333333] bg-[#ffffff] dark:bg-[#1f1f1f] text-[#4d4d4d] dark:text-[#a1a1a1] hover:border-[#a1a1a1] dark:hover:border-[#555555] hover:text-[#171717] dark:hover:text-white transition-colors";

const contactIcons = {
  [ContactType.Email]: Mail,
  [ContactType.Phone]: Phone,
  [ContactType.GitHub]: Github,
  [ContactType.LinkedIn]: Linkedin,
  [ContactType.Telegram]: Send,
};

export async function HeroSection({ profile }: { profile: Profile }) {
  const [tHero, tProfileStatus] = await Promise.all([
    getTranslations("hero"),
    getTranslations("profileStatus"),
  ]);

  return (
    <section className="space-y-4">
      {profile.status && (
        <div className="mono uppercase inline-flex items-center gap-2 text-xs text-[#888888]">
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                statusColor(profile.status).ping,
              )}
            />
            <span
              className={cn(
                "relative inline-flex h-2 w-2 rounded-full",
                statusColor(profile.status).dot,
              )}
            />
          </span>
          <span>{tProfileStatus(profile.status)}</span>
        </div>
      )}

      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#171717] dark:text-white">
          {tHero("greeting", {
            name: [profile.first_name, profile.additional_name, profile.last_name]
              .filter(Boolean)
              .join(" "),
          })}
        </h1>
        <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#4d4d4d] dark:text-[#a1a1a1]">
          {profile.headline}
        </p>
      </div>

      <div className="mono flex items-center justify-between gap-4 text-sm text-[#888888]">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {profile.industry && <span>{profile.industry}</span>}
          <span>{profile.location}</span>
          {profile.pronouns && <span>({profile.pronouns})</span>}
        </div>
        <div className="flex items-center gap-2">
          {profile.website && (
            <a href={profile.website} title={profile.website} className={iconButton}>
              <Globe size={14} />
            </a>
          )}
          {profile.contacts.map((c) => {
            const Icon = contactIcons[c.type];
            return (
              <a key={c.type} href={c.href} title={c.value} className={iconButton}>
                {Icon && <Icon size={14} />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
