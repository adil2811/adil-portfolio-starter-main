import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiHome, HiUser, HiViewColumns } from 'react-icons/hi2';

const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
];

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-[500px] xl:mt-20 xl-h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => (
          <Link
            className={`${link.path === pathname ? 'text-accent' : ''} relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            <div className='absolute pr-14 right-3 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
