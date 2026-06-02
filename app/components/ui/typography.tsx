import type { ElementType, ReactNode } from "react";
import { cn } from "../../../lib/utils";

const styles = {
  display: "text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-ink",
  heading: "text-lg font-semibold leading-snug text-ink",
  subheading: "text-base font-semibold leading-snug text-ink",
  title: "text-sm font-semibold leading-snug text-ink",
  section: "mono text-xs uppercase text-ink-soft",
  body: "text-sm leading-relaxed text-muted",
  "body-lg": "text-base leading-[1.7] text-muted",
  "body-mono": "mono text-sm text-muted",
  label: "mono text-xs uppercase text-subtle",
  meta: "mono text-xs text-subtle",
  caption: "text-xs text-subtle",
  overline: "mono text-[10px] uppercase tracking-wider text-neutral",
} as const;

const defaultTag: Record<Variant, ElementType> = {
  display: "h1",
  heading: "h2",
  subheading: "h3",
  title: "h4",
  section: "h2",
  body: "p",
  "body-lg": "p",
  "body-mono": "p",
  label: "span",
  meta: "span",
  caption: "span",
  overline: "span",
};

export type Variant = keyof typeof styles;

interface Props {
  variant: Variant;
  component?: ElementType;
  className?: string;
  children?: ReactNode;
}

export function Typography({ variant, component, className, children }: Props) {
  const Tag = component ?? defaultTag[variant];
  return (
    <Tag className={cn(styles[variant], className)}>
      {children}
    </Tag>
  );
}
