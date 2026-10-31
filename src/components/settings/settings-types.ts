import type { LucideIcon } from "lucide-react";

export type SettingsRow = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconBg: string; // tailwind bg class for the icon tile
  value?: string;
  badge?: number; // red notification badge
  toggle?: boolean;
  toggleDefault?: boolean;
  detail?: boolean; // show chevron
  href?: string; // route for detail rows (defaults to "#")
  footer?: string;
};

export type SettingsGroup = {
  id: string;
  header?: string;
  rows: SettingsRow[];
  footer?: string;
};
