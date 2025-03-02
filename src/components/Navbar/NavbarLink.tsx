'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavbarLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavbarLink({ href, children }: NavbarLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  const className = isActive ? 'current' : '';

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
