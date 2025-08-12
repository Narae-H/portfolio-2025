'use client'
import useVisitedTabs from '@/lib/hooks/useVisitedTabs';
import { useEffect } from 'react';

type Props = {
  handle: string,
  subHandle: string
}

export default function ClientHandler({ handle, subHandle }: Props) {
  const { addTab } = useVisitedTabs(`visited_${handle}`);

  useEffect(() => {
    if (subHandle) addTab(subHandle);
  }, [subHandle, addTab]);

  return null;
}