import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Rita Queiros</title>
      </Head>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
