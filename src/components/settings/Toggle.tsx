"use client";

import { useState } from "react";

export function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className={`relative h-[31px] w-[51px] rounded-full transition-colors duration-200 ${
        on ? "bg-[oklch(0.55_0.2_145)]" : "bg-[oklch(0.85_0_0_/_60%)]"
      } dark:bg-[oklch(0.3_0_0)]`}
    >
      <span
        className={`absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
          on ? "translate-x-[22px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  );
}
