import React from 'react';

import Layout from '../../components/basics/layout';
import Loader from '../LazyLoader/loader'
import BlacKBackground from '../../images/background-black.png'

const Page = () => {
  return (
    <Layout backgroundImage={ BlacKBackground }>
      <Loader />
    </Layout>
  );
};

export default Page;
