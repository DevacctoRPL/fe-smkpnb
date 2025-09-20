import React from 'react';
import VideoPlayerDash from '@/components/VideolayerDash';
import Profile from '@/components/Profile';
import BidangKeahlian from '@/components/BidangKeahlian';
import Sapras from '@/components/Sapras';
import News from '@/components/News';
import CallToAction from '@/components/CallToAction';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';
import BannerText from '@/components/BannerText';
import Header from '@/components/Header'; // Import Header
import { useActiveSection } from '@/hooks/useActiveSection'; // Import useActiveSection

const MainPages: React.FC = () => {
    const sectionIds = ['video-player', 'profile', 'bidang-keahlian', 'banner-sapras', 'sapras', 'banner-news', 'News', 'call-to-action', 'galeri', 'sosmed'];
    const activeSection = useActiveSection(sectionIds);

    return (
        <>
            <Header activeSection={activeSection} /> {/* Pass activeSection as prop */}
            <section id="video-player">
                <VideoPlayerDash />
            </section>
            <section id="profile">
                <Profile />
            </section>
            <section id="bidang-keahlian">
                <BidangKeahlian />
            </section>
            <section id="banner-sapras" className='mt-16'>
                <BannerText text="Sarana Pra-Sarana" />
            </section>
            <section id="sapras">
                <Sapras />
            </section>
            <section id="banner-news" className='my-16'>
                <BannerText text="Latest News" />
            </section>
            <section id="News">
                <News />
            </section>
            <section id="call-to-action">
                <CallToAction />
            </section>
            <section id="galeri">
                <Gallery />
            </section>
            <section id="sosmed">
                <SocialMedia />
            </section>
        </>
    )
}

export default MainPages;
