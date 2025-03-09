import { FaPencil } from 'react-icons/fa6';
import { BsFacebook, BsTwitterX } from 'react-icons/bs';

export default function MobileDock() {
  const handleBlogClick = () => {
    window.open('https://blog.coregamehd.com', '_blank');
  };

  const handleVNClick = () => {
    window.open('https://visualnovel.coregamehd.com', '_blank');
  };

  const handleNihongoClick = () => {
    window.open('https://nihongo.coregamehd.com', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/coregamehd', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/coregamehd', '_blank');
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 md:hidden'>
      <div className='mx-4 mb-3 p-2 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-2xl flex justify-around items-center max-w-[380px] mx-auto'>
        <button
          onClick={handleBlogClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-14 h-14 bg-gradient-to-t from-purple-600 to-purple-500 rounded-xl flex items-center justify-center'>
            <FaPencil size={35} className='text-white' />
          </div>
        </button>

        <button
          onClick={handleVNClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-14 h-14 bg-gradient-to-t from-violet-600 to-violet-500 rounded-xl flex items-center justify-center overflow-hidden'>
            <img
              src='/src/assets/icons/profile_kagamivisualnovel.webp'
              alt='Visual Novel'
              className='w-14 h-14 object-cover'
            />
          </div>
        </button>

        <button
          onClick={handleNihongoClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-14 h-14 bg-gradient-to-t from-red-600 to-red-400 rounded-xl flex items-center justify-center overflow-hidden'>
            <img
              src='/src/assets/icons/profile_kagaminihongo.webp'
              alt='Nihongo'
              className='w-14 h-14 object-cover'
            />
          </div>
        </button>

        <div className='w-[2px] h-14 bg-gray-600 rounded-full mx-1' />

        <button
          onClick={handleFacebookClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center'>
            <BsFacebook size={40} className='text-white' />
          </div>
        </button>

        <button
          onClick={handleTwitterClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center'>
            <BsTwitterX size={35} className='text-white' />
          </div>
        </button>
      </div>
    </div>
  );
}

