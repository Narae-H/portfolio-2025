'use client';

import { VscQuestion } from "react-icons/vsc";
import { useTour } from "@/app/components/tour/TourProvider";

export default function TourHelpButton() {
  const { startTour } = useTour();

  return (
    <button
      type="button"
      aria-label="Restart the guided tour"
      title="Take a tour"
      onClick={() => startTour()}
      className="flex h-full items-center px-2 cursor-pointer hover:bg-footer-hover-bg hover:text-footer-hover-text outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-footer-point-bg"
    >
      <VscQuestion className="w-4 h-4" />
    </button>
  );
}
