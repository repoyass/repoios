"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { SettingsRow as SettingsRowType } from "./settings-types";
import { Toggle } from "./Toggle";

export function SettingsRow({ row }: { row: SettingsRowType }) {
  const Icon = row.icon;

  const leading = (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] ${row.iconBg}`}
    >
      <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2.2} />
    </span>
  );

  // Toggle row: no chevron, no link
  if (row.toggle) {
    return (
      <div className="flex min-h-[44px] items-center gap-3 px-4">
        {leading}
        <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
        <Toggle defaultChecked={row.toggleDefault} />
      </div>
    );
  }

  const content = (
    <div className="flex min-h-[44px] items-center gap-3 px-4">
      {leading}
      <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
      {row.value && (
        <span className="text-[15px] text-muted-foreground">{row.value}</span>
      )}
      {row.badge !== undefined && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[oklch(0.62_0.22_25)] px-1.5 text-[12px] font-semibold text-white">
          {row.badge}
        </span>
      )}
      {row.detail && (
        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/70" />
      )}
    </div>
  );

  if (row.detail || row.value !== undefined || row.badge !== undefined) {
    return (
      <Link href={row.href ?? "#"} className="block active:bg-muted" aria-label={row.label}>
        {content}
      </Link>
    );
  }

  return content;
}
