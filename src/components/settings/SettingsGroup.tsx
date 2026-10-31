"use client";

import type { SettingsGroup as SettingsGroupType } from "./settings-types";
import { SettingsRow } from "./SettingsRow";

export function SettingsGroup({ group }: { group: SettingsGroupType }) {
  return (
    <section className="px-4">
      {group.header && (
        <p className="px-4 pb-2 pt-8 text-[13px] font-medium uppercase tracking-[0.04em] text-muted-foreground">
          {group.header}
        </p>
      )}
      <div className="overflow-hidden rounded-xl bg-card">
        {group.rows.map((row, i) => (
          <div key={row.id}>
            <SettingsRow row={row} />
            {i < group.rows.length - 1 && (
              <div className="ml-14 h-px bg-separator" />
            )}
          </div>
        ))}
      </div>
      {group.footer && (
        <p className="px-4 pt-2 text-[13px] leading-snug text-muted-foreground">
          {group.footer}
        </p>
      )}
    </section>
  );
}
