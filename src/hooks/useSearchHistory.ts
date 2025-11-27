'use client';

import {useState, useCallback, useEffect} from 'react';

const STORAGE_KEY = 'github-stats-search-history';
const MAX_HISTORY_ITEMS = 10;

const readFromStorage = (): string[] => {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      const parsed = JSON.parse(stored);

      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return [];
};

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      setHistory(readFromStorage());
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const addToHistory = useCallback((item: string) => {
    if (!item.trim()) return;

    const trimmedItem = item.trim().toLowerCase();

    setHistory((prev) => {
      const filtered = prev.filter((h) => h !== trimmedItem);
      const newHistory = [trimmedItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

      return newHistory;
    });
  }, []);

  const removeFromHistory = useCallback((item: string) => {
    setHistory((prev) => {
      const newHistory = prev.filter((h) => h !== item);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

      return newHistory;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
}
