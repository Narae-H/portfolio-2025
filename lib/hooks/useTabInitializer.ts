'use client';

import useSelectedTab from '@/lib/hooks/useSelectedTab';
import useVisitedTabs from '@/lib/hooks/useVisitedTabs';
import { useEffect } from 'react';

export default function useTabInitializer(category: string, subCategory: string, tabId: string) {
  const { visitedTabs, addTab } = useVisitedTabs(`visited_${category}`);
  const { selectedTab, setSelectedTab, clearSelectedTab } = useSelectedTab(`selected_${category}_tab`);

  useEffect(() => {
    if (category && subCategory && tabId) {
      if ( !visitedTabs.includes(tabId)) {
        addTab(tabId);
        setSelectedTab(subCategory, tabId);
      } 
      return;
    } 
    
    if (category) {
      clearSelectedTab();
    }

  },[]);
}
