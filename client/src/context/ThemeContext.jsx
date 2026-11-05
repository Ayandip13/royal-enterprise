import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for explicit user preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('royal_enterprise_theme_v2');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      // Clean up legacy auto-detected theme if present
      try {
        localStorage.removeItem('royal_enterprise_theme');
      } catch (e) {}
    }
    // Default theme is ALWAYS 'light' (Botanical Warm Ivory)
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('royal_enterprise_theme_v2', theme);
    } catch (e) {
      // Storage unavailable or quota exceeded
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
