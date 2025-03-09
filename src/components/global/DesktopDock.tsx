import { useState } from 'react';
import { BsGithub, BsFacebook, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { FaPencil, FaNewspaper } from 'react-icons/fa6';

interface IconButtonProps {
  icon: React.ElementType;
  text: string;
  tooltip: string;
  onClick: () => void;
  bgColor?: string;
  iconColor?: string;
  iconSize?: number;
}

interface CustomIconButtonProps {
  imageSrc: string;
  text: string;
  tooltip: string;
  onClick: () => void;
  bgColor?: string;
}

const profileIcon = '/icons/profile_ran.webp';
const kagamiVNIcon = '/icons/profile_kagamivisualnovel.webp';
const kagamiNihongoIcon = '/icons/profile_kagaminihongo.webp';

export default function DesktopDock() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:coregameHD@outlook.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/coregameHD', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/coregameHD', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/coregameHD', '_blank');
  };

  const handleBlogClick = () => {
    window.open('https://blog.coregamehd.com', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://youtube.com/@coregameHD', '_blank');
  };

  const handleDocsClick = () => {
    window.open('https://docs.coregamehd.com', '_blank');
  };

  const handleHomeClick = () => {
    window.open('https://coregamehd.com', '_blank');
  };

  const handleKagamiVNClick = () => {
    window.open('https://facebook.com/kagamivisualnovel', '_blank');
  };

  const handleKagamiNihongoClick = () => {
    window.open('https://facebook.com/kagaminihongo', '_blank');
  };

  const Tooltip = ({ text }: { text: string }) => (
    <div className='absolute -top-14 left-1/2 -translate-x-1/2'>
      <div className='relative px-3 py-1 bg-[#0a0a0a]/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap border border-px border-gray-600'>
        {text}
        <div className='absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-[#0a0a0a]/90 backdrop-blur-sm rotate-45 border-b border-r border-gray-600 z-[-1]' />
      </div>
    </div>
  );

  const IconButton = ({ 
    icon: Icon, 
    text, 
    tooltip, 
    onClick, 
    bgColor = '', 
    iconColor = 'text-white',
    iconSize = 45 
  }: IconButtonProps) => (
    <button
      onClick={onClick}
      onMouseEnter={() => setHoveredIcon(text.toLowerCase())}
      onMouseLeave={() => setHoveredIcon(null)}
      className='relative flex flex-col items-center'
    >
      <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
        <Icon size={iconSize} className={iconColor} />
      </div>
      <span className='text-white text-xs mt-1 font-medium'>{text}</span>
      {hoveredIcon === text.toLowerCase() && <Tooltip text={tooltip} />}
    </button>
  );

  const CustomIconButton = ({
    imageSrc,
    text,
    tooltip,
    onClick,
    bgColor = '',
  }: CustomIconButtonProps) => (
    <button
      onClick={onClick}
      onMouseEnter={() => setHoveredIcon(text.toLowerCase())}
      onMouseLeave={() => setHoveredIcon(null)}
      className='relative flex flex-col items-center'
    >
      <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center shadow-lg overflow-hidden`}>
        <img 
          src={imageSrc} 
          alt={text} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className='text-white text-xs mt-1 font-medium'>{text}</span>
      {hoveredIcon === text.toLowerCase() && <Tooltip text={tooltip} />}
    </button>
  );

  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 hidden md:block z-50'>
      <div className='relative mb-2 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-2xl rounded-2xl'>
        <div className='flex items-start space-x-4'>
          <CustomIconButton
            imageSrc={profileIcon}
            text="Home"
            tooltip="coregamehd.com"
            onClick={handleHomeClick}
          />

          <IconButton
            icon={FaPencil}
            text="Blog"
            tooltip="blog.coregamehd.com"
            onClick={handleBlogClick}
            bgColor="bg-gradient-to-t from-purple-600 to-purple-500"
            iconSize={36}
          />

          <IconButton
            icon={FaNewspaper}
            text="Docs"
            tooltip="docs.coregamehd.com"
            onClick={handleDocsClick}
            bgColor="bg-gradient-to-t from-purple-600 to-purple-500"
            iconSize={36}
          />

          {/* Divider */}
          <div className='flex items-center h-20'>
            <div className='w-px h-full bg-white/20' />
          </div>

          <CustomIconButton
            imageSrc={kagamiVNIcon}
            text="VisualNovel"
            tooltip="facebook.com/kagamivisualnovel"
            onClick={handleKagamiVNClick}
          />

          <CustomIconButton
            imageSrc={kagamiNihongoIcon}
            text="Nihongo"
            tooltip="facebook.com/kagaminihongo"
            onClick={handleKagamiNihongoClick}
          />

          {/* Divider */}
          <div className='flex items-center h-20'>
            <div className='w-px h-full bg-white/20' />
          </div>

          <IconButton
            icon={BsFacebook}
            text="Facebook"
            tooltip="facebook.com/coregameHD"
            onClick={handleFacebookClick}
            bgColor="bg-gradient-to-t from-[#1877F2] to-[#166BDA]"
            iconSize={38}
          />

          <IconButton
            icon={BsTwitterX}
            text="Twitter"
            tooltip="twitter.com/coregameHD"
            onClick={handleTwitterClick}
            bgColor="bg-black"
            iconSize={32}
          />

          <IconButton
            icon={BsYoutube}
            text="YouTube"
            tooltip="youtube.com/@coregameHD"
            onClick={handleYoutubeClick}
            bgColor="bg-gradient-to-t from-red-600 to-red-500"
            iconSize={36}
          />

          <IconButton
            icon={BsGithub}
            text="GitHub"
            tooltip="github.com/coregameHD"
            onClick={handleGithubClick}
            bgColor="bg-gradient-to-t from-black to-black/60"
            iconColor="text-gray-100"
            iconSize={36}
          />

          <IconButton
            icon={IoIosMail}
            text="Email"
            tooltip="Email: coregameHD@outlook.com"
            onClick={handleEmailClick}
            bgColor="bg-gradient-to-t from-green-600 to-green-400"
            iconSize={44}
          />

        </div>
      </div>
    </div>
  );
}
