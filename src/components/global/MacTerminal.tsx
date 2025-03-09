import { useState } from 'react';
import { FaRegFolderClosed } from 'react-icons/fa6';

export default function MacTerminal() {
  const [currentView, setCurrentView] = useState<'welcome' | 'about' | 'skills' | 'contact' | 'english'>('welcome');

  const Divider = () => (
    <div className="py-2">
      <hr className="border-t border-gray-600/60" />
    </div>
  );

  const welcomeMessage = (
    <>
      <b>coregameHD</b><br />
      (รู้จักกันในนาม Kagami)<br />
      <br />
      • Full-time Web Developer<br />
      • Part-time Content Creator<br />
      • Self-proclaimed Imouto Lover<br />
      <br />
      แอดมินเพจ <a 
        href="https://facebook.com/kagamivisualnovel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition-colors"
      >
        Kagami Visual Novel
      </a><br />
      และ <a 
        href="https://facebook.com/kagaminihongo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 transition-colors"
      >
        Kagami Nihongo
      </a><br />
      <br />
      เขียนบล็อกที่ <a 
        href="https://blog.coregamehd.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors"
      >
        ปกิณกะคางามิ
      </a>
    </>
  );

  const aboutMessage = (
    <>
      <u>About Me</u><br />
      <br />
      ใช้นามแฝงบนโลกอินเทอร์เน็ตว่า coregameHD ปัจจุบันเป็นแอดมินผู้ดูแลเพจ <a 
        href="https://facebook.com/kagamivisualnovel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition-colors"
      >
        Kagami Visual Novel
      </a> และ <a 
        href="https://facebook.com/kagaminihongo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 transition-colors"
      >
        Kagami Nihongo
      </a> สนใจเกี่ยวกับเกมวิชวลโนเวล ภาษาญี่ปุ่น เทคโนโลยี และความเป็นมนุษย์
      <br />
      <Divider />
      ตอนเด็กชอบเล่นดินน้ำมัน ใฝ่ฝันอยากเป็นนักปั้นมืออาชีพ ปัจจุบันทำได้เพียงปั้นน้ำเป็นตัว เรียนจบวิศวะคอมฯ จากมหาวิทยาลัยในกลุ่ม 8 เกียร์ ทำงานเป็นโปรแกรมเมอร์ (Back-end web developer) ตรงสายงานตามที่เรียนมา
      <br />
      <br />
      ครั้งหนึ่งในอดีต ผมได้รู้จักเกมวิชวลโนเวลโดยบังเอิญ ผมอยากเล่นเกมนั้นมากแต่ติดปัญหาตรงที่ผมอ่านภาษาญี่ปุ่นไม่ออก ในช่วงนั้นผมมีแค่สองทางเลือก ー ไม่ต้องเล่น หรือ เรียนภาษาญี่ปุ่น
      <br />
      <br />
      ผมเลือกเรียนภาษาญี่ปุ่นแต่ทางบ้านไม่สนับสนุนแม้แต่น้อย ด้วยเหตุนี้ผมจึงไม่เหลือทางเลือกอื่นนอกจากเรียนด้วยตัวเอง 100% โดยไม่มีครูสอน
      <br />
      <br />
      แน่นอนว่าการเรียนภาษาที่ขึ้นชื่อว่ายากเป็นอันดับต้นๆ ของโลกไม่ใช่เรื่องง่าย แต่ความพยายามตลอดระยะเวลา 4 ปีไม่เคยทรยศใคร ในที่สุดผมก็สอบ JLPT N2 ผ่าน และสามารถเล่นเกมวิชวลโนเวลภาษาญี่ปุ่นได้ตามที่เคยใฝ่ฝันไว้ (ปัจจุบันสอบ N1 ผ่านแล้ว)
      <br />
      <br />
      ผมรู้ดีว่าการเรียนภาษาญี่ปุ่นไม่ใช่เรื่องง่ายและไม่มีทางกลายเป็นเรื่องง่าย ด้วยเหตุนี้ผมจึงเปิดเพจ <a 
        href="https://facebook.com/kagaminihongo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 transition-colors"
      >
        Kagami Nihongo
      </a> เพื่อสอนภาษาญี่ปุ่นจากการใช้งานจริงในเกมและอนิเมะ ไม่ใช่แบบฝึกหัดหรือตำราที่น่าเบื่อ รวมทั้งเพจ <a 
        href="https://facebook.com/kagamivisualnovel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition-colors"
      >
        Kagami Visual Novel
      </a> เพื่อโปรโมทและเผยแพร่เกมวิชวลโนเวลให้เป็นที่รู้จักมากขึ้น
      <br />
      <br />
      <b>เพิ่มเติม:</b> ถ้าอยากรู้จักผมมากกว่านี้ อ่านเพิ่มเติมได้ที่บทความ <a 
        href="https://blog.coregamehd.com/why-i-study-japanese" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors"
      >
        เหตุผลที่ผมเรียนภาษาญี่ปุ่น และเกมที่เปลี่ยนชีวิตผมไปตลอดกาล
      </a>
    </>
  );

  const skillsMessage = (
    <>
    <u>Language Skills</u><br />
      Thai: Native<br />
      English: TOEIC 885/990 (Upper-Intermediate)<br />
      Japanese: JLPT N1 (Intermediate)<br />
      Chinese: HSK 2 (Basic)<br />
      <Divider />
      <u>Technical Skills</u><br />
      Programming Languages:<br />
      • C, C++, Java, Python<br />
      • PHP, JavaScript, TypeScript<br />
      <br />
      Website:<br />
      • Node.js, Express, React<br />
      • MySQL, MongoDB, Firebase, GraphQL<br />
      • Astro, Gatsby<br />
      • Tailwind, Bootstrap<br />
      • Wordpress, Drupal, Ghost CMS<br />
      <br />
      Tools:<br />
      • Git, Github, Jira<br />
      • Netlify, Vercel, DigitalOcean<br />
      • Docker
      <br />
    </>
  );

  const contactMessage = (
    <>
      <u>Contact Information</u><br />
      <br />
      ติดต่อผมได้ที่ <br />
      • Facebook: <a 
        href="https://facebook.com/coregameHD" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors"
      >
        Coregame Kagami
      </a><br />
      • X (Twitter): <a 
        href="https://twitter.com/coregameHD" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors"
      >
        @coregameHD
      </a><br />
      • Github: <a 
        href="https://github.com/coregameHD" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors"
      >
        coregameHD
      </a><br />
      • Discord: coregameHD<br />
      • Email: coregamehd [at] outlook.com
      <br />
      <br />
      เลือกช่องทางไหนก็ได้ แต่แนะนำให้หลังไมค์ทางเฟซบุ๊ค ตอบเร็วสุด
    </>
  );

  const englishMessage = (
    <>
      Hi, I'm coregameHD, but you can call me Kagami. I'm a web developer with a passion for visual novels. I created the Facebook page <a 
        href="https://facebook.com/kagamivisualnovel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition-colors"
      >
        Kagami Visual Novel
      </a> to share my love for visual novels with the Thai community.
      <br />
      <br />
      On this page, you'll find reviews and recommendations of visual novels, news and updates on the visual novel world, and other fun content related to visual novels. I also run another Facebook page, <a 
        href="https://facebook.com/kagaminihongo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 transition-colors"
      >
        Kagami Nihongo
      </a>, where I teach Japanese through visual novels. It's a fun way to learn the language without using boring textbooks!
      <br />
      <br />
      If you have any questions, please don't hesitate to contact me. You can send me a message on Facebook or reach out to me on X (Twitter) @coregameHD. Feel free to contact me in English or Thai. 
      <br />
      <br />
      Thanks for visiting!
    </>
  );

  const getMessage = () => {
    switch (currentView) {
      case 'about':
        return <pre className='whitespace-pre-wrap leading-relaxed'>{aboutMessage}</pre>;
      case 'skills':
        return <pre className='whitespace-pre-wrap leading-relaxed'>{skillsMessage}</pre>;
      case 'contact':
        return <pre className='whitespace-pre-wrap leading-relaxed'>{contactMessage}</pre>;
      case 'english':
        return <pre className='whitespace-pre-wrap leading-relaxed'>{englishMessage}</pre>;
      default:
        return <pre className='whitespace-pre-wrap leading-relaxed'>{welcomeMessage}</pre>;
    }
  };

  //note: ใส่ backdrop-blur-md หรือ backdrop-blur-sm ในบรรทัดเดียวกับ bg-black/80 เพื่อเบลอพื้นหลัง terminal
  return (
    <div className='fixed sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:mb-32 w-[95vw] sm:w-auto top-12 left-1/2 -translate-x-1/2'>
      <div className='bg-black/80 backdrop-blur-sm w-full sm:w-[720px] h-[calc(100vh-9rem)] sm:h-[480px] rounded-lg overflow-hidden shadow-lg'>
        <div className='bg-gray-800 h-8 sm:h-6 flex items-center space-x-2 px-4'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <span className='text-sm text-gray-300 flex-grow text-center font-semibold flex items-center justify-center gap-2'>
            <FaRegFolderClosed size={14} className='text-gray-300' />
            profile ⸺ coregamehd.com
          </span>
        </div>
        <div className='px-4 pt-4 text-gray-200 font-semibold text-sm sm:text-base h-[calc(100%-2rem)] flex flex-col'>
          <div className='flex-1 overflow-y-auto mb-4 sm:mb-0'>
            {getMessage()}
          </div>
          <div className='flex flex-col pt-2 border-t border-gray-700 pb-2 sm:pt-4'>
            <div className='flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center'>
              <div className='grid grid-cols-2 gap-2 sm:flex sm:space-x-2'>
                <button
                  onClick={() => setCurrentView('welcome')}
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm ${
                    currentView === 'welcome'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Welcome
                </button>
                <button
                  onClick={() => setCurrentView('about')}
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm ${
                    currentView === 'about'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setCurrentView('skills')}
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm ${
                    currentView === 'skills'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => setCurrentView('contact')}
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-sm ${
                    currentView === 'contact'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Contact
                </button>
              </div>
              <div className='w-full sm:w-auto'>
                <button
                  onClick={() => setCurrentView('english')}
                  className={`w-full sm:w-auto px-2 py-1 sm:px-3 sm:py-1 rounded text-sm ${
                    currentView === 'english'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
