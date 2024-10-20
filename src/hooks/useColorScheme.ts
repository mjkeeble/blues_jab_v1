import { useEffect, useMemo, useState } from 'react';
import useMediaQuery from 'react-responsive';

type useColorSchemeReturn = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

export const useColorScheme = (): useColorSchemeReturn => {
  const systemPrefersDark: boolean = !!useMediaQuery({ query: '(prefers-color-scheme: dark)' }, undefined);

  const [isDark, setIsDark] = useState<boolean>(!!systemPrefersDark);

  const value = useMemo(() => (isDark === undefined ? !!systemPrefersDark : isDark), [isDark, systemPrefersDark]);
  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
};
