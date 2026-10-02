import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import invitationAsset from "../assets/hairfix-ravet-invitation.jpg.asset.json";

export const RAVET_ADDRESS = "One Mall, Shop no. 104, Aundh - Ravet BRTS Rd, Ravet, PCMC, Pimpri Chinchwad, Maharashtra 412101";
export const RAVET_MAPS_URL = "https://maps.app.goo.gl/Esd13cPtzdJ3TPoz8?g_st=aw";

const SESSION_KEY = "hairfix-ravet-splash-shown";

export function SplashIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const invitation = new Image();
    let timer: number | undefined;

    invitation.onload = () => {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(true);
      timer = window.setTimeout(() => setVisible(false), 5000);
    };
    invitation.src = invitationAsset.url;

    return () => {
      invitation.onload = null;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm">
      <Button
        type="button"
        size="icon"
        onClick={() => setVisible(false)}
        aria-label="Close invitation"
        className="absolute right-4 top-4 z-10 rounded-full shadow-lg"
      >
        <X className="h-5 w-5" />
      </Button>
      <a
        href={RAVET_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg shadow-2xl"
      >
        <span className="min-h-0 flex-1 bg-background">
          <img
            src={invitationAsset.url}
            alt="HairFix Studio — Grand opening of our new Ravet branch on 11 October 2026. Tap for location."
            className="h-full max-h-[calc(100dvh-5rem)] w-auto max-w-full object-contain"
          />
        </span>
        <span className="flex items-center justify-center gap-2 bg-primary py-2 text-sm font-medium text-primary-foreground">
          <MapPin className="h-4 w-4" />
          New Ravet Branch — Tap for Location
        </span>
      </a>
    </div>
  );
}
