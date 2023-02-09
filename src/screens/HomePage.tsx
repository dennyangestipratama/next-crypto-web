import React from 'react';

import useResponsiveness from '@hooks/useResponsiveness';
import { deviceType } from '@constants/constants';
import { CryptoCurrencyInterface } from '@interface/interface';

import HomeHeader from '@containers/HomeHeader';
import HomeCategories from '@containers/HomeCategories';
import { CryptoMainSection as CryptoMainSection_DESKTOP } from '@containers/desktop/CryptoMainSection';
import { CryptoMainSection as CryptoMainSection_MOBILE } from '@containers/mobile/CryptoMainSection';

const HomePage: React.FC<{ currencies: CryptoCurrencyInterface[] }> = ({
  currencies,
}) => {
  const { device } = useResponsiveness();
  const isMobile = device === deviceType.mobile;

  return (
    <section className='max-w-screen-xl mx-auto lg:p-4 pb-32'>
      <HomeHeader />
      <HomeCategories />
      {isMobile && <CryptoMainSection_MOBILE currencies={currencies} />}
      {!isMobile && <CryptoMainSection_DESKTOP currencies={currencies} />}
    </section>
  );
};

export default HomePage;
