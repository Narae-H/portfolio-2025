import { useState, useEffect } from 'react';

export type DeviceType = "mobile" | "tablet" | "desktop";

export function useDeviceDetection () {
  const [device, setDeviceType] = useState('desktop');

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(detectDeviceType());
    };

    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return {
    device,
    isMobile: device === 'mobile'? true: false,
    isTablet: device === 'tablet'? true: false,
    isDesktop: device === 'desktop'? true: false
  };
};

function detectDeviceType(): DeviceType {
  const ww = window.innerWidth;

  if ( ww <= 767) {
    return 'mobile';
  } else if ( ww <= 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};