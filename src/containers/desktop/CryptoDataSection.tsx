import { CryptoCurrencyInterface } from '@interface/interface';
import CryptoDataListSection from './CryptoDataListSection';

const CryptoDataSection: React.FC<{
  currencies: CryptoCurrencyInterface[];
}> = ({ currencies }) => {
  return (
    <tbody>
      {currencies &&
        currencies
          ?.filter((remove) => remove.currencySymbol !== 'Rp')
          .map((currency, index) => {
            const lastIndex: number = currencies.length - 2;
            return (
              <CryptoDataListSection
                key={currency.currencySymbol}
                currency={currency}
                lastIndex={index === lastIndex}
              />
            );
          })}
    </tbody>
  );
};

export default CryptoDataSection;
