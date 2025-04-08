import React from 'react'
import { Wrapper } from '../styles/Home.styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
  };

export default Layout