'use client';

import { useCallback } from "react";
import { driver, type DriveStep } from "driver.js";
import "driver.js/dist/driver.css";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import useSidebar from "@/lib/hooks/useSidebar";
import { TOUR_SEEN_KEY } from "@/constants/constants";

export function useOnboardingTour() {
  const { isMobile } = useDeviceDetection();
  const { setCollapsed } = useSidebar();

  const startTour = useCallback(() => {
    // On desktop, make sure the Explorer step shows the full sidebar (if it's on-screen).
    if (!isMobile) {
      setCollapsed(false);
    }

    const tabsStep: DriveStep = {
      element: '[data-tour="tabs"]',
      popover: {
        title: "Editor Tabs",
        description:
          "Items you open become tabs. Open several, close them — they even persist across refreshes.",
        side: "bottom",
        align: "center",
      },
    };

    const themeStep: DriveStep = {
      element: '[data-tour="theme"]',
      popover: {
        title: "Theme Toggle",
        description:
          "Prefer dark or light? Toggle the VS Code theme here anytime.",
        side: "top",
        align: "end",
      },
    };

    const finishStep: DriveStep = {
      element: '[data-tour="links"]',
      popover: {
        title: "Let's Connect",
        description:
          "That's the tour! My GitHub and LinkedIn live down here. Thanks for stopping by 👋",
        side: "top",
        align: "start",
      },
    };

    const desktopSteps: DriveStep[] = [
      {
        element: '[data-tour="activitybar"]',
        popover: {
          title: "Activity Bar",
          description:
            "Switch between Home, Skills, and Experiences here — just like VS Code's activity bar.",
          side: "right",
          align: "start",
        },
      },
      {
        element: '[data-tour="sidebar"]',
        popover: {
          title: "Explorer",
          description:
            "Browse skills and projects in this file-tree-style explorer. The header button collapses it.",
          side: "right",
          align: "start",
        },
      },
      tabsStep,
      themeStep,
      finishStep,
    ];

    const mobileSteps: DriveStep[] = [
      {
        element: '[data-tour="topmenu"]',
        popover: {
          title: "Menu",
          description:
            "Tap here to navigate between Home, Skills, and Experiences.",
          side: "bottom",
          align: "start",
        },
      },
      tabsStep,
      themeStep,
      finishStep,
    ];

    // Only keep steps whose target actually exists on the current page
    // (e.g. the Explorer sidebar isn't rendered on Home).
    const candidate = isMobile ? mobileSteps : desktopSteps;
    const steps = candidate.filter(
      (s) => !s.element || document.querySelector(s.element as string)
    );

    if (steps.length === 0) return;

    const isLight =
      document.documentElement.getAttribute("data-theme") === "tokyonight-theme";

    const driverObj = driver({
      showProgress: true,
      allowClose: true,
      popoverClass: "vscode-tour",
      overlayColor: "#000000",
      // Dark UI needs a heavier dim to make the highlighted element stand out.
      overlayOpacity: isLight ? 0.55 : 0.78,
      stagePadding: 4,
      steps,
      onDestroyed: () => {
        try {
          localStorage.setItem(TOUR_SEEN_KEY, "1");
        } catch {
          /* ignore storage errors (e.g. private mode) */
        }
      },
    });

    driverObj.drive();
  }, [isMobile, setCollapsed]);

  return { startTour };
}
