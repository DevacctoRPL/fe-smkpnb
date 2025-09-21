import React from 'react';
import { useTheme } from '../contexts/ThemeContexts';

const SplashScreen: React.FC = () => {
  const { isDarkMode } = useTheme();

  const logoSrc = isDarkMode
    ? '/assets/logos/logo-with-text-dark-mode.webp'
    : '/assets/logos/logo-with-text-light-mode.webp';

  const splashScreenBg = isDarkMode ? '#0f172b' : '#e0e0e0'; // Darker background for dark mode
  const loadingBarColor = isDarkMode ? '#4d0218' : '#8b0836'; // Different loading bar color for dark mode
  const loadingBarContainerBg = isDarkMode ? '#333333' : '#e0e0e0'; // Different loading bar container color for dark mode

  return (
    <div className="splash-screen" style={{ backgroundColor: splashScreenBg }}>
      <img src={logoSrc} alt="Logo Sekolah" className="school-logo" />
      <div className="loading-bar-container" style={{ backgroundColor: loadingBarContainerBg }}>
        <div className="loading-bar" style={{ backgroundColor: loadingBarColor }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
