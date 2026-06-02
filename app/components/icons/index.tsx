import type { ComponentType } from "react";
import { FlameIcon } from "./flame-icon";
import Check from "@geist-ui/icons/check";
import Clock from "@geist-ui/icons/clock";
import MapPin from "@geist-ui/icons/mapPin";
import Briefcase from "@geist-ui/icons/briefcase";
import Globe from "@geist-ui/icons/globe";
import Mail from "@geist-ui/icons/mail";
import Phone from "@geist-ui/icons/phone";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";
import Send from "@geist-ui/icons/send";
import Award from "@geist-ui/icons/award";
import User from "@geist-ui/icons/user";
import Info from "@geist-ui/icons/info";
import Layers from "@geist-ui/icons/layers";
import Book from "@geist-ui/icons/book";
import Star from "@geist-ui/icons/star";
import Settings from "@geist-ui/icons/settings";
import Zap from "@geist-ui/icons/zap";

const icons = {
  flame: FlameIcon,
  check: Check,
  clock: Clock,
  "map-pin": MapPin,
  briefcase: Briefcase,
  globe: Globe,
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  send: Send,
  award: Award,
  user: User,
  info: Info,
  layers: Layers,
  book: Book,
  star: Star,
  settings: Settings,
  zap: Zap,
} as const;

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className }: IconProps) {
  const Component = icons[name] as ComponentType<{ size?: number; className?: string }>;
  return <Component size={size} className={className} />;
}
