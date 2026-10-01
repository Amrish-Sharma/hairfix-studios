import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import invitationAsset from "../assets/hairfix-ravet-invitation.jpg.asset.json";

export const RAVET_ADDRESS = "One Mall, Shop no. 104, Aundh - Ravet BRTS Rd, Ravet, PCMC, Pimpri Chinchwad, Maharashtra 412101";
export const RAVET_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(RAVET_ADDRESS);

const SESSION_KEY = "hairfix-ravet-splash-shown";

export function SplashIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Close invitation"
        className="absolute right-4 top-4 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
      >
        <X className="h-5 w-5" />
      </button>
      <a
        href={RAVET_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block max-h-full overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          src={invitationAsset.url}
          alt="HairFix Studio — Grand opening of our new Ravet branch on 11 October 2026. Tap for location."
          className="max-h-[85vh] w-auto max-w-full object-contain"
        />
        <span className="flex items-center justify-center gap-2 bg-primary py-2 text-sm font-medium text-primary-foreground">
          <MapPin className="h-4 w-4" />
          New Ravet Branch — Tap for Location
        </span>
      </a>
    </div>
  );
}
