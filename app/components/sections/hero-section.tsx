import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import type { IconName } from "../icons";
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
  "inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-muted hover:border-border-hover hover:text-ink transition-colors";

const pillButton =
  "inline-flex h-7 items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 text-muted hover:border-border-hover hover:text-ink transition-colors";

const contactIconNames: Record<ContactType, IconName> = {
  [ContactType.Email]: "mail",
  [ContactType.Phone]: "phone",
  [ContactType.GitHub]: "github",
  [ContactType.LinkedIn]: "linkedin",
  [ContactType.Telegram]: "send",
};

export async function HeroSection({ profile }: { profile: Profile }) {
  const [tHero, tProfileStatus] = await Promise.all([
    getTranslations("hero"),
    getTranslations("profileStatus"),
  ]);

  return (
    <section className="space-y-4">
      {profile.status && (
        <div className="mono uppercase inline-flex items-center gap-2 text-xs text-subtle">
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
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-ink">
          {tHero("greeting", {
            name: [profile.first_name, profile.additional_name, profile.last_name]
              .filter(Boolean)
              .join(" "),
          })}
        </h1>
        <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-muted">
          {profile.headline}
        </p>
      </div>

      <div className="mono flex items-center justify-between gap-4 text-sm text-subtle">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {profile.industry && <span>{profile.industry}</span>}
          <span>{profile.location}</span>
          {profile.pronouns && <span>({profile.pronouns})</span>}
        </div>
        <div className="flex items-center gap-2">
          {profile.website && (
            <a href={profile.website} title={profile.website} className={iconButton}>
              <Icon name="globe" size={14} />
            </a>
          )}
          {profile.contacts.map((c) => {
            const iconName = contactIconNames[c.type];
            if (c.type === ContactType.Phone) {
              return (
                <a key={c.type} href={c.href} title={c.value} className={pillButton}>
                  <Icon name={iconName} size={14} />
                  <span className="text-xs">{c.value}</span>
                </a>
              );
            }
            return (
              <a key={c.type} href={c.href} title={c.value} className={iconButton}>
                <Icon name={iconName} size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
