import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContexts';
import logoDarkMode from '/assets/logos/logo-with-text-dark-mode.webp';
import logoLightMode from '/assets/logos/logo-with-text-light-mode.webp';
import { Link } from 'react-router-dom';

interface HeaderProps {
    activeSection: string | null;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const { isDarkMode } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close menu after clicking a link
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getLinkClass = (sectionId: string) => {
        const baseClass = "py-4 px-3 font-medium transition-all duration-300";
        return `${baseClass} ${activeSection === sectionId ? 'text-red-600' : 'hover:text-red-600'}`;
    };

    return (
        <header className='px-1 py-1 flex justify-between items-center sticky top-0 bg-white shadow-lg backdrop-blur-[1.75px] z-[999] dark:bg-gray-800 dark:text-slate-200'>
            <Link to="/" onClick={() => handleScrollToSection('video-player')}>
                <img
                    loading="lazy"
                    src={isDarkMode ? logoDarkMode : logoLightMode} alt="logo"
                    className="w-96 h-20 transition ease-in-out  transition-transform-[0.3s]" />
            </Link>

            {/* Hamburger menu button for mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-slate-200 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex justify-end items-center space-x-1">
                <Link to="/" onClick={() => handleScrollToSection('video-player')} className={getLinkClass('video-player')}>
                    Beranda
                </Link>
                <Link to="/" onClick={() => handleScrollToSection('News')} className={getLinkClass('News')}>
                    Berita
                </Link>
                <Link to="/" onClick={() => handleScrollToSection('galeri')} className={getLinkClass('galeri')}>
                    Galeri
                </Link>
                <Link to="/" onClick={() => handleScrollToSection('sosmed')} className={getLinkClass('sosmed')}>
                    Sosial Media
                </Link>
            </nav>

            {/* Mobile navigation (conditionally rendered) */}
            {isMobileMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg dark:bg-gray-800 flex flex-row justify-around items-center py-4">
                    <Link to="/" onClick={() => handleScrollToSection('video-player')} className={getLinkClass('video-player')}>
                        Beranda
                    </Link>
                    <Link to="/" onClick={() => handleScrollToSection('News')} className={getLinkClass('News')}>
                        Berita
                    </Link>
                    <Link to="/" onClick={() => handleScrollToSection('galeri')} className={getLinkClass('galeri')}>
                        Galeri
                    </Link>
                    <Link to="/" onClick={() => handleScrollToSection('sosmed')} className={getLinkClass('sosmed')}>
                        Sosial Media
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
