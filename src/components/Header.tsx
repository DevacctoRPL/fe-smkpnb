import React from 'react';
import { useTheme } from '../contexts/ThemeContexts';
import logoDarkMode from '/assets/logos/logo-with-text-dark-mode.webp';
import logoLightMode from '/assets/logos/logo-with-text-light-mode.webp';
import { Link } from 'react-router-dom';

interface HeaderProps {
    activeSection: string | null;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const { isDarkMode } = useTheme();

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getLinkClass = (sectionId: string) => {
        const baseClass = "py-4 px-3 font-medium transition-all duration-300";
        return `${baseClass} ${activeSection === sectionId ? 'text-red-600' : 'hover:text-red-600'}`;
    };

    return (
        <header className='px-1 py-1 flex space-x-10 sticky top-0 bg-white shadow-lg backdrop-blur-[1.75px] z-[999] dark:bg-gray-800 dark:text-slate-200'>
                <Link to="/" onClick={() => handleScrollToSection('video-player')}>
                    <img
                        loading="lazy"
                        src={isDarkMode ? logoDarkMode : logoLightMode} alt="logo"
                        className="w-96 h-20 transition ease-in-out  transition-transform-[0.3s]" />
                </Link>
                <div className="hidden md:flex justify-end items-center space-x-1">
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
                </div>
        </header>
    );
};

export default Header;
