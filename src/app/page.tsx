"use client";

import {
  Settings,
  Accessibility,
  Camera,
  Sliders,
  Home,
  Sun,
  Sparkles,
  Zap,
  Search,
  Image,
  Bell,
  Volume2,
  Focus,
  Clock,
  Fingerprint,
  Lock,
  ChevronRight,
  Plane,
  Wifi,
  Bluetooth,
  Smartphone,
  Share2,
  Battery,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-[480px] bg-background pb-8">
      <div style={{ height: "env(safe-area-inset-top, 0px)" }} />

      {/* Header */}
      <div style={{ paddingTop: "env(safe-area-inset-top, 0px)" }} className="px-4 pt-4 pb-4">
        <h1 className="text-[34px] font-bold mb-4">Réglages</h1>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-muted rounded-lg px-3 h-10">
          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher"
            className="flex-1 bg-transparent text-sm outline-none placeholder-muted-foreground"
          />
          <Smartphone className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Content sections */}
      <div className="px-4 space-y-5">
        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[17px]">Yassine adad</div>
            <div className="text-[13px] text-muted-foreground">Compte Apple, iCloud+, Médias et achats</div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Connectivity Section */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {[
            { label: "Mode Avion", icon: Plane, bg: "bg-orange-500", value: null, toggle: true },
            { label: "Wi-Fi", icon: Wifi, bg: "bg-blue-500", value: "Maison" },
            { label: "Bluetooth", icon: Bluetooth, bg: "bg-blue-500", value: "Activé" },
            { label: "Données cellulaires", icon: Smartphone, bg: "bg-green-500", value: null },
            { label: "Partage de connexion", icon: Share2, bg: "bg-green-500", value: "Désactivé" },
            { label: "Batterie", icon: Battery, bg: "bg-green-500", value: "85%" },
          ].map((item, i, arr) => (
            <div key={item.label}>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 active:bg-muted/50">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px]">{item.label}</span>
                {item.value && <span className="text-[15px] text-muted-foreground">{item.value}</span>}
                {item.toggle && (
                  <div className="w-12 h-7 rounded-full bg-muted relative">
                    <div className="w-6 h-6 rounded-full bg-white absolute left-0.5 top-0.5" />
                  </div>
                )}
                {!item.toggle && !item.value && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* System Settings Section */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {[
            { label: "Général", icon: Settings, bg: "bg-gray-400" },
            { label: "Accessibilité", icon: Accessibility, bg: "bg-blue-500" },
            { label: "Appareil photo", icon: Camera, bg: "bg-gray-600" },
            { label: "Centre de contrôle", icon: Sliders, bg: "bg-gray-400" },
            { label: "Écran d'accueil et bibliothèque d'app", icon: Home, bg: "bg-blue-500" },
            { label: "Affichage et luminosité", icon: Sun, bg: "bg-blue-500" },
            { label: "Apple Intelligence et Siri", icon: Sparkles, bg: "bg-purple-500" },
            { label: "Bouton d'action", icon: Zap, bg: "bg-blue-500" },
            { label: "Recherche", icon: Search, bg: "bg-gray-400" },
            { label: "Fond d'écran", icon: Image, bg: "bg-cyan-400" },
          ].map((item, i, arr) => (
            <div key={item.label}>
              <Link href={item.label === "Général" ? "/general" : "#"} className="flex items-center gap-3 px-4 py-3 active:bg-muted/50">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px]">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Alerts & Focus Section */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {[
            { label: "Notifications", icon: Bell, bg: "bg-red-500" },
            { label: "Sons et vibrations", icon: Volume2, bg: "bg-red-400" },
            { label: "Concentration", icon: Focus, bg: "bg-indigo-500" },
            { label: "Temps d'écran", icon: Clock, bg: "bg-indigo-500" },
          ].map((item, i, arr) => (
            <div key={item.label}>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 active:bg-muted/50">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px]">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>

        {/* Security Section */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {[
            { label: "Face ID et code", icon: Fingerprint, bg: "bg-green-500" },
            { label: "Confidentialité et sécurité", icon: Lock, bg: "bg-blue-500" },
          ].map((item, i, arr) => (
            <div key={item.label}>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 active:bg-muted/50">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="flex-1 text-[17px]">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
              {i < arr.length - 1 && <div className="h-px bg-separator mx-4" />}
            </div>
          ))}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pt-6 pb-2">
        <div className="w-32 h-1 bg-foreground rounded-full" />
      </div>
    </main>
  );
}
