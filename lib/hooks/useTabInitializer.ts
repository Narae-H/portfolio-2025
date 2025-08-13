'use client';

import { DEFAULT_TAB_ID } from '@/constants/constants';
import useSelectedTab from '@/lib/hooks/useSelectedTab';
import useVisitedTabs from '@/lib/hooks/useVisitedTabs';
import { useEffect } from 'react';

export default function useTabInitializer(handle: string, subHandle?: string) {
  const { visitedTabs, addTab } = useVisitedTabs(`visited_${handle}`);
  const { setSelectedTab } = useSelectedTab(`selected_${handle}_tab`);

  useEffect(() => {
    if (subHandle) {
      if (!visitedTabs.includes(subHandle)) {
        addTab(subHandle);
        setSelectedTab(subHandle);
      }
      
      if (visitedTabs.includes(subHandle)) {
        setSelectedTab(subHandle);
      }
      
    } else if(handle) {
      setSelectedTab(DEFAULT_TAB_ID);
    }

  }, [handle, subHandle]);
}
