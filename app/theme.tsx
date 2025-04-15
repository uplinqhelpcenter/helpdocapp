// app/theme.tsx
'use client';

import Image from 'next/image';

export function Logo() {
  return (
    <>
      <Image
        src="/uplinq-logo-light.png"
        alt="Uplinq Logo"
        width={120}
        height={40}
        className="hidden dark:block"
      />
      <Image
        src="/uplinq-logo-dark.png"
        alt="Uplinq Logo"
        width={120}
        height={40}
        className="block dark:hidden"
      />
    </>
  );
}
