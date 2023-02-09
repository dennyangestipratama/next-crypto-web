import { CryptoDataSectionMobileProps } from '@interface/interface';
import CryptoDataListSection from './CryptoDataListSection';

const CryptoDataSection: React.FC<CryptoDataSectionMobileProps> = ({
  currencies,
  selectedPeriod,
}) => {
  return (
    <div>
      {currencies &&
        currencies
          ?.filter((remove) => remove.currencySymbol !== 'Rp')
          .map((currency) => {
            return (
              <CryptoDataListSection
                key={currency.currencySymbol}
                currency={currency}
                selectedPeriod={selectedPeriod}
              />
            );
          })}
    </div>
  );
};

export default CryptoDataSection;
