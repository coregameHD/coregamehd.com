import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import {
  IoSearchSharp,
  IoBatteryHalfOutline,
  IoCellular,
} from 'react-icons/io5';

const profileIcon = '/icons/profile_ran.webp';

export default function MacToolbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showLinksMenu, setShowLinksMenu] = useState(false);
  const [showAboutInfo, setShowAboutInfo] = useState(false);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);
  const linksDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    const handleClickOutside = (event: MouseEvent) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setShowProjectsMenu(false);
      }
      if (linksDropdownRef.current && !linksDropdownRef.current.contains(event.target as Node)) {
        setShowLinksMenu(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setShowAboutInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatMacDate = (date: Date) => {
    const weekday = date.toLocaleString('th-TH', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleString('th-TH', { month: 'long' });
    const year = date.getFullYear();
    const hour = date.toLocaleString('th-TH', {
      hour: 'numeric',
      hour12: false,
    });
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `(${weekday}) ${day} ${month} ${year} | เวลา ${hour}:${minute} น.`;
  };

  const formatIPhoneTime = (date: Date) => {
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };

  return (
    <>
      <div className='sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium'>
        <span className='font-semibold'>
          {formatIPhoneTime(currentDateTime)}
        </span>
        <div className='flex items-center gap-1.5'>
          <IoCellular size={20} />
          <MdWifi size={20} />
          <IoBatteryHalfOutline size={24} />
        </div>
      </div>

      <div className='sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm'>
        <div className='flex items-center space-x-4'>
          <FaApple size={16} />
          <span className='font-semibold cursor-default'>coregameHD</span>
          <a 
            href="https://coregamehd.com" 
            rel="noopener noreferrer" 
            className='hover:opacity-80 transition-opacity'
          >
            Home
          </a>
          <a 
            href="https://blog.coregamehd.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='hover:opacity-80 transition-opacity'
          >
            Blog
          </a>
          <div className='relative' ref={projectsDropdownRef}>
            <button 
              className='hover:opacity-80 transition-opacity'
              onClick={() => setShowProjectsMenu(!showProjectsMenu)}
            >
              Projects
            </button>
            {showProjectsMenu && (
              <div className='absolute top-6 left-0 bg-zinc-900/75 backdrop-blur-2xl rounded-lg py-2 min-w-[200px] shadow-lg border border-white/20'>
                <a 
                  href="https://www.facebook.com/kagamivisualnovel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-orange-600/40 transition-colors text-gray-100'
                >
                  Kagami Visual Novel
                </a>
                <a 
                  href="https://www.facebook.com/kagaminihongo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-pink-600/40 transition-colors text-gray-100'
                >
                  Kagami Nihongo
                </a>
                <div className='mx-2 my-1 border-t border-white/20'></div>
                <a 
                  href="https://store.steampowered.com/app/3069410/?l=thai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Re:Fragment ~Absolute Ambition~
                </a>
              </div>
            )}
          </div>
          <div className='relative' ref={linksDropdownRef}>
            <button 
              className='hover:opacity-80 transition-opacity'
              onClick={() => setShowLinksMenu(!showLinksMenu)}
            >
              Links
            </button>
            {showLinksMenu && (
              <div className='absolute top-6 left-0 bg-zinc-900/75 backdrop-blur-2xl rounded-lg py-2 min-w-[160px] shadow-lg border border-white/20'>
                <a 
                  href="https://facebook.com/coregamehd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Facebook
                </a>
                <a 
                  href="https://twitter.com/coregamehd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  X (Twitter)
                </a>
                <a 
                  href="https://youtube.com/@coregamehd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Youtube
                </a>
                <a 
                  href="https://github.com/coregamehd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Github
                </a>
                <a 
                  href="https://discord.gg/coregamehd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Discord
                </a>
                <div className='mx-2 my-1 border-t border-white/20'></div>
                <a 
                  href="https://steamcommunity.com/id/coregame" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Steam
                </a>
                <a 
                  href="https://vndb.org/u113091" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  VNDB
                </a>
                <div className='mx-2 my-1 border-t border-white/20'></div>
                <a 
                  href="mailto:coregamehd@outlook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='block px-4 py-2 hover:bg-violet-600/40 transition-colors text-gray-100'
                >
                  Email
                </a>
              </div>
            )}
          </div>
          <div className='relative' ref={aboutDropdownRef}>
            <button 
              className='hover:opacity-80 transition-opacity'
              onClick={() => setShowAboutInfo(!showAboutInfo)}
            >
              About
            </button>
            {showAboutInfo && (
              <div className='absolute top-6 left-0 bg-zinc-900/75 backdrop-blur-2xl rounded-lg py-3 w-[288px] shadow-lg border border-white/20'>
                <div className='px-4 space-y-3'>
                  <div className='text-sm font-medium text-gray-100 flex items-start gap-2'>
                    <img 
                      src={profileIcon}
                      alt="Avatar Image"
                      className="w-10 h-10 rounded-lg mt-0.5 object-cover"
                    />
                    <div>
                      「改めまして、月ヶ丘蘭です。<br />　心はランランでルンルンです！」
                    </div>
                  </div>
                  
                  <div className='space-y-2'>
                    <div className='border-t border-white/20'></div>
                    
                    <div>
                      <div className='text-sm font-medium text-gray-100 mb-1 flex items-center gap-2'>
                        coregameHD's Homepage
                        <a 
                          href="https://github.com/coregameHD/coregamehd.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='hover:text-violet-400 transition-colors'
                        >
                          (Github)
                        </a>
                      </div>
                      <div className='text-xs text-gray-400'>Version: 3.0.1</div>
                      <div className='text-xs text-gray-400'>Last updated: 09/03/2025</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <MdWifi size={16} />
          <IoSearchSharp size={16} />
          <span className='cursor-default'>
            {formatMacDate(currentDateTime)}
          </span>
        </div>
      </div>
    </>
  );
}
