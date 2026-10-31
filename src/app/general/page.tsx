"use client";

import { ArrowLeft, ChevronRight, Smartphone, Download, HardDrive, Apple, Share2, Bluetooth, Camera, Power, Settings, Keyboard, Clock, BookOpen, Globe, Type, Key, Tv2, Lock, FileText, RotateCw } from "lucide-react";
import Link from "next/link";

export default function GeneralPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-[480px] bg-background pb-10">
      <div style={{ height: "env(safe-area-inset-top, 0px)" }} />

      {/* Back Button */}
      <div className="px-4 pb-6 pt-4">
        <Link
          href="/"
          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground active:opacity-60"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={3} />
        </Link>
      </div>

      {/* Header Card with Description */}
      <div className="px-4 pb-6">
        <div className="bg-card rounded-3xl p-6 flex gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-500">
            <Settings className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h1 className="text-[32px] font-bold mb-2">Général</h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Gérez la configuration de votre iPhone et vos préférences générales pour ce dernier, telles que ses mises à jour logicielles, sa langue d'utilisation, les fonctionnalités CarPlay et AirDrop, et bien d'autres.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-0 pb-10">
        {/* Section 1: Core Settings */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "Informations", icon: Smartphone, bg: "bg-gray-500", href: "/about" },
            { label: "Mise à jour logicielle", icon: Download, bg: "bg-gray-500", href: "#" },
            { label: "Stockage de l'iPhone", icon: HardDrive, bg: "bg-gray-500", href: "#" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href={row.href} className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${row.bg}`}>
                  <row.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px] font-medium">{row.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 2: AppleCare */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500">
              <Apple className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="flex-1 text-[17px] font-medium">AppleCare et garantie</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </Link>
        </div>

        {/* Section 3: Connectivity & Sharing */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "AirDrop", icon: Share2, bg: "bg-gray-500" },
            { label: "AirPlay et Continuité", icon: Bluetooth, bg: "bg-blue-500" },
            { label: "Image dans l'image", icon: Camera, bg: "bg-gray-500" },
            { label: "Capture d'écran", icon: Camera, bg: "bg-gray-500" },
            { label: "CarPlay", icon: Smartphone, bg: "bg-red-500" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${row.bg}`}>
                  <row.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px] font-medium">{row.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 4: System Settings */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "Actualiser en arrière-plan", icon: Settings, bg: "bg-gray-500" },
            { label: "Clavier", icon: Keyboard, bg: "bg-blue-500" },
            { label: "Date et heure", icon: Clock, bg: "bg-red-500" },
            { label: "Dictionnaires", icon: BookOpen, bg: "bg-red-500" },
            { label: "Langue et région", icon: Globe, bg: "bg-blue-500" },
            { label: "Polices", icon: Type, bg: "bg-gray-500" },
            { label: "Remplissage auto. et mots de passe", icon: Key, bg: "bg-gray-500" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${row.bg}`}>
                  <row.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px] font-medium">{row.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 5: Device Management */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500">
              <Tv2 className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="flex-1 text-[17px] font-medium">Fournisseur TV</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </Link>
        </div>

        {/* Section 6: Admin & Legal */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          {[
            { label: "VPN et gestion de l'appareil", icon: Lock, bg: "bg-gray-500" },
            { label: "Mentions légales et certifications", icon: FileText, bg: "bg-gray-500" },
            { label: "Transférer ou réinitialiser l'iPhone", icon: RotateCw, bg: "bg-gray-500" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${row.bg}`}>
                  <row.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px] font-medium">{row.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Section 7: Shutdown */}
        <div className="overflow-hidden rounded-2xl bg-card mx-4 mb-5">
          <Link href="#" className="flex items-center gap-4 px-4 py-3 active:bg-muted/50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600">
              <Power className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="flex-1 text-[17px] font-medium text-red-500">Éteindre</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
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
