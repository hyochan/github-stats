'use client';

export const setThemeType = (themeType: 'light' | 'dark'): void => {
  if (themeType === 'dark') {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('themeType', 'dark');

    return;
  }

  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
  localStorage.setItem('themeType', 'light');

  return;
};

export const isDarkMode = (): boolean => {
  const themeType = localStorage.getItem('themeType');

  if (
    themeType === 'dark' &&
    document.documentElement.classList.contains('light')
  ) {
    setThemeType('dark');
  } else if (
    themeType === 'light' &&
    document.documentElement.classList.contains('dark')
  ) {
    setThemeType('light');
  }

  return themeType === 'dark';
};

export const toggleTheme = (): void => {
  setThemeType(isDarkMode() ? 'light' : 'dark');
};
