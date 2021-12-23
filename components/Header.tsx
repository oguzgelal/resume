import React, { FC } from 'react';

type HeaderProps = {
  children: any
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex items-center mb-8 md:mb-11">
      {children}
    </header>
  )	
}

export default Header;