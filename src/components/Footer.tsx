import React from 'react';
import locationIcon from '../assets/icons/location-sign-svgrepo-com.svg';
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import youtube from '../assets/icons/youtube.svg';
import tiktok from '../assets/icons/tiktok.svg';
// import github from '../assets/icons/github.svg';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full px-5 border-t border-gray-800 bg-gray-100 dark:bg-gray-900">
      <div className="w-full px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mt-5 text-white">
            <div className="text-xl font-semibold flex items-center mb-5">
              <img
                loading="lazy"
                src={locationIcon}
                alt="Location Icon"
                className="h-8 mr-2"
              />
              <h5 className='text-gray-900 dark:text-slate-200'>Lokasi Kami</h5>
            </div>
            <iframe title='alamat sekolah SMK PLUS PELITA NUSANTARA'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4299329005935!2d106.86209887483123!3d-6.467094293524591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1d3574a6c97%3A0x43a0aa1056feca8b!2sSMK%20PLUS%20PELITA%20NUSANTARA!5e0!3m2!1sen!2sid!4v1716009003216!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <p className="mt-5 text-gray-900 dark:text-slate-200">
              Jl. Golf Rt06/08, Gg. Olahraga No.20, Ciriung, <br />
              Kecamatan Cibinong, Kabupaten Bogor, Prov. <br />
              Jawa Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="mb-3 mt-5 text-gray-900 font-semibold dark:text-slate-200">Kontak Kami</p>
              <ul>
                <li>
                  <a
                    href="http://wa.me/6281210868958"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    +6281210868958
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 mt-5 text-gray-900 font-semibold dark:text-slate-200">Navigasi</p>
              <ul>
                <li>
                  <a
                    href="#home"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="https://ppdb.smkpluspnb.sch.id/"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    PPDB 2025
                  </a>
                </li>
                <li>
                  <a
                    href="#berita"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Berita
                  </a>
                </li>
                <li>
                  <a
                    href="#galeri"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Galeri
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 mt-5 text-gray-900 font-semibold dark:text-slate-200">Legal</p>
              <ul>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-1.5 text-sm text-gray-900 dark:text-slate-200"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4 mt-5 border-t border-gray-800 md:flex-row md:justify-between">
          <p className="mb-4 text-sm text-gray-900 dark:text-slate-200 text-center md:mb-0">
            © 2024 SMK PLUS PELITA NUSANTARA. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[
              {
                href: "https://www.instagram.com/smkpluspelitanusantara/",
                icon: (
                  <img
                    loading="lazy"
                    src={instagram}
                    alt="Instagram Icon"
                    className="h-5 w-5"
                  />
                ),
              },
              {
                href: "https://www.youtube.com/@smkpluspelitanusantara9719",
                icon: (
                  <img
                    loading="lazy"
                    src={youtube}
                    alt="Youtube Icon"
                    className="h-5 w-5"
                  />
                ),
              },
              {
                href: "https://api.whatsapp.com/send/?phone=6281210868958&text&type=phone_number&app_absent=0",
                icon: (
                  <img
                    loading="lazy"
                    src={whatsapp}
                    alt="Whatsapp Icon"
                    className="h-5 w-5"
                  />
                ),
              },
              {
                href: "https://www.tiktok.com/@smkppelitanusantaracbng",
                icon: (
                  <img
                    loading="lazy"
                    src={tiktok}
                    alt="Tiktok Icon"
                    className="h-5 w-5"
                  />
                ),
              },
              // Github
              // {
              //   href: "https://github.com/DevacctoRPL",
              //   icon: (
              //     <img
              //       loading="lazy"
              //       src={github}
              //       alt="Github Icon"
              //       className="h-5 w-5"
              //     />
              //   ),
              // },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-900 dark:text-slate-200 hover:text-red-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
