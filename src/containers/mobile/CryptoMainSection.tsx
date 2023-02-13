import { CryptoCurrencyInterface } from '@interface/interface';
import { mobileTableHeader } from '@data/table';

import CryptoDataHeaderSection from './CryptoDataHeaderSection';
import CryptoDataSection from './CryptoDataSection';
import { useState } from 'react';

const CryptoMainSection: React.FC<{
  currencies: CryptoCurrencyInterface[];
}> = ({ currencies }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(mobileTableHeader[0].name);
  const handlePeriod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <section>
      <CryptoDataHeaderSection selectedPeriod={selectedPeriod} handlePeriod={handlePeriod} />
      <CryptoDataSection currencies={currencies} selectedPeriod={selectedPeriod} />
    </section>
  );
};

export { CryptoMainSection };
