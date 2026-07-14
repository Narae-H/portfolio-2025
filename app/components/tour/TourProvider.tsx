'use client';

import { createContext, useContext, useEffect, useRef } from "react";
import { useOnboardingTour } from "./useOnboardingTour";
import { TOUR_SEEN_KEY } from "@/constants/constants";

type TourContextValue = {
  startTour: () => void;
};

const TourContext = createContext<TourContextValue | null>(null);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const { startTour } = useOnboardingTour();

  // Keep the latest startTour without re-running the auto-start effect
  // (isMobile settles shortly after mount, changing startTour's identity).
  const startTourRef = useRef(startTour);
  startTourRef.current = startTour;

  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(TOUR_SEEN_KEY);
    } catch {
      seen = true; // if storage is unavailable, don't nag on every load
    }
    if (seen) return;

    // Let the layout, redux rehydration, and device detection settle first.
    const t = setTimeout(() => startTourRef.current(), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <TourContext.Provider value={{ startTour }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTour(): TourContextValue {
  const ctx = useContext(TourContext);
  if (!ctx) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return ctx;
}
