'use client';

import useVisitedTabs from '@/lib/hooks/useVisitedTabs';
import useSelectedTab from '@/lib/hooks/useSelectedTab';
import { useEffect } from 'react';

export default function useTabInitializer(handle: string, subHandle?: string) {
  const { addTab } = useVisitedTabs(`visited_${handle}`);
  const { setSelectedTab } = useSelectedTab(`selected_${handle}_tab`);

  useEffect(() => {
    if (subHandle) {
      addTab(subHandle);
      setSelectedTab(subHandle);
    } 
  }, [handle, subHandle, addTab, setSelectedTab]);
}
