'use client';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
import { Button } from '@radix-ui/themes';
import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
  const breadcrumbs =  [
    { placeholder: 'Dash', href: '/dash'},
    { placeholder: 'Issues', href: '/issues'}
  ];
  const currentPath = usePathname();
  const {data : session} = useSession();

  return (
    <nav className='flex pb-5 border-b-4 border-orange-400 mb-5 items-center space-x-10 bg-black'>
      <Link href = '/'>
      <img className = 'w-16 h-16 hover:grayscale duration-300 ease-in-out rounded-3xl' src='/images/buglogo.png' alt='Bug Logo' />
      </Link>
      <ul className='flex space-x-7'>
        {breadcrumbs.map(breadcrumb => 
        <Link
         key={breadcrumb.href}
           className= {classnames({
            'text-orange-300' : breadcrumb.href === currentPath,
            ' text-orange-900' : breadcrumb.href !== currentPath,
            'hover:text-orange-500 transition-colors text-lg' : true
            })}
            href={breadcrumb.href}>{breadcrumb.placeholder}</Link>)}
      </ul>
      {session ? (
  <Button onClick={() => signOut()}>Sign Out</Button>
) : (
  <Button onClick={() => signIn()}>Please Sign In</Button>
)}
  
    </nav>
  )
}

export default NavBar