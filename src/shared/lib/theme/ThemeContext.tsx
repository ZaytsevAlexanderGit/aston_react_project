import React, {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type ThemeContextProviderProps = PropsWithChildren;

type ThemeType = 'dark' | 'light';

type ThemeContext = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const currentTheme = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeContext.Provider');
  }
  return context;
}
