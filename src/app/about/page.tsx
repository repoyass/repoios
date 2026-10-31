"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-[480px] bg-background pb-10">
      <div style={{ height: "env(safe-area-inset-top, 0px)" }} />

      {/* Back Button */}
      <div className="px-4 pb-4 pt-4">
        <Link
          href="/general"
          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground active:opacity-60"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={3} />
        </Link>
      </div>

      {/* Title */}
      <div className="px-4 pb-6">
        <h1 className="text-[32px] font-bold">Informations</h1>
      </div>

      {/* Content */}
      <div className="px-0 pb-10">
        {/* Section 1: Device Info */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "Nom", value: "iPhone", chevron: true },
            { label: "Version d'iOS", value: "27.2", chevron: true },
            { label: "Nom du modèle", value: "iPhone 17 Pro" },
            { label: "N° du modèle", value: "MYND3ZD/A" },
            { label: "Numéro de série", value: "F4GG4D97NW" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href={row.chevron ? "#" : ""} className={row.chevron ? "flex min-h-[54px] items-center gap-3 px-4 active:bg-muted/50" : "flex min-h-[54px] items-center gap-3 px-4"}>
                <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
                <span className="text-[15px] text-muted-foreground text-right">{row.value}</span>
                {row.chevron && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/70 flex-shrink-0 ml-2" />
                )}
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 2: Coverage */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          <Link href="#" className="flex min-h-[54px] items-center gap-3 px-4 active:bg-muted/50">
            <span className="flex-1 text-[17px] leading-tight">Couverture expirée</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground/70" />
          </Link>
        </div>

        {/* Section 3: Storage & Media */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "Morceaux", value: "0" },
            { label: "Vidéos", value: "258" },
            { label: "Photos", value: "1 091" },
            { label: "Apps", value: "47" },
            { label: "Capacité", value: "256 Go" },
            { label: "Disponible", value: "174,87 Go" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <div className="flex min-h-[54px] items-center gap-3 px-4">
                <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
                <span className="text-[15px] text-muted-foreground text-right">{row.value}</span>
              </div>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 4: Network Addresses */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "Adresse Wi-Fi", value: "74:CC:40:1B:26:EF" },
            { label: "Bluetooth", value: "74:CC:40:1B:3B:64" },
            { label: "Progr. interne du modem", value: "3.02.03" },
            { label: "SEID", value: "", chevron: true },
            { label: "EID", value: "8904903200740888260021091502T247", mono: true },
            { label: "Verrouillage de l'opérateur", value: "Aucune restriction", secondary: true },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href={row.chevron ? "#" : ""} className={row.chevron ? "flex min-h-[54px] items-start gap-3 px-4 py-3 active:bg-muted/50" : "flex min-h-[54px] items-center gap-3 px-4"}>
                <div className="flex-1">
                  <span className="text-[17px] leading-tight block">{row.label}</span>
                  {row.mono && (
                    <span className="text-[13px] text-muted-foreground font-mono mt-1 block">{row.value}</span>
                  )}
                  {row.secondary && (
                    <span className="text-[13px] text-muted-foreground mt-0.5 block">{row.value}</span>
                  )}
                  {!row.mono && !row.secondary && row.value && (
                    <span className="text-[15px] text-muted-foreground">{row.value}</span>
                  )}
                </div>
                {row.chevron && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/70 flex-shrink-0 mt-1" />
                )}
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 5: Principal Carrier */}
        <div>
          <p className="px-4 section-header section-spacing">Principal</p>
          <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
            {[
              { label: "Réseau", value: "Orange" },
              { label: "Opérateur", value: "Orange 73.0" },
              { label: "IMEI", value: "35 863514 370272 9" },
              { label: "ICCID", value: "89212004823007984099" },
            ].map((row, i, arr) => (
              <div key={row.label}>
                <div className="flex min-h-[54px] items-center gap-3 px-4">
                  <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
                  <span className="text-[15px] text-muted-foreground text-right">{row.value}</span>
                </div>
                {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Personnel Carrier */}
        <div>
          <p className="px-4 section-header section-spacing">Personnel</p>
          <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
            {[
              { label: "Réseau", value: "inwi" },
              { label: "Opérateur", value: "inwi 73.0" },
              { label: "IMEI 2", value: "35 863514 373595 0" },
              { label: "ICCID", value: "89212022000507967448" },
            ].map((row, i, arr) => (
              <div key={row.label}>
                <div className="flex min-h-[54px] items-center gap-3 px-4">
                  <span className="flex-1 text-[17px] leading-tight">{row.label}</span>
                  <span className="text-[15px] text-muted-foreground text-right">{row.value}</span>
                </div>
                {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Certificates */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          <Link href="#" className="flex min-h-[54px] items-center gap-3 px-4 active:bg-muted/50">
            <span className="flex-1 text-[17px] leading-tight">Réglages des certificats</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground/70" />
          </Link>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pt-6 pb-2">
        <div className="w-32 h-1 bg-foreground rounded-full" />
      </div>
    </main>
  );
}
