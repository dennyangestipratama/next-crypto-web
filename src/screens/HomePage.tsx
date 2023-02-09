import React from 'react';

import { CryptoCurrencyInterface } from '@interface/interface';
import HomeHeader from '@containers/HomeHeader';
import HomeCategories from '@containers/HomeCategories';
import HomeCryptos from '@containers/HomeCryptos';

const HomePage: React.FC<{ currencies: CryptoCurrencyInterface[] }> = ({
  currencies,
}) => {
  return (
    <section className='max-w-screen-xl mx-auto p-4 pb-32'>
      <HomeHeader />
      <HomeCategories />
      <HomeCryptos currencies={currencies} />
    </section>
  );
};

export default HomePage;
