'use client';

export const isDarkMode = (): boolean => {
  return document.documentElement.classList.contains('dark');
};

export const toggleTheme = (): void => {
  if (isDarkMode()) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    return;
  }

  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
};
